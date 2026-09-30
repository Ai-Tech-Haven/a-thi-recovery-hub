import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon, Phone, Calendar } from "lucide-react";
import logo from "@/assets/athi-logo.png";
import { useTheme } from "@/hooks/useTheme";
import { services } from "@/data/services";

const WA_LINK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27d%20like%20to%20enquire%20about%20your%20services";
const WA_BOOK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20would%20like%20to%20book%20a%20consultation";

/* ── grouped nav for Solutions mega-menu ── */
const solutionGroups = [
  {
    label: "For Homeowners",
    items: [
      { name: "Smart Living", path: "/smart-living" },
      { name: "Computer Repair", path: "/services/computer-repair-support" },
      { name: "Networking", path: "/services/networking-infrastructure" },
    ],
  },
  {
    label: "For Businesses",
    items: [
      { name: "IT Support", path: "/services/computer-repair-support" },
      { name: "AI & Automation", path: "/services/ai-bot-development" },
      { name: "Google Business Profile", path: "/services/google-business-profile" },
    ],
  },
  {
    label: "For Organisations",
    items: [
      { name: "Systems Architecture", path: "/services/technology-consulting" },
      { name: "Networking & Infrastructure", path: "/services/networking-infrastructure" },
      { name: "Digital Transformation", path: "/services/technology-consulting" },
    ],
  },
  {
    label: "Recovery Services",
    items: [
      { name: "Account Recovery", path: "/services/accounts-recovery" },
      { name: "Data Recovery", path: "/services/data-recovery" },
      { name: "Gmail & WhatsApp Security", path: "/services/gmail-whatsapp-security" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ top: "var(--announcement-height, 0px)" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="AI-Tech Haven International home">
          <img src={logo} alt="AI-Tech Haven International Logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <p className="font-heading text-[10px] font-bold leading-tight tracking-wider text-foreground">
              AI-TECH HAVEN
            </p>
            <p className="font-heading text-[9px] tracking-widest text-muted-foreground">
              INTERNATIONAL
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <a
            href="#home"
            onClick={goHome}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </a>

          {/* Smart Living */}
          <Link
            to="/smart-living"
            className="flex items-center gap-1 text-sm font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
          >
            Smart Living <span className="rounded bg-yellow-500/20 px-1 py-0.5 text-[9px] font-bold uppercase tracking-wide text-yellow-400">⭐ NEW</span>
          </Link>

          {/* Services dropdown */}
          <div
            className="group relative"
            onMouseEnter={() => { setServicesOpen(true); setSolutionsOpen(false); }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary" aria-expanded={servicesOpen}>
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={(s as any).customPath ?? `/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      <s.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Solutions mega-menu */}
          <div
            className="group relative"
            onMouseEnter={() => { setSolutionsOpen(true); setServicesOpen(false); }}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary" aria-expanded={solutionsOpen}>
              Solutions <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {solutionsOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-border bg-card p-4 shadow-2xl">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Solutions by Customer Type
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {solutionGroups.map((group) => (
                      <div key={group.label}>
                        <p className="mb-2 text-xs font-bold text-primary">{group.label}</p>
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setSolutionsOpen(false)}
                            className="block rounded-md px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#about-section"
            onClick={(e) => scrollTo(e, "about-section")}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            About
          </a>

          <Link to="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggle}
            className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book Consultation
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile header actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggle}
            className="rounded-lg border border-border p-2 text-foreground"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-border p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/98 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <nav className="space-y-1" aria-label="Mobile navigation">
            <a
              href="#home"
              onClick={(e) => { goHome(e); setMobileOpen(false); }}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              Home
            </a>
            <Link
              to="/smart-living"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-bold text-yellow-500 hover:bg-yellow-500/10"
            >
              Smart Living <span className="rounded bg-yellow-500/20 px-1 py-0.5 text-[9px] font-bold uppercase text-yellow-400">NEW</span>
            </Link>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={(s as any).customPath ?? `/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <s.icon className="h-4 w-4 shrink-0" aria-hidden="true" /> {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions accordion */}
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {solutionsOpen && (
                <div className="ml-3 mt-1 space-y-3 border-l border-border pl-3">
                  {solutionGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-primary">{group.label}</p>
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about-section"
              onClick={(e) => { scrollTo(e, "about-section"); setMobileOpen(false); }}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary"
            >
              About
            </a>
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary">Blog</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-primary">Contact</Link>
          </nav>

          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-primary/40 py-3 text-sm font-semibold text-primary"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" /> Book Consultation
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
