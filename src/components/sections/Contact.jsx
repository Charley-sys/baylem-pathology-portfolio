import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const EMAILJS_SERVICE_ID  = "service_xliu8vf";
const EMAILJS_TEMPLATE_ID = "template_xg4tnup";
const EMAILJS_PUBLIC_KEY  = "GU5qOKXmVCmRHxIi";

const RECIPIENT_EMAIL = "cotieno@baylem.com";

const SOLUTION_OPTIONS = [
  "Medical Cold Chain",
  "Industrial Cold Chain",
  "Pathology systems",
  "Mortuary Infrastructure",
  "Mortuary Equipment",
  "Validation & Compliance",
  "Other / Not Sure",
];

const INITIAL_FORM = {
  firstName:    "",
  lastName:     "",
  organisation: "",
  email:        "",
  phone:        "",
  solution:     "",
  message:      "",
};

export default function Contact() {
  const [form, setForm]           = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Dynamically import EmailJS only when the form is submitted
    // (keeps bundle size small — no extra npm install needed at build time
    //  if you load it via CDN; or run: npm install @emailjs/browser)
    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // These keys must match the {{variable}} names in your EmailJS template
          to_email:        RECIPIENT_EMAIL,
          from_first_name: form.firstName,
          from_last_name:  form.lastName,
          from_email:      form.email,
          reply_to:        form.email,        // so you can reply directly
          from_phone:      form.phone || "Not provided",
          organisation:    form.organisation || "Not provided",
          solution:        form.solution     || "Not specified",
          message:         form.message      || "No description provided",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Sorry, something went wrong sending your enquiry. " +
        "Please email us directly at " + RECIPIENT_EMAIL
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-blue-800 section-pad relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-700/30 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/50 blur-[70px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left panel ─────────────────────────────────────────── */}
          <div>
            <AnimatedSection variant="fadeUp">
              <span className="eyebrow text-white/40 mb-4 block">Get In Touch</span>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.1}>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-[1.12] mb-5">
                Discuss Your Next
                <em className="text-blue-200 not-italic block">Infrastructure Project</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <p className="text-white/60 text-[0.95rem] leading-[1.85] mb-10">
                Whether you're planning a new facility, upgrading existing systems, or inquiring
                about RFQ — our specialist team responds within 24 hours.
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fadeUp" delay={0.25} className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "+254 726 128 040",  sub: "Mon – Fri, 8am – 6pm EAT" },
                { icon: Mail,  label: "info@baylem.com",   sub: "We respond within 24 hours" },
                { icon: Globe, label: "www.baylem.co.ke",  sub: "Main corporate website" },
              ].map(({ icon: Icon, label, sub }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-blue-200" />
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold">{label}</p>
                    <p className="text-white/40 text-[11.5px]">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection variant="fadeUp" delay={0.35} className="mt-8">
              <motion.a
                href="https://wa.me/254726128040"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#25D366]/25 hover:bg-[#1ebc59] transition-colors"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </motion.a>
            </AnimatedSection>

            {/* Tender note */}
            <AnimatedSection variant="fadeUp" delay={0.4} className="mt-8">
              <div className="bg-white/10 border border-white/15 rounded-xl p-5">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/40 mb-1.5">
                  For Inquiries & RFQs
                </p>
                <p className="text-white/60 text-[13px] leading-relaxed mb-2">
                  Submit your inquiry or RFQ with detailed specifications for a comprehensive
                  technical and commercial response.
                </p>
                <p className="text-blue-200 font-bold text-[13.5px]">cotieno@baylem.com</p>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right — form card ───────────────────────────────────── */}
          <AnimatedSection variant="fadeRight" delay={0.25}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-9">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessState key="success" onReset={() => setSubmitted(false)} />
                ) : (
                  <ContactForm
                    key="form"
                    form={form}
                    loading={loading}
                    error={error}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}

// ── Contact form ──────────────────────────────────────────────────────────────
function ContactForm({ form, loading, error, onChange, onSubmit }) {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={onSubmit}
      className="space-y-4"
    >
      <div className="mb-6">
        <h3 className="font-display text-[1.4rem] text-charcoal-900">Request a Consultation</h3>
        <p className="text-charcoal-400 text-[12px] mt-1">
          Enquiry sent directly to{" "}
          <span className="text-blue-800 font-semibold">{RECIPIENT_EMAIL}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="First Name" name="firstName" placeholder="Amara"   value={form.firstName} onChange={onChange} required />
        <Field label="Last Name"  name="lastName"  placeholder="Wanjiku" value={form.lastName}  onChange={onChange} required />
      </div>

      <Field label="Organisation / Facility" name="organisation" placeholder="Kenyatta National Hospital" value={form.organisation} onChange={onChange} />
      <Field label="Email Address" name="email" type="email" placeholder="you@hospital.or.ke" value={form.email} onChange={onChange} required />
      <Field label="Phone Number"  name="phone" type="tel"   placeholder="+254 700 000 000"   value={form.phone} onChange={onChange} />

      <div className="flex flex-col gap-1.5">
        <label className="text-[11.5px] font-bold text-charcoal-600 tracking-wide">Area of Interest</label>
        <select
          name="solution"
          value={form.solution}
          onChange={onChange}
          className="border-[1.5px] border-charcoal-200 rounded-lg px-4 py-2.5 text-[13.5px] text-charcoal-900 outline-none focus:border-blue-800 transition-colors bg-white"
        >
          <option value="">Select an area</option>
          {SOLUTION_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11.5px] font-bold text-charcoal-600 tracking-wide">Project Description</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Brief description of your project, timeline, and requirements…"
          rows={4}
          className="border-[1.5px] border-charcoal-200 rounded-lg px-4 py-3 text-[13.5px] text-charcoal-900 outline-none focus:border-blue-800 transition-colors resize-none"
        />
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
          >
            <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-[12.5px] leading-relaxed">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.01 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full flex items-center justify-center gap-2.5 bg-blue-800 text-white py-3.5 rounded-xl font-bold text-[14px] hover:bg-blue-900 transition-colors disabled:opacity-70 shadow-lg shadow-blue-800/25 mt-2"
      >
        {loading ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
            />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Enquiry
          </>
        )}
      </motion.button>

      <p className="text-charcoal-400 text-[11.5px] text-center mt-2">
        We respond within 24 business hours.
      </p>
    </motion.form>
  );
}

// ── Reusable input field ──────────────────────────────────────────────────────
function Field({ label, name, type = "text", placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11.5px] font-bold text-charcoal-600 tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border-[1.5px] border-charcoal-200 rounded-lg px-4 py-2.5 text-[13.5px] text-charcoal-900 outline-none focus:border-blue-800 transition-colors placeholder:text-charcoal-300"
      />
    </div>
  );
}

// ── Success state ─────────────────────────────────────────────────────────────
function SuccessState({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center text-center py-16 gap-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <CheckCircle size={56} className="text-emerald-500" />
      </motion.div>
      <div>
        <h3 className="font-display text-2xl text-charcoal-900 mb-2">Enquiry Received</h3>
        <p className="text-charcoal-500 text-sm leading-relaxed max-w-xs">
          Thank you. Our team will review your enquiry and respond to{" "}
          <span className="font-semibold text-charcoal-700">your email</span> within 24 business hours.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReset}
        className="mt-2 text-blue-800 text-[13px] font-bold underline underline-offset-2"
      >
        Submit another enquiry
      </motion.button>
    </motion.div>
  );
}