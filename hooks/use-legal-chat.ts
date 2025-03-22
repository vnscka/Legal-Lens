"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useChat } from "@ai-sdk/react"
import { chatApi } from "@/lib/api"

export function useLegalChat(initialMessages = []) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null)

  // Use the AI SDK's useChat hook
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: aiHandleSubmit,
    setMessages,
    isLoading: aiIsLoading,
    error,
  } = useChat({
    api: "/api/chat",
    initialMessages,
    body: {
      context: `Issue: ${selectedIssue || "Not specified"}, Urgency: ${selectedUrgency || "Not specified"}`,
    },
  })

  // Load chat history
  const loadChatHistory = useCallback(async () => {
    try {
      setIsLoading(true)
      const history = await chatApi.getChatHistory()
      return history
    } catch (error) {
      console.error("Failed to load chat history:", error)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Custom submit handler that includes issue and urgency
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      aiHandleSubmit(e)
    },
    [aiHandleSubmit, selectedIssue, selectedUrgency],
  )

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading: isLoading || aiIsLoading,
    error,
    selectedIssue,
    setSelectedIssue,
    selectedUrgency,
    setSelectedUrgency,
    loadChatHistory,
  }
}

