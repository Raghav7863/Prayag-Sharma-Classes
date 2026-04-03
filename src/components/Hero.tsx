import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Calculator } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-slate-50/50" />
      <div className="absolute top-[-10%] right-[-5%] -z-10 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] -z-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Star size={14} className="fill-secondary text-secondary" />
              <span>Trusted by 1000+ Students in Modinagar</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6">
              Master Mathematics with <span className="text-secondary">Clarity & Confidence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-[540px]">
              Expert coaching for classes 9th, 10th, 11th, and 12th. We build strong foundations that lead to board exam excellence and future success.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base"
              >
                Book a Free Trial Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/5 h-14 text-base"
              >
                Explore Courses
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">15+</span>
                <span>Years Experience</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">100%</span>
                <span>Board Results</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">Small</span>
                <span>Batch Sizes</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[600px]"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[4/3] shadow-2xl border border-white/20 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-secondary/40" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-white/90 p-8 text-center">
                <Calculator size={64} className="text-secondary" />
                <p className="text-2xl font-serif font-bold">Mathematics Coaching</p>
                <p className="text-base opacity-80">Classes 9th to 12th</p>
                <div className="flex gap-4 mt-4 flex-wrap justify-center">
                  {["9th","10th","11th","12th"].map(cls => (
                    <span key={cls} className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">Class {cls}</span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border animate-in fade-in zoom-in duration-700 delay-500 hidden md:flex items-center gap-4">
              <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                <Calculator size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary">Concept-driven</p>
                <p className="text-xs text-muted-foreground">learning approach</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
