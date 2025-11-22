import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partnerLogos = [
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/02/6-13.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/02/6-12.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/5-1.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/6-7.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/6-9.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/6-10.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/3-10.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/1-13.jpg",
    "https://aiimsense-stage.andyioi.ca/wp-content/uploads/2022/01/2-10.jpg",
  ];

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
          At AiimSense, we are driven by a team of dedicated scientists,
          engineers, and healthcare professionals committed to transforming
          brain imaging. Our expertise is strengthened through strategic
          collaborations with world-class institutions, advisors, and industry
          leaders, ensuring our solutions meet the highest standards of
          innovation, accuracy, and patient care.
        </p>

        <div className="partner-slider-wrapper">
          <div className="partner-box">
            <Slider {...sliderSettings}>
              {partnerLogos.map((logo, index) => (
                <div key={index} className="partner-logo-item">
                  <img src={logo} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <p className="team-mission">
          Together, we are shaping the future of brain healthcare — advancing
          accessible, real-time brain imaging to improve patient outcomes
          worldwide.
        </p>
      </motion.div>
    </section>
  );
}

export default Team;
