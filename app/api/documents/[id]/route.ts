import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const documentId = params.id

    // This would typically fetch from a database
    // For now, we'll return mock data
    const mockDocuments: Record<string, any> = {
      doc_1: {
        id: "doc_1",
        title: "NDA - ABC Corporation",
        content: `# NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into as of January 15, 2023 by and between:

**ABC Corporation** ("Disclosing Party"), located at 123 Business Ave, San Francisco, CA, and
**XYZ LLC** ("Receiving Party"), located at 456 Enterprise Blvd, San Francisco, CA.

## 1. PURPOSE
The parties wish to explore a potential business relationship in connection with software development services (the "Purpose"). In connection with the Purpose, the Disclosing Party may disclose confidential and proprietary information to the Receiving Party.

## 2. CONFIDENTIAL INFORMATION
"Confidential Information" means any information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally or by inspection of tangible objects, that is designated as "Confidential," "Proprietary" or some similar designation, or that should reasonably be understood to be confidential given the nature of the information and the circumstances of disclosure.

## 3. OBLIGATIONS
The Receiving Party agrees to:
(a) maintain the Confidential Information in strict confidence;
(b) not disclose Confidential Information to any third party;
(c) not use Confidential Information for any purpose except for the Purpose;
(d) take reasonable precautions to protect the confidentiality of such information.

## 4. TERM
This Agreement shall remain in effect for a period of 3 years from the Effective Date.

## 5. GOVERNING LAW
This Agreement shall be governed by the laws of California.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

ABC Corporation
By: ________________________
Name: John Smith
Title: CEO

XYZ LLC
By: ________________________
Name: Jane Doe
Title: Managing Partner`,
        createdAt: new Date(2023, 5, 15).toISOString(),
        category: "Business",
        status: "Final",
        templateId: "1",
      },
      doc_2: {
        id: "doc_2",
        title: "Employment Contract - John Smith",
        content: `# EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made and entered into as of May 1, 2023 by and between:

**Acme Inc.** ("Employer"), located at 789 Corporate Park, New York, NY, and
**John Smith** ("Employee"), residing at 321 Residential St, New York, NY.

## 1. POSITION AND DUTIES
Employer hereby employs Employee as Senior Software Engineer, and Employee accepts such employment. Employee shall perform the duties of Senior Software Engineer and such other duties as may be assigned by Employer.

## 2. TERM
This Agreement shall commence on June 1, 2023 and shall continue until terminated in accordance with the provisions herein.

## 3. COMPENSATION
Employer shall pay Employee a salary of $120,000 per year as compensation for services rendered. Payment shall be made bi-weekly.

## 4. BENEFITS
Employee shall be entitled to the following benefits: health insurance, 401(k) with 4% match, 15 days paid vacation, and 5 sick days per year.

## 5. TERMINATION
Either party may terminate this Agreement by providing 2 weeks written notice to the other party.

## 6. GOVERNING LAW
This Agreement shall be governed by the laws of New York.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

Acme Inc.
By: ________________________
Name: Sarah Johnson
Title: HR Director

John Smith
By: ________________________`,
        createdAt: new Date(2023, 4, 22).toISOString(),
        category: "Employment",
        status: "Draft",
        templateId: "2",
      },
    }

    const document = mockDocuments[documentId]

    if (!document) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 })
    }

    return NextResponse.json(document)
  } catch (error) {
    console.error("Document retrieval error:", error)
    return NextResponse.json({ error: "Failed to retrieve document" }, { status: 500 })
  }
}

