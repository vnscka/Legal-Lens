import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

// Allow responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { messages, context } = await req.json()

    // Create a system prompt for legal assistant
    const systemPrompt = `You are LegacyBot, an AI-powered legal assistant. 
    Your purpose is to provide helpful, accurate legal information and guidance.
    
    Important guidelines:
    - Always clarify that you're providing legal information, not legal advice
    - Recommend consulting with a licensed attorney for specific legal situations
    - Base your responses on established legal principles and case law
    - When uncertain, acknowledge limitations and suggest further research
    - Maintain a professional, clear, and helpful tone
    
    ${context ? `Additional context: ${context}` : ""}`

    // Stream the response
    const result = streamText({
      model: openai("gpt-4o"),
      messages,
      system: systemPrompt,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}

