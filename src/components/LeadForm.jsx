import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", plan: "Starter", message: "" });
  const [status, setStatus] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.detail || "Failed to submit");
      setStatus({ type: "ok", msg: "Thanks! We'll reach out shortly." });
      setForm({ name: "", email: "", phone: "", plan: "Starter", message: "" });
    } catch (err) {
      setStatus({ type: "err", msg: err.message });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Apply for a free consult</h2>
          <p className="mt-3 text-gray-600">Tell me where you are and what you want to achieve. I’ll recommend the right plan and next steps.</p>
          <div className="mt-6 rounded-xl border bg-gray-50 p-6">
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>20-minute call with the coach</li>
              <li>Clarity on your process and bottlenecks</li>
              <li>No hard sell — only if it’s a fit</li>
            </ul>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-2xl bg-gray-50 border p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Optional" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Plan</label>
              <select value={form.plan} onChange={(e)=>setForm({...form, plan:e.target.value})} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Starter</option>
                <option>Pro</option>
                <option>Elite</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={4} className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your goals, experience, questions" />
            </div>
          </div>
          <button type="submit" className="mt-6 w-full rounded-lg bg-indigo-600 text-white font-semibold py-3 hover:bg-indigo-700 transition">Request Consult</button>
          {status && (
            <p className={`mt-3 text-sm ${status.type === 'ok' ? 'text-emerald-600' : status.type === 'err' ? 'text-red-600' : 'text-gray-600'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
