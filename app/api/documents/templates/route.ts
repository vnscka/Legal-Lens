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
    // For now, we'll return a static list of templates
    const templates = [
      {
        id: "1",
        title: "Non-Disclosure Agreement",
        description: "Protect your confidential information when sharing with third parties",
        category: "Business",
        complexity: "Simple",
        estimatedTime: "10 min",
        popular: true,
      },
      {
        id: "2",
        title: "Employment Contract",
        description: "Standard employment agreement for hiring new employees",
        category: "Employment",
        complexity: "Medium",
        estimatedTime: "20 min",
        popular: true,
      },
      {
        id: "3",
        title: "LLC Operating Agreement",
        description: "Define ownership and operating procedures for your LLC",
        category: "Business",
        complexity: "Complex",
        estimatedTime: "30 min",
      },
      {
        id: "4",
        title: "Residential Lease Agreement",
        description: "Standard lease for residential property rentals",
        category: "Real Estate",
        complexity: "Medium",
        estimatedTime: "15 min",
        popular: true,
      },
      {
        id: "5",
        title: "Cease and Desist Letter",
        description: "Formal notice demanding that a party stop an alleged illegal activity",
        category: "Dispute",
        complexity: "Simple",
        estimatedTime: "10 min",
      },
      {
        id: "6",
        title: "Last Will and Testament",
        description: "Express your wishes regarding the distribution of your assets",
        category: "Estate Planning",
        complexity: "Complex",
        estimatedTime: "25 min",
      },
      {
        id: "7",
        title: "Power of Attorney",
        description: "Authorize someone to act on your behalf in legal matters",
        category: "Estate Planning",
        complexity: "Medium",
        estimatedTime: "15 min",
      },
      {
        id: "8",
        title: "Independent Contractor Agreement",
        description: "Define the relationship between a company and a contractor",
        category: "Business",
        complexity: "Medium",
        estimatedTime: "20 min",
      },
    ]

    return NextResponse.json(templates)
  } catch (error) {
    console.error("Templates API error:", error)
    return NextResponse.json({ error: "Failed to fetch templates" }, { status: 500 })
  }
}

