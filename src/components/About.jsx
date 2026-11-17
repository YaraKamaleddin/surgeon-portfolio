import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2, Award, HeartPulse } from 'lucide-react';

export default function About({ about, profile }) {
  return (
    <section id="about" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            السيرة الشخصية والمهنية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            عن الدكتور {profile.name}
          </h2>
          <p className="text-slate-600 text-base">
            خبرة سريرية متقدمة في جراحة الأطفال والمسالك البولية والكلى لدى الأطفال في دمشق.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-teal-600" />
                <span>النبذة التعريفية</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-base">
                {about.intro}
              </p>
            </div>

            <div className="bg-teal-50/50 p-6 sm:p-8 rounded-3xl border border-teal-100 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-teal-600" />
                <span>أولاً: جراحة المسالك البولية والكلى عند الأطفال</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {about.urologyFocus}
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <HeartPulse className="w-6 h-6 text-teal-600" />
                <span>ثانياً: جراحة الأطفال العامة وحديثي الولادة</span>
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {about.pediatricFocus}
              </p>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl space-y-5 shadow-xl">
              <h3 className="text-xl font-extrabold text-white">منهجية العمل والرعاية الطبية</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.methodology}
              </p>
              
              <div className="pt-4 border-t border-slate-800 space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>التقييم السريري الدقيق والشامل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>التعاون الطبي متعدد الاختصاصات</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>الأمان الطبي والاطمئنان النفسي للأهل</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}