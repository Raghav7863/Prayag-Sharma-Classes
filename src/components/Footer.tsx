import React from "react";
import { Calculator } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-primary p-2 rounded-lg">
                <Calculator size={20} />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Prayag Sharma Classes
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Dedicated to providing quality mathematics education for classes 9th to 12th. Building strong foundations and ensuring board exam success through conceptual clarity and personalized attention.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection("hero")} className="text-primary-foreground/70 hover:text-secondary transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="text-primary-foreground/70 hover:text-secondary transition-colors">About Prayag Sir</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("courses")} className="text-primary-foreground/70 hover:text-secondary transition-colors">Our Courses</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("why-us")} className="text-primary-foreground/70 hover:text-secondary transition-colors">Why Choose Us</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Classes</h4>
            <ul className="space-y-4">
              <li className="text-primary-foreground/70">Class 9th Mathematics</li>
              <li className="text-primary-foreground/70">Class 10th Mathematics</li>
              <li className="text-primary-foreground/70">Class 11th Mathematics</li>
              <li className="text-primary-foreground/70">Class 12th Mathematics</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Prayag Sharma Classes. All rights reserved.</p>
          <p>Modinagar, Ghaziabad, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
