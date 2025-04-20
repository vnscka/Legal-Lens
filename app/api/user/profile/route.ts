import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"

// GET user profile
export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // This would typically fetch from a database
    // For now, we'll return mock data based on the session user
    const userProfile = {
      id: session.user.id || "1",
      name: session.user.name || "John Doe",
      email: session.user.email || "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      company: "Acme Inc.",
      subscription: "Free Plan",
      accountStatus: "Active",
      preferences: {
        emailNotifications: {
          legalUpdates: true,
          documentUpdates: true,
          marketing: false,
        },
        pushNotifications: {
          chatMessages: true,
          documentStatus: true,
        },
      },
    }

    return NextResponse.json(userProfile)
  } catch (error) {
    console.error("User profile API error:", error)
    return NextResponse.json({ error: "Failed to fetch user profile" }, { status: 500 })
  }
}

// UPDATE user profile
export async function PUT(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const profileData = await req.json()

    // Validate profile data
    if (!profileData) {
      return NextResponse.json({ error: "Missing profile data" }, { status: 400 })
    }

    // This would typically update the database
    // For now, we'll just return the updated profile
    console.log("Updating user profile:", profileData)

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      profile: {
        id: session.user.id || "1",
        ...profileData,
      },
    })
  } catch (error) {
    console.error("Update profile API error:", error)
    return NextResponse.json({ error: "Failed to update user profile" }, { status: 500 })
  }
}

