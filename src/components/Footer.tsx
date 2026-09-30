import { useState } from "react";
import { MapPin, Phone, Shield, Clock, Mail, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/athi-logo.png";

const WA_LINK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27d%20like%20to%20enquire%20about%20your%20services";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="border-t border-white/10"
      style={{ background: "hsl(222 47% 9%)" }}
      aria-label="Site footer"
    >
      {/* Top accent */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg, transparent, #f5c518, #0ea5e9, transparent)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">

          {/* ── Col 1: Brand ── */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3" aria-label="AI-Tech Haven International home">
              <img src={logo} alt="AI-Tech Haven International Logo" className="h-12 w-auto" />
              <div>
                <p className="font-heading text-sm font-bold text-white">AI-TECH HAVEN</p>
                <p className="font-heading text-xs text-white/50">INTERNATIONAL</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Intelligent Technology Solutions for homes, businesses, hotels, and organisations. Serving Nigeria, Africa, and worldwide.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-white/40">
              <Shield className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <span>CAC Registered: 9255386</span>
            </div>
            {/* Social icons */}
            <div className="mt-5 flex gap-2.5">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/Athionline",
                  svg: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/a_thi.site",
                  svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
                },
                {
                  label: "X (Twitter)",
                  href: "https://twitter.com/A_THIonline",
                  svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />,
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@ai_techhaven",
                  svg: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52V6.79a4.84 4.84 0 01-1-.1z" />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/60 transition-all hover:bg-primary/20 hover:text-primary"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {s.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Company ── */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Company
            </h4>
            <nav className="mt-4 space-y-2" aria-label="Company links">
              {[
                { label: "Home", to: "/" },
                { label: "Smart Living ⭐", to: "/smart-living" },
                { label: "About Us", href: "#about-section" },
                { label: "Our Blog", to: "/blog" },
                { label: "Contact Us", to: "/contact" },
                { label: "Book Consultation", href: "https://wa.me/2348088851368?text=Book%20Consultation", external: true },
              ].map((item) =>
                item.external ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/55 transition-colors hover:text-primary">
                    {item.label}
                  </a>
                ) : item.to ? (
                  <Link key={item.label} to={item.to} className="block text-sm text-white/55 transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} className="block text-sm text-white/55 transition-colors hover:text-primary">
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <nav className="mt-4 space-y-2" aria-label="Services links">
              {[
                { label: "Account Recovery", to: "/services/accounts-recovery" },
                { label: "Data Recovery", to: "/services/data-recovery" },
                { label: "Smart Living", to: "/smart-living" },
                { label: "Computer Repair & IT", to: "/services/computer-repair-support" },
                { label: "AI & Bot Development", to: "/services/ai-bot-development" },
                { label: "Web & App Development", to: "/services/web-apps-development" },
                { label: "Networking", to: "/services/networking-infrastructure" },
                { label: "Google Business Profile", to: "/services/google-business-profile" },
                { label: "Technology Consulting", to: "/services/technology-consulting" },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="block text-sm text-white/55 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 4: Business Solutions + Resources ── */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Business Solutions
            </h4>
            <nav className="mt-4 space-y-2" aria-label="Business solutions links">
              {[
                { label: "For Homeowners", to: "/smart-living" },
                { label: "For Businesses", to: "/services/ai-bot-development" },
                { label: "For Hotels", to: "/smart-living" },
                { label: "For Organisations", to: "/services/technology-consulting" },
                { label: "Recovery Services", to: "/services/accounts-recovery" },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="block text-sm text-white/55 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>

            <h4 className="mt-6 font-heading text-xs font-bold uppercase tracking-widest text-white">
              Resources
            </h4>
            <nav className="mt-4 space-y-2" aria-label="Resources links">
              {[
                { label: "Technology Blog", to: "/blog" },
                { label: "Smart Living Guide", to: "/smart-living" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
              ].map((item) => (
                <Link key={item.label} to={item.to} className="block text-sm text-white/55 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── Col 5: Contact + Newsletter ── */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>2c Emenike Street, Mile One, Diobu,<br />Port Harcourt, Rivers State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:+2348088851368" className="transition-colors hover:text-primary">+234 808 885 1368</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:aitechhaveninternational@gmail.com" className="break-all transition-colors hover:text-primary">
                  aitechhaveninternational@gmail.com
                </a>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-primary"
              >
                <svg className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <div className="flex items-center gap-2.5 text-xs text-white/40">
                <Clock className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                <span>Mon–Fri 9am–5pm · WhatsApp 24/7</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white">
                Newsletter
              </h4>
              <p className="mt-2 text-xs text-white/50">
                Technology tips and smart living updates, direct to your inbox.
              </p>
              {subscribed ? (
                <p className="mt-3 text-xs font-semibold text-primary">
                  ✓ You're subscribed! Thank you.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-3 flex gap-2" noValidate>
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-3 py-2 text-xs font-bold text-primary-foreground transition-all hover:brightness-110"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/8 pt-8 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} AI-TECH HAVEN INTERNATIONAL (A-THI). All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
            <Link to="/privacy" className="transition-colors hover:text-white/70">Privacy Policy</Link>
            <Link to="/terms" className="transition-colors hover:text-white/70">Terms of Service</Link>
            <a href="https://www.ai-techhaven.site" className="transition-colors hover:text-white/70">
              www.ai-techhaven.site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
