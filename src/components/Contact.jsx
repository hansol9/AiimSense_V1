import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
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
          Our team is working hard to bring our groundbreaking brain scanner to
          patients. Contact us to learn more.
        </p>

        <div className="contact-container">
          {/* 폼이 왼쪽 */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Name (required) <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address (required) <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message (required) <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="status-message success">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="status-message error">
                Failed to send message. Please try again.
              </p>
            )}
          </form>

          {/* 연락처 정보가 오른쪽 */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">📍</div>
              <div className="info-text">
                <h3>AiimSense Inc.</h3>
                <p>
                  200 – 280 Joseph St,
                  <br />
                  Kitchener, ON
                  <br />
                  N2G 4Z5, Canada
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">✉️</div>
              <div className="info-text">
                <a href="mailto:info@aiimsense.com">info@aiimsense.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div className="info-text">
                <a href="tel:+15197222434">+1-519-722-2434</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
