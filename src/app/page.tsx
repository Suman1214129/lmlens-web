"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "system" | "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  const applyTheme = (newTheme: "system" | "light" | "dark") => {
    const root = document.documentElement;
    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
    } else {
      root.setAttribute("data-theme", newTheme);
    }
  };

  const handleThemeChange = (newTheme: "system" | "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    if (theme !== "system") return;
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
    };
    
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className={`nav-wrapper ${isScrolled ? "scrolled" : ""}`} id="navWrapper">
          <div className={`nav-inner ${isScrolled ? "scrolled" : ""}`} id="navInner">
            <nav className="nav-desktop">
              <a href="#" className="nav-logo">
                <img src="/lm-lens 1.png" alt="LM Lens" className="nav-logo-img" />
                LM <span>LENS</span>
              </a>
              <div className="nav-center">
                <a href="#features">Features</a>
                <a href="#formats">Formats</a>
                <a href="#intelligence">Intelligence</a>
                <a href="#security">Security</a>
                <a href="#pricing">Pricing</a>
              </div>
              <div className="nav-right">
                <a href="mailto:contact@lmlens.com" className="nav-cta">
                  Get API Acces
                </a>
              </div>
            </nav>
            <div className="nav-mobile">
              <div className="nav-mobile-top">
                <a href="#" className="nav-mobile-logo">
                  LM LENS
                </a>
                <button
                  className={`nav-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div className={`nav-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <div className="nav-mobile-menu-inner">
                  <div className="nav-mobile-links">
                    <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#formats" onClick={() => setMobileMenuOpen(false)}>Formats</a>
                    <a href="#intelligence" onClick={() => setMobileMenuOpen(false)}>Intelligence</a>
                    <a href="#security" onClick={() => setMobileMenuOpen(false)}>Security</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <a href="mailto:contact@lmlens.com" className="mobile-cta">
                      Get API Acces
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(6rem, 15vh, 8rem) 0 clamp(3rem, 10vh, 5rem)", backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/hero%20bg.png')", backgroundSize: "cover", backgroundPosition: "center", transition: "background 0.35s ease" }}>
        <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="scroll-fade visible" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ maxWidth: "54rem" }}>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 60px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "1.5rem", color: "#ffffff", fontFamily: "var(--font-body)" }}>
                The Intelligence Layer for <br/><span className="serif-italic" style={{ fontWeight: 400, letterSpacing: "-0.02em", color: "rgba(255, 255, 255, 0.9)" }}>Unstructured Data.</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)", fontWeight: 400, lineHeight: 1.6, maxWidth: "42rem", margin: "0 auto 2.5rem auto", fontFamily: "var(--font-body)" }}>
                Files are how the world stores its knowledge. LMLens reads all of it and hands it back in a shape your product can actually use.
              </p>
              <div className="hero-btns" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "clamp(0.5rem, 2vw, 1rem)" }}>
                <a
                  href="#"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "#ffffff", color: "#000000", padding: "0 clamp(16px, 3vw, 24px)", borderRadius: "999px", fontSize: "clamp(12px, 2.5vw, 13.5px)", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}
                >
                  Get API Access <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
                <a
                  href="https://www.navchetna.tech/products"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", padding: "0 clamp(16px, 3vw, 24px)", borderRadius: "999px", fontSize: "clamp(12px, 2.5vw, 13.5px)", fontWeight: 600, textDecoration: "none", transition: "background 0.2s", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}
                >
                  Other products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section style={{ padding: "clamp(1.5rem, 4vw, 2.5rem) 0", borderBottom: "1px solid var(--border)", background: "var(--bg)", transition: "background 0.35s ease, border-color 0.35s ease" }}>
        <div className="section-container" style={{ marginBottom: "1.25rem" }}>
          <p className="section-eyebrow" style={{ textAlign: "center" }}>
            Trusted by teams building with intent
          </p>
        </div>
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[1, 2].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "4.5rem", paddingRight: "4.5rem", flexShrink: 0 }}>
                {[
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                  { name: "AWS", src: "/aws.svg", style: { height: "42px", width: "auto" } },
                  { name: "Plaur", src: "/plaur.svg", style: { height: "30px", width: "auto" } },
                  { name: "HomeGuru", src: "/homeguru.svg", style: { height: "34px", width: "auto" } },
                ].map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo.src}
                    alt={logo.name}
                    className="ticker-logo"
                    style={logo.style}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "clamp(2rem, 5vw, 3rem) 0", borderBottom: "1px solid var(--border)", transition: "borderColor 0.35s ease" }}>
        <div className="section-container">
          <div className="stats-grid" style={{ display: "grid", gap: "1px", background: "var(--border)" }}>
            <div style={{ background: "var(--bg)", padding: "2rem", textAlign: "center", transition: "background 0.35s ease" }}>
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>&lt; 3s</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Document Parsing</p>
            </div>
            <div style={{ background: "var(--bg)", padding: "2rem", textAlign: "center", transition: "background 0.35s ease" }}>
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>99.2%</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>OCR Accuracy</p>
            </div>
            <div style={{ background: "var(--bg)", padding: "2rem", textAlign: "center", transition: "background 0.35s ease" }}>
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>20+</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Native Languages</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "clamp(3rem, 10vw, 5rem) 0", transition: "background 0.35s ease" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>What we offer</p>
            <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
              Universal extraction, <span className="serif-gradient">structured data.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
              Send any file type and automatically receive perfectly structured, clean JSON data. Designed for developers who want to skip the infrastructure and get straight to building.
            </p>
            <a className="btn-secondary" href="#intelligence">Explore features</a>
          </div>
          <div className="features-grid" style={{ display: "grid", gap: "12px" }}>
            {[
              {
                title: "Any File Format",
                text: "Send scanned PDFs, Hindi audio recordings, video lectures, handwritten notes, or Excel reports — one unified API handles all of it.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
                  </svg>
                )
              },
              {
                title: "Structured Data Out",
                text: "Define your schema once. LMLens returns clean, structured JSON — ready to be inserted into your database or consumed by your API.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H160a8,8,0,0,1,5.66,2.34l40,40A8,8,0,0,1,216,80ZM160,51.31V80h28.69ZM200,216V96H152a8,8,0,0,1-8-8V40H56V216Z"/>
                  </svg>
                )
              },
              {
                title: "Zero Infrastructure",
                text: "No ML models to train, no GPU clusters to manage, no scaling worries. One API call replaces an entire extraction stack.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M230.14,70.54,185.46,25.86a20,20,0,0,0-28.29,0L33.86,149.17a20,20,0,0,0,0,28.29l44.68,44.68A20,20,0,0,0,92.69,228H216a12,12,0,0,0,0-24H160l70.13-70.13a20,20,0,0,0,0-28.29ZM84,204.69,39.31,160,76,123.31l44.69,44.69Zm96-96-28.69,28.69L106.62,92.69,135.31,64ZM213.31,155.69,187.54,181.46l-44.68-44.69,25.77-25.77Z"/>
                  </svg>
                )
              },
              {
                title: "Single API, Every Stack",
                text: "REST API with SDKs for JavaScript, Python, and more. Drop-in integration in under an hour, no new infrastructure required.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.71-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.28ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/>
                  </svg>
                )
              },
            ].map((feature, i) => (
              <div key={i} className="scroll-fade feature-card visible" style={{ background: "var(--gray-100)", borderRadius: "16px", padding: "2rem", transition: "background 0.35s ease" }}>
                <div style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--border-strong)", marginBottom: "1.25rem", color: "var(--text)" }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--black)" }}>{feature.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--feature-text)", lineHeight: 1.65 }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ position: "relative", padding: "clamp(3rem, 10vw, 5rem) 0", borderTop: "1px solid var(--border)", transition: "border-color 0.35s ease" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ marginBottom: "3.5rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>How it works</p>
            <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
              One API call. <span className="serif-gradient">Any file in.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
              LMLens handles the entire pipeline — from raw file ingestion to clean structured output — so your team never has to build or maintain extraction infrastructure.
            </p>
            <a className="btn-secondary" href="#formats">View supported formats</a>
          </div>

          {/* Step pipeline */}
          <div style={{ display: "grid", gap: "1px", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }} className="hiw-grid">
            {[
              {
                step: "01",
                title: "Send any file",
                text: "Upload via REST API — PDFs, audio, video, images, spreadsheets. Any format, any language, any size.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-72-88a8,8,0,0,1,8,8v24l9.37-9.37a8,8,0,0,1,11.31,11.31l-24,24a8,8,0,0,1-11.31,0l-24-24a8,8,0,0,1,11.31-11.31L120,160V136A8,8,0,0,1,128,128Z"/>
                  </svg>
                )
              },
              {
                step: "02",
                title: "Define your schema",
                text: "Tell LMLens what structure you need. JSON schema, field names, types — you decide the output shape.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.71-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.28ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"/>
                  </svg>
                )
              },
              {
                step: "03",
                title: "LMLens extracts",
                text: "Our AI reads, understands, and extracts — handling OCR, transcription, translation, and parsing automatically.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Zm-40,0a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"/>
                  </svg>
                )
              },
              {
                step: "04",
                title: "Get clean JSON",
                text: "Receive perfectly structured data matching your schema. Ready for your database, your API, or your AI pipeline.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M173.66,98.34a8,8,0,0,1,0,11.31l-56,56a8,8,0,0,1-11.31,0l-24-24a8,8,0,0,1,11.31-11.31L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
                  </svg>
                )
              },
            ].map((item, i) => (
              <div key={i} className="scroll-fade visible hiw-card" style={{ background: "var(--bg)", padding: "2.5rem 2rem", transition: "background 0.35s ease", position: "relative" }}>
                <div style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "10px", background: "var(--gray-100)", border: "1px solid var(--border-strong)", marginBottom: "1.5rem", color: "var(--text)" }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--arch-num-color)", marginBottom: "0.75rem", fontFamily: "var(--font-body)" }}>
                  Step {item.step}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.6rem", color: "var(--black)", letterSpacing: "-0.015em" }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--arch-text-color)", lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Code snippet strip */}
          <div className="scroll-fade visible" style={{ marginTop: "2rem", background: "var(--gray-100)", border: "1px solid var(--border-strong)", borderRadius: "14px", padding: "1.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", transition: "background 0.35s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1, minWidth: "260px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,95,87,0.7)", display: "block" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(255,189,46,0.7)", display: "block" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(40,200,64,0.7)", display: "block" }}></span>
              </div>
              <code style={{ fontSize: "12px", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", color: "var(--text-muted)", letterSpacing: "0.01em" }}>
                <span style={{ color: "var(--text-faint)" }}>POST</span>{" "}
                <span style={{ color: "var(--black)" }}>api.lmlens.com/v2/extract</span>{"  →  "}
                <span style={{ color: "rgba(100,200,120,0.85)" }}>200 OK</span>{"  "}
                <span style={{ color: "var(--text-faint)" }}>· 1.2s</span>
              </code>
            </div>
            <a href="#" style={{ display: "inline-flex", height: "34px", alignItems: "center", padding: "0 16px", border: "1px solid var(--border-strong)", borderRadius: "999px", fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", whiteSpace: "nowrap", transition: "color 0.2s" }}>
              View API Docs →
            </a>
          </div>
        </div>
      </section>

      {/* SUPPORTED FORMATS */}
      <section id="formats" style={{ position: "relative", padding: "clamp(3rem, 10vw, 5rem) 0", background: "var(--bg)", borderTop: "1px solid var(--border)", transition: "background 0.35s ease, border-color 0.35s ease" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Supported formats</p>
            <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
              Every file type, <span className="serif-gradient">one endpoint.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
              From standard documents to complex handwritten notes and degraded scans, we support all major formats out of the box with zero configuration required.
            </p>
            <a className="btn-secondary" href="mailto:contact@lmlens.com">Request a custom format</a>
          </div>
          <div className="formats-grid" style={{ display: "grid", gap: "12px" }}>

            {/* Documents */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <rect x="105" y="15" width="88" height="125" rx="4" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 2" opacity={0.2}/>
                  <rect x="88" y="30" width="88" height="125" rx="4" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M150 30L176 30L176 56" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                  <path d="M150 30L176 56" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 2"/>
                  <line x1="104" y1="68" x2="160" y2="68" stroke="currentColor" strokeWidth="1" opacity={0.7}/>
                  <line x1="104" y1="82" x2="148" y2="82" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" opacity={0.5}/>
                  <line x1="104" y1="96" x2="158" y2="96" stroke="currentColor" strokeWidth="0.7" opacity={0.5}/>
                  <line x1="104" y1="110" x2="140" y2="110" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" opacity={0.5}/>
                  <line x1="104" y1="124" x2="152" y2="124" stroke="currentColor" strokeWidth="0.7" opacity={0.5}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Documents</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["PDF", "DOCX", "DOC", "PPTX", "ODT", "RTF", "EPUB"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <rect x="60" y="28" width="160" height="120" rx="6" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="185" cy="58" r="14" stroke="currentColor" strokeWidth="1" opacity={0.5}/>
                  <circle cx="185" cy="58" r="5" stroke="currentColor" strokeWidth="0.6" opacity={0.3}/>
                  <path d="M60 128 L110 72 L148 108 L168 88 L220 128" stroke="currentColor" strokeWidth="1" opacity={0.6}/>
                  <path d="M60 148 L110 92 L148 128 L168 108 L220 148" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 2" opacity={0.15}/>
                  <rect x="76" y="136" width="16" height="2" rx="1" fill="currentColor" opacity={0.15}/>
                  <rect x="98" y="136" width="16" height="2" rx="1" fill="currentColor" opacity={0.15}/>
                  <rect x="120" y="136" width="16" height="2" rx="1" fill="currentColor" opacity={0.15}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Images</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["PNG", "JPG", "JPEG", "WEBP", "TIFF", "BMP", "HEIC"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spreadsheets */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <rect x="70" y="25" width="140" height="150" rx="4" stroke="currentColor" strokeWidth="1.3"/>
                  <line x1="70" y1="55" x2="210" y2="55" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <line x1="70" y1="85" x2="210" y2="85" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <line x1="70" y1="115" x2="210" y2="115" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <line x1="70" y1="145" x2="210" y2="145" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <line x1="117" y1="25" x2="117" y2="175" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <line x1="163" y1="25" x2="163" y2="175" stroke="currentColor" strokeWidth="0.8" opacity={0.5}/>
                  <circle cx="93" cy="70" r="3" fill="currentColor" opacity={0.2}/>
                  <circle cx="140" cy="70" r="3" fill="currentColor" opacity={0.2}/>
                  <circle cx="186" cy="100" r="3" fill="currentColor" opacity={0.2}/>
                  <circle cx="93" cy="130" r="3" fill="currentColor" opacity={0.2}/>
                  <circle cx="140" cy="160" r="3" fill="currentColor" opacity={0.2}/>
                  <circle cx="186" cy="40" r="3" fill="currentColor" opacity={0.2}/>
                  <rect x="80" y="37" width="24" height="6" rx="2" fill="currentColor" opacity={0.12}/>
                  <rect x="126" y="97" width="24" height="6" rx="2" fill="currentColor" opacity={0.12}/>
                  <rect x="172" y="127" width="24" height="6" rx="2" fill="currentColor" opacity={0.12}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Spreadsheets</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["XLSX", "XLS", "CSV", "TSV", "ODS"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Audio */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  {[28, 48, 32, 65, 88, 52, 78, 95, 72, 45, 82, 60, 38, 55, 30].map((h, idx) => (
                    <line key={idx} x1={72 + idx * 10} y1={100 - h / 2} x2={72 + idx * 10} y2={100 + h / 2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity={0.35 + (h / 95) * 0.3}/>
                  ))}
                  <circle cx="140" cy="100" r="48" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 3" opacity={0.12}/>
                  <circle cx="140" cy="100" r="62" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 4" opacity={0.08}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Audio</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["MP3", "WAV", "M4A", "FLAC", "OGG", "AAC", "WMA"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <rect x="55" y="30" width="170" height="110" rx="8" stroke="currentColor" strokeWidth="1.3"/>
                  <rect x="65" y="40" width="150" height="90" rx="4" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 2" opacity={0.25}/>
                  <polygon points="130,70 130,110 160,90" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
                  <line x1="55" y1="152" x2="225" y2="152" stroke="currentColor" strokeWidth="0.8" opacity={0.3}/>
                  <circle cx="80" cy="152" r="3" fill="currentColor" opacity={0.25}/>
                  <rect x="90" y="150" width="60" height="4" rx="2" fill="currentColor" opacity={0.12}/>
                  <line x1="160" y1="152" x2="210" y2="152" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" opacity={0.2}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Video</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["MP4", "MOV", "AVI", "MKV", "WEBM", "FLV"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text & Code */}
            <div className="scroll-fade visible" style={{ background: "var(--gray-100)", borderRadius: "16px", overflow: "hidden", transition: "background 0.35s ease" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem 2rem 0.75rem", height: "clamp(120px, 28vw, 190px)", color: "var(--black)" }}>
                <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                  <path d="M95 55 L70 100 L95 145" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.55}/>
                  <path d="M185 55 L210 100 L185 145" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={0.55}/>
                  <line x1="115" y1="72" x2="165" y2="72" stroke="currentColor" strokeWidth="0.9" opacity={0.4}/>
                  <line x1="120" y1="86" x2="155" y2="86" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" opacity={0.3}/>
                  <line x1="120" y1="100" x2="170" y2="100" stroke="currentColor" strokeWidth="0.9" opacity={0.4}/>
                  <line x1="125" y1="114" x2="150" y2="114" stroke="currentColor" strokeWidth="0.7" strokeDasharray="4 3" opacity={0.3}/>
                  <line x1="115" y1="128" x2="160" y2="128" stroke="currentColor" strokeWidth="0.9" opacity={0.4}/>
                  <path d="M145 38 L135 162" stroke="currentColor" strokeWidth="0.7" opacity={0.15}/>
                  <circle cx="110" cy="100" r="2.5" fill="currentColor" opacity={0.18}/>
                  <circle cx="170" cy="100" r="2.5" fill="currentColor" opacity={0.18}/>
                </svg>
              </div>
              <div style={{ padding: "0.5rem 1.5rem 1.5rem" }}>
                <h3 style={{ fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--black)", marginBottom: "0.85rem" }}>Text & Code</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {["TXT", "MD", "JSON", "XML", "HTML", "YAML"].map((f, j) => (
                    <span key={j} style={{ display: "inline-flex", alignItems: "center", height: "22px", padding: "0 8px", borderRadius: "5px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.03em", background: "var(--bg)", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace", transition: "background 0.35s ease, color 0.35s ease" }}>.{f.toLowerCase()}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTELLIGENCE — APIs */}
      <section id="intelligence" style={{ position: "relative", padding: "clamp(4rem, 10vw, 8rem) 0", borderTop: "1px solid var(--border)" }}>
        <div className="section-container">
          
          <div className="api-section-header scroll-fade visible" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", paddingBottom: "2rem" }}>
            <div style={{ flex: "1 1 500px" }}>
              <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>OsmiumAPI</p>
              <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
                Build anything with a <span className="serif-gradient">powerful host of APIs.</span>
              </h2>
              <div className="section-divider"></div>
              <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
                Tap into the same multimodal foundation models that power LMLens. Highly optimized for scale, latency, and structural accuracy.
              </p>
            </div>
            <a className="btn-secondary" href="#" style={{ marginBottom: "1.5rem" }}>
              Explore docs
            </a>
            <div className="crosshair" style={{ left: 0, bottom: 0 }}></div>
            <div className="crosshair" style={{ right: 0, bottom: 0 }}></div>
          </div>

          {/* Bento Grid for APIs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            
            {/* Card 1 */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Multimodal Extraction</h3>
                <p className="section-body" style={{ marginBottom: "2rem" }}>
                  Independently rated the leading multimodal extraction model. Optimised for consistency, latency, and comprehension across 20+ languages natively.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border-strong)" }}>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium Flash</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-faint)" }}>75ms latency for fast conversational extraction</p>
                  </div>
                  <div style={{ padding: "1rem", background: "var(--bg)", borderRadius: "12px", border: "1px solid var(--border-strong)" }}>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium v3</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-faint)" }}>Our most expressive reasoning model yet</p>
                  </div>
                </div>
              </div>
            </div>            {/* Card 2 */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Schema Validation</h3>
                <p className="section-body" style={{ marginBottom: "2rem" }}>
                  The most accurate schema enforcement model. Built-in automatic type-casting and zero hallucinations directly in the inference layer.
                </p>
                
                <div style={{ background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "16px", padding: "1.5rem", overflowX: "auto" }}>
                  <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", margin: 0, lineHeight: 1.6 }}>
<span style={{ color: "var(--code-keyword)" }}>const</span> schema = {'{'}
  name: <span style={{ color: "var(--code-string)" }}>"string"</span>,
  age: <span style={{ color: "var(--code-string)" }}>"number"</span>,
  hasInsurance: <span style={{ color: "var(--code-string)" }}>"boolean"</span>
{'}'};
                  </pre>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gridColumn: "1 / -1" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Batch Processing API</h3>
                  <p className="section-body" style={{ marginBottom: "1.5rem" }}>
                    Process millions of documents asynchronously. Automatically scales to 50,000 requests per minute with built-in retries and webhook callbacks.
                  </p>
                  <a className="btn-secondary" href="#pricing">View batch pricing</a>
                </div>
                <div style={{ flex: "1 1 400px", background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "16px", padding: "1.5rem", overflowX: "auto" }}>
                  <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", margin: 0, lineHeight: 1.6 }}>
<span style={{ color: "var(--code-keyword)" }}>await</span> client.batch.<span style={{ color: "var(--code-func)" }}>create</span>({'{'}
  files: [<span style={{ color: "var(--code-string)" }}>"s3://bucket/docs/*"</span>],
  webhookUrl: <span style={{ color: "var(--code-string)" }}>"https://api.yourcorp.com/callback"</span>,
{'}'});
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: "clamp(4rem, 10vw, 8rem) 0", borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ textAlign: "center", marginBottom: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Pricing</p>
            <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
              Pay only for <span className="serif-gradient">what you extract.</span>
            </h2>
            <div className="section-divider" style={{ maxWidth: "12rem", margin: "1.5rem auto" }}></div>
            <p className="section-body" style={{ maxWidth: "36rem", margin: "0 auto" }}>
              Transparent pricing based on document complexity and volume. No hidden fees or seat licenses.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            
            {/* Free */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--black)", marginBottom: "0.5rem" }}>Developer</h3>
              <p className="section-body" style={{ marginBottom: "1.5rem" }}>Perfect for testing and side projects.</p>
              <div style={{ marginBottom: "2rem", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 500, color: "var(--black)", letterSpacing: "-0.04em" }}>$0</span>
                <span style={{ color: "var(--text-faint)", fontSize: "0.9rem" }}>/month</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> 1,000 pages per month</li>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> Standard extraction models</li>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> Community support</li>
              </ul>
              <a className="btn-secondary" style={{ width: "100%" }} href="#">Start for free</a>
            </div>

            {/* Pro */}
            <div className="scroll-fade visible" style={{ background: "var(--black)", border: "1px solid var(--border-strong)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #10b981, #eab308)" }}></div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--bg)", marginBottom: "0.5rem" }}>Production</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>For teams building core workflows.</p>
              <div style={{ marginBottom: "2rem", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 500, color: "var(--bg)", letterSpacing: "-0.04em" }}>$49</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>/month</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                <li style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--bg)" }}>✓</span> 25,000 pages per month</li>
                <li style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--bg)" }}>✓</span> Advanced Osmium Flash & v3</li>
                <li style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--bg)" }}>✓</span> Batch Processing API</li>
              </ul>
              <a href="#" style={{ background: "var(--bg)", color: "var(--black)", padding: "0 18px", height: "36px", borderRadius: "999px", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 500, fontSize: "13px", textDecoration: "none" }}>Upgrade to Pro</a>
            </div>

            {/* Enterprise */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--black)", marginBottom: "0.5rem" }}>Enterprise</h3>
              <p className="section-body" style={{ marginBottom: "1.5rem" }}>Custom limits and deployment.</p>
              <div style={{ marginBottom: "2rem", display: "flex", alignItems: "baseline", gap: "4px" }}>
                <span style={{ fontSize: "2.5rem", fontWeight: 500, color: "var(--black)", letterSpacing: "-0.04em" }}>Custom</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1 }}>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> Unlimited volume pricing</li>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> Dedicated VPC / On-premise</li>
                <li style={{ fontSize: "0.95rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--black)" }}>✓</span> SLA & 24/7 Support</li>
              </ul>
              <a className="btn-secondary" style={{ width: "100%" }} href="mailto:contact@lmlens.com">Contact Sales</a>
            </div>

          </div>
        </div>
      </section>

      {/* SECURITY & TRUST */}
      <section id="security" style={{ padding: "clamp(4rem, 10vw, 8rem) 0", borderTop: "1px solid var(--border)", background: "var(--bg)" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ textAlign: "center", marginBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Security & Trust</p>
            <h2 className="section-heading" style={{ maxWidth: "48rem", marginBottom: "1rem" }}>
              Enterprise-grade security <span className="serif-gradient">built into the foundation.</span>
            </h2>
            <div className="section-divider" style={{ maxWidth: "16rem", margin: "1.5rem auto" }}></div>
            <p className="section-body" style={{ maxWidth: "38rem", margin: "0 auto 1.5rem" }}>
              We process millions of highly sensitive documents. Your data is isolated, encrypted, and never used to train our foundation models.
            </p>
            <a className="btn-secondary" href="mailto:contact@lmlens.com">Request security whitepaper</a>
          </div>
          
          <div className="scroll-fade visible security-grid" style={{ display: "grid", gap: "2rem" }}>
             {/* Box 1 */}
             <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
               <div style={{ marginBottom: "1.25rem", color: "var(--black)" }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
               </div>
               <h4 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.5rem" }}>Zero Data Retention</h4>
               <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>By default, files are processed in memory and purged immediately after extraction.</p>
             </div>
             
             {/* Box 2 */}
             <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
               <div style={{ marginBottom: "1.25rem", color: "var(--black)" }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
               </div>
               <h4 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.5rem" }}>SOC2 & GDPR Ready</h4>
               <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Our infrastructure and processes are designed to meet the strictest compliance standards.</p>
             </div>

             {/* Box 3 */}
             <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
               <div style={{ marginBottom: "1.25rem", color: "var(--black)" }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
               </div>
               <h4 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.5rem" }}>No Model Training</h4>
               <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Your proprietary data belongs to you. It is never used to fine-tune or train OsmiumLLM.</p>
             </div>

             {/* Box 4 */}
             <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
               <div style={{ marginBottom: "1.25rem", color: "var(--black)" }}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
               </div>
               <h4 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.5rem" }}>Isolated Compute</h4>
               <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Enterprise workloads run in dedicated, isolated VPCs with end-to-end encryption.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: "clamp(4rem, 10vw, 6rem) 0", background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "24px", padding: "clamp(3rem, 8vw, 5rem) 2rem", textAlign: "center", maxWidth: "60rem", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.02)" }}>
            {/* Subtle glow */}
            <div style={{ position: "absolute", top: "-50%", left: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", top: "-50%", right: "-10%", width: "50%", height: "200%", background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.05) 0%, transparent 70%)", pointerEvents: "none" }}></div>

            <h2 className="section-heading" style={{ marginBottom: "1.5rem", maxWidth: "40rem", position: "relative", zIndex: 1 }}>
              Ready to automate <span className="serif-gradient">your documents?</span>
            </h2>
            <p className="section-body" style={{ maxWidth: "32rem", marginBottom: "2rem", position: "relative", zIndex: 1 }}>
              Get in touch and see how LMLens can handle document extraction and AI parsing for your organization.
            </p>
            <a href="mailto:contact@lmlens.com" style={{ background: "var(--black)", color: "var(--bg)", padding: "0 24px", height: "44px", borderRadius: "999px", display: "inline-flex", alignItems: "center", fontWeight: 500, fontSize: "14px", textDecoration: "none", transition: "opacity 0.2s", position: "relative", zIndex: 1 }} onMouseOver={e => e.currentTarget.style.opacity = '0.8'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
              Get API Access
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--footer-divider)", padding: "clamp(3rem, 10vw, 5rem) 0 3rem", transition: "background 0.35s ease, border-color 0.35s ease" }}>
        <div className="section-container">
          <div style={{ display: "grid", gap: "4rem", marginBottom: "4rem" }} className="footer-grid">
            <div>
              <a href="#" className="nav-logo" style={{ marginBottom: "1.5rem", display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                <img src="/lm-lens 1.png" alt="LM Lens" style={{ width: "24px", height: "24px", filter: "var(--logo-filter)" }} />
                <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text)" }}>LM <span style={{ opacity: 0.55 }}>LENS</span></span>
              </a>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6, maxWidth: "22rem" }}>
                Universal file intelligence API. Extracting clean, structured data from any file with a single API call.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--footer-eyebrow)", marginBottom: "1.5rem" }}>Platform</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="#features" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Features</a>
                <a href="#formats" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Formats</a>
                <a href="#intelligence" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Intelligence</a>
                <a href="#security" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Security</a>
                <a href="#pricing" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Pricing</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--footer-eyebrow)", marginBottom: "1.5rem" }}>Our Products</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="https://navchetna.tech" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Navchetna Tech</a>
                <a href="https://osmium.co.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Osmium LLM</a>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--footer-eyebrow)", marginBottom: "1.5rem" }}>Company</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ color: "var(--footer-link)", fontSize: "14px" }}>Navchetna Technologies</span>
                <a href="mailto:contact@lmlens.com" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">contact@lmlens.com</a>
                <a href="mailto:contact@navchetna.tech" style={{ color: "var(--footer-link)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">contact@navchetna.tech</a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--footer-divider)", paddingTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
            <p style={{ color: "var(--footer-legal)", fontSize: "13px" }}>
              &copy; {new Date().getFullYear()} Navchetna Technologies. All rights reserved.
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ color: "var(--footer-legal)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                NINELLMS SOLUTIONS LLP
              </span>
              
              <div className="theme-toggle-group">
                <button 
                  className={`theme-btn ${theme === "system" ? "active" : ""}`} 
                  onClick={() => handleThemeChange("system")}
                >
                  System
                </button>
                <button 
                  className={`theme-btn ${theme === "light" ? "active" : ""}`} 
                  onClick={() => handleThemeChange("light")}
                >
                  Light
                </button>
                <button 
                  className={`theme-btn ${theme === "dark" ? "active" : ""}`} 
                  onClick={() => handleThemeChange("dark")}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
