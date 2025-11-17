import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
        <footer className="pb-10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Éclat Parfums. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
