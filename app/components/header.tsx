import Link from "next/link"
import { Search } from "lucide-react"

export default function Header() {
  return (
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
        <Link href="/legacybot" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
          LegacyBot
        </Link>
        <Link href="#" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
          DocGen
        </Link>
        <Link href="#" className="text-gray-600 hover:text-blue-900 text-sm uppercase">
          Terms
        </Link>
        <button className="ml-4">
          <Search className="text-gray-600" size={20} />
        </button>
      </nav>
    </header>
  )
}

