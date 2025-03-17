"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, FileText, MessageSquare, Search, Clock, ChevronRight, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import RecentActivityItem from "@/components/recent-activity-item"

export default function Dashboard() {
  const [usagePercentage] = useState(65)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your legal assistance.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            View History
          </Button>
          <Button className="bg-blue-900 hover:bg-blue-800">
            <MessageSquare className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Chats</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documents Generated</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+4% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Case Searches</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usage</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usagePercentage}%</div>
            <Progress value={usagePercentage} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">{100 - usagePercentage}% remaining this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your recent interactions with Legal Lens</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="chats">Chats</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="searches">Searches</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <RecentActivityItem
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Chat with LegacyBot"
                  description="Regarding contract dispute resolution"
                  timestamp="2 hours ago"
                />
                <RecentActivityItem
                  icon={<FileText className="h-5 w-5" />}
                  title="Generated Non-Disclosure Agreement"
                  description="For client meeting with ABC Corp"
                  timestamp="Yesterday"
                />
                <RecentActivityItem
                  icon={<Search className="h-5 w-5" />}
                  title="Case Law Search"
                  description="Intellectual property precedents in tech industry"
                  timestamp="2 days ago"
                />
                <RecentActivityItem
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Chat with LegacyBot"
                  description="About tenant rights in California"
                  timestamp="3 days ago"
                />
                <RecentActivityItem
                  icon={<FileText className="h-5 w-5" />}
                  title="Generated Employment Contract"
                  description="For new hire onboarding"
                  timestamp="1 week ago"
                />
              </TabsContent>
              <TabsContent value="chats" className="space-y-4">
                <RecentActivityItem
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Chat with LegacyBot"
                  description="Regarding contract dispute resolution"
                  timestamp="2 hours ago"
                />
                <RecentActivityItem
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Chat with LegacyBot"
                  description="About tenant rights in California"
                  timestamp="3 days ago"
                />
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <RecentActivityItem
                  icon={<FileText className="h-5 w-5" />}
                  title="Generated Non-Disclosure Agreement"
                  description="For client meeting with ABC Corp"
                  timestamp="Yesterday"
                />
                <RecentActivityItem
                  icon={<FileText className="h-5 w-5" />}
                  title="Generated Employment Contract"
                  description="For new hire onboarding"
                  timestamp="1 week ago"
                />
              </TabsContent>
              <TabsContent value="searches" className="space-y-4">
                <RecentActivityItem
                  icon={<Search className="h-5 w-5" />}
                  title="Case Law Search"
                  description="Intellectual property precedents in tech industry"
                  timestamp="2 days ago"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/chat" className="block">
              <div className="rounded-lg border p-3 hover:bg-accent transition-colors flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-blue-100 p-2">
                    <MessageSquare className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-medium">Start a new chat</h3>
                    <p className="text-sm text-muted-foreground">Ask legal questions and get expert advice</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
            <Link href="/documents" className="block">
              <div className="rounded-lg border p-3 hover:bg-accent transition-colors flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-green-100 p-2">
                    <FileText className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Generate a document</h3>
                    <p className="text-sm text-muted-foreground">Create contracts, agreements, and legal forms</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
            <Link href="/search" className="block">
              <div className="rounded-lg border p-3 hover:bg-accent transition-colors flex justify-between items-center">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-purple-100 p-2">
                    <Search className="h-5 w-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-medium">Search case law</h3>
                    <p className="text-sm text-muted-foreground">Find relevant legal precedents and statutes</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold">Upgrade to Pro</h3>
            <p className="text-sm text-muted-foreground">Get unlimited access to all features and priority support</p>
          </div>
          <Button className="bg-blue-900 hover:bg-blue-800">
            Upgrade Plan <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-blue-100 p-2 mt-0.5">
              <MessageSquare className="h-4 w-4 text-blue-900" />
            </div>
            <div>
              <h4 className="font-medium">Unlimited Chats</h4>
              <p className="text-sm text-muted-foreground">No limits on AI conversations</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-blue-100 p-2 mt-0.5">
              <FileText className="h-4 w-4 text-blue-900" />
            </div>
            <div>
              <h4 className="font-medium">Advanced Documents</h4>
              <p className="text-sm text-muted-foreground">Create complex legal documents</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-blue-100 p-2 mt-0.5">
              <Search className="h-4 w-4 text-blue-900" />
            </div>
            <div>
              <h4 className="font-medium">Deep Case Research</h4>
              <p className="text-sm text-muted-foreground">Access premium legal databases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

