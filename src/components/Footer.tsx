import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#333333",
        borderTop: "1px solid rgba(29, 118, 130, 0.2)",
      }}
    >
      <div
        style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 24px 48px" }}
      >
        {/* 4-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Column 1: Logo + Mission */}
          <div>
            <Link
              href="/"
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}
              aria-label="Advisor Jay powered by Farther - Home"
            >
              <span
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#F7F4EE",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                }}
              >
                Advisor Jay
              </span>
              <span
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "rgba(247, 244, 238, 0.65)",
                  marginTop: 5,
                  letterSpacing: "0.02em",
                }}
              >
                powered by{" "}
                <span style={{ color: "#1d7682", fontWeight: 600 }}>Farther</span>
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                fontWeight: 300,
                color: "#b6d0ed",
                maxWidth: 280,
                lineHeight: 1.7,
                marginTop: 20,
              }}
            >
              I help families, professionals, and business owners build
              financial plans that actually make sense for their lives. Jay Chang,
              VP, Wealth Advisor at Farther Finance Advisors LLC, an independent,
              SEC-registered investment adviser.
            </p>

            <a
              href="https://www.linkedin.com/in/jaychang480"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jay Chang on LinkedIn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                marginTop: 16,
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#b6d0ed",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              className="footer-linkedin-link"
            >
              LinkedIn
            </a>
          </div>

          {/* Column 2: Wealth Management */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Wealth Management
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Investment Management", href: "/services/investments" },
                { label: "Financial Planning", href: "/services/financial-planning" },
                { label: "Tax Optimization", href: "/services/tax-optimization" },
                { label: "Estate Planning", href: "/services/trust-estate" },
                { label: "Retirement Planning", href: "/services/retirement-planning" },
                { label: "Business Owner Services", href: "/services/business-owners" },
                { label: "401(k) & Qualified Plans", href: "/services/401k" },
                { label: "Alternative Investments", href: "/services/alternatives" },
                { label: "Generational Wealth", href: "/services/generational-wealth" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: 14,
                      color: "#b6d0ed",
                      textDecoration: "none",
                      lineHeight: 2.2,
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Locations */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Areas We Serve
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0" }}>
              {[
                { label: "Scottsdale, AZ", href: "/scottsdale" },
                { label: "California", href: "/california" },
                { label: "Areas We Serve", href: "/areas-we-serve" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: 14,
                      color: "#b6d0ed",
                      textDecoration: "none",
                      lineHeight: 2.2,
                      transition: "color 0.15s",
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Scottsdale NAP Block */}
            <div
              itemScope
              itemType="https://schema.org/FinancialService"
              style={{ marginBottom: 20 }}
            >
              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  color: "#b6d0ed",
                  lineHeight: 1.7,
                }}
              >
                <span itemProp="name" style={{ display: "none" }}>Scottsdale Office</span>
                <span itemProp="addressLocality">Scottsdale</span>,{" "}
                <span itemProp="addressRegion">AZ</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 300,
                  color: "#b6d0ed",
                  marginTop: 2,
                }}
              >
                Based in Tempe, Arizona. Serving clients nationwide.
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: 11,
                  fontWeight: 300,
                  color: "#b6d0ed",
                  marginTop: 6,
                  lineHeight: 1.6,
                  opacity: 0.75,
                }}
              >
                Serving Phoenix, Scottsdale, Tempe, Chandler, Gilbert, Mesa, Paradise Valley, Flagstaff, Tucson, and the greater Phoenix metro.
              </div>
            </div>

            {/* Hours */}
            <div
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                fontWeight: 300,
                color: "#b6d0ed",
                marginTop: 8,
                borderTop: "1px solid rgba(29, 118, 130, 0.15)",
                paddingTop: 12,
              }}
            >
              <div style={{ fontWeight: 500, color: "#F7F4EE", marginBottom: 4 }}>
                Hours
              </div>
              Monday – Friday: 8:00 AM – 5:00 PM
              <br />
              Evenings &amp; weekends by appointment
            </div>
          </div>

          {/* Column 4: Schedule a Virtual Meeting */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#1d7682",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Schedule a Virtual Meeting
            </h4>

            <a
              href="tel:+14809440880"
              style={{
                display: "block",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "#F7F4EE",
                textDecoration: "none",
                marginBottom: 8,
              }}
            >
              (480) 944-0880
            </a>

            <a
              href="mailto:jay.chang@farther.com"
              style={{
                display: "block",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 14,
                color: "#b6d0ed",
                textDecoration: "none",
                marginBottom: 24,
              }}
            >
              jay.chang@farther.com
            </a>

            <Link
              href="/schedule-consultation"
              style={{
                display: "block",
                width: "100%",
                background: "linear-gradient(to bottom, #2a9dab, #1d7682)",
                color: "#F7F4EE",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                padding: "16px 0",
                borderRadius: 9999,
                textAlign: "center",
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)",
              }}
              className="footer-cta"
            >
              Let&rsquo;s Talk
            </Link>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(29, 118, 130, 0.1)",
            marginTop: 48,
            paddingTop: 24,
          }}
        >
          <div
            className="footer-bottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                color: "#b6d0ed",
                margin: 0,
              }}
            >
              &copy; 2026 Advisor Jay. All rights
              reserved.
            </p>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 12,
                color: "#b6d0ed",
              }}
            >
              <Link
                href="/disclosures#privacy"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures#terms"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Terms of Service
              </Link>
              <span aria-hidden="true">&middot;</span>
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Form ADV Part 2A
              </a>
              <span aria-hidden="true">&middot;</span>
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Form CRS
              </a>
              <span aria-hidden="true">&middot;</span>
              <Link
                href="/disclosures"
                style={{
                  color: "#b6d0ed",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                className="footer-bottom-link"
              >
                Disclosures
              </Link>
            </div>
          </div>

          {/* Compliance Disclosure */}
          <div
            style={{
              marginTop: 24,
              textAlign: "center",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 11,
              fontWeight: 300,
              color: "#b6d0ed",
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
            }}
          >
            <p>
              Advisory services provided by Farther Finance Advisors LLC, an
              SEC-registered investment adviser. $15B in assets under management
              reflects total platform AUM across Farther Finance Inc. as of
              January 2026 and is not representative of any individual
              advisor&rsquo;s practice. Jay Chang is a VP, Wealth Advisor affiliated with Farther Finance Advisors LLC.
            </p>
            <p style={{ marginTop: 12 }}>
              Registration with the SEC does not imply a certain level of skill
              or training. Past performance does not guarantee future results.
              All investing involves risk, including the potential loss of
              principal. This website is for informational purposes only and
              does not constitute an offer, solicitation, or recommendation to
              buy or sell any security or investment product.
            </p>
            <p style={{ marginTop: 12 }}>
              For current AUM and additional disclosures, see our{" "}
              <a
                href="/documents/FFA-ADV-Packet-2.6.26.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                Form ADV
              </a>
              {" "}at{" "}
              <a
                href="https://adviserinfo.sec.gov/firm/summary/302050"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b6d0ed", textDecoration: "underline" }}
                className="footer-bottom-link"
              >
                adviserinfo.sec.gov
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .footer-linkedin-link:hover {
              color: #1d7682 !important;
            }
            .footer-link:hover {
              color: #F7F4EE !important;
            }
            .footer-cta:hover {
              background: linear-gradient(to bottom, #238a97, #155f69) !important;
              box-shadow: inset 0 1px 1px rgba(255,255,255,0.25), 0 8px 24px rgba(29,118,130,0.4) !important;
            }
            .footer-bottom-link:hover {
              color: #F7F4EE !important;
            }
            @media (max-width: 768px) {
              .footer-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              .footer-bottom {
                flex-direction: column !important;
                text-align: center !important;
                gap: 16px !important;
              }
            }
          `,
        }}
      />
    </footer>
  );
}
