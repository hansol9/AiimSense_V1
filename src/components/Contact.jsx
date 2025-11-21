import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS 설정이 필요합니다
      // emailjs.com에서 계정을 만들고 아래 값들을 설정하세요
      await emailjs.send(
        'YOUR_SERVICE_ID',      // EmailJS 서비스 ID
        'YOUR_TEMPLATE_ID',     // EmailJS 템플릿 ID
        formData,
        'YOUR_PUBLIC_KEY'       // EmailJS Public Key
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact</h2>
        <p className="contact-intro">
          Our team is working hard to bring our groundbreaking brain scanner 
          to patients. Contact us to learn more.
        </p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>AiimSense Inc.</h3>
            <p className="address">
              200 – 280 Joseph St,<br/>
              Kitchener, ON<br/>
              N2G 4Z5, Canada
            </p>
            <p className="email">
              <a href="mailto:info@aiimsense.com">info@aiimsense.com</a>
            </p>
            <p className="phone">
              <a href="tel:+15197222434">+1-519-722-2434</a>
            </p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            
            {status === 'success' && (
              <p className="status-message success">
                Message sent successfully! We'll get back to you soon.
              </p>
            )}
            
            {status === 'error' && (
              <p className="status-message error">
                Failed to send message. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
