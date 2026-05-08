"use client";

import { useState, type FormEvent } from "react";
import { getContactEmail } from "@/lib/site";

export function ContactForm() {
  const [subject, setSubject] = useState("Rector feedback");
  const [body, setBody] = useState("");
  const email = getContactEmail();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) {
      return;
    }
    const q = new URLSearchParams({
      subject: subject.trim() || "Rector feedback",
      body: body.trim(),
    });
    window.location.href = `mailto:${email}?${q.toString()}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-subject" className="text-sm font-medium text-text-primary">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-2 w-full rounded-md border border-border bg-surface-muted px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
          autoComplete="off"
        />
      </div>
      <div>
        <label htmlFor="contact-body" className="text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="contact-body"
          name="body"
          required
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Link, why it helped, suggested keywords…"
          className="mt-2 w-full resize-y rounded-md border border-border bg-surface-muted px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
        />
      </div>
      {email ? (
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-6 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-accent-hover sm:w-auto"
        >
          Open mail app
        </button>
      ) : (
        <p className="text-sm text-text-secondary">
          Set{" "}
          <span className="font-mono text-text-muted">
            NEXT_PUBLIC_CONTACT_EMAIL
          </span>{" "}
          in your environment to enable one-tap email from this form.
        </p>
      )}
    </form>
  );
}
