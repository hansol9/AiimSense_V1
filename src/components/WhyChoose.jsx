import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// 이미지 파일을 src/assets/aiimsense_example.jpg 등에 저장했다고 가정
import careImg from "../assets/images/Aimsense-Homepage.jpg";

const features = [
  {
    title: "Portable Brain Scanner",
    description: "Designed for bedside, EMS, and remote settings.",
  },
  {
    title: "Cost-Effective",
    description:
      "Significantly reduces imaging costs compared to traditional modalities.",
  },
  {
    title: "AI-Powered Accuracy",
    description:
      "Proprietary algorithms enhance resolution for faster, reliable diagnostics.",
  },
  {
    title: "Non-Invasive and Safe",
    description:
      "Uses electromagnetic tomography for a patient-first approach.",
  },
];

function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section id="whychoose" className="whychoose-section" ref={ref}>
      <div className="whychoose-row">
        <motion.div
          className="whychoose-imgbox"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img src={careImg} alt="aiimsense scan" className="whychoose-img" />
        </motion.div>
        <motion.div
          className="whychoose-content"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.09 }}
        >
          <h2 className="whychoose-title">
            Why <span className="whychoose-color">Choose AiimSense?</span>
          </h2>
          <ul className="whychoose-list">
            {features.map((feature, i) => (
              <li key={i} className="whychoose-listitem">
                <strong>{feature.title}:</strong>
                <br />
                <span className="whychoose-list-desc">
                  {feature.description}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
export default WhyChoose;
