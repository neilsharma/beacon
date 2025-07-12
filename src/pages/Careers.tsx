import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  TrendingUp,
  Home,
  Users,
  Shield,
  DollarSign,
  BookOpen,
  Clock,
  Laptop,
  Upload,
  Send,
  FileText,
  MessageCircle,
  Code,
  HandHeart,
  CheckCircle
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SectionBorder } from '../components/ui/section-border';
import { SectionGlow } from '../components/ui/section-glow';
import { BenefitCard } from '../components/ui/benefit-card';
import { ProcessStep } from '../components/ui/process-step';

const Careers = () => {
  const [state, handleSubmit] = useForm("xjkrnjnr"); // Replace with your Formspree form ID
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const whyWorkWithUs = [
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Your work directly improves how millions of citizens interact with government services."
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Culture",
      description: "We invest in your development with learning budgets, mentorship, and hands-on experience with modern technologies."
    },
    {
      icon: Home,
      title: "Flexible Environment",
      description: "Remote-first culture with the autonomy to do your best work when and where you're most productive."
    },
    {
      icon: Users,
      title: "Mission-Driven Team",
      description: "Collaborate with talented professionals who share your commitment to public service and digital transformation."
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      icon: Shield,
      items: [
        "Comprehensive medical, dental, and vision coverage",
        "Health savings account and flexible spending options",
        "Mental health and wellness support"
      ]
    },
    {
      category: "Financial Security",
      icon: DollarSign,
      items: [
        "Competitive salary and performance bonuses",
        "401(k) matching up to 6% of salary",
        "Life and disability insurance"
      ]
    },
    {
      category: "Professional Development",
      icon: BookOpen,
      items: [
        "Annual learning budget for conferences and training",
        "Certification support and reimbursement",
        "Security clearance sponsorship"
      ]
    },
    {
      category: "Work-Life Balance",
      icon: Clock,
      items: [
        "Flexible PTO policy",
        "11 federal holidays",
        "Parental leave for new parents"
      ]
    },
    {
      category: "Flexibility",
      icon: Laptop,
      items: [
        "Remote-first culture with optional office access",
        "Annual tech stipend for home office setup",
        "Flexible working hours"
      ]
    },
    {
      category: "Additional Perks",
      icon: Heart,
      items: [
        "Annual company retreats and team building events",
        "Professional development conferences and training",
        "Employee recognition and achievement awards"
      ]
    }
  ];

  const hiringProcess = [
    {
      number: "1",
      title: "Application Review",
      description: "We personally review every application - no AI screening."
    },
    {
      number: "2",
      title: "Initial Conversation (30 min)",
      description: "Get to know each other and discuss the role and your background."
    },
    {
      number: "3",
      title: "Technical Interview (60-90 min)",
      description: "Demonstrate your skills through real-world scenarios relevant to the role."
    },
    {
      number: "4",
      title: "Team Interview (45 min)",
      description: "Meet potential colleagues and assess cultural fit."
    },
    {
      number: "5",
      title: "Final Decision",
      description: "We aim to complete our process within 2 weeks and keep you informed throughout."
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-black overflow-x-hidden">
        <Header />
        <div className="pt-[150px] pb-32 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-title mb-4">Application Submitted!</h1>
              <p className="text-description mb-6">
                Thank you for your interest in joining our team. We'll review your application and get back to you within 2 weeks.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      
      {/* Hero Section with Why Work With Us */}
      <section className="relative pt-[150px] pb-20 bg-black overflow-hidden">
        <SectionGlow opacity="8%" position="top-[-300px]" />
        
        <div className="relative max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-title mb-8">
              Join Our Mission
            </h1>
            <p className="text-xl text-description max-w-4xl mx-auto">
              Help us transform how government serves citizens through cutting-edge technology and meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto justify-items-center">
            {whyWorkWithUs.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                    <item.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-1 text-lg">{item.title}</div>
                  <div className="text-gray-300 text-base leading-relaxed max-w-md">{item.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Compensation */}
      <section className="py-20 bg-black relative">
        <SectionBorder />
        
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
              Benefits & Compensation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-modernization-gradient-start to-black backdrop-blur-sm border border-card-border rounded-xl p-8 hover:border-white/10 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full shadow-lg mb-4">
                    <benefit.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-title mb-4">
                    {benefit.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-description text-sm leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-black relative">
        <SectionBorder />
        
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-title mb-4">
              Our Hiring Process
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-2 text-xl">{step.title}</div>
                  <div className="text-gray-300 text-base leading-relaxed">{step.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-black relative overflow-hidden">
        <SectionBorder />
        <SectionGlow opacity="8%" position="top-[-300px]" />
        <div className="max-w-7xl xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to make an impact? We'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-b from-modernization-gradient-start to-black backdrop-blur-sm border border-card-border p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/20 pb-2">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400 placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400 placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                </div>

                {/* Professional Background */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/20 pb-2">Professional Background</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400 placeholder-gray-400"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                        Portfolio/Website URL
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400 placeholder-gray-400"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                      Resume Upload *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
                      />
                      <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                    {selectedFile && (
                      <p className="text-sm text-gray-400 mt-1">Selected: {selectedFile.name}</p>
                    )}
                  </div>
                </div>

                {/* Security Clearance */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/20 pb-2">Security Information</h3>
                  

                  <div>
                    <label htmlFor="clearance" className="block text-sm font-medium text-gray-300 mb-2">
                      Security Clearance Level
                    </label>
                    <select
                      id="clearance"
                      name="clearance"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400"
                    >
                      <option value="">Select clearance level</option>
                      <option value="None">None</option>
                      <option value="Public Trust">Public Trust</option>
                      <option value="Secret">Secret</option>
                      <option value="Top Secret">Top Secret</option>
                      <option value="TS/SCI">TS/SCI</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white border-b border-white/20 pb-2">Additional Information</h3>
                  
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-300 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="hearAbout"
                      name="hearAbout"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400"
                    >
                      <option value="">Select an option</option>
                      <option value="Website">Website</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral">Referral</option>
                      <option value="Job Board">Job Board</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message/Cover Letter
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-lg focus:bg-white/15 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all placeholder-gray-400"
                      placeholder="Tell us about yourself and why you're interested in joining our team..."
                    />
                  </div>
                </div>

                <ValidationError 
                  prefix="Form" 
                  field="form"
                  errors={state.errors}
                  className="text-red-500 text-sm"
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-yellow-500 border border-yellow-500 text-black px-6 py-4 rounded-lg font-semibold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>{state.submitting ? 'Submitting...' : 'Submit Application'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;