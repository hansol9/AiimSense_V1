import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Application() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const applications = [
    {
      title: "Hospitals (ERs & ICUs)",
      features: [
        "Enhances bedside monitoring",
        "Optimizes CT/MRI utilization",
        "Improves patient care and workflow efficiency",
      ],
      image:
        "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2025/03/Bedside-hospital-transparent.png",
      bgColor: "#e8f4f8",
    },
    {
      title: "Rural & Underserved Areas",
      features: [
        "Brings critical brain imaging to remote communities",
        "Bridges gaps in healthcare access",
        "Resource-limited friendly design",
      ],
      image:
        "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2025/03/Bedside-hospital-transparent.png",
      bgColor: "#fff5e8",
    },
    {
      title: "Emergency & Pre-Hospital Care",
      features: [
        "Enables rapid stroke and TBI triage",
        "Works in ambulances (road, air, and sea)",
        "Portable for mobile medical units",
      ],
      image:
        "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2025/03/Ambulance-transparent.png",
      bgColor: "#f0e8f4",
    },
    {
      title: "Military & Disaster Relief",
      features: [
        "Real-time, on-site diagnostics",
        "High-risk environment ready",
        "Emergency response scenarios",
      ],
      image:
        "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2025/10/military-transparent.webp",
      bgColor: "#e8f8f0",
    },
  ];

  return (
    <section id="application" className="application" ref={ref}>
      <motion.div
        className="application-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Application</h2>
        <h3 className="subtitle">
          Advancing Brain Imaging Across Critical Care Settings
        </h3>

        <p className="intro-text">
          AiimSense's <strong>BrainScreen™</strong> is revolutionizing brain
          imaging by making it accessible, efficient, and deployable across
          various medical environments:
        </p>

        <div className="applications-list">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              className="application-item"
              style={{ backgroundColor: app.bgColor }}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="app-content-left">
                <h3 className="app-title">{app.title}</h3>

                <div className="features-boxes">
                  {app.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="feature-box"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + idx * 0.1,
                      }}
                    >
                      <div className="check-icon">✓</div>
                      <p>{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="app-content-right">
                <img src={app.image} alt={app.title} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="closing-box">
          <p className="closing-text">
            With <strong>BrainScreen™</strong>, <strong>AiimSense</strong>{" "}
            empowers healthcare providers to make faster, data-driven decisions
            —when every second counts.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default Application;
