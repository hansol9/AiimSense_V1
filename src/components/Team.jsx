import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="team" ref={ref}>
      <motion.div 
        className="team-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Team and Partners</h2>
        
        <p className="team-description">
          At AiimSense, we are driven by a team of dedicated scientists, engineers, 
          and healthcare professionals committed to transforming brain imaging. 
          Our expertise is strengthened through strategic collaborations with 
          world-class institutions, advisors, and industry leaders, ensuring our 
          solutions meet the highest standards of innovation, accuracy, and patient care.
        </p>
        
        <p className="team-mission">
          Together, we are shaping the future of brain healthcare — advancing 
          accessible, real-time brain imaging to improve patient outcomes worldwide.
        </p>
      </motion.div>
    </section>
  );
}

export default Team;
