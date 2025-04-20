"use client"

import { useState } from "react"
import { FileText, Plus, Download, Copy, Eye, Printer, Share2, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"

type DocumentTemplate = {
  id: string
  title: string
  description: string
  category: string
  complexity: "Simple" | "Medium" | "Complex"
  estimatedTime: string
  popular?: boolean
}

const documentTemplates: DocumentTemplate[] = [
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

type GeneratedDocument = {
  id: string
  title: string
  createdAt: Date
  category: string
  status: "Draft" | "Final"
}

const generatedDocuments: GeneratedDocument[] = [
  {
    id: "1",
    title: "NDA - ABC Corporation",
    createdAt: new Date(2023, 5, 15),
    category: "Business",
    status: "Final",
  },
  {
    id: "2",
    title: "Employment Contract - John Smith",
    createdAt: new Date(2023, 4, 22),
    category: "Employment",
    status: "Draft",
  },
  {
    id: "3",
    title: "Apartment Lease - 123 Main St",
    createdAt: new Date(2023, 3, 10),
    category: "Real Estate",
    status: "Final",
  },
]

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedComplexity, setSelectedComplexity] = useState<string>("all")
  const { toast } = useToast()

  const filteredTemplates = documentTemplates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    const matchesComplexity = selectedComplexity === "all" || template.complexity === selectedComplexity

    return matchesSearch && matchesCategory && matchesComplexity
  })

  const handleCreateDocument = (templateId: string) => {
    const template = documentTemplates.find((t) => t.id === templateId)
    if (template) {
      toast({
        title: "Document Creation Started",
        description: `You're now creating a ${template.title}`,
      })
      // Navigate to document creation page
      // router.push(`/documents/create/${templateId}`)
    }
  }

  const handleDocumentAction = (action: string, documentId: string) => {
    const document = generatedDocuments.find((d) => d.id === documentId)
    if (document) {
      toast({
        title: `${action} Document`,
        description: `${action} action for "${document.title}" will be implemented soon`,
      })
    }
  }

  const categories = Array.from(new Set(documentTemplates.map((t) => t.category)))
  const complexities = ["Simple", "Medium", "Complex"]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Legal Documents</h1>
        <p className="text-muted-foreground">Generate, manage, and download legal documents</p>
      </div>

      <Tabs defaultValue="templates">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="templates">Document Templates</TabsTrigger>
          <TabsTrigger value="my-documents">My Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Find a Template</CardTitle>
              <CardDescription>Browse our library of legal document templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search templates..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Complexity</label>
                    <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Complexities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Complexities</SelectItem>
                        {complexities.map((complexity) => (
                          <SelectItem key={complexity} value={complexity}>
                            {complexity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline" className="w-full gap-2">
                      <Filter className="h-4 w-4" />
                      More Filters
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTemplates.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">No templates found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      {template.popular && (
                        <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-100">Popular</Badge>
                      )}
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <Badge variant="outline">{template.category}</Badge>
                      <div>{template.complexity}</div>
                      <div>{template.estimatedTime}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 border-t pt-3">
                    <Button
                      className="w-full bg-blue-900 hover:bg-blue-800 gap-2"
                      onClick={() => handleCreateDocument(template.id)}
                    >
                      <Plus className="h-4 w-4" />
                      Create Document
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="my-documents" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>My Documents</CardTitle>
                  <CardDescription>Access and manage your generated documents</CardDescription>
                </div>
                <Button className="bg-blue-900 hover:bg-blue-800 gap-2">
                  <Plus className="h-4 w-4" />
                  New Document
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {generatedDocuments.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-lg font-medium">No documents yet</h3>
                  <p className="text-muted-foreground">Create your first document to see it here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {generatedDocuments.map((document) => (
                    <div
                      key={document.id}
                      className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg"
                    >
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-900" />
                          <h3 className="font-medium">{document.title}</h3>
                          <Badge
                            variant={document.status === "Final" ? "default" : "outline"}
                            className={
                              document.status === "Final" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""
                            }
                          >
                            {document.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <div>Created: {document.createdAt.toLocaleDateString()}</div>
                          <Badge variant="outline">{document.category}</Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm" onClick={() => handleDocumentAction("View", document.id)}>
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDocumentAction("Download", document.id)}
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDocumentAction("Copy", document.id)}>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDocumentAction("Print", document.id)}>
                          <Printer className="h-4 w-4 mr-1" />
                          Print
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDocumentAction("Share", document.id)}>
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

