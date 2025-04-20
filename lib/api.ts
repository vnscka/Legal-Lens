import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Chat API
export const chatApi = {
  sendMessage: async (messages: any[], context?: string) => {
    const response = await api.post("/chat", { messages, context })
    return response.data
  },
  getChatHistory: async () => {
    const response = await api.get("/chat/history")
    return response.data
  },
}

// Document API
export const documentApi = {
  getTemplates: async () => {
    const response = await api.get("/documents/templates")
    return response.data
  },
  generateDocument: async (templateId: string, templateData: any) => {
    const response = await api.post("/documents/generate", { templateId, templateData })
    return response.data
  },
  getUserDocuments: async () => {
    const response = await api.get("/documents/user")
    return response.data
  },
  getDocument: async (documentId: string) => {
    const response = await api.get(`/documents/${documentId}`)
    return response.data
  },
}

// Case Law Search API
export const searchApi = {
  searchCaseLaw: async (params: {
    query: string
    jurisdiction?: string
    dateRange?: string
    caseType?: string
    sortBy?: string
  }) => {
    const queryParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value) queryParams.append(key, value)
    })

    const response = await api.get(`/search/case-law?${queryParams.toString()}`)
    return response.data
  },
}

// User Profile API
export const userApi = {
  getProfile: async () => {
    const response = await api.get("/user/profile")
    return response.data
  },
  updateProfile: async (profileData: any) => {
    const response = await api.put("/user/profile", profileData)
    return response.data
  },
}

export default api

