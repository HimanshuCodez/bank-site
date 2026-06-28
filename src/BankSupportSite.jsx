import React, { useState } from "react";
import { motion } from "framer-motion";
import managerPhoto from "./assets/manager-photo.png";
import {
  Phone,
  MessageCircle,
  Mail,
  CreditCard,
  Lock,
  Landmark,
  ShieldCheck,
  HelpCircle,
  Plus,
  X,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared animation variants                                         */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const SUPPORT_NUMBER = "7449689375";
const SUPPORT_NUMBER_DISPLAY = "+91 74496 89375";

/* ------------------------------------------------------------------ */
/*  HERO SECTION                                                      */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5F0]">
      {/* faint background watermark icon, like the BANK lockup in ref image */}
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-[0.05] lg:block">
        <Landmark size={420} strokeWidth={1} className="text-[#0F1B3D]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 order-1 lg:hidden"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center rounded-full border border-[#D4A24C]/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F1B3D]"
          >
            Trust &middot; Service &middot; Excellence
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-[2.75rem] font-bold leading-[1.05] text-[#0F1B3D] sm:text-6xl"
          >
            Branch manager
            <br />
            <span className="text-[#B8862F]">Vivek</span>
          </motion.h1>
        </motion.div>

        {/* Left: copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-10 order-3 lg:order-1"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 hidden items-center rounded-full border border-[#D4A24C]/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0F1B3D] lg:inline-flex"
          >
            Trust &middot; Service &middot; Excellence
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="hidden font-serif text-[2.75rem] font-bold leading-[1.05] text-[#0F1B3D] sm:text-6xl lg:block"
          >
            Branch manager
            <br />
            <span className="text-[#B8862F]">Vivek</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-lg leading-relaxed text-[#5B6477]"
          >
            Committed to providing trusted banking solutions and exceptional
            service for a better tomorrow &mdash; whenever you need us, we're
            here for you.
          </motion.p>

          {/* Get Support CTA */}
          <motion.div variants={fadeUp} className="mt-9">
            <a
              href={`tel:${SUPPORT_NUMBER}`}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#0F1B3D] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#0F1B3D]/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#16245A]"
            >
              <Phone size={18} className="text-[#D4A24C]" />
              Get Support: {SUPPORT_NUMBER_DISPLAY}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <p className="mt-3 text-sm text-[#5B6477]">
              Available 24 hours, 7 days a week.
            </p>
          </motion.div>

          {/* Feature strip: Customer First / Secure Banking / Growth Together */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-[#0F1B3D]/10 pt-8"
          >
            {[
              { icon: Users, label: "Customer\nFirst" },
              { icon: ShieldCheck, label: "Secure\nBanking" },
              { icon: TrendingUp, label: "Growth\nTogether" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F1B3D]">
                  <Icon size={20} className="text-[#D4A24C]" />
                </span>
                <span className="whitespace-pre-line text-sm font-semibold text-[#0F1B3D]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: real portrait photo, echoing the "Bank Manager" framing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative z-10 order-2 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={managerPhoto}
              alt="Banking specialist at the support desk"
              className="h-[520px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B3D]/80 via-[#0F1B3D]/0 to-transparent" />

            {/* floating name-plate style card, bottom of photo */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-base font-bold text-[#0F1B3D]">
                    Customer Support Desk
                  </p>
                  <p className="mt-0.5 text-xs text-[#5B6477]">
                    Real answers, real people &mdash; day or night.
                  </p>
                </div>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#0F1B3D]">
                  <Phone size={18} className="text-[#D4A24C]" />
                </span>
              </div>
              <a
                href={`tel:${SUPPORT_NUMBER}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0F1B3D] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#16245A]"
              >
                {SUPPORT_NUMBER_DISPLAY}
              </a>
            </div>
          </div>

          {/* trust stats strip below the photo */}
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-[#5B6477]">
            <div className="rounded-lg border border-[#0F1B3D]/10 bg-white py-3">
              <p className="text-base font-bold text-[#0F1B3D]">24/7</p>
              Availability
            </div>
            <div className="rounded-lg border border-[#0F1B3D]/10 bg-white py-3">
              <p className="text-base font-bold text-[#0F1B3D]">&lt;1min</p>
              Avg. response
            </div>
            <div className="rounded-lg border border-[#0F1B3D]/10 bg-white py-3">
              <p className="text-base font-bold text-[#0F1B3D]">256-bit</p>
              Encryption
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT CARDS SECTION ("Reach us your way")                       */
/* ------------------------------------------------------------------ */
function ContactCards() {
  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      desc: "Speak directly with a banking specialist.",
      value: SUPPORT_NUMBER_DISPLAY,
      meta: "24 hours · 7 days",
      href: `tel:${SUPPORT_NUMBER}`,
      highlighted: true,
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      desc: "Get instant answers from our digital advisors.",
      value: "Start a chat",
      meta: "Avg. response < 1 min",
      href: "#chat",
    },
    {
      icon: Mail,
      title: "Secure Message",
      desc: "Send confidential inquiries through online banking.",
      value: "support@meridian.com",
      meta: "Reply within 4 hours",
      href: "mailto:support@meridian.com",
    },
  ];

  return (
    <section className="bg-[#F7F5F0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-serif text-4xl font-bold text-[#0F1B3D] sm:text-5xl"
        >
          Reach us your way
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {cards.map(({ icon: Icon, title, desc, value, meta, href, highlighted }) => (
            <motion.a
              key={title}
              href={href}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-xl ${
                highlighted ? "border-[#0F1B3D]" : "border-[#0F1B3D]/10"
              }`}
            >
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F1B3D]">
                <Icon size={20} className="text-white" />
              </span>
              <h3 className="font-serif text-xl font-bold text-[#0F1B3D]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6477]">
                {desc}
              </p>
              <div className="mt-6 border-t border-[#0F1B3D]/10 pt-5">
                <p className="text-lg font-bold text-[#0F1B3D]">{value}</p>
                <p className="mt-1 text-xs text-[#9AA1B0]">{meta}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HELP TOPICS SECTION                                                */
/* ------------------------------------------------------------------ */
function HelpTopics() {
  const topics = [
    {
      icon: CreditCard,
      title: "Cards & Payments",
      desc: "Activate, replace, or report a lost card.",
    },
    {
      icon: Lock,
      title: "Account Security",
      desc: "Reset passwords, manage 2FA, report fraud.",
    },
    {
      icon: Landmark,
      title: "Transfers & Wires",
      desc: "Domestic, international, and recurring payments.",
    },
    {
      icon: ShieldCheck,
      title: "Loans & Mortgages",
      desc: "Application status and payment assistance.",
    },
    {
      icon: HelpCircle,
      title: "Online Banking",
      desc: "Login help and digital banking features.",
    },
    {
      icon: Phone,
      title: "Business Banking",
      desc: "Dedicated support for corporate clients.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A24C]"
            >
              Popular Topics
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-serif text-4xl font-bold text-[#0F1B3D] sm:text-5xl"
            >
              Find answers fast
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#articles"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0F1B3D] hover:text-[#B8862F]"
          >
            View all articles <ArrowRight size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#0F1B3D]/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <motion.a
              key={title}
              href="#"
              variants={fadeUp}
              className={`group flex items-start gap-4 border-[#0F1B3D]/10 p-8 transition-colors hover:bg-[#F7F5F0]
                ${i % 3 !== 2 ? "lg:border-r" : ""}
                ${i % 2 !== 1 ? "sm:border-r lg:border-r-0" : ""}
                ${i % 3 !== 2 ? "" : ""}
                ${i < topics.length - (topics.length % 3 === 0 ? 3 : topics.length % 3) ? "border-b" : ""}
              `}
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#0F1B3D]/5 transition-colors group-hover:bg-[#0F1B3D]">
                <Icon
                  size={19}
                  className="text-[#0F1B3D] transition-colors group-hover:text-[#D4A24C]"
                />
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-[#0F1B3D]">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#5B6477]">
                  {desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SECURITY BAND                                                      */
/* ------------------------------------------------------------------ */
function SecurityBand() {
  const stats = [
    { value: "256-bit", label: "Encryption" },
    { value: "Zero", label: "Liability promise" },
    { value: "FDIC", label: "Insured deposits" },
    { value: "ISO 27001", label: "Certified" },
  ];

  return (
    <section className="bg-[#0F1B3D] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A24C]"
          >
            Your Security
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl"
          >
            Protected at every step
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-md leading-relaxed text-white/70"
          >
            We will never ask for your full password, PIN, or one-time codes
            by phone or email. If you suspect fraud, contact our security
            team immediately.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href={`tel:${SUPPORT_NUMBER}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#D4A24C] px-6 py-4 text-sm font-bold text-[#0F1B3D] transition-transform hover:-translate-y-0.5 hover:bg-[#E0B262]"
          >
            <ShieldCheck size={17} />
            Fraud Hotline: {SUPPORT_NUMBER_DISPLAY}
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-white/[0.03] p-8"
            >
              <p className="font-serif text-3xl font-bold text-[#D4A24C]">
                {value}
              </p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ ACCORDION                                                      */
/* ------------------------------------------------------------------ */
function FAQ() {
  const faqs = [
    {
      q: "How do I report a lost or stolen card?",
      a: `Call us immediately at ${SUPPORT_NUMBER_DISPLAY} or freeze your card instantly in the Meridian mobile app under Cards → Manage.`,
    },
    {
      q: "What should I do if I notice unauthorized activity?",
      a: `Contact our security team right away at ${SUPPORT_NUMBER_DISPLAY}. We'll help you secure your account and review the activity together.`,
    },
    {
      q: "How long do international wire transfers take?",
      a: "Most international wires are completed within 1–3 business days, depending on the destination bank and currency.",
    },
    {
      q: "Can I schedule an appointment with a banker?",
      a: "Yes — call our support line or use the Secure Message option to request an appointment at your nearest branch.",
    },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F7F5F0] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A24C]"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-serif text-4xl font-bold text-[#0F1B3D] sm:text-5xl"
          >
            Common questions
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#5B6477]">
            Quick answers to questions we hear most often from our clients.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="divide-y divide-[#0F1B3D]/10 border-t border-[#0F1B3D]/10"
        >
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={q} variants={fadeUp} className="py-5">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-serif text-base font-bold text-[#0F1B3D] sm:text-lg">
                    {q}
                  </span>
                  <span className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0F1B3D]/5 text-[#0F1B3D]">
                    {isOpen ? <X size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pr-10 pt-3 text-sm leading-relaxed text-[#5B6477]">
                    {a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA BAND + FOOTER                                                  */
/* ------------------------------------------------------------------ */
function CTAFooter() {
  return (
    <>
      <section className="bg-[#F7F5F0] py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="mx-auto max-w-2xl px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-serif text-4xl font-bold text-[#0F1B3D] sm:text-5xl"
          >
            Still need help? We're one call away.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-[#5B6477]">
            Our dedicated specialists are standing by around the clock to
            assist with any banking matter.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={`tel:${SUPPORT_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0F1B3D] px-7 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <Phone size={16} className="text-[#D4A24C]" />
              Call {SUPPORT_NUMBER_DISPLAY}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#0F1B3D]/20 bg-white px-7 py-4 text-sm font-bold text-[#0F1B3D] transition-colors hover:bg-[#0F1B3D]/5"
            >
              All contact options
            </a>
          </motion.div>
        </motion.div>
      </section>

      <footer className="bg-[#0F1B3D] py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                <Landmark size={18} className="text-[#0F1B3D]" />
              </span>
              <span className="font-serif text-lg font-bold">Meridian</span>
            </div>
            <p className="mt-4 text-sm text-white/50">
              Trusted private banking since 1894.
            </p>
          </div>

          {[
            {
              title: "Support",
              links: ["Contact", "FAQ", "Locations", "Accessibility"],
            },
            {
              title: "Banking",
              links: ["Personal", "Business", "Wealth", "Loans"],
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Disclosures", "Security"],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A24C]">
                {title}
              </p>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0F1B3D]/10 bg-[#F7F5F0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F1B3D]">
            <Landmark size={18} className="text-[#D4A24C]" />
          </span>
          <div className="leading-none">
            <p className="font-serif text-base font-bold text-[#0F1B3D]">
              Meridian
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#9AA1B0]">
              Private Bank
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#0F1B3D]/80 md:flex">
          <a href="#contact" className="hover:text-[#0F1B3D]">Contact</a>
          <a href="#topics" className="hover:text-[#0F1B3D]">Help Topics</a>
          <a href="#security" className="hover:text-[#0F1B3D]">Security</a>
          <a href="#faq" className="hover:text-[#0F1B3D]">FAQ</a>
        </nav>

        <a
          href={`tel:${SUPPORT_NUMBER}`}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0F1B3D] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#16245A]"
        >
          <Phone size={14} className="text-[#D4A24C]" />
          {SUPPORT_NUMBER_DISPLAY}
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function BankSupportSite() {
  return (
    <div className="font-sans text-[#0F1B3D]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>
      <Navbar />
      <Hero />
      <div id="contact">
        <ContactCards />
      </div>
      <div id="topics">
        <HelpTopics />
      </div>
      <div id="security">
        <SecurityBand />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <CTAFooter />
    </div>
  );
}
