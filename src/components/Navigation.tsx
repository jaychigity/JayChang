"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";


type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Jay Chang", href: "/jay-chang" },
      { label: "Our Team", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Investment Philosophy", href: "/investment-philosophy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Financial Planning", href: "/services/financial-planning" },
      { label: "Retirement Planning", href: "/services/retirement-planning" },
      { label: "Tax Optimization", href: "/services/tax-optimization" },
      { label: "Investment Management", href: "/services/investments" },
      { label: "Trust & Estate", href: "/services/trust-estate" },
      { label: "Business Owners", href: "/services/business-owners" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    label: "Who I Work With",
    href: "#",
    children: [
      { label: "Telecom & Utilities", href: "/telecommunications-utilities-wealth-management" },
      { label: "Institutional & Non-Profit", href: "/institutional-non-profit-wealth-management" },
      { label: "Families & Life Transitions", href: "/families-life-transitions-wealth-management" },
      { label: "Aerospace & Defense", href: "/aerospace-defense-wealth-management" },
      { label: "Physicians & Healthcare", href: "/physician-executive-wealth-management-phoenix-scottsdale" },
      { label: "Tech Professionals", href: "/semiconductor-wealth-management-arizona" },
    ],
  },
  {
    label: "Tools & Calculators",
    href: "/tools",
    children: [
      { label: "AT&T Pension Suite", href: "/tools/att-pension" },
      { label: "PG&E Pension Suite", href: "/tools/pge-pension" },
      { label: "Monte Carlo Simulator", href: "/tools/monte-carlo-simulator" },
      { label: "Withholding Calculator", href: "/tools/401k-withholding-calculator" },
      { label: "Roth Conversion", href: "/tools/roth-conversion-calculator" },
      { label: "All Tools", href: "/tools" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
  },
];

const CTA_HREF = "/schedule-consultation";
const CTA_LABEL = "Start a Conversation";

function DropdownItem({ item, isActive, closeDropdown }: { item: NavItem; isActive: (href: string) => boolean; closeDropdown: () => void }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const hasChildren = item.children && item.children.length > 0;
  const isAnyChildActive = hasChildren && item.children!.some(child => isActive(child.href));
  const active = isActive(item.href) || isAnyChildActive;

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href === "#" ? (item.children?.[0]?.href || "#") : item.href}
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          fontSize: 13,
          fontWeight: 500,
          whiteSpace: "nowrap",
          color: active ? "#1d7682" : "#F7F4EE",
          textDecoration: "none",
          transition: "color 0.2s ease",
          paddingBottom: 4,
          borderBottom: active ? "2px solid #1d7682" : "2px solid transparent",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
        onMouseEnter={(e) => {
          if (!active) e.currentTarget.style.color = "#1d7682";
        }}
        onMouseLeave={(e) => {
          if (!active) e.currentTarget.style.color = "#F7F4EE";
        }}
      >
        {item.label}
        {hasChildren && <ChevronDown size={12} style={{ opacity: 0.6, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0)" }} />}
      </Link>

      {hasChildren && open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            paddingTop: 12,
            zIndex: 10000,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(29, 118, 130, 0.2)",
              borderRadius: 8,
              padding: "8px 0",
              minWidth: 220,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            {item.children!.map((child) => {
              const isHubLink = child.label.startsWith("All ");
              return (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => { setOpen(false); closeDropdown(); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px",
                    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: isHubLink ? 500 : 400,
                    color: isActive(child.href) ? "#1d7682" : "#F7F4EE",
                    textDecoration: "none",
                    transition: "background-color 0.15s ease, color 0.15s ease",
                    whiteSpace: "nowrap",
                    ...(isHubLink && {
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      marginTop: 4,
                      paddingTop: 12,
                    }),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(29, 118, 130, 0.15)";
                    e.currentTarget.style.color = "#1d7682";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = isActive(child.href) ? "#1d7682" : "#F7F4EE";
                  }}
                >
                  {child.label}
                  {isHubLink && <span style={{ opacity: 0.5, marginLeft: 6 }}>→</span>}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ item, isActive, onNavigate }: { item: NavItem; isActive: (href: string) => boolean; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isAnyChildActive = hasChildren && item.children!.some(child => isActive(child.href));
  const parentActive = isActive(item.href) || isAnyChildActive;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
          borderBottom: "1px solid rgba(29, 118, 130, 0.1)",
        }}
      >
        <Link
          href={item.href === "#" ? (item.children?.[0]?.href || "#") : item.href}
          onClick={onNavigate}
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
            fontSize: 17,
            fontWeight: 500,
            color: parentActive || expanded ? "#1d7682" : "#F7F4EE",
            textDecoration: "none",
            flex: 1,
            display: "flex",
            alignItems: "center",
            height: "100%",
            transition: "color 0.2s ease",
          }}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: expanded ? "rgba(29, 118, 130, 0.15)" : "none",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
              transition: "background-color 0.2s ease",
            }}
            aria-label={`Expand ${item.label}`}
          >
            <ChevronDown
              size={18}
              color={expanded ? "#1d7682" : "#F7F4EE"}
              style={{
                transition: "transform 0.2s, color 0.2s",
                transform: expanded ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <div style={{ paddingLeft: 8, paddingBottom: 8 }}>
          {item.children!.map((child) => {
            const childActive = isActive(child.href);
            const isHubLink = child.label.startsWith("All ");
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="mobile-nav-child"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: 15,
                  fontWeight: isHubLink ? 500 : (childActive ? 500 : 400),
                  color: childActive ? "#1d7682" : "rgba(247, 244, 238, 0.7)",
                  textDecoration: "none",
                  borderLeft: childActive ? "2px solid #1d7682" : "2px solid transparent",
                  borderRadius: "0 6px 6px 0",
                  backgroundColor: childActive ? "rgba(29, 118, 130, 0.08)" : "transparent",
                  transition: "background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease",
                  ...(isHubLink && {
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    marginTop: 4,
                    paddingTop: 14,
                  }),
                }}
              >
                {child.label}
                {isHubLink && <span style={{ opacity: 0.4, fontSize: 13 }}>→</span>}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/" || href === "#") return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: scrolled ? 64 : 80,
          backgroundColor: "rgba(51, 51, 51, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(29, 118, 130, 0.2)",
          zIndex: 9999,
          transition: "height 0.3s ease",
        }}
      >
        <div
          className="px-4 lg:px-8"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}
            aria-label="Advisor Jay - Home"
          >
            <Image
              src="/Photos/Farther Focus light.png"
              alt="Farther Focus Team"
              width={140}
              height={42}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <DropdownItem key={item.label} item={item} isActive={isActive} closeDropdown={() => {}} />
            ))}

            {/* Desktop CTA */}
            <Link
              href={CTA_HREF}
              style={{
                fontFamily:
                  "'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "#F7F4EE",
                backgroundColor: "transparent",
                border: "1.5px solid #1d7682",
                borderRadius: 9999,
                padding: "12px 24px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(to bottom, #2a9dab, #1d7682)";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "#F7F4EE";
                e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.25), 0 4px 16px rgba(29,118,130,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#1d7682";
                e.currentTarget.style.color = "#F7F4EE";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {CTA_LABEL}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <Menu size={28} color="#F7F4EE" strokeWidth={2} />
          </button>
        </div>

      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div
        style={{
          height: scrolled ? 64 : 80,
          transition: "height 0.3s ease",
        }}
      />

      {/* Mobile Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: mobileMenuOpen ? 0 : "100%",
          width: "100%",
          backgroundColor: "#333333",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          transition: "left 0.3s ease, visibility 0.3s ease",
          visibility: mobileMenuOpen ? "visible" : "hidden",
        }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 80,
            padding: "0 40px",
            borderBottom: "1px solid rgba(29, 118, 130, 0.2)",
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Advisor Jay - Home"
          >
            <Image
              src="/Photos/Farther Focus light.png"
              alt="Farther Focus Team"
              width={120}
              height={36}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <X size={28} color="#F7F4EE" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0 40px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {navItems.map((item) => (
            <MobileAccordion
              key={item.label}
              item={item}
              isActive={isActive}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ padding: "24px 40px 48px" }}>
          <Link
            href={CTA_HREF}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: "block",
              fontFamily:
                "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: "#F7F4EE",
              background: "linear-gradient(to bottom, #2a9dab, #1d7682)",
              border: "none",
              borderRadius: 9999,
              padding: "18px 28px",
              textDecoration: "none",
              textAlign: "center",
              width: "100%",
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)",
            }}
          >
            {CTA_LABEL}
          </Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 1023px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: flex !important;
          }
        }
        .mobile-nav-child:active {
          background-color: rgba(29, 118, 130, 0.15) !important;
          color: #1d7682 !important;
        }
      `}</style>
    </>
  );
}
