import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export const maxDuration = 30 // Allow up to 30 seconds for search

export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get search parameters from URL
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get("query")
    const jurisdiction = searchParams.get("jurisdiction") || "all"
    const dateRange = searchParams.get("dateRange") || "any"
    const caseType = searchParams.get("caseType") || "all"
    const sortBy = searchParams.get("sortBy") || "relevance"

    if (!query) {
      return NextResponse.json({ error: "Search query is required" }, { status: 400 })
    }

    // In a real implementation, you would query a legal database or API
    // For this example, we'll use AI to generate mock search results
    const searchResults = await performCaseLawSearch(query, jurisdiction, dateRange, caseType, sortBy)

    return NextResponse.json(searchResults)
  } catch (error) {
    console.error("Case law search error:", error)
    return NextResponse.json({ error: "Failed to perform case law search" }, { status: 500 })
  }
}

// Helper function to perform case law search
async function performCaseLawSearch(
  query: string,
  jurisdiction: string,
  dateRange: string,
  caseType: string,
  sortBy: string,
) {
  // For a production app, you would integrate with a legal database API
  // For this example, we'll use AI to generate mock search results

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Generate a JSON array of 5-10 realistic case law search results for the query: "${query}".
      
      Jurisdiction filter: ${jurisdiction}
      Date range filter: ${dateRange}
      Case type filter: ${caseType}
      Sort by: ${sortBy}
      
      Each result should include:
      - id (string)
      - title (case name, e.g., "Smith v. Johnson")
      - citation (e.g., "123 F.3d 456 (9th Cir. 2022)")
      - court (e.g., "United States Court of Appeals for the Ninth Circuit")
      - date (e.g., "June 15, 2022")
      - jurisdiction (e.g., "Federal", "California", etc.)
      - summary (a brief description of the case and its relevance)
      - tags (array of relevant legal topics)
      
      Make the results realistic and relevant to the query.`,
      system:
        "You are a legal research assistant. Generate realistic, well-formatted JSON data for case law search results. The response should be valid JSON that can be parsed directly.",
    })

    // Parse the JSON response
    try {
      const results = JSON.parse(text)
      return {
        results,
        totalResults: results.length,
        query,
        filters: {
          jurisdiction,
          dateRange,
          caseType,
          sortBy,
        },
      }
    } catch (parseError) {
      console.error("Error parsing AI-generated search results:", parseError)
      // Fall back to empty results
      return {
        results: [],
        totalResults: 0,
        query,
        filters: {
          jurisdiction,
          dateRange,
          caseType,
          sortBy,
        },
        error: "Failed to parse search results",
      }
    }
  } catch (error) {
    console.error("AI search generation error:", error)
    throw error
  }
}

