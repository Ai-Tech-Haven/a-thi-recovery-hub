import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import logo from "@/assets/athi-logo.png";
import { useTheme } from "@/hooks/useTheme";
import { services } from "@/data/services";

const WA_LINK = "https://wa.me/2348088851368?text=Hello%20A-THI%2C%20I%20need%20help%20recovering%20my%20account";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="A-THI Logo" className="h-10 w-auto" />
          <span className="hidden font-heading text-[10px] font-semibold tracking-wider text-muted-foreground sm:block">
            AI-TECH HAVEN<br />INTERNATIONAL
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" onClick={goHome} className="text-sm font-medium text-foreground transition-colors hover:text-primary">Home</a>
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-2">
                <div className="rounded-lg border border-border bg-card p-2 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      <s.icon className="h-4 w-4 text-primary" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/blog" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Blog</Link>
          <Link to="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggle}
            className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-muted"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-whatsapp px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Chat Now
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="rounded-lg border border-border p-2 text-foreground"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <a href="#home" onClick={(e) => { goHome(e); setMobileOpen(false); }} className="block py-3 text-foreground">Home</a>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex w-full items-center justify-between py-3 text-foreground">
              Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="space-y-1 pl-4">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary">
                    <s.icon className="h-4 w-4" /> {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground">Blog</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-foreground">Contact</Link>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-lg bg-whatsapp py-3 text-center font-semibold text-white">
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
