import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import LeadForm from './components/LeadForm'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl">Analyst Coach</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-indigo-600">Program</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600">Apply</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-indigo-600 text-white font-semibold px-4 py-2 hover:bg-indigo-700">Free Consult</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="features"><Features /></div>
        <Pricing />
        <LeadForm />
      </main>

      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Analyst Coach. All rights reserved.</p>
          <a className="hover:text-indigo-600" href="/test">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
