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

    // This would typically fetch from a database based on the user's ID
    // For now, we'll return mock data
    const userDocuments = [
      {
        id: "doc_1",
        title: "NDA - ABC Corporation",
        createdAt: new Date(2023, 5, 15).toISOString(),
        category: "Business",
        status: "Final",
      },
      {
        id: "doc_2",
        title: "Employment Contract - John Smith",
        createdAt: new Date(2023, 4, 22).toISOString(),
        category: "Employment",
        status: "Draft",
      },
      {
        id: "doc_3",
        title: "Apartment Lease - 123 Main St",
        createdAt: new Date(2023, 3, 10).toISOString(),
        category: "Real Estate",
        status: "Final",
      },
    ]

    return NextResponse.json(userDocuments)
  } catch (error) {
    console.error("User documents API error:", error)
    return NextResponse.json({ error: "Failed to fetch user documents" }, { status: 500 })
  }
}

