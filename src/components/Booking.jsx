import React, { useState } from 'react';
import { Clock, MapPin, Phone, Send, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Booking({ profile, surgeries }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'فحص واستشارة جراحة أطفال / مسالك بولية',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `مرحباً ${profile.clinicName}، أرغب بحجز موعد:
- *اسم الطفل / ولي الأمر:* ${formData.name}
- *رقم الهاتف:* ${formData.phone}
- *القسم / الاستشارة:* ${formData.service}
- *التاريخ المفضل:* ${formData.date || 'أقرب موعد متاح'}
${formData.notes ? `- *ملاحظات:* ${formData.notes}` : ''}`;

    const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <span className="text-teal-400 font-bold text-sm bg-teal-950 border border-teal-800 px-4 py-1.5 rounded-full inline-block">
                التواصل وحجز المواعيد والروابط الرسمية
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                احجز موعدك في {profile.clinicName}
              </h2>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 text-teal-400 p-3 rounded-xl border border-teal-500/20 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-white">موقع العيادة</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{profile.address}</p>
                  <a
                    href={profile.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 hover:text-teal-300 underline"
                  >
                    <span>فتح موقع العيادة على خرائط جوجل (Google Maps)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 text-teal-400 p-3 rounded-xl border border-teal-500/20 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">أوقات الدوام</h4>
                  <p className="text-slate-300 text-sm mt-1">{profile.workingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-600/20 text-teal-400 p-3 rounded-xl border border-teal-500/20 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">الهاتف والواتساب</h4>
                  <p className="text-slate-300 text-sm mt-1" dir="ltr">{profile.displayPhone}</p>
                </div>
              </div>
            </div>

            {}
            <div className="pt-5 border-t border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">المواقع الرسمية والمؤسسية</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href={profile.amhUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  <span>الموقع الرسمي للمشفى الطبي الأمريكي (AMH)</span>
                </a>
                <a href={profile.springerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  <span>رابط البحث العلمي المنشور في BMC Urology</span>
                </a>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-extrabold mb-6">نموذج حجز موعد عبر واتساب</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">اسم الطفل / ولي الأمر *</label>
                  <input
                    type="text"
                    required
                    placeholder="أدخل الاسم الكامل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">رقم الهاتف / واتساب *</label>
                  <input
                    type="tel"
                    required
                    placeholder="09xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-600 outline-none text-right"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">نوع الاستشارة أو التخصص</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-600 outline-none bg-white"
                  >
                    <option>فحص واستشارة جراحة أطفال / مسالك بولية</option>
                    <option>إيكو الكليتين والجهاز البولي</option>
                    <option>ختان / إجراء بسيط في العيادة</option>
                    <option>استشارة طبيبة أطفال</option>
                    {surgeries && surgeries.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">التاريخ المفضل</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">عمر الطفل وملاحظات الحالة (اختياري)</label>
                <textarea
                  rows="3"
                  placeholder="اذكر عمر الطفل وأي أعراض أو استفسارات..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-600 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/25 transition cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>إرسال طلب الحجز عبر واتساب</span>
              </button>

              {submitted && (
                <p className="flex items-center justify-center gap-2 text-sm text-teal-700 font-semibold pt-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>تم تجهيز رسالة الحجز! يمكنك متابعة الإرسال عبر نافذة واتساب.</span>
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}