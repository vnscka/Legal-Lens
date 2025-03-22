import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MessageSquare, FileText, Search, Shield, Globe, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MarketingHeader from "@/components/marketing-header"
import MarketingFooter from "@/components/marketing-footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-900 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-blue-900 mr-2"></span>
                  AI-Powered Legal Assistant
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Legal Expertise at Your <span className="text-blue-900">Fingertips</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Get instant legal assistance, generate documents, and search case law with our advanced AI-powered
                  platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
                    <Link href="/signup">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">Sign In</Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center text-sm text-gray-500">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  No credit card required
                  <span className="mx-2">•</span>
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  Free trial available
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Legal Lens Dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-50 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Legal Lens?</h2>
              <p className="text-xl text-gray-600">
                Our AI-powered platform provides comprehensive legal assistance for professionals and individuals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
                <p className="text-gray-600">
                  Get immediate responses to your legal questions from our advanced AI assistant trained on legal
                  precedents.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Document Generation</h3>
                <p className="text-gray-600">
                  Create legally sound documents in minutes with our AI-powered document generation system.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Case Law Search</h3>
                <p className="text-gray-600">
                  Search through millions of legal cases and precedents to find relevant information for your legal
                  matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Legal Lens Works</h2>
              <p className="text-xl text-gray-600">
                Our platform simplifies legal assistance through an intuitive, AI-powered workflow.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Describe Your Legal Need</h3>
                  <p className="text-gray-600 mb-4">
                    Tell our AI assistant what legal help you need, whether it's answering a question, drafting a
                    document, or researching case law.
                  </p>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <p className="text-gray-700 italic">
                      "I need help drafting a non-disclosure agreement for my business."
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Processes Your Request</h3>
                  <p className="text-gray-600 mb-4">
                    Our advanced AI analyzes your request, searches relevant legal databases, and prepares a
                    comprehensive response.
                  </p>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <p className="text-gray-700 font-medium">LegacyBot is processing your request...</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                        style={{ animationDelay: "600ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Expert Assistance</h3>
                  <p className="text-gray-600 mb-4">
                    Get your answer, document, or research results instantly. Review, edit, and download as needed for
                    your legal matters.
                  </p>
                  <div className="bg-white p-4 rounded-lg border shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <p className="text-gray-700 font-medium">LegacyBot</p>
                    </div>
                    <p className="text-gray-700 mb-2">
                      I've prepared an NDA template for you. You can customize it with your specific details:
                    </p>
                    <div className="bg-gray-50 p-3 rounded border text-sm">
                      <p className="font-medium">Non-Disclosure Agreement</p>
                      <p className="text-gray-600">Click to view and edit the full document</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Legal Professionals
              </h2>
              <p className="text-xl text-gray-600">
                Legal Lens combines AI technology with legal expertise to provide comprehensive assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">LegacyBot AI Assistant</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant answers to your legal questions from our advanced AI assistant trained on legal
                    precedents and statutes.
                  </p>
                  <Link href="/signup" className="text-blue-900 font-medium flex items-center hover:underline">
                    Try LegacyBot <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Document Generation</h3>
                  <p className="text-gray-600 mb-4">
                    Create legally sound documents in minutes. From contracts to agreements, our AI helps draft
                    customized legal documents.
                  </p>
                  <Link href="/signup" className="text-green-700 font-medium flex items-center hover:underline">
                    Generate Documents <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Case Law Search</h3>
                  <p className="text-gray-600 mb-4">
                    Search through millions of legal cases and precedents to find relevant information for your legal
                    matters.
                  </p>
                  <Link href="/signup" className="text-purple-700 font-medium flex items-center hover:underline">
                    Search Case Law <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-amber-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
                  <p className="text-gray-600 mb-4">
                    Your legal information is protected with enterprise-grade security. All communications are encrypted
                    and confidential.
                  </p>
                  <Link href="/signup" className="text-amber-700 font-medium flex items-center hover:underline">
                    Learn About Security <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-red-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Jurisdiction Support</h3>
                  <p className="text-gray-600 mb-4">
                    Get legal assistance across multiple jurisdictions with our comprehensive database of laws and
                    regulations.
                  </p>
                  <Link href="/signup" className="text-red-700 font-medium flex items-center hover:underline">
                    Explore Jurisdictions <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="rounded-full bg-cyan-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-cyan-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Time-Saving Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Automate routine legal tasks and research, saving you hours of work and allowing you to focus on
                    what matters.
                  </p>
                  <Link href="/signup" className="text-cyan-700 font-medium flex items-center hover:underline">
                    See How It Works <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600">
                Legal professionals trust Legal Lens for their daily legal assistance needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Corporate Attorney</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Legal Lens has revolutionized how I draft contracts. What used to take hours now takes minutes, and
                    the quality is consistently excellent."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Michael Chen</h4>
                      <p className="text-sm text-gray-500">Legal Researcher</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The case law search feature is incredible. I can find relevant precedents in seconds that would
                    have taken hours to locate through traditional methods."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Amanda Rodriguez</h4>
                      <p className="text-sm text-gray-500">Solo Practitioner</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "As a solo attorney, Legal Lens has been like having a team of associates. The AI chat answers
                    client questions accurately and helps me serve more clients."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that works best for your legal needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <Card className="border-0 shadow-lg relative">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Basic</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">Perfect for individuals with occasional legal needs.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>10 AI chat questions per month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>5 document generations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Basic case law search</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Email support</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-0 shadow-xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardContent className="p-6 pt-8">
                  <h3 className="text-xl font-semibold mb-2">Professional</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">Ideal for legal professionals and small practices.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Unlimited AI chat questions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>50 document generations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Advanced case law search</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Priority email & chat support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Document editing & collaboration</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-blue-900 hover:bg-blue-800">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-0 shadow-lg relative">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mb-6">For law firms and legal departments.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Everything in Professional</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Unlimited document generations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Custom document templates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>SSO & advanced security</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Legal Work?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of legal professionals who are saving time and improving outcomes with Legal Lens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-blue-800">
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about Legal Lens.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">How accurate is the AI legal assistant?</h3>
                <p className="text-gray-600">
                  Our AI is trained on millions of legal documents and cases, achieving high accuracy for most legal
                  questions. However, we always recommend having a licensed attorney review important legal matters.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">Is my data secure and confidential?</h3>
                <p className="text-gray-600">
                  Yes, we take security and confidentiality seriously. All data is encrypted in transit and at rest, and
                  we adhere to strict privacy policies. We do not share your information with third parties.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">Can I use the documents generated in court?</h3>
                <p className="text-gray-600">
                  Documents generated by Legal Lens are designed to be legally sound, but we recommend having them
                  reviewed by a licensed attorney before using them in official legal proceedings.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">Which jurisdictions does Legal Lens cover?</h3>
                <p className="text-gray-600">
                  Legal Lens currently covers federal law and all 50 U.S. states. We're continuously expanding our
                  coverage to include more international jurisdictions.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription at any time?</h3>
                <p className="text-gray-600">
                  Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation
                  fees. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer custom solutions for law firms?</h3>
                <p className="text-gray-600">
                  Yes, we offer custom enterprise solutions for law firms and legal departments. Contact our sales team
                  to discuss your specific requirements and how we can tailor Legal Lens to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  )
}

