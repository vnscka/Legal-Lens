"use client"

import { useState, useCallback } from "react"
import { documentApi } from "@/lib/api"

export function useDocumentGeneration() {
  const [isLoading, setIsLoading] = useState(false)
  const [templates, setTemplates] = useState([])
  const [userDocuments, setUserDocuments] = useState([])
  const [currentDocument, setCurrentDocument] = useState(null)
  const [error, setError] = useState(null)

  // Load document templates
  const loadTemplates = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const templates = await documentApi.getTemplates()
      setTemplates(templates)
      return templates
    } catch (error) {
      console.error("Failed to load templates:", error)
      setError("Failed to load document templates. Please try again.")
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Load user documents
  const loadUserDocuments = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const documents = await documentApi.getUserDocuments()
      setUserDocuments(documents)
      return documents
    } catch (error) {
      console.error("Failed to load user documents:", error)
      setError("Failed to load your documents. Please try again.")
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Generate a document
  const generateDocument = useCallback(async (templateId: string, templateData: any) => {
    try {
      setIsLoading(true)
      setError(null)
      const result = await documentApi.generateDocument(templateId, templateData)
      setCurrentDocument(result)
      return result
    } catch (error) {
      console.error("Failed to generate document:", error)
      setError("Failed to generate document. Please try again.")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Get a specific document
  const getDocument = useCallback(async (documentId: string) => {
    try {
      setIsLoading(true)
      setError(null)
      const document = await documentApi.getDocument(documentId)
      setCurrentDocument(document)
      return document
    } catch (error) {
      console.error("Failed to get document:", error)
      setError("Failed to retrieve document. Please try again.")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    templates,
    userDocuments,
    currentDocument,
    error,
    loadTemplates,
    loadUserDocuments,
    generateDocument,
    getDocument,
  }
}

