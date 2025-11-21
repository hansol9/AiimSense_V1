import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      title: 'For Patients',
      description: 'Faster diagnoses for better outcomes and reduced recovery times.'
    },
    {
      title: 'For Providers',
      description: 'Optimizes conventional imaging systems while expanding diagnostic capabilities.'
    },
    {
      title: 'For Insurers',
      description: 'Lowers long-term disability and rehabilitation costs through early intervention.'
    }
  ];

  return (
    <section id="technology" className="technology" ref={ref}>
      <motion.div 
        className="technology-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Technology</h2>
        
        <div className="brainscreen-container">
          <div className="brainscreen-image">
            <div className="device-placeholder">
              <p>BrainScreen™ Device</p>
            </div>
          </div>
          
          <div className="brainscreen-info">
            <h3>BrainScreen™: A Game-Changing Brain Scanner</h3>
            <p>
              AiimSense's BrainScreen™ is a mobile brain imaging device offering 
              real-time diagnostic insights for conditions like traumatic brain 
              injuries (TBI), strokes, and other neurological disorders. By combining 
              electromagnetic tomography with proprietary AI algorithms, BrainScreen™ 
              delivers accurate, actionable results at the point of care.
            </p>
          </div>
        </div>
        
        <h3 className="benefits-title">Key Benefits:</h3>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <p className="tech-tagline">
          AiimSense directly benefits patients, hospitals and payers
        </p>
      </motion.div>
    </section>
  );
}

export default Technology;
