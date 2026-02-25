import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Eye, ArrowRight, CheckCircle2 } from "lucide-react";

const EyeTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const testQuestions = [
    {
      question: "Which line is clearer? Line A or Line B?",
      options: ["Line A", "Line B", "Both are equal", "Neither is clear"],
      type: "vision"
    },
    {
      question: "Can you read the smallest line clearly?",
      options: ["Yes, all lines", "Most lines", "Some lines", "None clearly"],
      type: "vision"
    },
    {
      question: "Do you experience eye strain when reading?",
      options: ["Never", "Sometimes", "Often", "Always"],
      type: "symptom"
    },
    {
      question: "How often do you use digital screens?",
      options: ["Less than 2 hours/day", "2-5 hours/day", "5-8 hours/day", "More than 8 hours/day"],
      type: "lifestyle"
    }
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const handleNext = () => {
    if (currentStep < testQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Test completed
      alert("Test completed! Please schedule an appointment for a comprehensive eye examination.");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isTestComplete = currentStep === testQuestions.length - 1 && answers[currentStep];

  return (
    <div className="min-h-screen">
      <Navbar forceDarkText />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/50 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Online Eye Test</h1>
              <p className="text-muted-foreground text-lg">
                This is a preliminary vision screening. For accurate results, please schedule an in-person eye examination with our optometrist.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Test Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl">Question {currentStep + 1} of {testQuestions.length}</CardTitle>
                  <div className="flex gap-1">
                    {testQuestions.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentStep
                            ? "bg-primary"
                            : answers[index]
                              ? "bg-primary/50"
                              : "bg-muted"
                          }`}
                      />
                    ))}
                  </div>
                </div>
                <CardDescription>
                  {testQuestions[currentStep].type === "vision" && "Please answer based on what you see clearly"}
                  {testQuestions[currentStep].type === "symptom" && "Please answer based on your experience"}
                  {testQuestions[currentStep].type === "lifestyle" && "Please answer based on your daily habits"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-6">{testQuestions[currentStep].question}</h3>
                  <RadioGroup
                    value={answers[currentStep] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {testQuestions[currentStep].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!answers[currentStep]}
                    className="flex-1"
                  >
                    {isTestComplete ? (
                      <>
                        Complete Test <CheckCircle2 className="w-4 h-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Next <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 bg-muted rounded-lg"
            >
              <p className="text-sm text-muted-foreground text-center">
                <strong>Disclaimer:</strong> This online test is for informational purposes only and cannot replace a professional eye examination.
                Please schedule an appointment with our optometrist for accurate diagnosis and prescription.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Schedule Appointment CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Need a Professional Eye Examination?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule an appointment with our certified optometrist for a comprehensive eye health assessment.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Schedule Appointment</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EyeTest;
