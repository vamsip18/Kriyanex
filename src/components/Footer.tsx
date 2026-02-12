import { Link } from "react-router-dom";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-header text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-lg font-display font-bold">KriyaNex</span>
                <span className="block text-[10px] text-kriyanex-emerald tracking-[0.2em] uppercase -mt-1">
                  Global Tech
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Next-generation AI-enabled agriculture and agri-fintech technology company
              transforming the agricultural ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-kriyanex-emerald">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { path: "/about", label: "About Us" },
                { path: "/solutions", label: "Solutions" },
                { path: "/platforms", label: "Platforms" },
                { path: "/services", label: "Services" },
                { path: "/sustainability", label: "Sustainability & ESG" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-kriyanex-emerald transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-kriyanex-emerald">Solutions</h4>
            <ul className="space-y-2">
              {[
                "Precision Agriculture",
                "Digital Advisory",
                "Supply Chain AI",
                "Agri-Fintech",
                "Enterprise Solutions",
                "Sustainability & ESG",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-kriyanex-emerald">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-kriyanex-emerald flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">Registered Office: Telangana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-kriyanex-emerald flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">info@kriyanex.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-kriyanex-emerald flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">+91 XXXX XXXXXX</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-kriyanex-emerald/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 KriyaNex Global Tech Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-primary-foreground/40">Privacy Policy</span>
            <span className="text-xs text-primary-foreground/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
