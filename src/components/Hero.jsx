import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto green-background">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00FF00]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#00FF00]">THARUN</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate Java full-stack developer <br className="sm:block hidden" />
            building modern web applications and interfaces. <br className="sm:block hidden" />
            <span className="text-[#00FF00]">Also a fitness enthusiast</span>, helping others reach their gym goals.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[40px] h-[70px] rounded-3xl border-4 border-green-500 flex justify-center items-start p-3 shadow-lg">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-green-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
