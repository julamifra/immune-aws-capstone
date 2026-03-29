import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import HelmetPage from '@/components/HelmetPage';
import { homePageMeta } from '@/data/Metadata/homePageMeta';
import Hero from '@/components/HomePage/Hero';
import Loader from '@/components/Loader';

const SpecialtiesPreview = lazy(
  () => import('@/components/HomePage/SpecialtiesPreview')
);
const WhyChooseUs = lazy(() => import('@/components/HomePage/WhyChooseUs'));
const TeamPreview = lazy(() => import('@/components/HomePage/TeamPreview'));
const FacilitiesPreview = lazy(
  () => import('@/components/HomePage/FacilitiesPreview')
);
const CTA = lazy(() => import('@/components/HomePage/CTA'));

const HomePage = () => {
  return (
    <>
      <HelmetPage {...homePageMeta} />
      {/* --- Above the Fold --- */}
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center py-12 bg-white"
      >
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            <span className="text-gradient">Instituto Oftalmológico Amigó</span>
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 mt-2 font-medium">
            Clínica oftalmológica en Santa Cruz de Tenerife
          </h2>
        </div>
      </motion.section>

      {/* --- Below the Fold (Lazy Loaded) --- */}
      <Suspense fallback={<Loader />}>
        <SpecialtiesPreview />
        <WhyChooseUs />
        <TeamPreview />
        <FacilitiesPreview />
        <CTA />
      </Suspense>
    </>
  );
};

export default HomePage;
