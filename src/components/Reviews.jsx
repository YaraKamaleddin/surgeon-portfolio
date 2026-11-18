import React, { useState, useEffect } from 'react';
import { Star, MessageSquarePlus, UserCheck, Send } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMsg, setSubmittedMsg] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        author: author.trim(),
        rating: Number(rating),
        text: text.trim(),
        source: 'زائر الموقع الرسمي',
        createdAt: serverTimestamp(),
      });

      setAuthor('');
      setRating(5);
      setText('');
      setSubmittedMsg(true);
      setTimeout(() => setSubmittedMsg(false), 4000);
    } catch (error) {
      console.error('Error adding review:', error);
      alert('حدث خطأ أثناء إرسال التقييم، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-teal-600 font-bold text-sm bg-teal-50 px-4 py-1.5 rounded-full inline-block">
            آراء وتقييمات الزوار
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            تجارب الأهالي والمرضى مع العيادة
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            نعتز بثقة الأهالي ونسعد بمشاركتكم لتجربتكم الطبية بعد زيارة العيادة أو إجراء المتابعة.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="bg-teal-100 text-teal-700 p-2.5 rounded-xl">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">أضف تقييمك وتجربتك</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">الاسم أو الصفة (مثال: والد الطفل كريم)</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="أدخل اسمك..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">التقييم العام</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1.5 rounded-lg hover:bg-amber-50 transition"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">رأيك وتفاصيل التجربة</label>
                <textarea
                  rows="4"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="اكتب ملاحظاتك أو تجربتك مع الدكتور..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'جاري النشر...' : 'نشر التقييم الآن'}</span>
              </button>

              {submittedMsg && (
                <p className="text-xs font-bold text-teal-700 bg-teal-50 p-3 rounded-xl text-center">
                  شكراً لك! تم نشر تقييمك بنجاح وأصبح مرئياً للجميع.
                </p>
              )}
            </form>
          </div>

          {}
          <div className="lg:col-span-7 space-y-4">
            {reviews.length === 0 ? (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-3xl p-12 text-center text-slate-500 text-sm">
                لا توجد تقييمات منشورة بعد. كن أول من يشارك تجربته مع العيادة!
              </div>
            ) : (
              reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/70 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-teal-600 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm">
                        {rev.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{rev.author}</h4>
                        <span className="text-[11px] text-slate-500 flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-teal-600" />
                          {rev.source || 'تقييم موثق'}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-0.5">
                      {Array.from({ length: rev.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">{rev.text}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
}