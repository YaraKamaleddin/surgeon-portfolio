import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldPlus, Sparkles, UserCheck } from 'lucide-react';

export default function ClinicServices({ clinicServices }) {
  return (
    <section id="clinic-services" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-100 px-4 py-1.5 rounded-full inline-block">
            خدمات العيادة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            التقييم والتشخيص والمتابعة الطبية للأطفال
          </h2>
          <p className="text-slate-600 text-base">
            {clinicServices.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="bg-teal-100 text-teal-700 p-3 rounded-2xl">
                <ShieldPlus className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">الخدمات الطبية في العيادة</h3>
            </div>

            <ul className="space-y-3.5">
              {clinicServices.medicalServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 text-teal-700 p-3 rounded-2xl">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">الإجراءات البسيطة في العيادة</h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-500">
                تُجرى الإجراءات البسيطة التالية بعد التقييم الدقيق للحالة والتأكد من ملاءمتها:
              </p>

              <ul className="space-y-3.5">
                {clinicServices.minorProcedures.map((proc, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{proc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div className="bg-teal-900 text-white p-6 rounded-3xl flex items-center gap-4 shadow-md">
              <div className="bg-teal-800 p-3 rounded-2xl shrink-0">
                <UserCheck className="w-6 h-6 text-teal-300" />
              </div>
              <p className="text-sm font-bold text-teal-100">
                {clinicServices.note}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}