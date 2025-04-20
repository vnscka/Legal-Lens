import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export const maxDuration = 60 // Allow up to 60 seconds for document generation

export async function POST(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { templateId, templateData } = await req.json()

    // Validate request
    if (!templateId || !templateData) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get template content based on templateId
    const template = await getDocumentTemplate(templateId)
    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 })
    }

    // Generate document content using AI
    const documentContent = await generateDocumentContent(template, templateData)

    // Save document to database (implementation depends on your database choice)
    const documentId = await saveDocument({
      userId: session.user.id,
      title: templateData.title || template.title,
      content: documentContent,
      templateId,
      createdAt: new Date(),
      status: "Draft",
    })

    return NextResponse.json({
      success: true,
      documentId,
      content: documentContent,
    })
  } catch (error) {
    console.error("Document generation error:", error)
    return NextResponse.json({ error: "Failed to generate document" }, { status: 500 })
  }
}

// Helper function to get document template
async function getDocumentTemplate(templateId: string) {
  // This would typically fetch from a database
  // For now, we'll use a simple mapping of template IDs to templates
  const templates: Record<string, any> = {
    "1": {
      id: "1",
      title: "Non-Disclosure Agreement",
      description: "Protect your confidential information when sharing with third parties",
      template: `
# NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement (the "Agreement") is entered into as of {{effectiveDate}} by and between:

**{{partyOneName}}** ("Disclosing Party"), located at {{partyOneAddress}}, and
**{{partyTwoName}}** ("Receiving Party"), located at {{partyTwoAddress}}.

## 1. PURPOSE
The parties wish to explore a potential business relationship in connection with {{businessPurpose}} (the "Purpose"). In connection with the Purpose, the Disclosing Party may disclose confidential and proprietary information to the Receiving Party.

## 2. CONFIDENTIAL INFORMATION
"Confidential Information" means any information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally or by inspection of tangible objects, that is designated as "Confidential," "Proprietary" or some similar designation, or that should reasonably be understood to be confidential given the nature of the information and the circumstances of disclosure.

## 3. OBLIGATIONS
The Receiving Party agrees to:
(a) maintain the Confidential Information in strict confidence;
(b) not disclose Confidential Information to any third party;
(c) not use Confidential Information for any purpose except for the Purpose;
(d) take reasonable precautions to protect the confidentiality of such information.

## 4. TERM
This Agreement shall remain in effect for a period of {{termYears}} years from the Effective Date.

## 5. GOVERNING LAW
This Agreement shall be governed by the laws of {{governingState}}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

{{partyOneName}}
By: ________________________
Name: {{partyOneSignatory}}
Title: {{partyOneTitle}}

{{partyTwoName}}
By: ________________________
Name: {{partyTwoSignatory}}
Title: {{partyTwoTitle}}
      `,
    },
    "2": {
      id: "2",
      title: "Employment Contract",
      description: "Standard employment agreement for hiring new employees",
      template: `
# EMPLOYMENT AGREEMENT

This Employment Agreement (the "Agreement") is made and entered into as of {{effectiveDate}} by and between:

**{{employerName}}** ("Employer"), located at {{employerAddress}}, and
**{{employeeName}}** ("Employee"), residing at {{employeeAddress}}.

## 1. POSITION AND DUTIES
Employer hereby employs Employee as {{position}}, and Employee accepts such employment. Employee shall perform the duties of {{position}} and such other duties as may be assigned by Employer.

## 2. TERM
This Agreement shall commence on {{startDate}} and shall continue until terminated in accordance with the provisions herein.

## 3. COMPENSATION
Employer shall pay Employee a {{salaryType}} of {{salaryAmount}} as compensation for services rendered. Payment shall be made {{paymentFrequency}}.

## 4. BENEFITS
Employee shall be entitled to the following benefits: {{benefits}}.

## 5. TERMINATION
Either party may terminate this Agreement by providing {{noticePeriod}} written notice to the other party.

## 6. GOVERNING LAW
This Agreement shall be governed by the laws of {{governingState}}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.

{{employerName}}
By: ________________________
Name: {{employerSignatory}}
Title: {{employerTitle}}

{{employeeName}}
By: ________________________
      `,
    },
    // Add more templates as needed
  }

  return templates[templateId]
}

// Helper function to generate document content
async function generateDocumentContent(template: any, templateData: any) {
  // Simple template variable replacement
  let content = template.template

  // Replace template variables with actual data
  for (const [key, value] of Object.entries(templateData)) {
    const regex = new RegExp(`{{${key}}}`, "g")
    content = content.replace(regex, value as string)
  }

  // Use AI to improve and format the document if needed
  if (templateData.useAI) {
    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `Please review and improve the following legal document while maintaining its legal validity and purpose. Fix any formatting issues, improve clarity, and ensure professional language:
        
        ${content}`,
        system:
          "You are a legal document specialist. Your task is to improve legal documents while maintaining their validity, structure, and purpose. Do not add or remove any substantive terms.",
      })

      return text
    } catch (error) {
      console.error("AI document enhancement error:", error)
      // Fall back to the template-generated document
      return content
    }
  }

  return content
}

// Helper function to save document (mock implementation)
async function saveDocument(document: any) {
  // This would typically save to a database
  // For now, we'll just return a mock document ID
  console.log("Saving document:", document)
  return "doc_" + Math.random().toString(36).substr(2, 9)
}

