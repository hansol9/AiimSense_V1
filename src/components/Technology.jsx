import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      title: "For Patients:",
      description:
        "Faster diagnoses for better outcomes and reduced recovery times.",
    },
    {
      title: "For Providers:",
      description:
        "Optimizes conventional imaging systems while expanding diagnostic capabilities.",
    },
    {
      title: "For Insurers:",
      description:
        "Lowers long-term disability and rehabilitation costs through early intervention.",
    },
  ];

  return (
    <section id="technology" className="technology" ref={ref}>
      <motion.div
        className="technology-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* 제목 오른쪽 정렬 */}
        <div className="tech-header">
          <div className="tech-header-left"></div>
          <div className="tech-header-right">
            <h2>Technology</h2>
          </div>
        </div>

        {/* BrainScreen 정보 섹션 */}
        <div className="brainscreen-section">
          <div className="brainscreen-image">
            <img
              src="https://aiimsense-stage.andyioi.ca/wp-content/uploads/2025/03/Bedside-device-transparent.png"
              alt="BrainScreen Device"
            />
          </div>

          <div className="brainscreen-info">
            <h3>BrainScreen™: A Game-Changing Brain Scanner</h3>
            <p className="brainscreen-description">
              AiimSense's BrainScreen™ is a mobile brain imaging device offering
              real-time diagnostic insights for conditions like traumatic brain
              injuries (TBI), strokes, and other neurological disorders. By
              combining electromagnetic tomography with proprietary AI
              algorithms, BrainScreen™ delivers accurate, actionable results at
              the point of care.
            </p>

            <p className="benefits-label">
              <strong>Key Benefits:</strong>
            </p>

            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <strong>{benefit.title}</strong> {benefit.description}
                </motion.li>
              ))}
            </ul>

            <button className="demo-button">
              <strong>Request Demo</strong>
            </button>
          </div>
        </div>

        {/* 파란색 배경 인포그래픽 섹션 */}
        <div className="benefits-infographic">
          <h3>AiimSense directly benefits patients, hospitals and payers</h3>
          <img
            src="https://aiimsense.com/wp-content/uploads/2025/02/Copy-of-02_02_page-0001.jpg"
            alt="Benefits Infographic"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Technology;
