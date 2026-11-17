import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Footer({ profile }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5 text-white">
          <div className="bg-teal-600 p-2 rounded-lg">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-sm sm:text-base block">{profile.name}</span>
            <span className="text-xs text-slate-400 block">{profile.englishName} • ترخيص رقم {profile.licenseNumber}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لـ {profile.clinicName} – دمشق، سوريا
        </p>
      </div>
    </footer>
  );
}