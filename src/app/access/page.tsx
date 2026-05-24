"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AccessPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', useCase: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://dashboard.lmlens.com';
  };

  return (
    <>
      <style>{`
        .access-page {
          display: flex;
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
        }

        /* ── Left image panel ── */
        .access-image {
          display: none;
          position: relative;
          flex: 0 0 48%;
          overflow: hidden;
        }
        .access-image img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        @media (min-width: 1024px) {
          .access-image { display: block; }
        }

        /* ── Right form panel ── */
        .access-form-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }
        .access-form-wrap {
          max-width: 400px;
          width: 100%;
        }

        /* ── Rounded pill input (per spec) ── */
        .field-group { margin-bottom: 1.5rem; }
        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-faint);
          margin-bottom: 6px;
        }
        .field-input {
          height: 48px;
          width: 100%;
          border-radius: 16px;
          padding: 12px 16px;
          background: var(--surface);
          color: var(--text);
          placeholder-color: var(--text-faint);
          font-size: 14px;
          font-weight: 500;
          font-family: inherit;
          outline: none;
          border: none;
          ring: none;
          transition: box-shadow 0.2s ease;
          box-shadow: inset 0 0 0 1.5px transparent;
          -webkit-appearance: none;
        }
        .field-input::placeholder {
          color: var(--text-faint);
          font-weight: 400;
        }
        .field-input:focus {
          box-shadow: inset 0 0 0 2px var(--black);
        }
        .field-input.textarea {
          height: auto;
          min-height: 80px;
          resize: none;
          border-radius: 16px;
          line-height: 1.5;
          padding-top: 14px;
        }

        /* ── Submit ── */
        .access-submit {
          width: 100%;
          margin-top: 0.25rem;
          background: var(--black);
          color: var(--bg);
          border: none;
          border-radius: 999px;
          padding: 14px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          letter-spacing: 0.01em;
        }
        .access-submit:hover { opacity: 0.85; }
        .access-submit:active { transform: scale(0.985); }

        .access-hint {
          font-size: 11px;
          color: var(--text-faint);
          margin-top: 5px;
          padding-left: 4px;
        }
      `}</style>

      <div className="access-page">
        {/* Left: Image only — clean, no overlay, no darkening */}
        <div className="access-image">
          <img src="/hero%20bg%20portrait.png" alt="" />
        </div>

        {/* Right: Form */}
        <div className="access-form-panel">
          <div className="access-form-wrap">
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-faint)', textDecoration: 'none', marginBottom: '2.5rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--black)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-faint)'}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
              Back
            </Link>

            <h1 style={{ fontSize: '1.625rem', fontWeight: 600, color: 'var(--black)', marginBottom: '0.3rem', letterSpacing: '-0.02em' }}>Get API Access</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', lineHeight: 1.55, marginBottom: '2rem' }}>
              Provision your API keys and access the LMLens dashboard.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label">Full Name <span style={{ opacity: 0.5 }}>*</span></label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" className="field-input" />
              </div>

              <div className="field-group">
                <label className="field-label">Work Email <span style={{ opacity: 0.5 }}>*</span></label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" className="field-input" />
              </div>

              <div className="field-group">
                <label className="field-label">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className="field-input" />
                <p className="access-hint">For priority onboarding. We never spam.</p>
              </div>

              <div className="field-group">
                <label className="field-label">Use Case</label>
                <textarea name="useCase" value={formData.useCase} onChange={handleChange} placeholder="e.g. Invoice extraction, medical record parsing…" rows={3} className="field-input textarea"></textarea>
              </div>

              <button type="submit" className="access-submit" style={{ marginTop: '0.75rem' }}>
                Continue to Dashboard
              </button>

              <p style={{ textAlign: 'center', fontSize: '11px', color: 'var(--text-faint)', marginTop: '1.25rem', lineHeight: 1.6 }}>
                By continuing you agree to Navchetna's{' '}
                <a href="https://www.navchetna.tech/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Terms of Service</a>
                {' '}and{' '}
                <a href="https://www.navchetna.tech/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--black)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
