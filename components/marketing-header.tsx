"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MarketingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/landing" className="flex items-center">
            <div className="h-8 w-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-2">
              L
            </div>
            <span className="text-xl font-bold text-blue-900">LegalLens</span>
          </Link>
          <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-blue-900">
              Features
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              Pricing
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button asChild variant="ghost">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#features"
              className="block py-2 text-gray-600 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-600 hover:text-blue-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

