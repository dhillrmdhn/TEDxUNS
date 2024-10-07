import React, { useState } from "react";
import { motion } from "framer-motion";
import RedButton from "@components/button/RedButton";

const About = () => {
  const [isTEDx, setIsTEDx] = useState(false);

  const transitionVariants = {
    hidden: { opacity: 0, x: isTEDx ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isTEDx ? -100 : 100 },
  };

  return (
    <div
      className={`min-h-screen w-full bg-about-section bg-cover flex ${
        isTEDx ? "justify-end" : "justify-start"
      } items-end p-6 sm:p-14`}
    >
      <motion.div
        key={isTEDx}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={transitionVariants}
        transition={{ duration: 0.5 }}
        className="w-full sm:max-w-[550px]"
      >
        {isTEDx ? (
          <AboutTEDx isShow={setIsTEDx} />
        ) : (
          <AboutTED isShow={setIsTEDx} />
        )}
      </motion.div>
    </div>
  );
};

const AboutTED = ({ isShow }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex-col">
        <h1 className="text-h5 sm:text-h4 text-white font-thin">Get to know</h1>
        <h1 className="text-h3 sm:text-h1 text-white font-bold">
          <span className="text-red-700">TED</span> Organization
        </h1>
      </div>
      <div className="bg-black rounded-3xl p-4 sm:p-5">
        <p className="text-white text-sm sm:text-base text-justify">
          TED merupakan organisasi internasional dengan misi untuk menyebarkan
          ide yang mampu menciptakan perbincangan, memperdalam pemahaman, serta
          membawa perubahan ke arah yang lebih baik bagi pendengarnya.
        </p>
      </div>
      <div>
        <RedButton onClick={() => isShow(true)}>Learn about TEDx</RedButton>
      </div>
    </div>
  );
};

const AboutTEDx = ({ isShow }) => {
  return (
    <div className="flex flex-col items-start sm:items-end space-y-3">
      <div className="flex-col">
        <h1 className="text-h5 sm:text-h4 text-white font-thin">Get to know</h1>
        <h1 className="text-h3 sm:text-h1 text-white font-bold">
          <span className="text-red-700">TEDx</span> Sebelas Maret University
        </h1>
      </div>
      <div className="bg-black rounded-3xl p-4 sm:p-5">
        <p className="text-white text-sm sm:text-base text-justify">
          TEDx adalah salah satu program dari TED untuk memperluas cakupan demi
          mewujudkan misi penyebaran ide ke seluruh dunia. “x”= Independently
          Organized TED Event, yaitu simbol kolaborasi antara TED dengan
          institusi penyelenggara, misalnya universitas, kota, dan sebagainya.
          TEDxUNS sendiri merupakan acara TEDx yang digarap secara independen
          oleh mahasiswa/i Universitas Sebelas Maret dengan berbekalkan lisensi
          dari TED Global sebagai prasyarat pengadaan acara. Tahun 2024
          merupakan tahun kedua dari bangkitnya TEDxUNS setelah vakum selama 8
          tahun, sejak tahun 2015.
        </p>
      </div>
      <RedButton onClick={() => isShow(false)}>Learn about TED</RedButton>
    </div>
  );
};

export default About;
