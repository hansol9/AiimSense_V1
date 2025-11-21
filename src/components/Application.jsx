import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Application() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const applications = [
    {
      title: 'Hospitals (ERs & ICUs)',
      description: 'Enhances bedside monitoring and optimizes CT/MRI utilization, improving patient care and workflow efficiency.',
      icon: '🏥'
    },
    {
      title: 'Rural & Underserved Areas',
      description: 'Brings critical brain imaging to remote and resource-limited communities, bridging gaps in healthcare access.',
      icon: '🏘️'
    },
    {
      title: 'Emergency & Pre-Hospital Care',
      description: 'Enables rapid stroke and TBI triage in ambulances (road, air, and sea) and mobile medical units.',
      icon: '🚑'
    },
    {
      title: 'Military & Disaster Relief',
      description: 'Delivers real-time, on-site diagnostics in high-risk environments and emergency response scenarios.',
      icon: '⚕️'
    }
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
        <h3 className="subtitle">Advancing Brain Imaging Across Critical Care Settings</h3>
        
        <p className="intro-text">
          AiimSense's BrainScreen™ is revolutionizing brain imaging by making it 
          accessible, efficient, and deployable across various medical environments:
        </p>
        
        <div className="applications-grid">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              className="application-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="app-icon">{app.icon}</div>
              <h4>{app.title}</h4>
              <p>{app.description}</p>
            </motion.div>
          ))}
        </div>
        
        <p className="closing-text">
          With BrainScreen™, AiimSense empowers healthcare providers to make faster, 
          data-driven decisions — when every second counts.
        </p>
      </motion.div>
    </section>
  );
}

export default Application;
