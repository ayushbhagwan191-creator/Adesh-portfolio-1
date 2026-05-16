import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@formspree/react';
import * as random from 'maath/random/dist/maath-random.esm';
import { 
  Zap, Crown, Star, Globe, CheckCircle2, 
  ExternalLink, MousePointer2, Award, Mail, Instagram 
} from 'lucide-react';

// --- BACKGROUND ENGINE ---
function BackgroundParticles() {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));
  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#3b82f6" size={0.004} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  const [state, handleSubmit] = useForm("xrejwjzg"); // Connects to your email

  return (
    <div className="bg-background text-white selection:bg-primary/30 font-sans">
      
      {/* 1. ULTRA HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}><BackgroundParticles /></Suspense>
          </Canvas>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080808_100%)]" />

        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 inline-block glass px-4 py-1 rounded-full text-[10px] font-black tracking-[0.4em] text-primary uppercase">
            Adesh Jha • The Enterprise Standard
          </motion.div>
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-8">
            2,000+ SITES.<br/><span className="text-primary">NO LIMITS.</span>
          </motion.h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12">
            8 Years of engineering excellence. Diversified across 30+ industries. Globally recognized.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})} className="px-12 py-5 bg-primary rounded-full font-black electric-glow hover:scale-105 transition-all">VIEW MY WORK</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-12 py-5 glass border border-white/10 rounded-full font-black hover:bg-white/5 transition-all">START PROJECT</button>
          </div>
        </div>
      </section>

      {/* 2. LOGO MARQUEE */}
      <div className="py-12 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale invert">
            {['ELISEAI', 'MERKLE', 'BEVI', 'MSF', 'VRTLY', 'WAGMO'].map(l => (
              <span key={l} className="text-xl font-black italic tracking-tighter">{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. GLOBAL NUMBERS */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { l: "Delivered", v: "2,000+" },
            { l: "Satisfaction", v: "98%" },
            { l: "Experience", v: "8 Yrs" },
            { l: "Industries", v: "30+" }
          ].map((s, i) => (
            <motion.div key={i} {...reveal} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-5xl md:text-7xl font-black text-primary mb-2">{s.v}</div>
              <div className="text-white/20 uppercase tracking-[0.3em] text-[10px] font-bold">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. DIVERSIFIED PORTFOLIO */}
      <section id="work" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-20">Global Showcase</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "FinTech Pro", l: "London, UK", c: "from-blue-600/20" },
              { n: "Luxury Qatar", l: "Doha, QA", c: "from-amber-600/20" },
              { n: "Aura Media", l: "Dubai, UAE", c: "from-purple-600/20" },
              { n: "EduIndia", l: "Bangalore, IN", c: "from-emerald-600/20" },
              { n: "Health NY", l: "New York, US", c: "from-cyan-600/20" },
              { n: "SaaS Ops", l: "Silicon Valley", c: "from-red-600/20" }
            ].map((p, i) => (
              <motion.div key={i} {...reveal} whileHover={{ y: -10 }} className="glass rounded-[2rem] overflow-hidden group">
                <div className={`aspect-square bg-gradient-to-br ${p.c} to-transparent flex items-center justify-center`}>
                  <Zap className="text-white/10 group-hover:text-primary transition-colors" size={60} />
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-black tracking-widest text-primary mb-2 uppercase">{p.l}</div>
                  <h3 className="text-2xl font-bold">{p.n}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE (High-End) */}
      <section className="py-32 container mx-auto px-6 max-w-5xl">
        <div className="glass rounded-[3rem] p-8 md:p-16 border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />
          <h2 className="text-4xl font-black mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">Adesh Jha vs. The Rest</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-white/40">
                  <th className="pb-6">Feature</th>
                  <th className="pb-6 text-primary">Adesh Jha</th>
                  <th className="pb-6">Big Agency</th>
                  <th className="pb-6">Freelancer</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {[
                  ["Experience", "8+ Years / 2k Sites", "Rotating Juniors", "Varies"],
                  ["Timeline", "48hrs - 1 Week", "3 - 6 Months", "Unreliable"],
                  ["Design", "Enterprise Grade", "Template Based", "Static"],
                  ["Communication", "Direct with Adesh", "Account Managers", "Ghosting"]
                ].map(([f, a, ag, fr], i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-6 text-white/50">{f}</td>
                    <td className="py-6 font-bold text-primary">{a}</td>
                    <td className="py-6">{ag}</td>
                    <td className="py-6">{fr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. DUAL EMAIL FORM (CRITICAL) */}
      <section id="contact" className="py-32 container mx-auto px-6 max-w-4xl">
        <div className="glass rounded-[3rem] p-8 md:p-12 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Start Your Build</h2>
            <p className="text-white/40 italic">Adesh replies in under 24 hours.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* DUAL EMAIL LOGIC: Hidden CC field */}
            <input type="hidden" name="_cc" value="fundeal021@gmail.com" />
            <input type="hidden" name="_subject" value="URGENT: New Client Inquiry" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-white/30 tracking-widest">Name</label>
                <input name="name" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-white/30 tracking-widest">Email</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-white/30 tracking-widest">Business</label>
                <input name="business" required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black text-white/30 tracking-widest">Selected Tier</label>
                <select name="tier" className="w-full bg-[#111] border border-white/10 p-4 rounded-xl focus:border-primary outline-none">
                  <option>Basic — $1,200</option>
                  <option selected>Premium — $2,000</option>
                  <option>Elite — $3,500</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-white/30 tracking-widest">Project Vision</label>
              <textarea name="vision" rows={5} required className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:border-primary outline-none transition-all" />
            </div>

            <button type="submit" disabled={state.submitting} className="w-full py-6 bg-primary rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(59,130,246,0.3)]">
              {state.submitting ? "SENDING..." : "SEND INQUIRY →"}
            </button>

            {state.succeeded && (
              <div className="text-center text-primary font-bold animate-bounce">
                Got it! Adesh will reply within 24 hours.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 border-t border-white/5 text-center px-6">
        <p className="text-white/40 italic mb-12 max-w-xl mx-auto">
          "Since 2018 — back when AI was just a word. Real code. Real craft. Real results."
        </p>
        <div className="text-3xl font-black tracking-tighter">AD<span className="text-primary">E</span>SH JHA</div>
        <div className="flex justify-center gap-6 mt-8 text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
          <span>London</span> <span>New York</span> <span>Doha</span> <span>Bangalore</span>
        </div>
      </footer>
    </div>
  );
          }
