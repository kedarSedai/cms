"use client";

import { useState } from "react";

export function EventRSVP({ eventTitle }) {
  const [form, setForm] = useState({ name: "", email: "", guests: "1" });
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("sent");
  }

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <h2 className="font-heading text-xl font-bold text-[var(--ink)]">
        RSVP · {eventTitle}
      </h2>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        Front-end only: wire this to your events API or Strapi RSVP plugin later.
      </p>
      <form className="mt-4 grid gap-3" onSubmit={onSubmit}>
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-lg border border-[var(--border)] px-3 py-2 focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="rounded-lg border border-[var(--border)] px-3 py-2 focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Guests (including you)
          <select
            value={form.guests}
            onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
            className="rounded-lg border border-[var(--border)] px-3 py-2 focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
          >
            {["1", "2", "3", "4", "5+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="mt-2 inline-flex justify-center rounded-full bg-[var(--teal)] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1f7a6f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)] disabled:opacity-60"
        >
          {status === "sent"
            ? "RSVP recorded (demo)"
            : status === "sending"
              ? "Saving…"
              : "Confirm RSVP"}
        </button>
        {status === "sent" ? (
          <p role="status" className="text-sm text-[var(--teal)]">
            You would receive a calendar invite and confirmation email in production.
          </p>
        ) : null}
      </form>
    </div>
  );
}
