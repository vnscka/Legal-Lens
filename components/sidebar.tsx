"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Search,
  Settings,
  User,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

type SidebarItem = {
  title: string
  icon: React.ReactNode
  href: string
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { toast } = useToast()

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/dashboard",
    },
    {
      title: "Chat",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/chat",
    },
    {
      title: "Documents",
      icon: <FileText className="h-5 w-5" />,
      href: "/documents",
    },
    {
      title: "Case Law Search",
      icon: <Search className="h-5 w-5" />,
      href: "/search",
    },
    {
      title: "Profile",
      icon: <User className="h-5 w-5" />,
      href: "/profile",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
    },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50" onClick={toggleMobileSidebar}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "bg-white border-r h-screen transition-all duration-300 z-50",
          collapsed ? "w-[70px]" : "w-[240px]",
          mobileOpen ? "fixed left-0" : "fixed -left-[240px]",
          "md:relative md:left-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className={cn("flex items-center h-16 px-4 border-b", collapsed ? "justify-center" : "justify-between")}>
            <Link href="/dashboard" className="flex items-center">
              <div className="h-8 w-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                L
              </div>
              {!collapsed && <span className="ml-2 text-xl font-bold text-blue-900">LegalLens</span>}
            </Link>
            {!collapsed && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hidden md:flex">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            )}
            {collapsed && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="hidden md:flex absolute -right-10 top-5 bg-white border rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              {sidebarItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center py-2 px-3 rounded-md transition-colors",
                      pathname === item.href ? "bg-blue-50 text-blue-900" : "text-gray-600 hover:bg-gray-100",
                      collapsed ? "justify-center" : "",
                    )}
                  >
                    {item.icon}
                    {!collapsed && <span className="ml-3">{item.title}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button
              variant="outline"
              className={cn("w-full", collapsed ? "justify-center px-2" : "justify-start")}
              onClick={() => {
                toast({
                  title: "Help & Support",
                  description: "Support features coming soon!",
                })
              }}
            >
              <HelpCircle className="h-5 w-5" />
              {!collapsed && <span className="ml-2">Help & Support</span>}
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

