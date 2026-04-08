import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  industry: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
});

type FormValues = z.infer<typeof formSchema>;

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: false
    }
  });

  const onSubmit = async (data: FormValues) => {
    console.log('Form Data:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const consentValue = watch('consent');

  return (
    <div className="min-h-screen bg-technexus-light font-sans text-technexus-blue">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-auto">
              {/* TechNexus Logo Placeholder */}
              <svg viewBox="0 0 200 50" className="h-full w-auto fill-technexus-blue">
                <text x="0" y="35" className="font-heading text-2xl font-bold uppercase tracking-tighter">TechNexus</text>
                <rect x="145" y="10" width="30" height="30" className="fill-technexus-orange" />
                <text x="152" y="32" className="fill-white font-heading text-xl font-bold">X</text>
              </svg>
            </div>
            <div className="hidden h-6 w-px bg-gray-200 sm:block" />
            <span className="hidden text-xs font-semibold uppercase tracking-widest text-technexus-gray sm:block">
              Venture Collaborative
            </span>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Learn More
          </Button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-technexus-blue py-16 text-white lg:py-24">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#85DFE3 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-technexus-orange/20 px-3 py-1 text-sm font-semibold text-technexus-orange ring-1 ring-technexus-orange/30">
                  <Calendar className="h-4 w-4" />
                  <span>April 24, 2026 • 10:00 AM CST</span>
                </div>

                <div className="space-y-4">
                  <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                    Top Ten in <br />
                    <span className="text-technexus-cyan">Tech</span> <span className="relative italic text-technexus-orange">
                      Chicago
                      <svg className="absolute -bottom-2 left-0 h-2 w-full fill-technexus-orange/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  </h1>
                  <p className="max-w-xl text-lg text-gray-300 sm:text-xl">
                    Join us for an exclusive deep dive into the startups and technologies shaping the future of Chicago's venture ecosystem.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-white/10 p-2">
                      <Users className="h-6 w-6 text-technexus-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Industry Experts</h3>
                      <p className="text-sm text-gray-400">Hear from leading VCs and founders.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-white/10 p-2">
                      <ShieldCheck className="h-6 w-6 text-technexus-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Exclusive Insights</h3>
                      <p className="text-sm text-gray-400">Get data-driven market analysis.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 pt-4 opacity-70">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Trusted By</span>
                  <div className="flex flex-wrap gap-8 grayscale invert opacity-50">
                    {/* Simple SVG Logos for Trust */}
                    <svg viewBox="0 0 100 20" className="h-5 w-auto"><text x="0" y="15" className="font-bold text-lg">VENTURE</text></svg>
                    <svg viewBox="0 0 100 20" className="h-5 w-auto"><text x="0" y="15" className="font-bold text-lg">CAPITAL</text></svg>
                    <svg viewBox="0 0 100 20" className="h-5 w-auto"><text x="0" y="15" className="font-bold text-lg">STARTUP</text></svg>
                    <svg viewBox="0 0 100 20" className="h-5 w-auto"><text x="0" y="15" className="font-bold text-lg">CHICAGO</text></svg>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-none shadow-2xl">
                  <CardHeader className="space-y-1 bg-technexus-blue/5 pb-8 pt-8 text-center">
                    <CardTitle className="font-heading text-2xl font-bold">Reserve Your Spot</CardTitle>
                    <CardDescription>
                      Fill out the form below to register for the webinar.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8">
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                      >
                        <div className="rounded-full bg-green-100 p-3">
                          <CheckCircle2 className="h-12 w-12 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold">Registration Complete!</h2>
                        <p className="text-technexus-gray">
                          We've sent a confirmation email with the calendar invite to your inbox.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                          Register Another
                        </Button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name*</Label>
                            <Input 
                              id="firstName" 
                              placeholder="Jane" 
                              {...register('firstName')} 
                              className={errors.firstName ? 'border-red-500' : ''}
                            />
                            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName.message}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name*</Label>
                            <Input 
                              id="lastName" 
                              placeholder="Doe" 
                              {...register('lastName')} 
                              className={errors.lastName ? 'border-red-500' : ''}
                            />
                            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName.message}</p>}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email*</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="jane@company.com" 
                            {...register('email')} 
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company*</Label>
                          <Input 
                            id="company" 
                            placeholder="TechNexus" 
                            {...register('company')} 
                            className={errors.company ? 'border-red-500' : ''}
                          />
                          {errors.company && <p className="text-xs text-red-500">{errors.company.message}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="jobTitle">Job Title*</Label>
                          <Input 
                            id="jobTitle" 
                            placeholder="Director of Innovation" 
                            {...register('jobTitle')} 
                            className={errors.jobTitle ? 'border-red-500' : ''}
                          />
                          {errors.jobTitle && <p className="text-xs text-red-500">{errors.jobTitle.message}</p>}
                        </div>

                        <div className="flex items-start space-x-2 pt-2">
                          <Checkbox 
                            id="consent" 
                            checked={consentValue}
                            onCheckedChange={(checked) => setValue('consent', checked as boolean)}
                          />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="consent"
                              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to receive communications from TechNexus regarding this webinar and future insights.
                            </label>
                            {errors.consent && <p className="text-[10px] text-red-500">{errors.consent.message}</p>}
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-technexus-orange hover:bg-technexus-orange/90 text-white h-12 text-lg font-bold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                              />
                              Processing...
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Register Now <ArrowRight className="h-5 w-5" />
                            </span>
                          )}
                        </Button>
                        <p className="text-center text-[10px] text-gray-500">
                          By registering, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-heading text-3xl font-bold sm:text-4xl">What You'll Learn</h2>
              <p className="text-technexus-gray max-w-2xl mx-auto">
                Our team has analyzed hundreds of startups to bring you the definitive list of Chicago's most promising tech ventures.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Market Trends",
                  desc: "Understand the macro shifts driving investment in the Midwest.",
                  icon: <Clock className="h-8 w-8 text-technexus-orange" />
                },
                {
                  title: "Top 10 Startups",
                  desc: "A curated list of companies with the highest growth potential.",
                  icon: <CheckCircle2 className="h-8 w-8 text-technexus-orange" />
                },
                {
                  title: "VC Perspective",
                  desc: "Direct insights from the TechNexus investment committee.",
                  icon: <MapPin className="h-8 w-8 text-technexus-orange" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
                >
                  <div className="bg-technexus-orange/10 w-fit p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-technexus-gray leading-relaxed">
                    {item.desc}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-technexus-orange font-bold">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-technexus-blue py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center space-y-8">
            <h2 className="font-heading text-4xl font-bold">Ready to join the conversation?</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-lg">
              Don't miss out on the most anticipated tech event of the quarter.
            </p>
            <Button 
              size="lg" 
              className="bg-technexus-orange hover:bg-technexus-orange/90 text-white px-12 py-6 text-xl font-bold rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Register for Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 200 50" className="h-8 w-auto fill-technexus-blue">
                <text x="0" y="35" className="font-heading text-2xl font-bold uppercase tracking-tighter">TechNexus</text>
                <rect x="145" y="10" width="30" height="30" className="fill-technexus-orange" />
                <text x="152" y="32" className="fill-white font-heading text-xl font-bold">X</text>
              </svg>
            </div>
            <div className="flex gap-8 text-sm font-medium text-technexus-gray">
              <a href="#" className="hover:text-technexus-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-technexus-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-technexus-orange transition-colors">Contact Us</a>
            </div>
            <p className="text-sm text-gray-400">
              © 2026 TechNexus Venture Collaborative. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
