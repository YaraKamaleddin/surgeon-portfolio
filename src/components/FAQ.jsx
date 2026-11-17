import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full">
            <HelpCircle className="w-4 h-4" />
            <span>إجابات طبية موثوقة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            الأسئلة الشائعة للمرضى
          </h2>
          <p className="text-slate-600">
            إجابات واضحة لأكثر الاستفسارات شيوعاً حول التحضير للعمليات وفترة النقاهة.
          </p>
        </div>

        <div className="space-y-4">
          {faqs && faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-colors duration-300 ${
                  isOpen ? 'border-teal-500 bg-teal-50/20' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right font-bold text-slate-900 text-base sm:text-lg cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}