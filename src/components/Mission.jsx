import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Mission = () => (
  <section id="mission" className="mission">
    <div className="mission-wrapper">
      <motion.div
        className="mission-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={boxVariants}
      >
        <h2 className="mission-title">Our Mission</h2>
        <p>
          To empower healthcare providers with innovative brain imaging
          solutions that enable early diagnosis, improve outcomes, and save
          lives.
        </p>
      </motion.div>
      <motion.div
        className="mission-item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={boxVariants}
      >
        <h2 className="mission-title">Our Vision</h2>
        <p>
          To revolutionize brain healthcare by delivering accessible,
          life-saving diagnostic tools worldwide.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Mission;
