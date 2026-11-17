import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initialData } from './data/initialData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClinicServices from './components/ClinicServices';
import Surgeries from './components/Surgeries';
import Hospitals from './components/Hospitals';
import Credentials from './components/Credentials';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import News from './components/News';
import Reviews from './components/Reviews';

export default function App() {
  const [siteData, setSiteData] = useState(() => {
    const saved = localStorage.getItem('dr_sawas_official_v1');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('dr_sawas_official_v1', JSON.stringify(siteData));
  }, [siteData]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-slate-50">
              <Navbar profile={siteData.profile} />
              <main>
                <Hero profile={siteData.profile} />
                <About about={siteData.about} profile={siteData.profile} />
                <ClinicServices clinicServices={siteData.clinicServices} />
                <Surgeries surgeries={siteData.surgeries} surgeryNotes={siteData.surgeryNotes} />
                <Hospitals 
                  hospitals={siteData.hospitals} 
                  intro={siteData.hospitalsIntro} 
                  selection={siteData.hospitalsSelection} 
                />
                <Credentials credentials={siteData.credentials} />
                <News news={siteData.news} />
                <Reviews />
                <FAQ faqs={siteData.faqs} />
                <Booking profile={siteData.profile} surgeries={siteData.surgeries} />
              </main>
              <Footer profile={siteData.profile} />
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminDashboard
              siteData={siteData}
              setSiteData={setSiteData}
              resetData={() => setSiteData(initialData)}
            />
          }
        />
      </Routes>
    </Router>
  );
}