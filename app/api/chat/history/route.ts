import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // This would typically fetch from a database
    // For now, we'll return mock data
    const chatHistory = [
      {
        id: "chat_1",
        title: "Contract dispute resolution",
        preview: "I need help with a contract dispute...",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        messages: [
          {
            id: "1",
            role: "assistant",
            content: "Hi There, LegacyBot here! How can I help you with your legal question today?",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 - 5 * 60 * 1000).toISOString(),
          },
          {
            id: "2",
            role: "user",
            content: "I need help with a contract dispute. My client hasn't paid me for work I completed.",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 - 4 * 60 * 1000).toISOString(),
          },
          {
            id: "3",
            role: "assistant",
            content:
              "I understand your situation. To help you better, could you provide more details about the contract? Was it written or verbal? What were the payment terms?",
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 - 3 * 60 * 1000).toISOString(),
          },
        ],
      },
      {
        id: "chat_2",
        title: "Tenant rights in California",
        preview: "What are my rights as a tenant in California?",
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
        messages: [
          {
            id: "1",
            role: "assistant",
            content: "Hi There, LegacyBot here! How can I help you with your legal question today?",
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 5 * 60 * 1000).toISOString(),
          },
          {
            id: "2",
            role: "user",
            content: "What are my rights as a tenant in California?",
            timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 - 4 * 60 * 1000).toISOString(),
          },
        ],
      },
    ]

    return NextResponse.json(chatHistory)
  } catch (error) {
    console.error("Chat history API error:", error)
    return NextResponse.json({ error: "Failed to fetch chat history" }, { status: 500 })
  }
}

