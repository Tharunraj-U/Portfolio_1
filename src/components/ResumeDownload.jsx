import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from "../utils/motion"
 
const ResumeCard = ({ index, title, description, resumeUrl }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
    <p className='text-white mt-2 text-[16px]'>{description}</p>
    <a
      href={resumeUrl}
      download="resume.pdf"  // Specify the default filename for the download
      className='mt-5 inline-block bg-blue-500 text-white py-2 px-4 rounded'
    >
      Download Resume
    </a>
  </motion.div>
);

const ResumeDownload = () => {
  const resumeDetails = {
    title: "My Resume",
    description: "Click the button below to download my resume.",
    resumeUrl: "/resume.pdf" // Updated path to the resume file in the public directory
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Download</p>
          <h2 className={styles.sectionHeadText}>Resume.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <ResumeCard index={0} {...resumeDetails} />
      </div>
    </div>
  );
};

export default SectionWrapper(ResumeDownload, "");
