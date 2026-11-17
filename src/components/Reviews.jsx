import React, { useState, useEffect } from 'react';
import { Star, MessageSquareHeart, Send, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('dr_sawas_reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
      {
        id: 1,
        author: 'والد الطفل كريم',
        rating: 5,
        text: 'تعامل راقٍ جداً وشرح مفصل ومطمئن للأهل قبل وبعد العملية. كل الشكر للدكتور محمد ملهم على دقته ومتابعته المستمرة.',
        date: '2026-05-10'
      },
      {
        id: 2,
        author: 'أم زيد',
        rating: 5,
        text: 'من أفضل أطباء جراحة الأطفال والمسالك البولية في دمشق. تشخيص دقيق واهتمام إنساني كبير بالطفل.',
        date: '2026-05-12'
      }
    ];
  });

  const [form, setForm] = useState({
    author: '',
    rating: 5,
    text: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('dr_sawas_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.author || !form.text) return;

    const newReview = {
      id: Date.now(),
      author: form.author,
      rating: Number(form.rating),
      text: form.text,
      date: new Date().toLocaleDateString('ar-SY')
    };

    setReviews([newReview, ...reviews]);
    setForm({ author: '', rating: 5, text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reviews" className="py-28 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="bg-teal-100 text-teal-700 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto">
            <MessageSquareHeart className="w-7 h-7" />
          </div>
          <span className="text-teal-600 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            آراء وتقييمات المراجعين
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            تجربة الأهل وآراؤهم في العيادة
          </h2>
          <p className="text-slate-600 text-sm">
            يمكنك قراءة تجارب المراجعين السابقين، أو ترك تقييمك ورأيك بكل سهولة.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-slate-400">{rev.date}</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">"{rev.text}"</p>
              <p className="font-extrabold text-slate-900 text-xs sm:text-sm pt-2 border-t border-slate-200/60">
                — {rev.author}
              </p>
            </div>
          ))}
        </div>

        {}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl max-w-2xl mx-auto">
          <h3 className="text-xl font-extrabold mb-2 text-center">أضف تقييمك ورأيك في العيادة</h3>
          <p className="text-slate-400 text-xs text-center mb-6">رأيك يساهم في مساعدة العائلات الأخرى ويعزز جودة الخدمة الطبية.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم أو صلة القرابة (مثال: والد الطفل أحمد)*</label>
              <input
                type="text"
                required
                placeholder="اكتب اسمك هنا..."
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:border-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">التقييم بالنجوم</label>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:border-teal-500 outline-none"
              >
                <option value="5">⭐⭐⭐⭐⭐ (ممتاز جداً)</option>
                <option value="4">⭐⭐⭐⭐ (جيد جداً)</option>
                <option value="3">⭐⭐⭐ (جيد)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">رأيك أو تجربتك بالعيادة*</label>
              <textarea
                rows="3"
                required
                placeholder="اكتب تفاصيل تجربتك مع العلاج أو المتابعة..."
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:border-teal-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition cursor-pointer shadow-lg shadow-teal-600/20"
            >
              <Send className="w-4 h-4" />
              <span>نشر التعليق والتقييم</span>
            </button>

            {submitted && (
              <div className="flex items-center justify-center gap-2 text-teal-400 bg-teal-950/60 p-3 rounded-xl text-xs font-bold border border-teal-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>شكراً لك! تم إضافة تعليقك بنجاح وعرضه في الموقع.</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}