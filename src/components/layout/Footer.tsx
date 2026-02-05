import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Order Online", path: "/services" },
  { name: "About Us", path: "/about" },
];

const infoLinks = [
  { name: "Careers", path: "/careers" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Order Online", path: "/order-online" },
  { name: "Terms of Service", path: "/terms-of-service" },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container-custom py-16 lg:py-20">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <h3 className="heading-editorial text-2xl md:text-3xl mb-2">
              WE ARE SINCE 2014
            </h3>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-auto">
            <p className="text-sm text-muted-foreground mb-3">Subscribe to newsletter</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="flex-1 lg:w-64 bg-dark-foreground/10 border border-dark-foreground/20 rounded-full px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground rounded-full p-2.5 hover:bg-accent/90 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-dark-foreground/10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-bold mb-4 inline-block">
              VOLT.GRO
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              All the Lorem Ipsum generators on the Internet. By Awan
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-dark-foreground/20 flex items-center justify-center hover:bg-dark-foreground/10 transition-colors"
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-dark-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Information
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-dark-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links (duplicate for layout match) */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-dark-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Copyright @2026 Shazzad - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}