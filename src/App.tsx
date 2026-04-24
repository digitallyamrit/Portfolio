/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  PlayCircle, 
  Target, 
  Users, 
  Zap, 
  HelpCircle, 
  Menu, 
  X,
  MessageSquare,
  TrendingUp,
  Award,
  Clock,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = '9779763258682';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/80 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-200">
              DA
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Digital <span className="text-indigo-600">Amrit.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToSection('problem')} className="text-sm font-medium text-slate-600 hover:text-indigo-600">The Problem</button>
            <button onClick={() => scrollToSection('solution')} className="text-sm font-medium text-slate-600 hover:text-indigo-600">Our Solution</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-slate-600 hover:text-indigo-600">How It Works</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-slate-600 hover:text-indigo-600">FAQs</button>
            <button 
              onClick={() => openWhatsApp("Hi Amrit! I'm interested in the Digital Marketing Learning System. I want to 'Grab my Seat'. Please share more details.")}
              className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-95"
            >
              Grab your Seat
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white px-4 py-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('problem')} className="text-left text-lg font-medium text-slate-600">The Problem</button>
                <button onClick={() => scrollToSection('solution')} className="text-left text-lg font-medium text-slate-600">Our Solution</button>
                <button onClick={() => scrollToSection('process')} className="text-left text-lg font-medium text-slate-600">How It Works</button>
                <button onClick={() => scrollToSection('faq')} className="text-left text-lg font-medium text-slate-600">FAQs</button>
                <button 
                  onClick={() => scrollToSection('cta')}
                  className="w-full rounded-xl bg-indigo-600 py-4 text-center font-bold text-white"
                >
                  Grab your Seat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute top-0 -z-10 h-full w-full opacity-40">
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-100 blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-pink-100 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 shadow-sm ring-1 ring-indigo-200">
              Specifically for BBA & MBA Students
            </span>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              From <span className="text-indigo-600 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">Confused Student</span> to Earning Digital Marketer in 30–60 Days
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
              A simple, step-by-step system designed for students who want to learn real skills and start earning online — without wasting time on random YouTube videos.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button 
                   onClick={() => openWhatsApp("Hi Amrit! I'm ready to start my journey. I want to 'Grab my Seat' and join the Digital Marketing Learning System.")}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700 hover:shadow-indigo-300 sm:w-auto"
                >
                  Grab your Seat
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-700 shadow-lg shadow-slate-100 transition-all hover:bg-slate-50 sm:w-auto"
              >
                <PlayCircle size={20} />
                How It Works
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 overflow-hidden rounded-3xl border border-white/50 bg-white/30 p-1.5 shadow-2xl backdrop-blur-sm"
          >
             <div className="rounded-2xl bg-slate-900 aspect-video flex items-center justify-center relative overflow-hidden group border border-slate-800">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-business-woman-analyzing-data-on-a-monitor-40081-large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-pink-900/40 mix-blend-overlay pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center gap-4 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <PlayCircle size={48} className="text-white fill-white/20" />
                  </div>
                  <span className="text-sm font-medium text-white/80 uppercase tracking-widest">Experience the System</span>
                </div>
                <div className="absolute top-4 left-4 flex gap-1.5 z-20">
                  <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Hook Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div 
            className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-center text-white shadow-2xl md:py-16"
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(99, 102, 241, 0.5), rgba(79, 70, 229, 0.5)), url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Darker overlay to ensure text legibility while image is visible */}
            <div className="absolute inset-0 bg-slate-900/20 pointer-events-none"></div>
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
             <motion.div
               className="relative z-10 drop-shadow-md"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
             >
                <h2 className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl">If you’ve ever thought…</h2>
                <div className="mx-auto mb-10 flex flex-col gap-4 text-left md:max-w-2xl">
                    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                      <MessageSquare className="mt-1 shrink-0 text-pink-300" />
                      <p className="text-lg font-medium">“Digital marketing kasari sikne?”</p>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                      <MessageSquare className="mt-1 shrink-0 text-pink-300" />
                      <p className="text-lg font-medium">“Skill ta sikey… tara kaam kasari start garne?”</p>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                      <MessageSquare className="mt-1 shrink-0 text-pink-300" />
                      <p className="text-lg font-medium">“Sabai le earning garira chan… ma chai kina pachi chu?”</p>
                    </div>
                </div>
                <div className="mt-8">
                  <p className="text-2xl font-bold text-pink-300 uppercase tracking-wide">Then this is for you.</p>
                  <p className="mt-4 text-xl opacity-90">Because right now, you’re not lacking effort… <span className="font-bold border-b-2 border-white/30">You’re lacking clarity and direction.</span></p>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Let’s be honest…</h2>
            <p className="text-xl text-slate-600">You’ve already tried the random way.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              {[
                { text: "Watching YouTube tutorials that leave you more confused", icon: <XCircle className="text-red-500" /> },
                { text: "Taking free or cheap courses with no real practical value", icon: <XCircle className="text-red-500" /> },
                { text: "Following random “gurus” on Instagram sharing fake results", icon: <XCircle className="text-red-500" /> },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  {item.icon}
                  <span className="text-lg font-medium text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-3xl border border-pink-100 bg-pink-50/50 p-8 md:p-12">
              <h3 className="mb-8 text-2xl font-bold text-slate-900">And still…</h3>
              <ul className="space-y-4">
                {[
                  "You don’t know where to start",
                  "You can’t implement anything properly",
                  "You don’t feel confident in your skills",
                  "You still haven’t earned anything",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-lg text-slate-600 font-medium">
                    <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-pink-100">
                <p className="text-xl font-bold text-slate-900 italic">“Time waste bhaira cha jasto lagcha”</p>
                <p className="mt-2 text-slate-500">— Every stuck student ever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section id="solution" className="overflow-hidden bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-pink-500/20 blur-[100px]" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                  <h2 className="mb-6 text-3xl font-bold md:text-5xl">What you actually need is not “more content”…</h2>
                  <div className="mx-auto mb-12 max-w-3xl rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-800 p-8 shadow-2xl shadow-indigo-900/20">
                    <p className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:text-5xl">
                      You need a clear, step-by-step <span className="text-pink-300">SYSTEM</span>
                    </p>
                  </div>
                  <p className="text-2xl font-bold opacity-80 decoration-indigo-500 underline-offset-8">
                    Confused student → Skilled & earning digital marketer
                  </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="font-bold text-indigo-600 uppercase tracking-widest text-sm mb-4 block">The Roadmap</span>
            <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">How It Works</h2>
            <p className="mt-4 text-xl text-slate-600">Simple, Clear, and Executor-Focused</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "Step 1",
                title: "Learn the Right Skills",
                desc: "No theory overload. Only practical, real-world digital marketing that actually matters.",
                icon: <Target className="text-indigo-600" size={32} />
              },
              {
                step: "Step 2",
                title: "Follow a Clear Roadmap",
                desc: "You don’t have to guess what to do next. Everything is structured step-by-step.",
                icon: <TrendingUp className="text-indigo-600" size={32} />
              },
              {
                step: "Step 3",
                title: "Apply With Guidance",
                desc: "You won’t just watch videos. You’ll actually implement with direct support and feedback.",
                icon: <Users className="text-indigo-600" size={32} />
              },
              {
                step: "Step 4",
                title: "Move Towards Earning",
                desc: "From learning to practicing, building confidence and getting your first opportunity.",
                icon: <Award className="text-indigo-600" size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-slate-100 bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  {item.icon}
                </div>
                <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-indigo-600">{item.step}</span>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8">What You’ll Achieve</h2>
                <div className="space-y-4">
                  {[
                    "Finally understand digital marketing clearly",
                    "Know exactly what to do and how to do it",
                    "Stop feeling lost and confused",
                    "Build real skills, not just theory",
                    "Move closer to earning online"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-xl font-medium text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 rounded-3xl bg-indigo-600 p-8 text-white shadow-xl">
                    <p className="text-2xl font-bold italic">“Yes, I can actually do this”</p>
                    <p className="mt-2 text-indigo-200">That's the feeling you'll have within days.</p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-200 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-10 w-[85%] border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 font-mono text-center tracking-tighter">THE SYSTEM</h3>
                        <div className="space-y-4">
                           <div className="h-4 bg-slate-100 rounded-full w-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }} 
                                whileInView={{ width: '85%' }} 
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-indigo-500" 
                              />
                           </div>
                           <div className="flex justify-between text-xs font-bold text-slate-400">
                              <span>LEARNING</span>
                              <span>EARNING</span>
                           </div>
                           <div className="grid grid-cols-2 gap-4 mt-8">
                              <div className="bg-slate-50 p-4 rounded-xl text-center">
                                 <p className="text-2xl font-bold text-indigo-600">60</p>
                                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Days Max</p>
                              </div>
                              <div className="bg-slate-50 p-4 rounded-xl text-center">
                                 <p className="text-2xl font-bold text-indigo-600">100%</p>
                                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Practical</p>
                              </div>
                           </div>
                        </div>
                    </div>
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute -top-4 right-10 bg-pink-500 p-3 rounded-2xl shadow-lg text-white"><TrendingUp size={24} /></motion.div>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} className="absolute bottom-10 -left-4 bg-amber-500 p-3 rounded-2xl shadow-lg text-white"><Zap size={24} /></motion.div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="rounded-[3rem] bg-slate-900 p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Target size={300} />
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                 {/* Column 1: The List */}
                 <div>
                    <h2 className="text-white text-4xl font-extrabold mb-8 italic tracking-tight">What’s Included</h2>
                    <ul className="space-y-6">
                      {[
                        "Step-by-step digital marketing training",
                        "Beginner-friendly structured roadmap",
                        "Practical learning approach (not just theory)",
                        "Guidance to help you implement",
                        "Clear direction from start to finish"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-300 text-xl group">
                          <div className="flex h-8 w-8 mt-1 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                            <CheckCircle2 size={20} />
                          </div>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 {/* Column 2: The Bonuses */}
                 <div className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors"></div>
                    
                    <h3 className="text-pink-300 font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-2">
                      <Award size={16} />
                      Exclusive Bonuses
                    </h3>
                    <div className="space-y-8">
                      {[
                        { title: "Extra clarity on “where to start”", desc: "No more decision paralysis." },
                        { title: "Support to reduce confusion", desc: "Get unstuck within minutes." },
                        { title: "Simple approach for students", desc: "Jargon-free learning for BBA/MBA." }
                      ].map((bonus, i) => (
                        <div key={i} className="flex gap-4 relative z-10">
                           <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-pink-500/20 text-pink-300 shrink-0 shadow-lg shadow-pink-500/10">
                              <Zap size={20} />
                           </div>
                           <div>
                              <h4 className="text-white font-bold leading-none mb-2">{bonus.title}</h4>
                              <p className="text-slate-400 text-sm leading-snug">{bonus.desc}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-slate-500 italic text-xs tracking-tight">Personalized support designed to make you move fast.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Strategic Call Section */}
      <section className="bg-indigo-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl font-black text-white mb-2 italic">Need a specialized roadmap?</h2>
                <p className="text-indigo-100 text-lg opacity-90 leading-relaxed font-medium">Book a 1-on-1 Strategic Call to discuss your specific career goals and how this system can work for you.</p>
              </div>
              <button 
                onClick={() => openWhatsApp("Hi Amrit! I'd like to book a 1-on-1 strategic call regarding digital marketing.")}
                className="group flex items-center gap-4 rounded-full bg-pink-400 px-10 py-5 text-xl font-black text-white shadow-2xl transition-all hover:bg-pink-500 hover:-translate-y-1 active:scale-95 ring-4 ring-pink-300/30"
              >
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                  <PhoneCall className="animate-bounce" size={24} />
                </div>
                Book Your Strategic Call
              </button>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl text-center">Let’s Address Your Doubts</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Course liyesi kaam lagcha ki lagdaina?", a: "This is designed to be practical, not theoretical. You won't just 'know' things, you'll be able to 'do' things that the market pays for." },
              { q: "Ma beginner ho, garna sakchu?", a: "This is built specifically for beginners. We start from ground zero and build up step-by-step." },
              { q: "Time manage garna sakchu?", a: "The system is simple and structured. You don't need 10 hours a day. Just 1-2 hours of focused work is enough." },
              { q: "Paisa worth huncha?", a: "If clarity, direction, and building a real skill for your future matter to you — absolutely." },
              { q: "Yo scam ta haina?", a: "No fake promises of 'millions overnight'. This is a training system to help you build real skills and move forward properly." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <div className="p-6">
                   <h3 className="flex items-center gap-3 text-lg font-bold text-slate-900">
                     <HelpCircle size={20} className="text-indigo-600" />
                     {faq.q}
                   </h3>
                   <div className="mt-4 flex items-start gap-3 rounded-xl bg-slate-50 p-4 border-l-4 border-indigo-500">
                      <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl mx-auto text-center">
              <div className="mb-8 inline-flex items-center justify-center h-20 w-20 rounded-full bg-slate-900 text-white shadow-2xl">
                 <Award size={40} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">No Pressure. No Fake Promises.</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                You’re not being promised overnight success. This is for students who are serious about: 
                <span className="font-bold text-indigo-600"> Learning properly, Taking action, and Building real skills.</span>
              </p>
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm shadow-xl shadow-pink-100">
                 Limited Spots for Personal Guidance
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div 
             className="relative rounded-[3rem] bg-slate-900 p-12 md:p-24 text-center text-white shadow-2xl shadow-indigo-200 overflow-hidden"
             style={{ 
               backgroundImage: 'linear-gradient(to bottom, rgba(79, 70, 229, 0.8), rgba(30, 41, 59, 0.95)), url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop")',
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}
           >
              {/* Fog/Mist effect overlay to match the second image style */}
              <div className="absolute inset-0 opacity-40 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold md:text-6xl mb-8 leading-tight tracking-tighter">If you’re tired of <span className="text-pink-300">feeling lost...</span></h2>
                <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">Click below to get clear direction and start your digital marketing journey today.</p>
                <div className="flex flex-col items-center gap-6">
                  <button 
                    onClick={() => openWhatsApp("I'm tired of feeling lost! I want to start my digital marketing journey now. Let's talk!")}
                    className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-12 py-6 text-xl font-black text-indigo-600 shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
                  >
                    <span className="relative z-10 uppercase tracking-widest">Start Your Journey Now</span>
                    <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                  <div className="flex items-center gap-6 mt-4">
                     <div className="flex -space-x-4">
                        {[1,2,3,4].map(i => (
                          <img 
                            key={i} 
                            src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                            className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-200 shadow-md"
                            alt="Student"
                          />
                        ))}
                     </div>
                     <span className="text-sm font-bold tracking-tight text-indigo-100">Join 500+ Nepalese Students</span>
                  </div>
                </div>
              </div>
           </div>

           <div className="mt-32 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-center items-stretch">
              <div className="p-8 rounded-3xl border border-slate-100 bg-white flex flex-col justify-between">
                 <div>
                    <h3 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-widest italic">Choice A</h3>
                    <p className="text-2xl font-bold text-slate-900 mb-4">Stay Confused</p>
                    <p className="text-slate-500 mb-8">Keep watching random videos, guessing what works, and staying exactly where you are today.</p>
                 </div>
                 <div className="flex justify-center text-slate-300">
                    <XCircle size={40} />
                 </div>
              </div>
              <div className="p-8 rounded-3xl border-2 border-indigo-100 bg-indigo-50/30 flex flex-col justify-between relative shadow-xl shadow-indigo-50">
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Correct Choice</div>
                 <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-6 uppercase tracking-widest italic tracking-tight">Choice B</h3>
                    <p className="text-2xl font-bold text-indigo-600 mb-4">Follow a System</p>
                    <p className="text-slate-700 font-medium mb-8">Get the roadmap, the support, and the clarity you need to move forward fast.</p>
                 </div>
                 <div className="flex justify-center text-indigo-600 font-bold text-xl uppercase italic">
                    The Difference is Direction
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white shadow-md">
                  DA
                </div>
                <span className="text-lg font-bold tracking-tight text-slate-900">
                  Digital <span className="text-indigo-600">Amrit.</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">© 2024 Digital Amrit Learning System. Built for Action Takers.</p>
              <div className="flex gap-6">
                 <a href="#" className="text-slate-400 hover:text-indigo-600"><Clock size={20} /></a>
                 <a href="#" className="text-slate-400 hover:text-indigo-600"><HelpCircle size={20} /></a>
              </div>
           </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp("Hi Amrit! I have some questions about the Digital Marketing Learning System.")}
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:bg-green-600 hover:scale-110 active:scale-95 md:h-16 md:w-16 ring-4 ring-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={32} />
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-bounce shadow-lg">1</span>
      </button>
    </div>
  );
}
