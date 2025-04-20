"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, Calendar, MapPin, BookOpen, ArrowUpDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type CaseResult = {
  id: string
  title: string
  citation: string
  court: string
  date: string
  jurisdiction: string
  summary: string
  tags: string[]
}

const mockCaseResults: CaseResult[] = [
  {
    id: "1",
    title: "Smith v. Johnson",
    citation: "123 F.3d 456 (9th Cir. 2022)",
    court: "United States Court of Appeals for the Ninth Circuit",
    date: "June 15, 2022",
    jurisdiction: "Federal",
    summary:
      "This case established a precedent for intellectual property disputes in the technology sector, particularly regarding software patents and fair use doctrine.",
    tags: ["Intellectual Property", "Patents", "Technology"],
  },
  {
    id: "2",
    title: "Williams v. Tech Innovations Inc.",
    citation: "234 Cal.App.4th 567 (2021)",
    court: "California Court of Appeal",
    date: "March 22, 2021",
    jurisdiction: "California",
    summary:
      "A landmark case addressing employee non-compete agreements in California, reinforcing the state's strong public policy against such restrictions.",
    tags: ["Employment Law", "Non-Compete", "California"],
  },
  {
    id: "3",
    title: "United States v. Digital Platforms Corp.",
    citation: "345 U.S. 678 (2023)",
    court: "Supreme Court of the United States",
    date: "January 10, 2023",
    jurisdiction: "Federal",
    summary:
      "This Supreme Court decision addressed antitrust concerns in digital marketplaces, establishing new standards for evaluating market dominance in tech platforms.",
    tags: ["Antitrust", "Technology", "Market Dominance"],
  },
  {
    id: "4",
    title: "Green Energy Solutions v. State Regulatory Board",
    citation: "456 N.E.2d 789 (N.Y. 2022)",
    court: "New York Court of Appeals",
    date: "November 5, 2022",
    jurisdiction: "New York",
    summary:
      "A significant case regarding renewable energy regulations and the scope of state regulatory authority over clean energy initiatives.",
    tags: ["Environmental Law", "Regulatory", "Energy"],
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<CaseResult[]>(mockCaseResults)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      // Filter mock results based on search query
      const filtered = mockCaseResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setResults(filtered)
      setIsSearching(false)
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Case Law Search</h1>
        <p className="text-muted-foreground">Search for legal cases, precedents, and statutes</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Parameters</CardTitle>
          <CardDescription>Enter keywords or phrases to find relevant legal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for cases, statutes, or legal topics..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Jurisdiction</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Jurisdictions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jurisdictions</SelectItem>
                    <SelectItem value="federal">Federal</SelectItem>
                    <SelectItem value="california">California</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="texas">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Date Range</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Time</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                    <SelectItem value="last-5-years">Last 5 Years</SelectItem>
                    <SelectItem value="last-10-years">Last 10 Years</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Case Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="civil">Civil</SelectItem>
                    <SelectItem value="criminal">Criminal</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                    <SelectItem value="constitutional">Constitutional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
          <Button className="bg-blue-900 hover:bg-blue-800 gap-2" onClick={handleSearch} disabled={isSearching}>
            <Search className="h-4 w-4" />
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </CardFooter>
      </Card>

      <div>
        <Tabs defaultValue="results">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="results">Results</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Sort by Relevance</SelectItem>
                  <SelectItem value="date-new">Newest First</SelectItem>
                  <SelectItem value="date-old">Oldest First</SelectItem>
                  <SelectItem value="citations">Most Cited</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="results" className="space-y-4">
            {results.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
              </div>
            ) : (
              <>
                <div className="text-sm text-muted-foreground">Found {results.length} results</div>
                {results.map((result) => (
                  <Card key={result.id}>
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-blue-900 hover:underline cursor-pointer">{result.title}</CardTitle>
                          <CardDescription>{result.citation}</CardDescription>
                        </div>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 mb-4">{result.summary}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{result.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{result.jurisdiction}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{result.court}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {result.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-blue-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="saved">
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-medium">No saved cases</h3>
              <p className="text-muted-foreground">Save cases to access them quickly later</p>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="text-center py-12">
              <BookOpen className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
              <h3 className="mt-4 text-lg font-medium">No search history</h3>
              <p className="text-muted-foreground">Your recent searches will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

