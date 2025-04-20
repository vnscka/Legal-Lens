import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Mic, MoreHorizontal, PlusCircle, Send, User } from "lucide-react"

export default function LegacyBotPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="h-10 w-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold mr-2">
            L
          </div>
          <span className="text-blue-900 font-bold text-xl">LegalLens</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
            Home
          </Link>
          <Link href="/legacybot" className="text-blue-900 font-medium text-sm uppercase">
            LegacyBot
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
            DocGen
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
            Terms
          </Link>
          <button className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-blue-900 py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">LegacyBot</h1>
            <p className="text-blue-100 text-xl">Search . Safe . Sue</p>
          </div>

          {/* Background scales of justice */}
          <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Scales of Justice"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Scales of Justice"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-10 border-b">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-3">
                1
              </div>
              <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md">
                Pick Your Issue Here
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mr-3">
                2
              </div>
              <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-md">
                Pick Your Urgency
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-6">
              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <p className="text-gray-800">
                    Hi There,
                    <br />
                    Legacy Bot here!
                    <br />
                    So you need help regarding this situation.
                    <br />
                    Can you please describe it more
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 max-w-[80%]">
                  <p className="text-gray-800">
                    So I met with an accident 5 minutes ago, and the person is clearly saying the fault is mine even the
                    police is saying this, what can I do?
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center shrink-0">
                  <User size={20} />
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z" />
                    <path d="M3.6 9h16.8" />
                    <path d="M3.6 15h16.8" />
                    <path d="M11.5 3a17 17 0 0 0 0 18" />
                    <path d="M12.5 3a17 17 0 0 1 0 18" />
                  </svg>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <p className="text-gray-800">
                    Gotcha!
                    <br />
                    Is the policeman asking for any kind or bribe or anything?
                    <br />
                    OR are they threatening you?
                  </p>
                </div>
              </div>

              {/* More Options */}
              <div className="flex justify-end">
                <button className="text-blue-900">
                  <MoreHorizontal size={24} />
                </button>
              </div>
            </div>

            {/* Chat Input */}
            <div className="mt-10 relative">
              <div className="flex items-center border rounded-full overflow-hidden bg-white">
                <button className="p-3 text-blue-900">
                  <PlusCircle size={20} />
                </button>
                <input type="text" placeholder="Write here..." className="flex-1 py-3 px-2 outline-none" />
                <button className="p-3 text-blue-900">
                  <Send size={20} />
                </button>
                <div className="w-px h-6 bg-gray-200 mx-1"></div>
                <button className="p-3 text-blue-900">
                  <Mic size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold mr-2">
                  L
                </div>
                <span className="text-white font-bold text-lg">LegalLens</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Releases
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white text-sm">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-100">© 2025 LegalLens. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-blue-100 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

