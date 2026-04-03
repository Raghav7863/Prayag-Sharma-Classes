import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-[450px] mx-auto shadow-xl bg-gradient-to-br from-primary/90 to-secondary/60 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-white p-8 text-center">
                <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-6xl font-serif font-bold text-white">
                  PS
                </div>
                <p className="text-2xl font-serif font-bold">Prayag Sharma</p>
                <p className="text-base opacity-80 font-medium">Mathematics Teacher</p>
                <p className="text-sm opacity-70 max-w-[240px]">Modinagar, Ghaziabad</p>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-border max-w-[200px] hidden md:block">
              <p className="text-3xl font-serif font-bold text-primary mb-1">"Math is not about numbers, it's about understanding."</p>
              <p className="text-sm font-medium text-muted-foreground">- Prayag Sharma</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
              Meet Prayag Sharma
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mb-8"></div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of dedicated teaching experience in Modinagar, Prayag Sir has transformed how students perceive mathematics. He believes that every student can excel at math when concepts are taught with clarity and patience.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              His approach goes beyond textbook formulas, focusing on logical reasoning and real-world applications to ensure students don't just memorize, but truly understand.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Concept First Approach</h3>
                  <p className="text-muted-foreground">Focus on building a strong foundational understanding before tackling complex problems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Personalized Attention</h3>
                  <p className="text-muted-foreground">Identifying individual student weaknesses and tailoring explanations to overcome them.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Board Exam Excellence</h3>
                  <p className="text-muted-foreground">Strategic preparation, regular testing, and time-management techniques for maximum scores.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
