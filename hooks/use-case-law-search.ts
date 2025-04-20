"use client"

import { useState, useCallback } from "react"
import { searchApi } from "@/lib/api"

export function useCaseLawSearch() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [filters, setFilters] = useState({
    jurisdiction: "all",
    dateRange: "any",
    caseType: "all",
    sortBy: "relevance",
  })
  const [error, setError] = useState(null)

  // Perform case law search
  const searchCaseLaw = useCallback(
    async (query: string, searchFilters = {}) => {
      if (!query.trim()) return

      try {
        setIsSearching(true)
        setError(null)

        const params = {
          query,
          ...filters,
          ...searchFilters,
        }

        const searchResults = await searchApi.searchCaseLaw(params)

        setResults(searchResults.results || [])
        setTotalResults(searchResults.totalResults || 0)
        setFilters(searchResults.filters || filters)

        return searchResults
      } catch (error) {
        console.error("Case law search error:", error)
        setError("Failed to perform search. Please try again.")
        return { results: [], totalResults: 0 }
      } finally {
        setIsSearching(false)
      }
    },
    [filters],
  )

  // Update search filters
  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  return {
    isSearching,
    searchQuery,
    setSearchQuery,
    results,
    totalResults,
    filters,
    error,
    searchCaseLaw,
    updateFilters,
  }
}

