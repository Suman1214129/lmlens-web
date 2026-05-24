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
                <a href="#formats">File Types</a>
                <a href="#intelligence">Intelligence</a>
                <a href="#security">Security</a>
              </div>
              <div className="nav-right">
                <a href="/access" className="nav-cta">
                  Get API Access
                </a>
              </div>
            </nav>
            <div className="nav-mobile">
              <div className="nav-mobile-top">
                <a href="#" className="nav-mobile-logo">
                  <img src="/lm-lens 1.png" alt="LM Lens" className="nav-logo-img" />
                  LM <span>LENS</span>
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
                    <a href="#formats" onClick={() => setMobileMenuOpen(false)}>File Types</a>
                    <a href="#intelligence" onClick={() => setMobileMenuOpen(false)}>Intelligence</a>
                    <a href="#security" onClick={() => setMobileMenuOpen(false)}>Security</a>
                    <a href="/access" className="mobile-cta">
                      Get API Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="section-container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div className="scroll-fade visible" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ maxWidth: "54rem", padding: "0 1rem" }}>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 60px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: "1.5rem", color: "#ffffff", fontFamily: "var(--font-body)", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                The Intelligence Layer for <br/><span className="serif-italic" style={{ fontWeight: 400, letterSpacing: "-0.02em", color: "rgba(255, 255, 255, 0.9)" }}>Unstructured Data.</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(0.75rem, 2.2vw, 1.05rem)", fontWeight: 400, lineHeight: 1.6, maxWidth: "42rem", margin: "0 auto 2.5rem auto", fontFamily: "var(--font-body)", textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                Files are how the world stores its knowledge. LMLens reads all of it and hands it back in a shape your product can actually use.
              </p>
              <div className="hero-btns" style={{ display: "flex", flexWrap: "nowrap", justifyContent: "center", gap: "clamp(0.5rem, 2vw, 1rem)" }}>
                <a
                  href="/access"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "#ffffff", color: "#000000", padding: "0 clamp(16px, 3vw, 24px)", borderRadius: "999px", fontSize: "clamp(12px, 2.5vw, 13.5px)", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s", fontFamily: "var(--font-body)", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}
                >
                  Get API Access <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </a>
                <a
                  href="https://api.navchetna.tech/v1/estimate" target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", height: "48px", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(12px)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "#ffffff", padding: "0 clamp(16px, 3vw, 24px)", borderRadius: "999px", fontSize: "clamp(12px, 2.5vw, 13.5px)", fontWeight: 600, textDecoration: "none", transition: "background 0.2s", fontFamily: "var(--font-body)", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}
                >
                  API Pricing
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
          </div>
          <div className="features-grid" style={{ display: "grid", gap: "12px" }}>
            {[
              {
                title: "Any File Format",
                text: "Send scanned PDFs, Hindi audio recordings, video lectures, handwritten notes, or Excel reports — one unified API handles all of it.",
                icon: <i className="ph ph-files" style={{ fontSize: "22px" }}></i>
              },
              {
                title: "Structured Data Out",
                text: "Define your schema once. LMLens returns clean, structured JSON — ready to be inserted into your database or consumed by your API.",
                icon: <i className="ph ph-brackets-curly" style={{ fontSize: "22px" }}></i>
              },
              {
                title: "Zero Infrastructure",
                text: "No ML models to train, no GPU clusters to manage, no scaling worries. One API call replaces an entire extraction stack.",
                icon: <i className="ph ph-magic-wand" style={{ fontSize: "22px" }}></i>
              },
              {
                title: "Single API, Every Stack",
                text: "REST API with SDKs for JavaScript, Python, and more. Drop-in integration in under an hour, no new infrastructure required.",
                icon: <i className="ph ph-code" style={{ fontSize: "22px" }}></i>
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
              Two modes. <span className="serif-gradient">Every use case.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
              Send any file to a single endpoint and choose how LMLens processes it. RAW gives you everything as plain text. ENHANCED uses OsmiumLLM to understand, structure, and map your data.
            </p>
          </div>

          {/* Mode comparison — horizontal strip */}
          <div className="scroll-fade visible hiw-modes-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}>

            {/* RAW */}
            <div style={{ padding: "2rem 2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                <code style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>RAW</code>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.4rem" }}>Plain text extraction</h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Extracts everything as plain text. Like running <code style={{ fontFamily: "monospace", fontSize: "11.5px", background: "var(--bg)", padding: "1px 5px", borderRadius: "4px", border: "1px solid var(--border-strong)" }}>cat</code> on any file type. No AI formatting.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Indexing", "Search", "Piping into tools"].map(u => (
                  <span key={u} style={{ padding: "4px 10px", border: "1px solid var(--border-strong)", borderRadius: "6px", fontSize: "11px", color: "var(--text-faint)", fontWeight: 500 }}>{u}</span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", background: "var(--border)", margin: "1.5rem 0" }}></div>

            {/* ENHANCED */}
            <div style={{ padding: "2rem 2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                <code style={{ fontFamily: "monospace", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)" }}>ENHANCED</code>
                <span style={{ fontSize: "10px", fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.04em" }}>OsmiumLLM</span>
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "var(--black)", marginBottom: "0.4rem" }}>Intelligent structuring</h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Extracts + structures data into your desired format and schema. Built for APIs, dashboards, automation, and data pipelines.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["APIs", "Dashboards", "Automation", "Data pipelines"].map(u => (
                  <span key={u} style={{ padding: "4px 10px", border: "1px solid var(--border-strong)", borderRadius: "6px", fontSize: "11px", color: "var(--text-faint)", fontWeight: 500 }}>{u}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced sub-behaviors */}
          <div className="scroll-fade visible" style={{ marginTop: "1.5rem" }}>
            <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-faint)", marginBottom: "1rem" }}>Enhanced mode behavior</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                {
                  condition: "Schema provided",
                  desc: "Maps data to your exact field structure. Missing fields return",
                  code: '"No matching data found"',
                },
                {
                  condition: "Format, no schema",
                  desc: "Auto-structures intelligently based on the content type and detected layout.",
                  code: null,
                },
                {
                  condition: "Nothing provided",
                  desc: "Returns JSON with an auto-detected structure — LMLens decides the best shape.",
                  code: null,
                },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "baseline", padding: "0.875rem 0", borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--black)", minWidth: "140px", flexShrink: 0 }}>{b.condition}</span>
                  <p style={{ fontSize: "12.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {b.desc}{b.code && <>{' '}<code style={{ fontFamily: "monospace", fontSize: "11px", background: "var(--surface)", padding: "1px 5px", borderRadius: "4px", border: "1px solid var(--border-strong)", color: "var(--code-string)", whiteSpace: "nowrap" }}>{b.code}</code></>}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORTED FORMATS */}
      <section id="formats" style={{ position: "relative", padding: "clamp(3rem, 10vw, 5rem) 0", background: "var(--bg)", borderTop: "1px solid var(--border)", transition: "background 0.35s ease, border-color 0.35s ease" }}>
        <div className="section-container">
          <div className="scroll-fade visible" style={{ marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Supported file types</p>
            <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
              Every file type, <span className="serif-gradient">one endpoint.</span>
            </h2>
            <div className="section-divider"></div>
            <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
              From standard documents to complex handwritten notes and degraded scans, we support all major formats out of the box with zero configuration required.
            </p>
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
          
          <div className="api-section-header scroll-fade visible" style={{ paddingBottom: "1.5rem", position: "relative" }}>
            <div style={{ maxWidth: "500px" }}>
              <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>OsmiumAPI</p>
              <h2 className="section-heading" style={{ maxWidth: "36rem", marginBottom: "1rem" }}>
                Build anything with a <span className="serif-gradient">powerful host of APIs.</span>
              </h2>
              <div className="section-divider"></div>
              <p className="section-body" style={{ maxWidth: "36rem", marginBottom: "1.5rem" }}>
                Tap into the same multimodal foundation models that power LMLens. Highly optimized for scale, latency, and structural accuracy.
              </p>
            </div>
          </div>

          {/* Bento Grid for APIs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            
            {/* Card 1 */}
            <div className="scroll-fade visible" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 500, color: "var(--black)", marginBottom: "1rem" }}>Multimodal Extraction</h3>
                <p className="section-body" style={{ marginBottom: "1.5rem" }}>
                  Powered by <strong>OsmiumLLM</strong> — understands not just text, but structure, layout, and relationships between elements across any file type.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {["Document OCR", "Vision", "Speech to Text", "Translation", "Structured Output", "Embeddings"].map((cap) => (
                    <span key={cap} style={{ padding: "8px 14px", background: "var(--bg)", borderRadius: "999px", border: "1px solid var(--border-strong)", fontSize: "0.8rem", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.01em" }}>{cap}</span>
                  ))}
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
                  <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", margin: 0, lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
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
                </div>
                <div style={{ flex: "1 1 400px", background: "var(--bg)", border: "1px solid var(--border-strong)", borderRadius: "16px", padding: "1.5rem", overflowX: "auto" }}>
                  <pre style={{ fontSize: "12px", fontFamily: "monospace", color: "var(--code-text)", margin: 0, lineHeight: 1.6, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
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
          </div>
          
          <div className="scroll-fade visible security-grid" style={{ display: "grid", gap: "1rem" }}>
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
            <a href="/access" style={{ background: "var(--black)", color: "var(--bg)", padding: "0 24px", height: "44px", borderRadius: "999px", display: "inline-flex", alignItems: "center", fontWeight: 500, fontSize: "14px", textDecoration: "none", transition: "opacity 0.2s", position: "relative", zIndex: 1 }} onMouseOver={e => e.currentTarget.style.opacity = '0.8'} onMouseOut={e => e.currentTarget.style.opacity = '1'}>
              Get API Access
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--footer-bg)", borderTop: "1px solid var(--footer-divider)", transition: "background 0.35s ease, border-color 0.35s ease" }}>
        <div style={{ margin: "0 auto", maxWidth: "80rem", padding: "0 1.25rem" }}>
          {/* Main row — brand left, columns right */}
          <div className="footer-main-row">

            {/* Brand */}
            <div className="footer-brand">
              <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--black)" }}>Navchetna Technologies</span>
              <p style={{ marginTop: "1rem", fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "220px" }}>
                Based in India, For India,<br />By Students of India
              </p>
            </div>

            {/* Columns row */}
            <div className="footer-cols-row">

              {/* Products */}
              <div style={{ flex: "1 1 130px" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--footer-eyebrow)", marginBottom: "1.25rem" }}>Products</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    { label: "All Products", href: "https://navchetna.tech/products" },
                    { label: "Osmium AI", href: "https://www.osmium.co.in/", external: true },
                    { label: "Natraj", href: "https://natraj.navchetna.tech/", external: true },
                    { label: "Aegis Auth", href: "https://aegis.navchetna.tech/", external: true },
                    { label: "Kriya", href: "https://kriya.navchetna.tech/", external: true },
                    { label: "LM Lens", href: "#" },
                  ].map(({ label, href, external }) => (
                    <li key={label}>
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontSize: "13.5px", color: "var(--footer-link)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} className="footer-link-hover">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div style={{ flex: "1 1 160px" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--footer-eyebrow)", marginBottom: "1.25rem" }}>Services</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {["Product Development", "AI & Automation", "Design & Branding", "Strategy & Management"].map((s) => (
                    <li key={s}>
                      <a href="https://navchetna.tech/services" style={{ fontSize: "13.5px", color: "var(--footer-link)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} className="footer-link-hover">{s}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div style={{ flex: "1 1 120px" }}>
                <p style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--footer-eyebrow)", marginBottom: "1.25rem" }}>Company</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {[
                    { label: "About Us", href: "https://navchetna.tech/about" },
                    { label: "Careers", href: "https://navchetna.tech/career" },
                    { label: "News", href: "https://navchetna.tech/news" },
                    { label: "Contact", href: "https://navchetna.tech/contact" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} style={{ fontSize: "13.5px", color: "var(--footer-link)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} className="footer-link-hover">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid var(--footer-divider)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", padding: "2rem 0", fontSize: "12px", color: "var(--footer-legal)", fontWeight: 500 }} className="footer-bottom-bar">
            <span style={{ alignSelf: "flex-start" }}>© {new Date().getFullYear()} Navchetna Technologies. All rights reserved.</span>
            <div className="footer-bottom-inner">
              <div className="footer-social-links">
                <a href="https://www.linkedin.com/company/Navchetna-Technology/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">LinkedIn</a>
                <a href="https://www.instagram.com/navchetna.tech/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Instagram</a>
                <span className="footer-divider-dot" style={{ width: "1px", height: "12px", background: "var(--footer-divider)", display: "inline-block" }}></span>
                <a href="https://www.navchetna.tech/privacy" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Privacy Policy</a>
                <a href="https://www.navchetna.tech/terms" style={{ color: "var(--footer-legal)", textDecoration: "none", transition: "color 0.2s" }} className="footer-link-hover">Terms of Service</a>
              </div>
              {/* Theme toggle */}
              <div className="theme-toggle-group">
                <button className={`theme-btn ${theme === "system" ? "active" : ""}`} onClick={() => handleThemeChange("system")}>System</button>
                <button className={`theme-btn ${theme === "light" ? "active" : ""}`} onClick={() => handleThemeChange("light")}>Light</button>
                <button className={`theme-btn ${theme === "dark" ? "active" : ""}`} onClick={() => handleThemeChange("dark")}>Dark</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
