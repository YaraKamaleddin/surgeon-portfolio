import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, ChevronDown, ChevronUp, ArrowRight, X, CheckCircle, Clock } from 'lucide-react';

export default function Services({ services }) {
  const [openServiceId, setOpenServiceId] = useState(services[0]?.id || 1);
  const [selectedSubService, setSelectedSubService] = useState(null);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            التخصصات والخدمات الطبية الجراحية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            تصفح أقسام الجراحة والخيارات المتاحة
          </h2>
          <p className="text-slate-600 text-base">
            اضغط على أي تخصص رئيسي لاستعراض العمليات والخيارات الفرعية المتاحة داخل العيادة.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => {
            const isOpen = openServiceId === service.id;

            return (
              <div 
                key={service.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-teal-500 shadow-md bg-teal-50/10' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenServiceId(isOpen ? null : service.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      isOpen ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-700'
                    }`}>
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{service.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-slate-100 text-slate-600">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 px-4 sm:px-6 py-4 bg-slate-50/70 space-y-3"
                    >
                      {service.subServices && service.subServices.map((sub, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedSubService(sub)}
                          className="bg-white border border-slate-200/80 p-4 rounded-xl flex items-center justify-between hover:border-teal-500 hover:shadow-sm transition cursor-pointer group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0" />
                            <div>
                              <h4 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-teal-700 transition">
                                {sub.name}
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">{sub.type}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition">
                            <span>التفاصيل والحجز</span>
                            <ArrowRight className="w-3.5 h-3.5 transform rotate-180" />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      <AnimatePresence>
        {selectedSubService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-slate-100"
            >
              <button
                onClick={() => setSelectedSubService(null)}
                className="absolute top-5 left-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 text-teal-700 p-3 rounded-2xl">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs text-teal-600 font-bold block">تفاصيل الإجراء الجراحي</span>
                  <h3 className="text-xl font-extrabold text-slate-900">{selectedSubService.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {selectedSubService.desc || 'يتم تحديد تفاصيل هذا الإجراء بدقة أثناء الاستشارة السريرية المباشرة في العيادة.'}
              </p>

              <div className="flex items-center gap-3 mb-6 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>يتم تحديد خطة العملية والتعافي بدقة خلال الاستشارة السريرية في العيادة.</span>
              </div>

              <a
                href="#booking"
                onClick={() => setSelectedSubService(null)}
                className="w-full block text-center bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-teal-600/25 transition"
              >
                احجز استشارة لهذا الإجراء
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}