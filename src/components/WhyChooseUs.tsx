import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, BrainCircuit, FileText } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Users className="text-secondary w-8 h-8" />,
      title: "Small Batch Sizes",
      description: "We strictly limit our batch sizes to ensure every student gets the attention they need to thrive."
    },
    {
      icon: <BrainCircuit className="text-secondary w-8 h-8" />,
      title: "Doubt Clearance",
      description: "Dedicated sessions where no question is considered too basic. We ensure complete clarity."
    },
    {
      icon: <FileText className="text-secondary w-8 h-8" />,
      title: "Regular Assessments",
      description: "Weekly and monthly tests to track progress and identify areas needing improvement."
    },
    {
      icon: <Clock className="text-secondary w-8 h-8" />,
      title: "Punctual Syllabus",
      description: "Timely completion of the syllabus leaving ample time for thorough revision before exams."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-white">
              Why Students & Parents Trust Us
            </h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mb-8"></div>
            
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed max-w-lg">
              Choosing the right coaching institute is a critical decision. We pride ourselves on creating an environment that fosters genuine understanding over rote memorization.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-6 text-white p-8 text-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: "Doubt Sessions", value: "Weekly" },
                    { label: "Test Series", value: "Monthly" },
                    { label: "Students Enrolled", value: "1000+" },
                    { label: "Board Pass Rate", value: "100%" }
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/10 rounded-xl p-4 border border-white/10">
                      <p className="text-2xl font-bold text-secondary">{stat.value}</p>
                      <p className="text-xs opacity-75 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm opacity-60 max-w-[240px]">Join a community of top-performing students in Modinagar</p>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-8 -left-8 md:-left-12 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-xl transform -rotate-3">
              <p className="text-4xl font-bold leading-none mb-1">15+</p>
              <p className="font-medium text-sm">Years of<br/>Excellence</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
