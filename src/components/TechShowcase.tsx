import { Bot, Cloud, Wifi, Tv, HardDrive, Shield, Zap, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const technologies = [
  {
    icon: Bot,
    label: "Artificial Intelligence",
    desc: "AI chatbots, automation & intelligent solutions",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: Cloud,
    label: "Cloud Solutions",
    desc: "Cloud integration, backup & collaboration tools",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Wifi,
    label: "Networking",
    desc: "Wi-Fi, LAN, WAN & enterprise infrastructure",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Tv,
    label: "Smart Home",
    desc: "Smart TV, voice control, lighting & cameras",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: HardDrive,
    label: "Data Recovery",
    desc: "HDD, SSD, RAID, phone & digital asset recovery",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: Shield,
    label: "Account Security",
    desc: "2FA setup, encryption & account recovery",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
  {
    icon: Zap,
    label: "Automation",
    desc: "Business process & smart living automation",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
  },
  {
    icon: Globe,
    label: "Digital Transformation",
    desc: "Web, apps, digital strategy & consulting",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
  },
];

const TechShowcase = () => (
  <section className="py-24" aria-label="Technology areas we specialise in">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          Our Technology Stack
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Technology Areas We <span className="text-glow-cyan text-primary">Specialise In</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Deep expertise across the full spectrum of modern technology — from physical hardware to intelligent software.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
        {technologies.map((tech, i) => (
          <ScrollReveal key={tech.label} delay={i * 0.08}>
            <div
              className={`group flex flex-col items-center gap-3 rounded-2xl border ${tech.border} ${tech.bg} p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div
                className={`rounded-2xl ${tech.bg} p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
              >
                <tech.icon className={`h-8 w-8 ${tech.color}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">{tech.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tech.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TechShowcase;
