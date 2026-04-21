"use client";

import { useState } from "react";
import { site } from "@/data/site";

const initial = {
  name: "",
  email: "",
  phone: "",
  availability: "",
  interests: "",
  message: "",
  website: "", // honeypot
};

export function VolunteerForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (form.website) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    setForm(initial);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
      noValidate
    >
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={onChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Full name
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Email
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Phone (optional)
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
          autoComplete="tel"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Availability
        <input
          required
          name="availability"
          value={form.availability}
          onChange={onChange}
          placeholder="Weekends, summer only, etc."
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Interests
        <input
          required
          name="interests"
          value={form.interests}
          onChange={onChange}
          placeholder="Events, music clinics, logistics, photography…"
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
        />
      </label>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Anything else we should know?
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={4}
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--teal)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--teal)]"
        />
      </label>
      <p className="text-xs text-[var(--ink-muted)]">
        Mock submit: in production, POST to your API route, Strapi form plugin, or
        email provider. Notifications would go to{" "}
        <span className="font-medium">{site.volunteerNotifyEmail}</span>.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex justify-center rounded-full bg-[var(--teal)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7a6f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--teal)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit volunteer interest"}
      </button>
      {status === "sent" ? (
        <p role="status" className="text-sm font-medium text-[var(--teal)]">
          Thanks! You would receive a confirmation email next—this demo only
          resets the form.
        </p>
      ) : null}
    </form>
  );
}
