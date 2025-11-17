import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 text-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-blue-200 text-sm mb-4">Stock Investing Coaching</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Learn to Invest in Stocks with Confidence
            </h1>
            <p className="mt-5 text-blue-100 text-lg leading-relaxed">
              A practical, step-by-step program taught by an experienced investment analyst. Build a repeatable process for analyzing companies, managing risk, and compounding wealth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center bg-white text-gray-900 font-semibold px-5 py-3 rounded-lg shadow hover:shadow-md transition">
                View Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center border border-white/40 text-white font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition">
                Get a Free Consult
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-blue-100">
              <div>12+ years professional experience</div>
              <div className="hidden sm:block w-px h-5 bg-white/30" />
              <div>Portfolio-tested frameworks</div>
              <div className="hidden sm:block w-px h-5 bg-white/30" />
              <div>Actionable templates & checklists</div>
            </div>
          </div>
          <div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">What you'll master</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"/>Business quality assessment</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"/>Valuation techniques (DCF, comparables)</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"/>Risk management & position sizing</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"/>Idea generation & watchlist building</li>
                <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-300"/>Entry/exit discipline and review process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute -bottom-10 left-0 right-0 w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="0.06" d="M0 96l60-10.7C120 75 240 53 360 58.7 480 64 600 96 720 117.3 840 139 960 149 1080 144s240-32 300-48l60-16v80H0V96z"/></svg>
    </section>
  );
}
