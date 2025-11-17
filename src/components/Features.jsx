import { BarChart3, ShieldCheck, FileSpreadsheet, Lightbulb, Target } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-indigo-600" />, 
      title: "Proven Framework",
      desc: "A repeatable process for equity research used by professionals.",
    },
    { icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />, title: "Risk First", desc: "Position sizing, risk controls, and stop-loss logic to protect capital." },
    { icon: <FileSpreadsheet className="h-6 w-6 text-indigo-600" />, title: "Templates", desc: "DCF model, checklist, and journal templates ready to use." },
    { icon: <Lightbulb className="h-6 w-6 text-indigo-600" />, title: "Idea Flow", desc: "Screeners and sources to consistently find high-quality ideas." },
    { icon: <Target className="h-6 w-6 text-indigo-600" />, title: "Accountability", desc: "Weekly reviews and feedback to sharpen decision-making." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built to make you a better investor</h2>
          <p className="mt-3 text-gray-600">No fluff. Just the tools and coaching you need to analyze companies and manage risk with clarity.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border bg-gray-50 hover:bg-gray-100 transition">
              <div className="h-10 w-10 grid place-content-center rounded-lg bg-indigo-100 mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
