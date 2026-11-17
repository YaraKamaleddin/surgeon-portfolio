import React from 'react';
import { Newspaper } from 'lucide-react';

export default function News({ news }) {
  return (
    <section id="news" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-teal-600 font-bold text-sm bg-teal-100 px-4 py-1.5 rounded-full inline-block">
            الأخبار والنشاطات الطبية
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            المستجدات المهنية والتوعية الطبية للأهل
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {news.map((item) => (
            <article key={item.id} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-teal-700 bg-teal-50 px-3 py-1 rounded-lg flex items-center gap-1.5">
                  <Newspaper className="w-3.5 h-3.5" />
                  {item.category}
                </span>
                <span className="text-slate-400">{item.date}</span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}