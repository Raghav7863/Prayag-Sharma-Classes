import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Courses() {
  const courses = [
    {
      grade: "Class 9th",
      title: "Foundation Building",
      description: "Crucial year for building the mathematical foundation required for higher classes.",
      features: ["Number Systems & Algebra", "Geometry Foundations", "Regular Chapter Tests", "Concept Clarity Focus"]
    },
    {
      grade: "Class 10th",
      title: "Board Preparation",
      description: "Comprehensive preparation focused on scoring maximum marks in the first board exams.",
      features: ["Complete NCERT Coverage", "Previous Year Papers", "Time Management Skills", "Mock Board Exams"]
    },
    {
      grade: "Class 11th",
      title: "Advanced Concepts",
      description: "Stepping stone to higher mathematics. Deep dive into calculus, algebra, and geometry.",
      features: ["Calculus Introduction", "Trigonometry Depth", "Competitive Exam Base", "Doubt Solving Sessions"]
    },
    {
      grade: "Class 12th",
      title: "Board & Beyond",
      description: "Rigorous preparation for Class 12 board exams and strengthening core concepts for future studies.",
      features: ["Advanced Calculus", "Vectors & 3D Geometry", "Intensive Revision", "Full Syllabus Tests"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            Our Courses
          </h2>
          <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Structured mathematics programs designed to cater to the specific academic needs of each class level.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-sm">
                      {course.grade}
                    </span>
                    <BookOpenCheck className="text-secondary" size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-[calc(100%-80px)]">
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {course.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm font-medium text-foreground">
                        <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToContact}
                    variant="outline" 
                    className="w-full mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-transparent transition-colors"
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
