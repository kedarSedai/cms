"use client";

import { useState } from "react";
import { site } from "@/data/site";

const initial = {
  name: "",
  email: "",
  topic: "general",
  message: "",
  company: "", // honeypot
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle");

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (form.company) {
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
    >
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={onChange}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
          Name
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--coral)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--coral)]"
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
            className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--coral)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--coral)]"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Topic
        <select
          name="topic"
          value={form.topic}
          onChange={onChange}
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--coral)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--coral)]"
        >
          <option value="general">General question</option>
          <option value="press">Press</option>
          <option value="partnership">Partnership / sponsorship</option>
          <option value="programs">Programs</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm font-medium text-[var(--ink)]">
        Message
        <textarea
          required
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-[var(--ink)] focus:border-[var(--coral)] focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-[var(--coral)]"
        />
      </label>
      <p className="text-xs text-[var(--ink-muted)]">
        Prefer email? Write{" "}
        <a className="font-medium text-[var(--teal)]" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        . This form is a front-end mock until an API is connected.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex justify-center rounded-full bg-[var(--coral)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e25545] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--coral)] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" ? (
        <p role="status" className="text-sm font-medium text-[var(--teal)]">
          Message received (demo). Hook this submit handler to your server route
          when ready.
        </p>
      ) : null}
    </form>
  );
}
