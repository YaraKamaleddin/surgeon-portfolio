import React from 'react';
import { Building2, MapPin, CheckCircle2 } from 'lucide-react';

export default function Hospitals({ hospitals, intro, selection }) {
  const hospitalList = Array.isArray(hospitals) ? hospitals : [];

  return (
    <section id="hospitals" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm bg-teal-100 px-4 py-1.5 rounded-full inline-block">
            المشافي ومراكز العمل الجراحي
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            نخبة من المشافي والمراكز الطبية في دمشق وريفها
          </h2>
          {intro && (
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-center">
              {intro}
            </p>
          )}
        </div>

        {}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hospitalList.map((hospital, index) => (
            <div 
              key={hospital.id || index} 
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="bg-teal-50 text-teal-700 w-12 h-12 rounded-2xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{hospital.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {hospital.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-teal-700 text-xs font-bold">
                <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>{hospital.location}</span>
              </div>
            </div>
          ))}
        </div>

        {}
        {selection && (
          <div className="bg-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-800/40 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto space-y-3">
              <div className="flex items-center gap-2 text-teal-300 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-400" />
                <span>آلية اختيار المشفى المناسب</span>
              </div>
              <p className="text-teal-50 text-sm sm:text-base leading-relaxed">
                {selection}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}