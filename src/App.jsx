import React, { useState, useEffect, useRef } from "react";

// Third-Party Libraries
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import { useForm } from "@formspree/react";

// Icons from Lucide React
import {
  Menu,
  X,
  Download,
  Eye,
  Palette,
  PenTool,
  Package,
  Monitor,
  BookOpen,
  Type,
  Tag,
  FileText,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  ArrowUp,
  Briefcase,
  GraduationCap,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiCoreldraw,
} from "react-icons/si";

// Local Assets
import sentSound from "/src/assets/sounds/sent-sound.mp3";
import heroPhoto from "/src/assets/images/placeholder-professional-photo.png";
import cv from "/src/assets/documents/Shafeela_Nasreen_CV2.pdf";
import logoImage from "/src/assets/images/logo-3.png";

// Project Image Imports
import branding from "/src/assets/images/portfolio/branding-tech-4.jpg";
import packageImg from "/src/assets/images/portfolio/packaging-2.jpg";
import packageImg2 from "/src/assets/images/portfolio/packaging-3.jpg";
import poster from "/src/assets/images/portfolio/poster-music.jpg";
import lettering from "/src/assets/images/portfolio/letter-wedding.jpg";
import dangler from "/src/assets/images/portfolio/dangler-sale-2.jpg";
import brochure2 from "/src/assets/images/portfolio/brochure-travel.jpg";
import branding2 from "/src/assets/images/portfolio/branding-tech-3.jpg";
import brochure3 from "/src/assets/images/portfolio/brochure-3.jpg";
import businessCardUD from "/src/assets/images/portfolio/business-card.jpg";
import poster2 from "/src/assets/images/portfolio/poster-design.jpg";
import vectorDrawing from "/src/assets/images/portfolio/vector-drawing.jpg";
import poster3 from "/src/assets/images/portfolio/poster-3.jpg";

//new project imports

import businessCard2 from "/src/assets/images/portfolio/business-card-3.jpg";
import shopBoard2 from "/src/assets/images/portfolio/shop-board-5.jpg";
import shopBoard3 from "/src/assets/images/portfolio/shop-board-4.jpg";
import poster4 from "/src/assets/images/portfolio/poster-design-2.jpg";
import poster5 from "/src/assets/images/portfolio/poster-design-3.jpg";
import poster6 from "/src/assets/images/portfolio/poster-design-4.jpg";
import poster7 from "/src/assets/images/portfolio/poster-design-5.jpg";
import poster8 from "/src/assets/images/portfolio/poster-design-6.jpg";
import productManipulation from "/src/assets/images/portfolio/product-manipulation.jpg";
import logo2 from "/src/assets/images/portfolio/logo-design-4.jpg";
import logo3 from "/src/assets/images/portfolio/logo-design-2.jpg";
import logo4 from "/src/assets/images/portfolio/logo-design-5.jpg";
import vectorDrawing2 from "/src/assets/images/portfolio/vector-drawing-2.jpg";
import packageImg3 from "/src/assets/images/portfolio/packaging-4.jpg";
import digitalArt from "/src/assets/images/portfolio/digital-drawing.jpg";
import digitalArt2 from "/src/assets/images/portfolio/digital-drawing-2.jpg";
import rollup from "/src/assets/images/portfolio/roll-up.jpg";
import dangler3 from "/src/assets/images/portfolio/dangler-sale-3.jpg";
import rollup2 from "/src/assets/images/portfolio/roll-up-2.jpg";
import magazineCoverPage from "/src/assets/images/portfolio/cover-page.jpg";
import lanyard from "/src/assets/images/portfolio/lanyard.jpg";
import magazineCoverPage2 from "/src/assets/images/portfolio/cover-page-2.jpg";


// ============================================================================
// DATA & CONFIGURATION
// ============================================================================

// The 'className' prop is for the masonry grid layout in the Portfolio component.
const portfolioData = [
  {
    id: 1,
    title: "Ice Cream Company Branding",
    category: "Branding",
    image: branding,
    className: "lg:col-span-2", // Keep as a strong opener
  },

  {
    id: 3,
    title: "Potato chips Packaging",
    category: "Package Design",
    image: packageImg,
    className: "",
  },
  {
    id: 4,
    title: "Pizza Promotion Poster",
    category: "Poster Design",
    image: poster,
    className: "lg:row-span-2", // Good for a tall poster
  },
  {
    id: 5,
    title: "Educational Institute Two Fold Brochure",
    category: "Brochure Design",
    image: brochure2,
    className: "", // Changed
  },
  {
    id: 6,
    title: "Flingo Custom Lettering",
    category: "Letter Style Creation",
    image: lettering,
    className: "lg:col-span-2", // Changed - Highlights lettering skill
  },
  {
    id: 7,
    title: "Christmas Sale Dangler",
    category: "Dangler Design",
    image: dangler,
    className: "", // Changed
  },
  {
    id: 8,
    title: "Brand Stationery Design",
    category: "Branding",
    image: branding2,
    className: "", // Changed
  },
  {
    id: 9,
    title: "Corporate Tri-fold Brochure",
    category: "Brochure Design",
    image: brochure3,
    className: "",
  },
  {
    id: 10,
    title: "Professional Engineering Business Card",
    category: "Business Card Design",
    image: businessCardUD,
    className: "",
  },
  {
    id: 11,
    title: "Skin care Packaging",
    category: "Package Design",
    image: packageImg2,
    className: "",
  },
  {
    id: 12,
    title: "Hajj & Umrah Travel Poster",
    category: "Poster Design",
    image: poster2,
    className: "lg:col-span-2", // Changed - Makes the poster a wide feature
  },
  {
    id: 14,
    title: "Vector Portrait Illustration",
    category: "Vector Illustration",
    image: vectorDrawing,
    className: "",
  },
  {
    id: 15,
    title: "Arabic Food Promo Poster",
    category: "Poster Design",
    image: poster3,
    className: "lg:col-span-2", // Changed - Another tall feature item
  },
  {
    id: 16,
    title: "SnapSizzle Spot – Hot & Cool Burger Brand Identity",
    category: "Logo Design",
    image: logo4,
    className: "",
  },
  {
    id: 17,
    title: "Luxury Jewels Business Card",
    category: "Business Card Design",
    image: businessCard2,
    className: "",
  },
  {
    id: 18,
    title: "Fresh Burger Billboard Design",
    category: "Signage Design",
    image: shopBoard2,
    className: "", // Changed
  },
  {
    id: 19,
    title: "Airy Jewels Billboard Advertisement",
    category: "Signage Design",
    image: shopBoard3,
    className: "lg:col-span-2", // Changed
  },
  {
    id: 20,
    title: "UAE Visa Promotional Poster",
    category: "Poster Design",
    image: poster4,
    className: "",
  },
  {
    id: 21,
    title: "Bahrain Visa Travel Poster",
    category: "Poster Design",
    image: poster5,
    className: "", // Changed - Creates a vertical break
  },

  {
    id: 22,
    title: "China Business Visa Poster",
    category: "Poster Design",
    image: poster6,
    className: "",
  },
  {
    id: 23,
    title: "Airy Jewels Logo & Branding",
    category: "Logo Design",
    image: logo2,
    className: "lg:col-span-2",
  },
  {
    id: 24,
    title: "Luxury Perfume Photo Manipulation",
    category: "Product Manipulation",
    image: productManipulation,
    className: "lg:col-span-2", // Keep as a hero item
  },
  {
    id: 25,
    title: "Psychology Course Awareness Poster",
    category: "Poster Design",
    image: poster7,
    className: "lg:col-span-2",
  },
  {
    id: 26,
    title: "Ciaro Project Construction Logo",
    category: "Logo Design",
    image: logo3,
    className: "lg:col-span-2", // Changed - Ends with a final wide feature
  },
  {
    id: 27,
    title: "Counselling Psychology Course Poster",
    category: "Poster Design",
    image: poster8,
    className: "",
  },
  {
    id: 28,
    title: "Vector Portrait Illustration",
    category: "Vector Illustration",
    image: vectorDrawing2,
    className: "",
  },
  {
    id: 29,
    title: "Burger Packaging",
    category: "Package Design",
    image: packageImg3,
    className: "",
  },
  {
    id: 30,
    title: "Digital Artwork",
    category: "Digital Art",
    image: digitalArt,
    className: "",
  },
  {
    id: 31,
    title: "Digital Artwork 2",
    category: "Digital Art",
    image: digitalArt2,
    className: "lg:col-span-2",
  },
  {
    id: 32,
    title: "Construction & Maintenance Services Roll-Up Banner",
    category: "Roll-Up Design",
    image: rollup,
    className: "",
  },
  {
    id: 33,
    title: "Rouzas Promotional Dangler",
    category: "Dangler Design",
    image: dangler3,
    className: "lg:col-span-2",
  },
  {
    id: 34,
    title: "Burger Offer Roll-Up Banner Design",
    category: "Roll-Up Design",
    image: rollup2,
    className: "",
  },
  {
    id: 35,
    title: "Magazine Cover Page",
    category: "Magazine Design",
    image: magazineCoverPage,
    className: "",
  },
  {
    id: 36,
    title: "Lanyard of Construction & Maintenance Services",
    category: "Lanyard Design",
    image: lanyard,
    className: "lg:col-span-2",
  },
  {
    id: 37,
    title: "Magazine Cover Page 2",
    category: "Magazine Design",
    image: magazineCoverPage2,
    className: "",
  },
];

const serviceList = [
  {
    name: "Branding",
    icon: <Palette size={32} />,
    description: "Complete brand identity solutions",
  },
  {
    name: "Logo Design",
    icon: <PenTool size={32} />,
    description: "Memorable and impactful logos",
  },
  {
    name: "Package Design",
    icon: <Package size={32} />,
    description: "Eye-catching product packaging",
  },
  {
    name: "Poster Design",
    icon: <Monitor size={32} />,
    description: "Creative promotional materials",
  },
  {
    name: "Magazine Design",
    icon: <BookOpen size={32} />,
    description: "Editorial layout and design",
  },
  {
    name: "Letter Style Creation",
    icon: <Type size={32} />,
    description: "Custom typography and lettering",
  },
  {
    name: "Dangler Design",
    icon: <Tag size={32} />,
    description: "Retail promotional displays",
  },
  {
    name: "Brochure Design",
    icon: <FileText size={32} />,
    description: "Professional marketing materials",
  },
];

const educationData = [
  {
    type: "Diploma",
    icon: <Briefcase size={20} />,
    year: "2024 - 2025",
    title: "Diploma in Creative Ads",
    school: "Kiasco Design Academy",
  },
  {
    type: "School",
    icon: <GraduationCap size={20} />,
    year: "2011",
    title: "Plus 2 (Higher Secondary)",
    school: "Govt. Girls Higher Secondary School, Malappuram",
  },
];

const colors = {
  bg: "#0A0A0A",
  card: "#141414",
  text: "#F5F5F5",
  muted: "#A3A3A3",
  accent1: "#00F5D4",
  accent2: "#FF7B00",
};

const defaultTiltOptions = {
  reverse: false,
  max: 15, // Max tilt rotation (degrees)
  perspective: 1000,
  scale: 1.02, // 2% growth on hover
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  glare: true,
  "max-glare": 0.4,
};

// ============================================================================
// FRAMER MOTION VARIANTS
// ============================================================================

const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

const SectionDivider = () => (
  <div
    className="w-full h-20"
    style={{
      background: `linear-gradient(to top, ${colors.bg}, transparent)`,
      maskImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 30'%3e%3cpath d='M0 30 L300 30 L300 0 Q250 20, 200 15, Q150 10, 100 20, Q50 30, 0 0 Z' fill='black'/%3e%3c/svg%3e")`,
      maskRepeat: "repeat-x",
      maskSize: "auto 100%",
    }}
  />
);

/**
 * A helper component for a scramble text effect on reveal.
 * Animates text from random characters to the target text.
 */
const ScrambleText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const scrambleChars = "ÄßÇÐËƒGHIJK£MÑÖÞQ®§TÛVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    if (!text) {
      setDisplayedText("");
      return;
    }
    let isMounted = true;
    let targetText = text;
    let scrambleInterval;

    const animate = () => {
      let progress = 0;
      scrambleInterval = setInterval(() => {
        if (!isMounted) {
          clearInterval(scrambleInterval);
          return;
        }
        const currentText = targetText
          .split("")
          .map((char, index) =>
            index < progress
              ? targetText[index]
              : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          )
          .join("");

        setDisplayedText(currentText);

        if (progress >= targetText.length) {
          clearInterval(scrambleInterval);
          setDisplayedText(targetText);
        }
        progress += 1;
      }, 80);
    };

    setTimeout(animate, 100);

    return () => {
      isMounted = false;
      clearInterval(scrambleInterval);
    };
  }, [text]);

  return <span className="font-mono tracking-wider">{displayedText}</span>;
};

// ============================================================================
// MAIN PAGE SECTIONS
// ============================================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(
            section.id.charAt(0).toUpperCase() + section.id.slice(1)
          );
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileLinkClick = (id) => {
    setIsOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  const mobileMenuVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const mobileLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-black/50"
      } border-b border-gray-800/50`}
    >
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center py-2">
        <motion.div
          onClick={() => scrollToSection("Home")}
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logoImage} alt="SV Logo" className="h-14 w-auto" />
          <span className="text-2xl sm:text-3xl font-bold text-teal-400">
            Shafeela
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              className="px-4 py-2 text-sm font-medium relative"
              animate={{
                color: activeSection === link ? colors.text : colors.muted,
              }}
              whileHover={{ color: colors.text }}
            >
              {activeSection === link && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-teal-400/10"
                  layoutId="activePill"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-800/50 bg-black/50 backdrop-blur-lg"
          >
            <motion.div
              className="flex flex-col items-center pt-2 pb-4 space-y-1"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link}
                  onClick={() => handleMobileLinkClick(link)}
                  className="w-full text-center py-3 text-lg"
                  style={{
                    color:
                      activeSection === link ? colors.accent1 : colors.text,
                  }}
                  variants={mobileLinkVariants}
                >
                  {link}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  // Uses react-type-animation library for the typing effect.
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-0 lg:pb-0"
      style={{ backgroundColor: colors.bg }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0, 245, 212, 0.1), transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image is first in code to appear on top on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <Tilt
              options={defaultTiltOptions}
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              <div className="relative group w-full h-full">
                <div
                  className="absolute inset-0 rounded-full border-4 transition-all duration-500"
                  style={{
                    borderColor: colors.accent1,
                    boxShadow: `0 0 40px ${colors.accent1}50`,
                  }}
                />
                <img
                  src={heroPhoto}
                  alt="Shafeela Nasreen.M"
                  className="relative w-full h-full object-cover rounded-full p-2"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Text content is second to appear below image on mobile */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-8xl font-black mb-4 leading-tight"
              style={{ color: colors.text }}
            >
              Shafeela<span style={{ color: colors.accent1 }}>.</span>
              <span className="block">Nasreen</span>
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Art Director & Illustrator",
                2000,
                "Crafting Memorable Brands",
                2000,
                "Turning Ideas into Art",
                2000,
                "Digital Product Designer",
                2000,
                "Creative Solutions for Brands",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="h-12 mb-6 text-xl sm:text-2xl lg:text-3xl font-bold inline-block"
              style={{ color: colors.accent2 }}
              repeat={Infinity}
            />

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ color: colors.muted }}
            >
              A passionate graphic designer bringing ideas to life through
              meaningful and impactful visual communication.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#portfolio"
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-transform transform hover:scale-105 inline-flex items-center gap-2 justify-center"
              >
                <Eye size={22} /> My Work
              </a>
              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all transform hover:scale-105 border-2 inline-flex items-center gap-2 justify-center hover:bg-orange-500/10"
                style={{ borderColor: colors.accent2, color: colors.accent2 }}
              >
                <Download size={22} /> Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator, hidden on large screens */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <ChevronDown
          size={32}
          className="animate-bounce"
          style={{ color: colors.muted }}
        />
      </div>
    </section>
  );
};

const About = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const softwareSkills = [
    {
      name: "Adobe Photoshop",
      logo: <SiAdobephotoshop size={60} color="#31A8FF" />,
    },
    { name: "CorelDRAW", logo: <SiCoreldraw size={60} color="#00A550" /> },
    {
      name: "Adobe Illustrator",
      logo: <SiAdobeillustrator size={60} color="#FF9A00" />,
    },
    {
      name: "Adobe InDesign",
      logo: <SiAdobeindesign size={60} color="#FF3366" />,
    },
  ];
  const languages = [
    { name: "English", native: "English" },
    { name: "Malayalam", native: "മലയാളം" },
    { name: "Arabic", native: "العربية" },
    { name: "Hindi", native: "हिंदी" },
  ];

  return (
    <motion.section
      id="about"
      className="py-24"
      style={{ backgroundColor: colors.bg }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer(0.2)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            About & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-24">
          {/* Journey Section */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-2xl sm:text-3xl font-semibold mb-8 text-center"
              style={{ color: colors.text }}
            >
              My Journey
            </h3>
            <div
              className="relative border-l-2"
              style={{ borderColor: `${colors.accent2}50` }}
            >
              {educationData.map((item, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="relative mb-10 ml-8"
                >
                  <div
                    className="absolute -left-[33px] top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: colors.accent2, color: "black" }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="p-6 rounded-xl border"
                    style={{
                      backgroundColor: `${colors.card}95`,
                      borderColor: `${colors.accent1}20`,
                    }}
                  >
                    <h4
                      className="text-lg md:text-xl font-semibold mb-1"
                      style={{ color: colors.text }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm font-medium mb-2"
                      style={{ color: colors.accent1 }}
                    >
                      {item.year}
                    </p>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: colors.muted }}
                    >
                      {item.school}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Software Proficiency */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-white">
              Softwares
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center">
              {softwareSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center space-y-3"
                >
                  {skill.logo}
                  <span className="font-medium text-sm md:text-base text-gray-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Languages */}
          <motion.div variants={fadeInUp}>
            <h3
              className="text-2xl sm:text-3xl font-semibold mb-8 text-center"
              style={{ color: colors.text }}
            >
              Typing
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {languages.map((lang) => (
                <motion.button
                  key={lang.name}
                  className="px-5 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 border"
                  style={{
                    backgroundColor:
                      selectedLanguage?.name === lang.name
                        ? colors.accent1
                        : colors.card,
                    color:
                      selectedLanguage?.name === lang.name
                        ? colors.bg
                        : colors.muted,
                    borderColor:
                      selectedLanguage?.name === lang.name
                        ? colors.accent1
                        : `${colors.accent1}30`,
                  }}
                  onClick={() => setSelectedLanguage(lang)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang.name}
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {selectedLanguage && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div
                    className="p-8 rounded-2xl border"
                    style={{
                      backgroundColor: `${colors.card}90`,
                      borderColor: `${colors.accent1}40`,
                    }}
                  >
                    <div className="text-center">
                      <p
                        className="text-sm font-medium mb-3"
                        style={{ color: colors.muted }}
                      >
                        {selectedLanguage.name} in its native script:
                      </p>
                      <div className="text-3xl md:text-4xl font-bold min-h-[60px] flex items-center justify-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        <ScrambleText text={selectedLanguage.native} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Services = () => (
  <motion.section
    id="services"
    className="py-16 md:py-24"
    style={{ backgroundColor: colors.bg }}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.2)}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: colors.text }}
        >
          My Services
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: colors.muted }}
        >
          I offer comprehensive design solutions to help your brand stand out
          and communicate effectively with your audience.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer(0.1)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {serviceList.map((service) => (
          <motion.div variants={fadeInUp} key={service.name} className="h-full">
            <div
              className="h-full p-6 md:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: colors.card,
                borderColor: `${colors.accent1}20`,
              }}
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 md:mb-6"
                style={{
                  backgroundColor: `${colors.accent1}15`,
                  color: colors.accent1,
                }}
              >
                <div className="text-xl sm:text-2xl">{service.icon}</div>
              </div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-3 leading-tight"
                style={{ color: colors.text }}
              >
                {service.name}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: colors.muted }}
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp} className="text-center mt-12 md:mt-16">
        <p
          className="text-base sm:text-lg font-medium"
          style={{ color: colors.accent1 }}
        >
          Ready to work together? Let's create something amazing.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(portfolioData.map((p) => p.category))];
  const filteredProjects =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Always Visible */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            My Portfolio
          </h2>
          <p
            className="text-center mb-12 max-w-2xl mx-auto text-base sm:text-lg"
            style={{ color: colors.muted }}
          >
            A showcase of my creative work and design solutions.
          </p>

          {/* Filter Buttons - Always Visible */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="px-4 py-1.5 text-sm sm:px-6 sm:py-2 sm:text-base rounded-full font-medium transition-colors duration-300 relative"
              >
                {filter === category && (
                  <motion.div
                    layoutId="filter-highlight"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: colors.accent1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10"
                  style={{
                    color: filter === category ? colors.bg : colors.muted,
                  }}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[18rem] lg:auto-rows-[24rem] gap-4"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1)}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  project.className || ""
                }`}
                onClick={() => setSelectedProject(project)}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                variants={fadeInUp}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: colors.accent1 }}
                  >
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-y-auto"
                style={{ backgroundColor: colors.card }}
                onClick={(e) => e.stopPropagation()}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 md:p-8">
                  <span
                    className="px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm rounded-full font-semibold tracking-wider"
                    style={{
                      backgroundColor: `${colors.accent1}20`,
                      color: colors.accent1,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 mb-3 text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                  style={{ color: colors.text }}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Contact = () => {
  const audioRef = useRef(new Audio(sentSound));
  const formRef = useRef(null);
  const [showNotification, setShowNotification] = useState(false);
  const [state, handleSubmit] = useForm("xldlbnka"); // Replace with your Formspree ID

  useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      audioRef.current.play();
      formRef.current?.reset(); // Clear form fields
      setTimeout(() => setShowNotification(false), 5000);
    }
  }, [state.succeeded]);

  return (
    <>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full shadow-lg"
            style={{ backgroundColor: colors.accent1, color: colors.bg }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <CheckCircle size={24} />
            <p className="font-semibold">Message sent successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="contact"
        className="py-24"
        style={{ backgroundColor: colors.card }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.3)}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-center mb-4"
            style={{ color: colors.text }}
          >
            Let's Create Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center mb-16 max-w-2xl mx-auto text-lg"
            style={{ color: colors.muted }}
          >
            Ready to bring your ideas to life? Let's talk.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0"
            style={{
              backgroundColor: colors.bg,
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Info Panel */}
            <div className="p-12 flex flex-col justify-between">
              <div>
                <h3
                  className="text-3xl font-bold mb-8"
                  style={{ color: colors.text }}
                >
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <MapPin size={24} />,
                      title: "Location",
                      value: "Malappuram, Kerala, India",
                    },
                    {
                      icon: <Mail size={24} />,
                      title: "Email",
                      value: "shafeela29@gmail.com",
                      href: "mailto:shafeela29@gmail.com",
                    },
                    {
                      icon: <Phone size={24} />,
                      title: "Phone",
                      value: "+91 9605 819 517",
                      href: "tel:+919605819517",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: colors.card,
                          color: colors.accent1,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="transition-colors hover:text-white"
                            style={{ color: colors.muted }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ color: colors.muted }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                {[
                  {
                    icon: <Instagram size={20} />,
                    href: "https://www.instagram.com/shafeela.nsrn?igsh=MWwzdTBvYnF6aG9mOQ==",
                    label: "Instagram",
                  },
                  {
                    icon: <Linkedin size={20} />,
                    href: "#",
                    label: "LinkedIn",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white/10"
                    style={{
                      backgroundColor: colors.card,
                      color: colors.muted,
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Form Panel */}
            <div className="p-12" style={{ backgroundColor: colors.card }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    disabled={state.submitting}
                    className="peer w-full px-4 py-3 rounded-lg bg-transparent border-2 focus:outline-none transition-colors disabled:opacity-50"
                    style={{ borderColor: colors.muted, color: colors.text }}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 px-1 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all"
                    style={{
                      color: colors.muted,
                      backgroundColor: colors.card,
                    }}
                  >
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    disabled={state.submitting}
                    className="peer w-full px-4 py-3 rounded-lg bg-transparent border-2 focus:outline-none transition-colors disabled:opacity-50"
                    style={{ borderColor: colors.muted, color: colors.text }}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 px-1 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all"
                    style={{
                      color: colors.muted,
                      backgroundColor: colors.card,
                    }}
                  >
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    placeholder=" "
                    disabled={state.submitting}
                    className="peer w-full px-4 py-3 rounded-lg bg-transparent border-2 focus:outline-none transition-colors resize-none disabled:opacity-50"
                    style={{ borderColor: colors.muted, color: colors.text }}
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2.5 px-1 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all"
                    style={{
                      color: colors.muted,
                      backgroundColor: colors.card,
                    }}
                  >
                    Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full justify-center bg-gradient-to-r from-teal-400 to-cyan-500 text-black font-bold px-8 py-4 rounded-full transition-transform transform hover:scale-105 inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {state.submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      {" "}
                      <Mail size={22} /> Send Message{" "}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

const Footer = () => (
  <footer
    className="py-12"
    style={{
      backgroundColor: colors.bg,
      borderTop: `1px solid ${colors.card}`,
    }}
  >
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <h3 className="text-3xl font-bold mb-4" style={{ color: colors.accent1 }}>
        Shafeela Nasreen.M
      </h3>
      <p className="max-w-md mx-auto mb-6" style={{ color: colors.muted }}>
        Creating meaningful designs that communicate and inspire.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        {[
          {
            icon: <Instagram size={24} />,
            href: "https://www.instagram.com/shafeela.nsrn?igsh=MWwzdTBvYnF6aG9mOQ==",
            label: "Instagram",
          },
          { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="p-3 rounded-full transition-all duration-300 transform hover:scale-110"
            style={{
              backgroundColor: colors.card,
              color: colors.muted,
              "--hover-color": colors.accent1,
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
      <p className="text-sm" style={{ color: colors.muted }}>
        &copy; {new Date().getFullYear()} Shafeela Nasreen.M. All rights
        reserved.
      </p>
    </div>
  </footer>
);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg"
          style={{ backgroundColor: colors.accent1, color: "black" }}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, rotate: -15 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Inject global styles and variables for consistency
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --focus-color: ${colors.accent1};
        --hover-color: ${colors.accent1};
      }
      html {
        scroll-behavior: smooth;
      }
      input:focus, textarea:focus {
        border-color: var(--focus-color) !important;
        box-shadow: 0 0 10px 0 var(--focus-color)30;
      }
      a:hover { color: var(--hover-color, inherit); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="dark" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
