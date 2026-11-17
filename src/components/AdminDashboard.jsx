
// import React, { useState } from 'react';
// import { Lock, Save, CheckCircle, ShieldCheck, User, Scissors, Award, Newspaper, Building2, HelpCircle, Plus, Trash2, Upload, RotateCcw, ExternalLink } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function AdminDashboard({ siteData, setSiteData, resetData }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState('');
//   const [activeTab, setActiveTab] = useState('profile');
//   const [formData, setFormData] = useState(siteData);
//   const [saved, setSaved] = useState(false);

//   const ADMIN_PASSWORD = 'doctor123';

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//       setFormData(siteData);
//     } else {
//       alert('كلمة المرور غير صحيحة!');
//     }
//   };

//   const handleSave = () => {
//     setSiteData(formData);
//     setSaved(true);
//     setTimeout(() => setSaved(false), 3000);
//   };

//   const handleDoctorImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           profile: { ...formData.profile, image: reader.result },
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleCertificateUpload = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({
//           ...prev,
//           credentials: {
//             ...prev.credentials,
//             certificateGallery: [
//               ...(prev.credentials.certificateGallery || []),
//               { title: file.name.replace(/\.[^/.]+$/, ''), image: reader.result },
//             ],
//           },
//         }));
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4" dir="rtl">
//         <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
//           <div className="text-center mb-6">
//             <div className="bg-teal-100 text-teal-700 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3">
//               <Lock className="w-7 h-7" />
//             </div>
//             <h2 className="text-2xl font-extrabold text-slate-900">بوابة إدارة الموقع الرسمي</h2>
//             <p className="text-sm text-slate-500 mt-1">الدكتور محمد ملهم نوري سواس</p>
//           </div>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="password"
//               placeholder="أدخل كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none text-center font-bold tracking-widest"
//               required
//             />
//             <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-xl transition cursor-pointer">
//               دخول للوحة التحكم
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6" dir="rtl">
//       <div className="max-w-5xl mx-auto space-y-6">
        
//         {}
//         <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <div className="bg-teal-600 text-white p-3 rounded-2xl">
//               <ShieldCheck className="w-6 h-6" />
//             </div>
//             <div>
//               <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">لوحة التحكم الشاملة</h1>
//               <p className="text-xs text-slate-500 font-semibold">تعديل كافة الأقسام والصور والشهادات والمشافي</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <Link to="/" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl transition">
//               <ExternalLink className="w-4 h-4" />
//               <span>معاينة الموقع</span>
//             </Link>
//             <button onClick={handleSave} className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition cursor-pointer">
//               <Save className="w-4 h-4" />
//               <span>حفظ ونشر التعديلات</span>
//             </button>
//           </div>
//         </div>

//         {saved && (
//           <div className="bg-teal-600 text-white px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg">
//             <CheckCircle className="w-5 h-5" />
//             <span>تم حفظ جميع التعديلات وتحديث الموقع بنجاح!</span>
//           </div>
//         )}

//         {}
//         <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
//           {[
//             { id: 'profile', label: 'العيادة والصورة', icon: User },
//             { id: 'surgeries', label: 'العمليات الجراحية', icon: Scissors },
//             { id: 'certificates', label: 'الشهادات الـ 13', icon: Award },
//             { id: 'hospitals', label: 'المشافي المعتمدة', icon: Building2 },
//             { id: 'news', label: 'الأخبار والنشاطات', icon: Newspaper },
//             { id: 'faqs', label: 'الأسئلة الشائعة', icon: HelpCircle },
//           ].map((tab) => {
//             const Icon = tab.icon;
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl font-bold text-xs transition cursor-pointer ${
//                   activeTab === tab.id ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60'
//                 }`}
//               >
//                 <Icon className="w-4 h-4 text-teal-500" />
//                 <span>{tab.label}</span>
//               </button>
//             );
//           })}
//         </div>

//         {}
//         <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/60">
          
//           {}
//           {activeTab === 'profile' && (
//             <div className="space-y-6">
//               <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
//                 <img src={formData.profile?.image || ''} alt="صورة الطبيب" className="w-24 h-28 object-cover rounded-2xl border-2 border-teal-600" />
//                 <div className="space-y-2 text-center sm:text-right">
//                   <label className="block font-bold text-slate-800 text-sm">الصورة الشخصية للطبيب</label>
//                   <label className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-teal-600 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition">
//                     <Upload className="w-4 h-4 text-teal-600" />
//                     <span>رفع صورة الدكتور من الجهاز</span>
//                     <input type="file" accept="image/*" onChange={handleDoctorImageUpload} className="hidden" />
//                   </label>
//                 </div>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">الاسم الرسمي (H1)</label>
//                   <input type="text" value={formData.profile?.name || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, name: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">السطر الفرعي للتخصص (Subtitle)</label>
//                   <input type="text" value={formData.profile?.subtitle || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, subtitle: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">رقم الواتساب (بدون +)</label>
//                   <input type="text" value={formData.profile?.whatsapp || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, whatsapp: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-left" dir="ltr" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف المعروض</label>
//                   <input type="text" value={formData.profile?.displayPhone || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, displayPhone: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-left" dir="ltr" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">رابط خرائط جوجل (Google Maps)</label>
//                   <input type="text" value={formData.profile?.googleMapsUrl || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, googleMapsUrl: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-left" dir="ltr" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 mb-1">أوقات الدوام</label>
//                   <input type="text" value={formData.profile?.workingHours || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, workingHours: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-700 mb-1">عنوان العيادة التفصيلي</label>
//                 <input type="text" value={formData.profile?.address || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, address: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm" />
//               </div>
//             </div>
//           )}

//           {}
//           {activeTab === 'surgeries' && (
//             <div className="space-y-6">
//               <div className="flex justify-between items-center border-b pb-3">
//                 <h3 className="text-lg font-extrabold text-slate-900">أقسام العمليات الجراحية</h3>
//                 <button
//                   onClick={() => setFormData({ ...formData, surgeries: [...(formData.surgeries || []), { id: Date.now().toString(), title: 'قسم جراحي جديد', items: ['إجراء جراحي جديد'] }] })}
//                   className="inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer"
//                 >
//                   <Plus className="w-4 h-4" /> إضافة قسم
//                 </button>
//               </div>
//               {(formData.surgeries || []).map((cat, cIdx) => (
//                 <div key={cat.id || cIdx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
//                   <div className="flex gap-2">
//                     <input type="text" value={cat.title || ''} onChange={(e) => { const u = [...formData.surgeries]; u[cIdx].title = e.target.value; setFormData({ ...formData, surgeries: u }); }} className="flex-1 px-3 py-2 rounded-xl border bg-white font-bold text-sm" />
//                     <button onClick={() => setFormData({ ...formData, surgeries: formData.surgeries.filter((_, i) => i !== cIdx) })} className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-4 h-4" /></button>
//                   </div>
//                   <div className="pr-4 border-r-2 border-teal-500 space-y-2">
//                     {(cat.items || []).map((item, iIdx) => (
//                       <div key={iIdx} className="flex gap-2">
//                         <input type="text" value={item || ''} onChange={(e) => { const u = [...formData.surgeries]; u[cIdx].items[iIdx] = e.target.value; setFormData({ ...formData, surgeries: u }); }} className="flex-1 px-3 py-1.5 rounded-lg border bg-white text-xs" />
//                         <button onClick={() => { const u = [...formData.surgeries]; u[cIdx].items = u[cIdx].items.filter((_, i) => i !== iIdx); setFormData({ ...formData, surgeries: u }); }} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
//                       </div>
//                     ))}
//                     <button onClick={() => { const u = [...formData.surgeries]; if(!u[cIdx].items) u[cIdx].items = []; u[cIdx].items.push('عملية جديدة'); setFormData({ ...formData, surgeries: u }); }} className="text-xs font-bold text-teal-600 hover:underline">+ إضافة عملية</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {}
//           {activeTab === 'certificates' && (
//             <div className="space-y-6">
//               <div className="flex flex-wrap justify-between items-center gap-3 border-b pb-4">
//                 <div>
//                   <h3 className="text-lg font-extrabold text-slate-900">معرض صور الشهادات والوثائق الرسمية</h3>
//                   <p className="text-xs text-slate-500">يمكنك تحديد ورفع جميع صور الشهادات الـ 13 دفعة واحدة</p>
//                 </div>
//                 <label className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl cursor-pointer transition">
//                   <Upload className="w-4 h-4" />
//                   <span>رفع صور الشهادات (متعدد)</span>
//                   <input type="file" accept="image/*" multiple onChange={handleCertificateUpload} className="hidden" />
//                 </label>
//               </div>

//               <div className="grid sm:grid-cols-3 gap-4">
//                 {(formData.credentials?.certificateGallery || []).map((cert, idx) => (
//                   <div key={idx} className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2 relative">
//                     <button
//                       onClick={() => {
//                         const updated = formData.credentials.certificateGallery.filter((_, i) => i !== idx);
//                         setFormData({ ...formData, credentials: { ...formData.credentials, certificateGallery: updated } });
//                       }}
//                       className="absolute top-4 left-4 bg-red-600 text-white p-1.5 rounded-lg shadow cursor-pointer"
//                     >
//                       <Trash2 className="w-3.5 h-3.5" />
//                     </button>
//                     <img src={cert.image} alt={cert.title} className="w-full h-36 object-cover rounded-xl" />
//                     <input
//                       type="text"
//                       value={cert.title || ''}
//                       onChange={(e) => {
//                         const updated = [...formData.credentials.certificateGallery];
//                         updated[idx].title = e.target.value;
//                         setFormData({ ...formData, credentials: { ...formData.credentials, certificateGallery: updated } });
//                       }}
//                       className="w-full px-2.5 py-1.5 rounded-lg border bg-white text-xs font-bold"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {}
//           {activeTab === 'hospitals' && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center border-b pb-3">
//                 <h3 className="text-lg font-extrabold text-slate-900">إدارة المشافي المعتمدة</h3>
//                 <button
//                   onClick={() => setFormData({ ...formData, hospitals: [{ id: Date.now(), name: 'اسم المشفى الجديد', location: 'المنطقة / دمشق', description: 'وصف العمليات أو القسم...' }, ...(Array.isArray(formData.hospitals) ? formData.hospitals : [])] })}
//                   className="inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl cursor-pointer"
//                 >
//                   <Plus className="w-4 h-4" /> إضافة مشفى
//                 </button>
//               </div>
//               {(Array.isArray(formData.hospitals) ? formData.hospitals : []).map((hosp, idx) => (
//                 <div key={hosp.id || idx} className="bg-slate-50 p-4 rounded-2xl border space-y-3 relative">
//                   <button onClick={() => { const list = Array.isArray(formData.hospitals) ? formData.hospitals : []; setFormData({ ...formData, hospitals: list.filter((_, i) => i !== idx) }); }} className="absolute top-3 left-3 text-red-500 hover:bg-red-50 p-1.5 rounded-lg"><Trash2 className="w-4 h-4" /></button>
//                   <div className="grid sm:grid-cols-2 gap-3 pl-8">
//                     <div>
//                       <label className="block text-[11px] font-bold text-slate-500 mb-1">اسم المشفى</label>
//                       <input type="text" value={hosp.name || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].name = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-xl border bg-white text-xs font-bold" />
//                     </div>
//                     <div>
//                       <label className="block text-[11px] font-bold text-slate-500 mb-1">المنطقة أو العنوان</label>
//                       <input type="text" value={hosp.location || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].location = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-xl border bg-white text-xs" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-[11px] font-bold text-slate-500 mb-1">وصف العمليات / التفاصيل</label>
//                     <textarea rows="2" value={hosp.description || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].description = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-xl border bg-white text-xs" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {}
//           {activeTab === 'news' && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center border-b pb-3">
//                 <h3 className="text-lg font-extrabold text-slate-900">الأخبار والنشاطات الطبية</h3>
//                 <button onClick={() => setFormData({ ...formData, news: [{ id: Date.now(), date: '2026', category: 'توعية طبية', title: 'عنوان الخبر أو المقال', summary: 'تفاصيل الخبر...' }, ...(formData.news || [])] })} className="inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl"><Plus className="w-4 h-4" /> إضافة خبر</button>
//               </div>
//               {(formData.news || []).map((item, idx) => (
//                 <div key={item.id || idx} className="bg-slate-50 p-4 rounded-2xl border space-y-2 relative">
//                   <button onClick={() => setFormData({ ...formData, news: formData.news.filter((_, i) => i !== idx) })} className="absolute top-3 left-3 text-red-500"><Trash2 className="w-4 h-4" /></button>
//                   <div className="grid sm:grid-cols-2 gap-2 pl-8">
//                     <input type="text" value={item.title || ''} onChange={(e) => { const u = [...formData.news]; u[idx].title = e.target.value; setFormData({ ...formData, news: u }); }} className="px-3 py-1.5 rounded-lg border bg-white text-xs font-bold" />
//                     <input type="text" value={item.category || ''} onChange={(e) => { const u = [...formData.news]; u[idx].category = e.target.value; setFormData({ ...formData, news: u }); }} className="px-3 py-1.5 rounded-lg border bg-white text-xs" />
//                   </div>
//                   <textarea rows="2" value={item.summary || ''} onChange={(e) => { const u = [...formData.news]; u[idx].summary = e.target.value; setFormData({ ...formData, news: u }); }} className="w-full px-3 py-1.5 rounded-lg border bg-white text-xs" />
//                 </div>
//               ))}
//             </div>
//           )}

//           {}
//           {activeTab === 'faqs' && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center border-b pb-3">
//                 <h3 className="text-lg font-extrabold text-slate-900">الأسئلة الشائعة</h3>
//                 <button onClick={() => setFormData({ ...formData, faqs: [...(formData.faqs || []), { question: 'سؤال جديد؟', answer: 'الإجابة...' }] })} className="inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl"><Plus className="w-4 h-4" /> إضافة سؤال</button>
//               </div>
//               {(formData.faqs || []).map((faq, idx) => (
//                 <div key={idx} className="bg-slate-50 p-4 rounded-2xl border space-y-2 relative">
//                   <button onClick={() => setFormData({ ...formData, faqs: formData.faqs.filter((_, i) => i !== idx) })} className="absolute top-3 left-3 text-red-500"><Trash2 className="w-4 h-4" /></button>
//                   <input type="text" value={faq.question || ''} onChange={(e) => { const u = [...formData.faqs]; u[idx].question = e.target.value; setFormData({ ...formData, faqs: u }); }} className="w-full pl-8 px-3 py-1.5 rounded-lg border bg-white text-xs font-bold" />
//                   <textarea rows="2" value={faq.answer || ''} onChange={(e) => { const u = [...formData.faqs]; u[idx].answer = e.target.value; setFormData({ ...formData, faqs: u }); }} className="w-full px-3 py-1.5 rounded-lg border bg-white text-xs" />
//                 </div>
//               ))}
//             </div>
//           )}

//         </div>

//         <div className="flex justify-between items-center">
//           <button onClick={() => { if (window.confirm('هل تريد مسح البيانات القديمة المخزنة مؤقتاً ومزامنة التحديثات الجديدة؟')) { localStorage.removeItem('dr_sawas_site_data'); window.location.reload(); } }} className="inline-flex items-center gap-1.5 text-xs text-teal-600 hover:text-teal-800 font-semibold cursor-pointer">
//             <span>تحديث وتصفير الذاكرة المحلية (LocalStorage)</span>
//           </button>

//           <button onClick={() => { if (window.confirm('هل أنت متأكد من استعادة البيانات الافتراضية؟')) { resetData(); window.location.reload(); } }} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-600 font-semibold cursor-pointer">
//             <RotateCcw className="w-3.5 h-3.5" />
//             <span>استعادة البيانات الأصلية</span>
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }




import React, { useState } from 'react';
import { Lock, Save, CheckCircle, ShieldCheck, User, Scissors, Award, Newspaper, Building2, HelpCircle, Plus, Trash2, Upload, RotateCcw, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdminDashboard({ siteData, setSiteData, resetData }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState(siteData);
  const [saved, setSaved] = useState(false);

  const ADMIN_PASSWORD = 'doctor123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setFormData(siteData);
    } else {
      alert('كلمة المرور غير صحيحة!');
    }
  };

  const handleSave = () => {
    setSiteData(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDoctorImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profile: { ...formData.profile, image: reader.result },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertificateUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          credentials: {
            ...prev.credentials,
            certificateGallery: [
              ...(prev.credentials.certificateGallery || []),
              { title: file.name.replace(/\.[^/.]+$/, ''), image: reader.result },
            ],
          },
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-2xl p-8 sm:p-10 max-w-md w-full shadow-2xl ring-1 ring-white/10">
          <div className="text-center mb-8">
            <div className="bg-teal-50 text-teal-700 ring-1 ring-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">بوابة إدارة الموقع الرسمي</h2>
            <p className="text-sm text-slate-500 mt-1.5">الدكتور محمد ملهم نوري سواس</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-400 placeholder:tracking-normal placeholder:font-normal focus:bg-white focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none text-center font-semibold tracking-widest transition"
              required
            />
            <button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-semibold py-3 rounded-lg shadow-sm transition cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/30">
              دخول للوحة التحكم
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-10 px-4 sm:px-6" dir="rtl">
      <div className="max-w-5xl mx-auto space-y-5">
        
        {}
        <div className="bg-white rounded-2xl px-5 sm:px-6 py-5 shadow-sm ring-1 ring-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="bg-teal-700 text-white p-3 rounded-xl shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">لوحة التحكم الشاملة</h1>
              <p className="text-xs text-slate-500 font-medium mt-0.5">تعديل كافة الأقسام والصور والشهادات والمشافي</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link to="/" target="_blank" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-50 text-slate-700 ring-1 ring-slate-300 px-4 py-2.5 rounded-lg transition">
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span>معاينة الموقع</span>
            </Link>
            <button onClick={handleSave} className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-600/30">
              <Save className="w-4 h-4" />
              <span>حفظ ونشر التعديلات</span>
            </button>
          </div>
        </div>

        {saved && (
          <div className="bg-teal-50 text-teal-800 ring-1 ring-teal-200 px-5 py-3.5 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm shadow-sm">
            <CheckCircle className="w-5 h-5 text-teal-600" />
            <span>تم حفظ جميع التعديلات وتحديث الموقع بنجاح!</span>
          </div>
        )}

        {}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 bg-white p-2 rounded-2xl shadow-sm ring-1 ring-slate-200">
          {[
            { id: 'profile', label: 'العيادة والصورة', icon: User },
            { id: 'surgeries', label: 'العمليات الجراحية', icon: Scissors },
            { id: 'certificates', label: 'الشهادات الـ 13', icon: Award },
            { id: 'hospitals', label: 'المشافي المعتمدة', icon: Building2 },
            { id: 'news', label: 'الأخبار والنشاطات', icon: Newspaper },
            { id: 'faqs', label: 'الأسئلة الشائعة', icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 rounded-xl font-semibold text-xs transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 ${
                  activeTab === tab.id ? 'bg-teal-50 text-teal-800 ring-1 ring-teal-200' : 'bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-teal-700' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {}
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm ring-1 ring-slate-200">
          
          {}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-5 rounded-xl ring-1 ring-slate-200">
                <img src={formData.profile?.image || ''} alt="صورة الطبيب" className="w-24 h-28 object-cover rounded-xl ring-2 ring-white shadow-md bg-slate-200" />
                <div className="space-y-2.5 text-center sm:text-right">
                  <label className="block font-semibold text-slate-800 text-sm">الصورة الشخصية للطبيب</label>
                  <label className="inline-flex items-center gap-2 bg-white ring-1 ring-slate-300 hover:ring-teal-600 hover:text-teal-800 text-slate-700 font-semibold text-xs px-4 py-2.5 rounded-lg cursor-pointer transition">
                    <Upload className="w-4 h-4 text-teal-700" />
                    <span>رفع صورة الدكتور من الجهاز</span>
                    <input type="file" accept="image/*" onChange={handleDoctorImageUpload} className="hidden" />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">الاسم الرسمي (H1)</label>
                  <input type="text" value={formData.profile?.name || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, name: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">السطر الفرعي للتخصص (Subtitle)</label>
                  <input type="text" value={formData.profile?.subtitle || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, subtitle: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">رقم الواتساب (بدون +)</label>
                  <input type="text" value={formData.profile?.whatsapp || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, whatsapp: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition text-left" dir="ltr" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">رقم الهاتف المعروض</label>
                  <input type="text" value={formData.profile?.displayPhone || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, displayPhone: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition text-left" dir="ltr" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">رابط خرائط جوجل (Google Maps)</label>
                  <input type="text" value={formData.profile?.googleMapsUrl || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, googleMapsUrl: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition text-left" dir="ltr" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">أوقات الدوام</label>
                  <input type="text" value={formData.profile?.workingHours || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, workingHours: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">عنوان العيادة التفصيلي</label>
                <input type="text" value={formData.profile?.address || ''} onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, address: e.target.value } })} className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
              </div>
            </div>
          )}

          {}
          {activeTab === 'surgeries' && (
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">أقسام العمليات الجراحية</h3>
                <button
                  onClick={() => setFormData({ ...formData, surgeries: [...(formData.surgeries || []), { id: Date.now().toString(), title: 'قسم جراحي جديد', items: ['إجراء جراحي جديد'] }] })}
                  className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> إضافة قسم
                </button>
              </div>
              {(formData.surgeries || []).map((cat, cIdx) => (
                <div key={cat.id || cIdx} className="bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 space-y-3">
                  <div className="flex gap-2">
                    <input type="text" value={cat.title || ''} onChange={(e) => { const u = [...formData.surgeries]; u[cIdx].title = e.target.value; setFormData({ ...formData, surgeries: u }); }} className="flex-1 px-3 py-2 rounded-lg border border-slate-300 bg-white font-semibold text-sm text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                    <button onClick={() => setFormData({ ...formData, surgeries: formData.surgeries.filter((_, i) => i !== cIdx) })} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                  </div>
                  <div className="pr-4 border-r-2 border-teal-600/60 space-y-2">
                    {(cat.items || []).map((item, iIdx) => (
                      <div key={iIdx} className="flex gap-2 items-center">
                        <input type="text" value={item || ''} onChange={(e) => { const u = [...formData.surgeries]; u[cIdx].items[iIdx] = e.target.value; setFormData({ ...formData, surgeries: u }); }} className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                        <button onClick={() => { const u = [...formData.surgeries]; u[cIdx].items = u[cIdx].items.filter((_, i) => i !== iIdx); setFormData({ ...formData, surgeries: u }); }} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                    <button onClick={() => { const u = [...formData.surgeries]; if(!u[cIdx].items) u[cIdx].items = []; u[cIdx].items.push('عملية جديدة'); setFormData({ ...formData, surgeries: u }); }} className="text-xs font-semibold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer">+ إضافة عملية</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {}
          {activeTab === 'certificates' && (
            <div className="space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">معرض صور الشهادات والوثائق الرسمية</h3>
                  <p className="text-xs text-slate-500 mt-1">يمكنك تحديد ورفع جميع صور الشهادات الـ 13 دفعة واحدة</p>
                </div>
                <label className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition">
                  <Upload className="w-4 h-4" />
                  <span>رفع صور الشهادات (متعدد)</span>
                  <input type="file" accept="image/*" multiple onChange={handleCertificateUpload} className="hidden" />
                </label>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {(formData.credentials?.certificateGallery || []).map((cert, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl ring-1 ring-slate-200 space-y-2.5 relative">
                    <button
                      onClick={() => {
                        const updated = formData.credentials.certificateGallery.filter((_, i) => i !== idx);
                        setFormData({ ...formData, credentials: { ...formData.credentials, certificateGallery: updated } });
                      }}
                      className="absolute top-5 left-5 bg-white/95 text-red-600 hover:bg-red-600 hover:text-white p-1.5 rounded-lg shadow ring-1 ring-slate-200 transition cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <img src={cert.image} alt={cert.title} className="w-full h-36 object-cover rounded-lg ring-1 ring-slate-200 bg-white" />
                    <input
                      type="text"
                      value={cert.title || ''}
                      onChange={(e) => {
                        const updated = [...formData.credentials.certificateGallery];
                        updated[idx].title = e.target.value;
                        setFormData({ ...formData, credentials: { ...formData.credentials, certificateGallery: updated } });
                      }}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-800 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'hospitals' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">إدارة المشافي المعتمدة</h3>
                <button
                  onClick={() => setFormData({ ...formData, hospitals: [{ id: Date.now(), name: 'اسم المشفى الجديد', location: 'المنطقة / دمشق', description: 'وصف العمليات أو القسم...' }, ...(Array.isArray(formData.hospitals) ? formData.hospitals : [])] })}
                  className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> إضافة مشفى
                </button>
              </div>
              {(Array.isArray(formData.hospitals) ? formData.hospitals : []).map((hosp, idx) => (
                <div key={hosp.id || idx} className="bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 space-y-3 relative">
                  <button onClick={() => { const list = Array.isArray(formData.hospitals) ? formData.hospitals : []; setFormData({ ...formData, hospitals: list.filter((_, i) => i !== idx) }); }} className="absolute top-3 left-3 text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                  <div className="grid sm:grid-cols-2 gap-3 pl-8">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-1">اسم المشفى</label>
                      <input type="text" value={hosp.name || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].name = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 mb-1">المنطقة أو العنوان</label>
                      <input type="text" value={hosp.location || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].location = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">وصف العمليات / التفاصيل</label>
                    <textarea rows="2" value={hosp.description || ''} onChange={(e) => { const u = [...formData.hospitals]; u[idx].description = e.target.value; setFormData({ ...formData, hospitals: u }); }} className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 leading-relaxed focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {}
          {activeTab === 'news' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">الأخبار والنشاطات الطبية</h3>
                <button onClick={() => setFormData({ ...formData, news: [{ id: Date.now(), date: '2026', category: 'توعية طبية', title: 'عنوان الخبر أو المقال', summary: 'تفاصيل الخبر...' }, ...(formData.news || [])] })} className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition cursor-pointer"><Plus className="w-4 h-4" /> إضافة خبر</button>
              </div>
              {(formData.news || []).map((item, idx) => (
                <div key={item.id || idx} className="bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 space-y-2.5 relative">
                  <button onClick={() => setFormData({ ...formData, news: formData.news.filter((_, i) => i !== idx) })} className="absolute top-3 left-3 text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                  <div className="grid sm:grid-cols-2 gap-2.5 pl-8">
                    <input type="text" value={item.title || ''} onChange={(e) => { const u = [...formData.news]; u[idx].title = e.target.value; setFormData({ ...formData, news: u }); }} className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                    <input type="text" value={item.category || ''} onChange={(e) => { const u = [...formData.news]; u[idx].category = e.target.value; setFormData({ ...formData, news: u }); }} className="px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                  </div>
                  <textarea rows="2" value={item.summary || ''} onChange={(e) => { const u = [...formData.news]; u[idx].summary = e.target.value; setFormData({ ...formData, news: u }); }} className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 leading-relaxed focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                </div>
              ))}
            </div>
          )}

          {}
          {activeTab === 'faqs' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">الأسئلة الشائعة</h3>
                <button onClick={() => setFormData({ ...formData, faqs: [...(formData.faqs || []), { question: 'سؤال جديد؟', answer: 'الإجابة...' }] })} className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-sm transition cursor-pointer"><Plus className="w-4 h-4" /> إضافة سؤال</button>
              </div>
              {(formData.faqs || []).map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl ring-1 ring-slate-200 space-y-2.5 relative">
                  <button onClick={() => setFormData({ ...formData, faqs: formData.faqs.filter((_, i) => i !== idx) })} className="absolute top-3 left-3 text-slate-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg transition cursor-pointer"><Trash2 className="w-4 h-4" /></button>
                  <input type="text" value={faq.question || ''} onChange={(e) => { const u = [...formData.faqs]; u[idx].question = e.target.value; setFormData({ ...formData, faqs: u }); }} className="w-full pl-10 px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-900 focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                  <textarea rows="2" value={faq.answer || ''} onChange={(e) => { const u = [...formData.faqs]; u[idx].answer = e.target.value; setFormData({ ...formData, faqs: u }); }} className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800 leading-relaxed focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10 outline-none transition" />
                </div>
              ))}
            </div>
          )}

        </div>

        <div className="flex justify-between items-center pt-1">
          <button onClick={() => { if (window.confirm('هل تريد مسح البيانات القديمة المخزنة مؤقتاً ومزامنة التحديثات الجديدة؟')) { localStorage.removeItem('dr_sawas_site_data'); window.location.reload(); } }} className="inline-flex items-center gap-1.5 text-xs text-teal-700 hover:text-teal-900 font-medium cursor-pointer transition">
            <span>تحديث وتصفير الذاكرة المحلية (LocalStorage)</span>
          </button>

          <button onClick={() => { if (window.confirm('هل أنت متأكد من استعادة البيانات الافتراضية؟')) { resetData(); window.location.reload(); } }} className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-red-600 font-medium cursor-pointer transition">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>استعادة البيانات الأصلية</span>
          </button>
        </div>

      </div>
    </div>
  );
}