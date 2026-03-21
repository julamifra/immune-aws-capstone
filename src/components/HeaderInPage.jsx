import { motion } from 'framer-motion';

const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay,
  },
});

const HeaderInPage = ({ title, subtitle, backgroundImgUrl }) => {
  return (
    <header className="relative text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Concepto abstracto de historia y tiempo"
          className="w-full h-full object-cover"
          src={backgroundImgUrl}
        />
        <div className="absolute inset-0 bg-gray-600/70"></div>
      </div>
      <div className="container-custom text-left relative z-10">
        <motion.h1
          variants={fadeIn()}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl font-extrabold"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeIn(0.2)}
          initial="initial"
          animate="animate"
          className="mt-4 text-lg md:text-xl max-w-3xl text-gray-200"
        >
          {subtitle}
        </motion.p>
      </div>
    </header>
  );
};
// const HeaderInPage = ({ title, subtitle, backgroundImgUrl }) => {
//   return (
//     <header className="relative h-[400px] lg:h-[400px] overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <img
//           alt="Equipo de médicos profesionales posando juntos"
//           className="w-full h-full object-cover object-top"
//           src={backgroundImgUrl}
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-white/0"></div>
//       </div>

//       <div className="container-custom relative z-10 flex flex-col justify-between h-full">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl lg:text-5xl font-bold text-brand-dark pt-20"
//         >
//           {title}
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-xl text-black mb-10 text-justify"
//         >
//           {subtitle}
//         </motion.p>
//       </div>
//     </header>
//   );
// };

export default HeaderInPage;
