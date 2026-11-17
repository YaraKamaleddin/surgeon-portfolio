import React, { useState } from 'react';
import { Award, GraduationCap, BookOpen, Calendar, ExternalLink, FileCheck2, X } from 'lucide-react';

export default function Credentials({ credentials }) {
  const [selectedCertImage, setSelectedCertImage] = useState(null);

  return (
    <section id="credentials" className="py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm tracking-wider uppercase bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            المؤهلات والاعتمادات الأكاديمية
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            الشهادات والمشاركات العلمية والأبحاث
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 text-white p-3 rounded-2xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">المؤهلات العلمية والترخيص المهني</h3>
            </div>
            <div className="space-y-4">
              {credentials.qualifications.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/70 space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-teal-600 text-white p-3 rounded-2xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">الدورات التدريبية المعتمدة</h3>
            </div>
            <div className="space-y-4">
              {credentials.courses.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/70 space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 mb-12 space-y-5">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 text-teal-700 p-3 rounded-2xl">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900">المشاركات والمؤتمرات العلمية</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3.5">
            {credentials.conferences.map((conf, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/70 flex items-start gap-3 text-sm text-slate-700 font-medium">
                <FileCheck2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span>{conf}</span>
              </div>
            ))}
          </div>
        </div>

        {}
        {credentials.certificateGallery && credentials.certificateGallery.length > 0 && (
          <div className="mb-12 space-y-5">
            <h3 className="text-xl font-extrabold text-slate-900">وثائق الشهادات والاعتمادات الرسمية</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {credentials.certificateGallery.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedCertImage(cert)}
                  className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden cursor-pointer hover:border-teal-600 transition shadow-xs"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  </div>
                  <p className="p-3 text-xs font-bold text-slate-800 text-center truncate">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {}
        <div className="bg-gradient-to-l from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold bg-teal-600/30 text-teal-300 border border-teal-500/30 px-3.5 py-1.5 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span>توثيق علمي منشور • {credentials.publication.journal}</span>
            </span>
            <a
              href={credentials.publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-white transition"
            >
              <span>رابط البحث على منصة Springer / BMC</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <blockquote className="text-base sm:text-lg font-bold text-white bg-white/5 p-4 rounded-2xl border-r-4 border-teal-500" dir="ltr">
            {credentials.publication.paperTitle}
          </blockquote>

          <p className="text-slate-300 text-sm leading-relaxed">
            {credentials.publication.description}
          </p>
        </div>

      </div>

      {}
      {selectedCertImage && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedCertImage(null)}>
          <div className="bg-white rounded-3xl max-w-3xl w-full p-4 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCertImage(null)} className="absolute top-6 left-6 bg-slate-900/70 text-white p-2 rounded-full hover:bg-slate-900">
              <X className="w-5 h-5" />
            </button>
            <img src={selectedCertImage.image} alt={selectedCertImage.title} className="w-full max-h-[75vh] object-contain rounded-2xl" />
            <p className="text-center font-bold text-slate-900 mt-3">{selectedCertImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}