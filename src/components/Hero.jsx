import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
    //const [isClicked, setIsClicked] = useState(false);
    const [showCollections, setShowCollections] = useState(false);

  const heroRef = useRef(null);
  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
  
     
  
      gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 2,
        ease: "power3.out"
      });
  
      gsap.from(".hero-content h1", {
        y: 120,
        opacity: 0,
        duration: 1,
        delay: 2.2,
        ease: "power3.out"
      });
  
      gsap.from(".center-img", {
        y: 150,
        opacity: 0,
        duration: 1.2,
        delay: 2.3,
        ease: "power3.out"
      });
  
      gsap.from(".side-img:first-child", {
        x: -200,
        opacity: 0,
        duration: 1,
        delay: 2.4,
        ease: "power3.out"
      });
  
      gsap.from(".side-img:last-child", {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 2.4,
        ease: "power3.out"
      });
  

  
      const s1 = document.querySelector(".section1");
      const s2 = document.querySelector(".section2");
  
      const s1H = s1.offsetHeight;
      const s2H = s2.offsetHeight;
  
      const totalScroll = s1H + s2H;
  
      const move1 = s1H / totalScroll;
      const hold  = (s2H * 0.2) / totalScroll;
      const move2 = 1 - move1 - hold;
  
      gsap.set([".center-img", ".side-img"], {
        x: 0,
        y: 0,
        scale: 1
      });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=" + totalScroll,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
  
      tl.fromTo(".center-img",
        { x: 0, y: 0, scale: 1 },
        {
          x: -510,
          y: 160,
          scale: 0.29,
          ease: "none",
          duration: move1
        },
        0
      )
      .fromTo(".side-img:first-child",
        { x: 0, y: 0, scale: 1 },
        {
          x: -53,
          y: -35,
          scale: 0.07,
          ease: "none",
          duration: move1
        },
        0
      )
      .fromTo(".side-img:last-child",
        { x: 0, y: 0, scale: 1 },
        {
          x: -1020,
          y: -35,
          scale: 0.07,
          ease: "none",
          duration: move1
        },
        0
      )
        .to({}, { duration: hold })
  
      .to(".center-img", {
        x: 0,
        y: -220,
        scale: 0.89,
        ease: "none",
        duration: move2
      })
      .to(".side-img:first-child", {
        x: 300,
        y: -70,
        scale: 0.69,
        ease: "none",
        duration: move2
      }, "<")
      .to(".side-img:last-child", {
        x: -300,
        y: -70,
        scale: 0.69,
        ease: "none",
        duration: move2
      }, "<");
  
  

  
      gsap.from(".section1-right h1, .section1-right p", {
        scrollTrigger: {
          trigger: ".section1",
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
  
  
  
      
  
    }, heroRef);
  
    return () => ctx.revert();
  
  }, []);
  
  
  
  
  return (
    <>
      <div className="hero" ref={heroRef}>
        <Navbar />
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>DIAMONDS</h1>
        </div>

        <div className="diamond-layer">
          <img src="/images/image2.png" alt="Diamond Left"   className="side-img" />
          <img src="/images/image1.png" alt="Diamond Center" className="center-img" />
          <img src="/images/image3.png" alt="Diamond Right"  className="side-img" />
        </div>
      </div>

      <div className="section1">
        <div className="section1-container">
          <div className="section1-left">
            <img src="/images/section1.png" alt="Elegance Jewellery" />
          </div>
          <div className="section1-right">
            <h1>Crafted to Captivate</h1>
            <p>
              Crafted with precision and passion, every diamond tells a story
              of timeless beauty and refined luxury. Our designs are inspired
              by grace, confidence, and the brilliance that defines you.
              Each piece reflects sophistication, created to be cherished
              today and admired forever.
            </p>
           <button
  className="luxury-btn"
  onClick={() => navigate("/collections")}
>
  Explore Collection
</button>
          </div>
        </div>
      </div>

      <div className="section2">
  <div className="section2-container">
    <h1>Unapologetically Brilliant</h1>
    <p>
      Designed for those who embrace confidence and timeless glamour,
      every creation reflects passion, precision, and prestige.
      Our diamonds are more than jewellery — they are statements
      of strength, elegance, and individuality. Shine without limits.
    </p>
    <img src="/images/section2.png" alt="Luxury Diamond Collection" />
   <button
  className="luxury-btn"
  onClick={() => navigate("/getit")}
>
  Get It
</button>
  </div>
</div>




{showCollections && (
  <div className="rings-section">
    <div className="rings-container">
      <h1>Explore Collections</h1>

      <div className="rings-grid">

        <div className="ring-card">
          <img src="/images/ring1.jpg" alt="Rings" />
          <h3>Luxury Rings</h3>

          <button
            className="luxury-btn"
            onClick={() => navigate("/rings")}
          >
            View Rings
          </button>
        </div>

        <div className="ring-card">
          <img src="/images/ring2.jpg" alt="Necklaces" />
          <h3>Diamond Necklaces</h3>

          <button
            className="luxury-btn"
            onClick={() => navigate("/necklaces")}
          >
            View Necklaces
          </button>
        </div>

        <div className="ring-card">
          <img src="/images/ring3.jpg" alt="Earrings" />
          <h3>Luxury Earrings</h3>

          <button
            className="luxury-btn"
            onClick={() => navigate("/earrings")}
          >
            View Earrings
          </button>
        </div>

      </div>
    </div>
  </div>
)}


    </>
    
  );
};

export default Hero;