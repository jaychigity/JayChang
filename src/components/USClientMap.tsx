"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// States where Jay actively works with clients
// "primary" = home base, "active" = regularly served
const CLIENT_STATES: Record<string, "primary" | "active"> = {
  Arizona: "primary",
  California: "active",
  Hawaii: "active",
  Nevada: "active",
  Texas: "active",
  Utah: "active",
  Washington: "active",
  Colorado: "active",
  Oregon: "active",
  Idaho: "active",
  Illinois: "active",
  "New York": "active",
  "New Jersey": "active",
  "South Carolina": "active",
  Florida: "active",
  Tennessee: "active",
};

const COLORS = {
  primary: "#1d7682",
  active: "#5aadb8",
  inactive: "#E0DDD8",
  stroke: "#FAFAF8",
  hoverPrimary: "#155f69",
  hoverActive: "#2a9dab",
  hoverInactive: "#C5C0B8",
};

export default function USClientMap() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* Tooltip */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-150"
        style={{ opacity: tooltip ? 1 : 0 }}
      >
        <span className="bg-[#333333] text-white text-sm font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
          {tooltip ?? ""}
        </span>
      </div>

      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name: string = geo.properties.name;
              const tier = CLIENT_STATES[name];

              const fill = tier === "primary"
                ? COLORS.primary
                : tier === "active"
                ? COLORS.active
                : COLORS.inactive;

              const hoverFill = tier === "primary"
                ? COLORS.hoverPrimary
                : tier === "active"
                ? COLORS.hoverActive
                : COLORS.hoverInactive;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltip(name)}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill,
                      stroke: COLORS.stroke,
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: hoverFill,
                      stroke: COLORS.stroke,
                      strokeWidth: 0.75,
                      outline: "none",
                      cursor: tier ? "pointer" : "default",
                    },
                    pressed: {
                      fill: hoverFill,
                      stroke: COLORS.stroke,
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm flex-shrink-0"
            style={{ backgroundColor: COLORS.primary }}
          />
          <span className="text-sm text-[#5b6a71]">Home base (Arizona)</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm flex-shrink-0"
            style={{ backgroundColor: COLORS.active }}
          />
          <span className="text-sm text-[#5b6a71]">Active client states</span>
        </div>
      </div>
    </div>
  );
}
