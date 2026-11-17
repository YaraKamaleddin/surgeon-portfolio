import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ArrowLeft, PhoneCall, MapPin, FileBadge } from 'lucide-react';

export default function Hero({ profile }) {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-teal-100 shadow-xs px-4 py-1.5 rounded-full text-teal-800 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>الموقع الإلكتروني التعريفي الرسمي • دمشق – سوريا</span>
            </div>

            {}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                {profile.name}
              </h1>
              {}
              <p className="hero-subtitle text-lg sm:text-xl font-bold text-teal-700 leading-relaxed">
                {profile.subtitle}
              </p>
            </div>

            {}
            <div className="bg-white/80 border border-slate-200/80 rounded-2xl p-4 space-y-1" dir="ltr">
              <p className="font-extrabold text-slate-800 text-base sm:text-lg">
                {profile.englishName}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-teal-700">
                {profile.englishSubtitle}
              </p>
              <p className="text-[11px] text-slate-400">
                Research & Database Indexing: {profile.altEnglishNames}
              </p>
            </div>

            {}
            <div className="flex flex-wrap gap-3 pt-1 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                <FileBadge className="w-4 h-4 text-teal-600" />
                <span>ترخيص وزارة الصحة الدائم رقم: {profile.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>دمشق وريفها – سوريا</span>
              </div>
            </div>

            {}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-4 rounded-2xl shadow-lg shadow-teal-600/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>حجز موعد في العيادة</span>
                <ArrowLeft className="w-5 h-5" />
              </a>

              <a
                href={`tel:${profile.displayPhone}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold px-6 py-4 rounded-2xl transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5 text-teal-600" />
                <span dir="ltr">{profile.displayPhone}</span>
              </a>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 bg-gradient-to-tr from-teal-600/20 to-sky-500/20 rounded-3xl rotate-3" />
              <div className="relative rounded-3xl overflow-hidden bg-slate-200 shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src={profile.image}
                  alt={`${profile.name} - ${profile.englishName}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5">
                <div className="bg-teal-100 text-teal-700 p-3 rounded-xl">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900">{profile.experienceYears}</p>
                  <p className="text-xs font-semibold text-slate-500">{profile.experienceLabel}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}