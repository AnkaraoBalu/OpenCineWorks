"use client";

import { useRef, useState } from "react";
import { Coffee, Heart, Film, X, Check, LockKeyhole } from "lucide-react";
import { Container } from "@/components/ui/container";
import { donationUrl } from "@/content/support";

const amounts = [100, 300, 500, 1000];
/** The home page already has its own h1, so this heading is an h2 unless the page passes "h1". */
export function SupportProject({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const [amount, setAmount] = useState("300");
  const dialog = useRef<HTMLDialogElement>(null);
  const valid = Number.isInteger(Number(amount)) && Number(amount) >= 1 && Number(amount) <= 100000;
  return (
    <section id="donations" className="relative overflow-hidden bg-[#101322] py-16 text-white sm:py-24" aria-labelledby="donations-title">
      <Container>
        <div className="mb-10 flex items-center gap-3 text-sm font-medium text-indigo-200"><span className="h-px w-8 bg-indigo-400" /> DONATIONS</div>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="mb-8 flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5"><Film size={30} className="text-indigo-300" aria-hidden /></div>
            <Heading id="donations-title" className="max-w-xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">Great stories<br />deserve <span className="text-indigo-300">free tools.</span></Heading>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">OpenCineWorks is free. Your donation gives us more time to make the editor better for everyone who has a story to tell.</p>
            <div className="mt-9 flex items-center gap-3 text-indigo-200"><Heart size={20} aria-hidden /><p>No subscriptions. No feature paywalls.</p></div>
            <div className="mt-12 border-t border-white/10 pt-7">
              <h2 className="font-semibold">What your donation makes possible</h2>
              <ul className="mt-5 space-y-4 text-slate-300">{["More time for thoughtful editing tools", "Bug fixes and a smoother creative workflow", "Keeping the editor free for every creator"].map(text => <li key={text} className="flex gap-3"><Check size={18} className="mt-1 shrink-0 text-indigo-300" aria-hidden />{text}</li>)}</ul>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink-950 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold tracking-wider text-brand-600 uppercase">A little goes a long way</p><h2 className="mt-2 text-3xl font-bold tracking-tight">Buy us a coffee.</h2></div><Coffee className="mt-2 size-8 shrink-0 text-brand-600" aria-hidden /></div>
            <p className="mt-4 leading-relaxed text-slate-600">Make a one-time donation. Every contribution is voluntary, and every feature stays free.</p>
            <div className="mt-7 grid grid-cols-2 gap-3" aria-label="Donation amount">{amounts.map(value => <button key={value} type="button" aria-pressed={amount === String(value)} onClick={() => setAmount(String(value))} className={`rounded-xl border px-4 py-4 text-xl font-semibold transition ${amount === String(value) ? "border-brand-600 bg-brand-50 text-brand-600 ring-1 ring-brand-600" : "border-slate-200 hover:border-brand-400"}`}>₹{value.toLocaleString("en-IN")}</button>)}</div>
            <label htmlFor="donation-amount" className="mt-6 block text-sm font-medium">Or choose your own amount (INR)</label>
            <div className="mt-2 flex items-center rounded-xl border border-slate-300 px-4 focus-within:border-brand-500"><span className="text-slate-500">₹</span><input id="donation-amount" type="number" min="1" max="100000" step="1" value={amount} onChange={event => setAmount(event.target.value)} className="w-full min-w-0 bg-transparent p-3 text-lg outline-none" aria-describedby="donation-help" /></div>
            <p id="donation-help" className="mt-2 text-sm text-slate-500">Choose a whole amount between ₹1 and ₹1,00,000.</p>
            <button type="button" disabled={!valid} onClick={() => donationUrl ? window.location.assign(donationUrl) : dialog.current?.showModal()} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-4 text-lg font-semibold text-white transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-40"><Heart size={19} aria-hidden />{donationUrl ? "Continue to donation" : `Preview ₹${valid ? Number(amount).toLocaleString("en-IN") : "0"} donation`}</button>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500"><LockKeyhole size={15} aria-hidden />{donationUrl ? "Confirm the final amount on the payment page." : "Demo checkout · No money will be charged"}</p>
            <p className="mt-6 border-t border-slate-100 pt-5 text-center text-sm leading-relaxed text-slate-500">Your creativity comes first. If donating isn’t possible, sharing OpenCineWorks with a friend helps too.</p>
          </div>
        </div>
        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-slate-400">OpenCineWorks is free to use. Optional third-party AI services may charge separately through your own account.</p>
      </Container>
      <dialog ref={dialog} className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white p-7 text-ink-950 shadow-2xl backdrop:bg-ink-950/70">
        <button aria-label="Close donation preview" onClick={() => dialog.current?.close()} className="absolute top-4 right-4 rounded-lg p-2 hover:bg-slate-100"><X size={20} /></button>
        <Coffee size={32} className="text-brand-600" aria-hidden /><h2 className="mt-5 text-2xl font-bold">Your donation preview</h2><p className="mt-3 text-4xl font-bold">₹{Number(amount).toLocaleString("en-IN")}</p><p className="mt-5 leading-relaxed text-slate-600">This is a demo. No payment has been taken. Razorpay checkout will be connected when donations go live.</p><button onClick={() => dialog.current?.close()} className="mt-7 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white">Back to donations</button>
      </dialog>
    </section>
  );
}
