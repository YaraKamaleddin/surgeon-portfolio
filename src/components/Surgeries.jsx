import React from 'react';
import { Scissors, Stethoscope, AlertCircle } from 'lucide-react';

export default function Surgeries({ surgeries, surgeryNotes }) {
  return (
    <section id="surgeries" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            العمليات والتداخلات الجراحية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            مكتسبات الخبرة السريرية والجراحية للأطفال
          </h2>
          <p className="text-slate-600 text-base">
            تُحدد الخطة العلاجية والتقنية الجراحية المناسبة بدقة بناءً على عمر الطفل وتشخيص الحالة. اضغط على أي قسم لاستعراض العمليات بالتفصيل.
          </p>
        </div>

        {}
        <div className="space-y-4">
          {surgeries.map((category) => (
            <details
              key={category.id}
              className="group border border-slate-200 rounded-2xl bg-white hover:border-teal-500 transition-all duration-300 overflow-hidden open:border-teal-600 open:shadow-md open:bg-teal-50/10"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer font-bold text-slate-900 text-lg select-none">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-teal-100 text-teal-700 group-open:bg-teal-600 group-open:text-white transition-colors">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <span>{category.title}</span>
                </div>
                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full group-open:bg-teal-600 group-open:text-white transition-colors">
                  {category.items.length} إجراء
                </span>
              </summary>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60">
                <ul className="grid sm:grid-cols-2 gap-3 pt-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-slate-700 text-sm font-medium flex items-start gap-2.5 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        {}
        <div className="mt-12 space-y-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
          <div className="flex items-start gap-3">
            <Stethoscope className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 text-base mb-1">التقنيات الجراحية المعتمدة</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{surgeryNotes.techniques}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-4 border-t border-slate-200/80">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-900 text-base mb-1">تنويه توضيحي</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{surgeryNotes.disclaimer}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}