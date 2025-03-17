"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Mic, PlusCircle, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi There,\nLegacy Bot here!\nSo you need help regarding this situation.\nCan you please describe it more",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null)
  const [selectedUrgency, setSelectedUrgency] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Simulate API call to get bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content:
            "I understand your situation. Let me help you with that. Could you provide more details about the specific legal issue you're facing?",
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleVoiceInput = () => {
    toast({
      title: "Voice Input",
      description: "Voice input feature is coming soon!",
    })
  }

  const issueOptions = [
    "Contract Dispute",
    "Employment Issue",
    "Intellectual Property",
    "Real Estate",
    "Family Law",
    "Criminal Defense",
    "Personal Injury",
    "Business Formation",
  ]

  const urgencyOptions = ["Urgent (24 hours)", "High (2-3 days)", "Medium (1 week)", "Low (2+ weeks)"]

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold">LegacyBot</h1>
        <p className="text-muted-foreground">Search . Safe . Sue</p>
      </div>

      {/* Selection Steps */}
      <div className="py-4 border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-3">
              1
            </div>
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full sm:w-auto"
                onClick={() => document.getElementById("issue-dropdown")?.classList.toggle("hidden")}
              >
                {selectedIssue || "Pick Your Issue Here"}
                <ChevronDown size={16} />
              </Button>
              <div
                id="issue-dropdown"
                className="absolute z-10 mt-1 hidden w-full bg-white border rounded-md shadow-lg"
              >
                {issueOptions.map((issue) => (
                  <div
                    key={issue}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedIssue(issue)
                      document.getElementById("issue-dropdown")?.classList.add("hidden")
                    }}
                  >
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-3">
              2
            </div>
            <div className="relative">
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full sm:w-auto"
                onClick={() => document.getElementById("urgency-dropdown")?.classList.toggle("hidden")}
              >
                {selectedUrgency || "Pick Your Urgency"}
                <ChevronDown size={16} />
              </Button>
              <div
                id="urgency-dropdown"
                className="absolute z-10 mt-1 hidden w-full bg-white border rounded-md shadow-lg"
              >
                {urgencyOptions.map((urgency) => (
                  <div
                    key={urgency}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedUrgency(urgency)
                      document.getElementById("urgency-dropdown")?.classList.add("hidden")
                    }}
                  >
                    {urgency}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="chat" className="space-y-6 mt-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex gap-3", message.role === "user" ? "justify-end" : "")}>
                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                      <path d="M3.6 9h16.8" />
                      <path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" />
                      <path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-lg p-4 max-w-[80%]",
                    message.role === "assistant" ? "bg-gray-100" : "bg-blue-50 border border-blue-100",
                  )}
                >
                  <p className="text-gray-800 whitespace-pre-line">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                    <User size={20} />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "600ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </TabsContent>
          <TabsContent value="history">
            <div className="text-center py-8">
              <h3 className="font-medium text-lg">Chat History</h3>
              <p className="text-muted-foreground">Your previous conversations will appear here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t">
        <div className="flex items-center border rounded-full overflow-hidden bg-white">
          <Button variant="ghost" size="icon" className="rounded-full text-gray-500">
            <PlusCircle size={20} />
          </Button>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write here..."
            className="flex-1 py-3 px-2 outline-none resize-none max-h-32"
            rows={1}
          />
          <Separator orientation="vertical" className="h-6 mx-1" />
          <Button variant="ghost" size="icon" className="rounded-full text-gray-500" onClick={handleVoiceInput}>
            <Mic size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-blue-900"
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

