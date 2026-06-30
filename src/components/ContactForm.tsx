"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/content";
import { Icon } from "./Icons";

const services = [
  "Quantity Surveying",
  "Cost Estimating & Planning",
  "BIM & 5D Take-offs",
  "Tender & Procurement",
  "Contract Administration",
  "Commercial Management",
  "Claims & Variations",
  "Project Advisory",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Project enquiry — ${service || "General"} (${name})`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service of interest: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold-500 focus:bg-white/[0.07]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="sr-only">
          Service of interest
        </label>
        <select id="service" name="service" defaultValue="" className={field} required>
          <option value="" disabled className="bg-navy-900">
            Service of interest…
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-navy-900">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project…"
          className={`${field} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-gold-400 sm:w-auto"
      >
        {sent ? "Opening your email…" : "Send Enquiry"}
        <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      {sent && (
        <p className="text-xs text-white/55" role="status">
          If your email client didn&rsquo;t open, write to us directly at{" "}
          <a href={company.emailHref} className="font-semibold text-gold-400">
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
