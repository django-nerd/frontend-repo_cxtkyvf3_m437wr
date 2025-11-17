export default function Pricing() {
  const plans = [
    { name: "Starter", price: 199, period: "mo", features: ["Monthly market call", "Workbook & checklist", "Community access"] },
    { name: "Pro", price: 499, period: "mo", features: ["Everything in Starter", "Weekly coaching call", "Model reviews", "Watchlist feedback"] },
    { name: "Elite", price: 1499, period: "mo", features: ["Everything in Pro", "1:1 mentorship", "Custom playbook", "Priority support"] },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Choose your path</h2>
          <p className="mt-3 text-gray-600">Start small or go deep. Every plan includes practical tools and accountability.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border shadow-sm p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">${p.price}</span>
                  <span className="text-gray-500">/{p.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-gray-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />{f}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="mt-8 inline-flex justify-center items-center rounded-lg bg-indigo-600 text-white font-semibold py-3 hover:bg-indigo-700 transition">Apply for {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
