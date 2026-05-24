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
                <img src="/lm-lens 1.png" alt="LM Lens" />
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
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 60px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "1.5rem", color: "#ffffff", fontFamily: "var(--font-body)" }}>
                The Intelligence Layer for <br/><span className="serif-italic" style={{ fontWeight: 400, letterSpacing: "-0.09em", color: "rgba(255, 255, 255, 0.9)" }}>Unstructured Data.</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.95rem, 3vw, 1.1rem)", fontWeight: 300, lineHeight: 1.6, maxWidth: "42rem", margin: "0 auto 2.5rem auto", fontFamily: "var(--font-body)" }}>
                Files are how the world stores its knowledge. LMLens reads all of it and hands it back in a shape your product can actually use.
              </p>
              <div className="hero-btns" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
                <a
                  href="#"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "#ffffff", color: "#000000", padding: "0 24px", borderRadius: "999px", fontSize: "13.5px", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", fontFamily: "var(--font-body)" }}
                >
                  Get API Acces <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
                <a
                  href="#products"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", padding: "0 24px", borderRadius: "999px", fontSize: "13.5px", fontWeight: 600, textDecoration: "none", transition: "background 0.2s", fontFamily: "var(--font-body)" }}
                >
                  Explore products
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
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>&lt; 5ms</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Token Validation</p>
            </div>
            <div style={{ background: "var(--bg)", padding: "2rem", textAlign: "center", transition: "background 0.35s ease" }}>
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>Rust</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Memory Safe Core</p>
            </div>
            <div style={{ background: "var(--bg)", padding: "2rem", textAlign: "center", transition: "background 0.35s ease" }}>
              <p style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--black)" }}>Multi-tenant</p>
              <p style={{ fontSize: "12px", color: "var(--stat-text-muted)", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Org &amp; Project Isolation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "clamp(3rem, 10vw, 5rem) 0", transition: "background 0.35s ease" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>What we offer</p>
            <h2 className="section-heading" style={{ maxWidth: "32rem" }}>
              Universal extraction, <span className="serif-gradient">structured data.</span>
            </h2>
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
            <h2 className="section-heading" style={{ maxWidth: "36rem" }}>
              One API call. <span className="serif-gradient">Any file in.</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "36rem", marginTop: "1rem" }}>
              LMLens handles the entire pipeline — from raw file ingestion to clean structured output — so your team never has to build or maintain extraction infrastructure.
            </p>
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
            <h2 className="section-heading" style={{ maxWidth: "36rem" }}>
              Every file type, <span className="serif-gradient">one endpoint.</span>
            </h2>
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
          
          <div className="api-section-header scroll-fade visible">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", marginBottom: "12px" }}>OsmiumAPI</p>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--black)", lineHeight: 1.1, maxWidth: "500px", letterSpacing: "-0.02em" }}>
                Or build anything with a powerful host of APIs
              </h2>
            </div>
            <button style={{ padding: "10px 18px", borderRadius: "99px", border: "1px solid var(--border-strong)", fontSize: "13px", fontWeight: 500, background: "transparent", color: "var(--black)", cursor: "pointer", transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = 'var(--nav-link-hover-bg)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
              Explore docs
            </button>
            <div className="crosshair" style={{ left: 0, bottom: 0 }}></div>
            <div className="crosshair" style={{ right: 0, bottom: 0 }}></div>
          </div>

          {/* Row 1: Extraction API */}
          <div className="api-row scroll-fade visible">
            <div className="api-left">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Multimodal Extraction API</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2rem" }}>
                Independently rated the leading multimodal extraction model. Choose a model to optimize for consistency, latency, or comprehension. All support 20+ languages natively.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium Flash</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>75ms latency for fast conversational extraction tasks</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium Multilingual</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Best lifelike consistent multilingual comprehension</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium v3</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Our most expressive reasoning model yet</p>
                </div>
              </div>
              <div className="crosshair" style={{ right: 0, bottom: 0 }}></div>
              <div className="crosshair" style={{ right: 0, top: 0 }}></div>
            </div>
            
            <div className="api-right">
              <div style={{ background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "16px", padding: "1.5rem", width: "100%", overflowX: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                 <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", background: "transparent", margin: 0, lineHeight: 1.6 }}>
<span style={{ color: "var(--code-keyword)" }}>import</span> {'{'} LMLensClient {'}'} <span style={{ color: "var(--code-keyword)" }}>from</span> <span style={{ color: "var(--code-string)" }}>"@lmlens/node"</span>;

<span style={{ color: "var(--code-keyword)" }}>const</span> client = <span style={{ color: "var(--code-keyword)" }}>new</span> LMLensClient({'{'} apiKey: <span style={{ color: "var(--code-string)" }}>"YOUR_API_KEY"</span> {'}'});

<span style={{ color: "var(--code-keyword)" }}>await</span> client.extract.<span style={{ color: "var(--code-func)" }}>convert</span>(<span style={{ color: "var(--code-string)" }}>"document_scan.pdf"</span>, {'{'}
  outputFormat: <span style={{ color: "var(--code-string)" }}>"json"</span>,
  text: <span style={{ color: "var(--code-string)" }}>"The first move is what sets everything in motion."</span>,
  modelId: <span style={{ color: "var(--code-string)" }}>"osmium_core_v2"</span>,
{'}'});
                 </pre>
              </div>
            </div>
          </div>

          {/* Row 2: Schema API */}
          <div className="api-row scroll-fade visible">
            <div className="api-left">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Schema Validation API</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2rem" }}>
                The most accurate schema enforcement model. Low cost and supporting automatic type-casting and zero hallucinations built directly into the inference layer.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Osmium Strict</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>98% accuracy</p>
                </div>
              </div>
              <div className="crosshair" style={{ right: 0, bottom: 0 }}></div>
            </div>
            
            <div className="api-right" style={{ justifyContent: "center", overflow: "hidden" }}>
              {/* Graphic mimicking the ElevenScribe diagram */}
              <div style={{ position: "relative", width: "100%", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-30deg) scale(1.2)", opacity: 0.8 }}>
                {/* Lines */}
                <div style={{ position: "absolute", width: "200%", height: "1px", background: "var(--border-strong)", top: "50%" }}></div>
                <div style={{ position: "absolute", width: "200%", height: "1px", background: "var(--border)", top: "25%" }}></div>
                <div style={{ position: "absolute", width: "200%", height: "1px", background: "var(--border)", top: "75%" }}></div>
                
                {/* floating blocks */}
                <div style={{ background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "8px", padding: "6px 20px", position: "absolute", top: "35%", left: "55%", transform: "translate(-50%, -50%)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", zIndex: 3 }}>
                   <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--black)" }}>Osmium Strict</span>
                </div>
                <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", padding: "6px 20px", position: "absolute", top: "50%", left: "45%", transform: "translate(-50%, -50%)", zIndex: 2, opacity: 0.7 }}>
                   <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--text-muted)" }}>JSON Schema Generator</span>
                </div>
                <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "8px", padding: "6px 20px", position: "absolute", top: "65%", left: "35%", transform: "translate(-50%, -50%)", zIndex: 1, opacity: 0.4 }}>
                   <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--text-faint)" }}>Type Validator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Batch API */}
          <div className="api-row scroll-fade visible">
            <div className="api-left" style={{ borderBottom: "none" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Batch Processing API</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2rem" }}>
                Enterprise-grade processing pipelines with natural language prompts in any format, protocol, or structure.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--black)", marginBottom: "4px" }}>Batch Pipeline</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-faint)", lineHeight: 1.5 }}>Trained on licensed data and suitable for commercial use</p>
                </div>
              </div>
              <div className="crosshair" style={{ right: 0, bottom: 0 }}></div>
            </div>
            
            <div className="api-right" style={{ borderBottom: "none" }}>
              <div style={{ background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "16px", padding: "1.5rem", width: "100%", overflowX: "auto", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
                 <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", background: "transparent", margin: 0, lineHeight: 1.6 }}>
<span style={{ color: "var(--code-keyword)" }}>import</span> {'{'} LMLensClient {'}'} <span style={{ color: "var(--code-keyword)" }}>from</span> <span style={{ color: "var(--code-string)" }}>"@lmlens/node"</span>;

<span style={{ color: "var(--code-keyword)" }}>const</span> {'{'} batch {'}'} = <span style={{ color: "var(--code-keyword)" }}>new</span> LMLensClient();

<span style={{ color: "var(--code-keyword)" }}>const</span> pipeline = <span style={{ color: "var(--code-keyword)" }}>await</span> batch.pipeline.<span style={{ color: "var(--code-func)" }}>create</span>({'{'}
  prompt: <span style={{ color: "var(--code-string)" }}>"Fast-paced structured data extraction from invoices..."</span>,
  timeoutMs: <span style={{ color: "var(--code-string)" }}>10000</span>,
{'}'});
                 </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECURITY & TRUST */}
      <section id="security" style={{ padding: "clamp(4rem, 10vw, 8rem) 0", borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem", display: "inline-block" }}>Security & Trust</p>
            <h2 className="section-heading" style={{ maxWidth: "48rem", margin: "0 auto 1.25rem" }}>
              Enterprise-grade security built into the foundation.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "38rem", margin: "0 auto" }}>
              We process millions of highly sensitive documents. Your data is isolated, encrypted, and never used to train our foundation models.
            </p>
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
