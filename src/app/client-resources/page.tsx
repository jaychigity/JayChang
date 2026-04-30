import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Market Commentary & Insights",
 description:
 "Stay informed with the latest market commentary, economic outlooks, and financial planning insights I share with clients. Updated regularly with analysis relevant to families, professionals, and business owners.",
 alternates: { canonical: "https://www.advisorjay.com/client-resources" },
 openGraph: {
 title: "Market Commentary & Insights",
 description:
 "Latest market commentary and financial planning insights I share with clients.",
 url: "https://www.advisorjay.com/client-resources",
 },
};

interface Article {
 title: string;
 description: string;
 url: string;
 date: string;
 category: "Market Commentary" | "Financial Planning" | "Outlook" | "Insurance & Benefits";
 thumbnail?: string;
}

const articles: Article[] = [
 {
 title: "March Market Commentary: Navigating the Rotation",
 description:
 "What Q1 2026 means for your portfolio, and where the Farther investment team sees opportunity ahead as markets shift from concentration to broader participation.",
 url: "https://www.farther.com/post/navigating-the-rotation",
 date: "March 31, 2026",
 category: "Market Commentary",
 thumbnail: "https://cdn.prod.website-files.com/69414ba2b43d3d40d5da7934/69d4c5dc48ab55ad73124d03_Thumbnail.jpg",
 },
 {
 title: "From Uncertainty to Ownership",
 description:
 "Real stories of financial leadership: how women are taking control of their financial futures and what that looks like in practice.",
 url: "https://www.farther.com/post/from-uncertainty-to-ownership",
 date: "March 23, 2026",
 category: "Financial Planning",
 thumbnail: "https://cdn.prod.website-files.com/69414ba2b43d3d40d5da7934/69c14fa9b7929fd1df5b74b9_Article%20-%20thumbnail.jpg",
 },
 {
 title: "Pre-65 Health Insurance: How the Reconciliation Bill May Impact ACA Marketplace Coverage",
 description:
 "A proposed reconciliation bill could significantly alter health insurance access for individuals under 65. What early retirees and self-employed professionals need to know about potential changes to premium tax credits.",
 url: "https://www.farther.com/post/pre-65-health-insurance-how-the-reconciliation-bill-may-impact-aca-marketplace-coverage",
 date: "February 2026",
 category: "Insurance & Benefits",
 },
 {
 title: "The Farther 2026 Outlook: Embrace Volatility",
 description:
 "2025 demonstrated volatility amid tariff concerns and AI market concentration. The 2026 outlook from Farther's investment team focuses on preparing for expected market swings through diversification and tax-aware strategies.",
 url: "https://www.farther.com/post/the-farther-2026-outlook-embrace-volatility",
 date: "January 15, 2026",
 category: "Outlook",
 },
 {
 title: "Running to Stand Still: Volatility Surged, Returns Stalled, and Discipline Paid Off",
 description:
 "The first half of 2025 delivered dramatic swings, a 20% correction followed by a 25% rebound, yet the S&P 500 finished just +5% YTD. Why disciplined investors who stayed the course came out ahead.",
 url: "https://www.farther.com/post/running-to-stand-still-volatility-surged-returns-stalled-and-discipline-paid-off",
 date: "July 2025",
 category: "Market Commentary",
 },
 {
 title: "Economic Uncertainty and the Long-Term Perspective: Staying Focused Amid Volatility",
 description:
 "With the S&P 500 and Nasdaq declining sharply from February highs, this analysis examines why maintaining a long-term perspective matters more than reacting to short-term market noise.",
 url: "https://www.farther.com/post/economic-uncertainty-and-the-long-term-perspective-staying-focused-amid-volatility",
 date: "March 2025",
 category: "Market Commentary",
 },
 {
 title: "The 2025 Farther Market Outlook: A Delicate Equilibrium",
 description:
 "Farther's annual market outlook examining the balanced forces shaping 2025, including tariff impacts, Federal Reserve policy, geopolitical risks, and where the investment team sees opportunity across asset classes.",
 url: "https://www.farther.com/post/the-2025-farther-market-outlook-a-delicate-equilibrium",
 date: "January 2025",
 category: "Outlook",
 },
];

const CATEGORY_COLORS: Record<string, string> = {
 "Market Commentary": "#1d7682",
 "Financial Planning": "#2E5D4B",
 "Outlook": "#6B4C9A",
 "Insurance & Benefits": "#8B6914",
};

export default function ClientResourcesPage() {
 return (
 <>
 {/* Hero Section */}
 <section
  style={{
  backgroundColor: "#333333",
  padding: "80px 40px 48px",
  textAlign: "center",
  }}
 >
  <p
  className="font-sans"
  style={{
  fontSize: 13,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#1d7682",
  marginBottom: 16,
  }}
  >
  Market Commentary
  </p>
  <h1
  className="font-serif"
  style={{
  fontSize: 48,
  fontWeight: 300,
  color: "#F7F4EE",
  lineHeight: 1.15,
  marginBottom: 16,
  maxWidth: 680,
  marginLeft: "auto",
  marginRight: "auto",
  }}
  >
  Market Insights &amp; Commentary
  </h1>
  <p
  className="font-sans"
  style={{
  fontSize: 18,
  color: "rgba(247, 244, 238, 0.75)",
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
  }}
  >
  Research and analysis from Farther&rsquo;s investment team, the same
  insights I use to inform the advice I give my clients every day.
  </p>
 </section>

 {/* Articles Grid */}
 <section
  style={{
  backgroundColor: "#F7F4EE",
  padding: "64px 40px 80px",
  }}
 >
  <div
  style={{
  maxWidth: 1120,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
  gap: 32,
  }}
  >
  {articles.map((article) => (
  <a
   key={article.url}
   href={article.url}
   target="_blank"
   rel="noopener noreferrer"
   style={{ textDecoration: "none", display: "block" }}
  >
   <article
   className="tool-card"
   style={{
   backgroundColor: "#FFFFFF",
   borderRadius: 12,
   overflow: "hidden",
   border: "1px solid rgba(51, 51, 51, 0.08)",
   height: "100%",
   display: "flex",
   flexDirection: "column",
   transition: "box-shadow 0.2s ease, transform 0.2s ease",
   }}
   >
   {/* Thumbnail */}
   {article.thumbnail && (
   <div
    style={{
    width: "100%",
    height: 200,
    backgroundColor: "#E2E8F0",
    backgroundImage: `url(${article.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    }}
   />
   )}

   <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
   {/* Category + Date */}
   <div
   style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
   }}
   >
   <span
    className="font-sans"
    style={{
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: CATEGORY_COLORS[article.category] || "#1d7682",
    }}
   >
    {article.category}
   </span>
   <span
    className="font-sans"
    style={{
    fontSize: 12,
    color: "rgba(51, 51, 51, 0.45)",
    }}
   >
    {article.date}
   </span>
   </div>

   {/* Title */}
   <h2
   className="font-serif"
   style={{
    fontSize: 22,
    fontWeight: 600,
    color: "#333333",
    lineHeight: 1.3,
    marginBottom: 10,
   }}
   >
   {article.title}
   </h2>

   {/* Description */}
   <p
   className="font-sans"
   style={{
    fontSize: 14,
    color: "rgba(51, 51, 51, 0.65)",
    lineHeight: 1.6,
    flex: 1,
   }}
   >
   {article.description}
   </p>

   {/* CTA */}
   <div
   className="font-sans"
   style={{
    marginTop: 16,
    fontSize: 14,
    fontWeight: 600,
    color: "#1d7682",
    display: "flex",
    alignItems: "center",
    gap: 6,
   }}
   >
   Read article
   <span aria-hidden="true">&rarr;</span>
   </div>
   </div>
   </article>
  </a>
  ))}
  </div>

  {/* Attribution + Full Library Link */}
  <div
  style={{
  maxWidth: 680,
  margin: "48px auto 0",
  textAlign: "center",
  }}
  >
  <p
  className="font-sans"
  style={{
  fontSize: 14,
  color: "rgba(51, 51, 51, 0.5)",
  lineHeight: 1.6,
  }}
  >
  Articles and research provided by Farther&rsquo;s investment and planning team.{" "}
  <a
   href="https://www.farther.com/resources"
   target="_blank"
   rel="noopener noreferrer"
   style={{ color: "#1d7682", textDecoration: "underline" }}
  >
   View the full Farther resource library &rarr;
  </a>
  </p>
  </div>
 </section>

 {/* Bottom CTA */}
 <section
  style={{
  backgroundColor: "#333333",
  padding: "64px 40px",
  textAlign: "center",
  }}
 >
  <h2
  className="font-serif"
  style={{
  fontSize: 32,
  fontWeight: 400,
  color: "#F7F4EE",
  lineHeight: 1.25,
  marginBottom: 16,
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  }}
  >
  Want to talk about what this means for you?
  </h2>
  <p
  className="font-sans"
  style={{
  fontSize: 16,
  color: "rgba(247, 244, 238, 0.7)",
  maxWidth: 500,
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
  marginBottom: 28,
  }}
  >
  Market commentary is only useful if it connects to your plan. I can
  help you understand what these trends mean for your specific situation.
  </p>
  <Link
  href="/schedule-consultation"
  className="font-sans"
  style={{
  display: "inline-block",
  fontSize: 15,
  fontWeight: 600,
  color: "#F7F4EE",
  background: "linear-gradient(to bottom, #2a9dab, #1d7682)",
  border: "none",
  borderRadius: 9999,
  padding: "18px 36px",
  textDecoration: "none",
  boxShadow:
   "inset 0 1px 1px rgba(255,255,255,0.25), 0 2px 8px rgba(29,118,130,0.3)",
  }}
  >
  Schedule a conversation with Jay &rarr;
  </Link>
 </section>

 {/* Card hover styles */}
 <style>{`
  .tool-card:hover {
  box-shadow: 0 8px 32px rgba(29, 118, 130, 0.12);
  transform: translateY(-2px);
  }
 `}</style>
 </>
 );
}
