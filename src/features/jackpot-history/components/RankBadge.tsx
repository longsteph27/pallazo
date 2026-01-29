import React from "react";

export interface RankCardProps {
  className?: string;

  name?: string;
  currentValue?: string | number;
  secondaryValue?: string | number;

  labelTop?: string;     // ví dụ: "CURRENT"
  labelBottom?: string;  // ví dụ: "TARGET" / "LAST" / ...
  topBgColor?: string;
  numberColor?: string;
}

function CardBg({ topBgColor = "#D2C29E" }: { topBgColor?: string }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 256 487"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <rect y="355" width="256" height="37" fill="url(#paint0_radial_329_885)" />
      <rect width="256" height="2" transform="matrix(1 0 0 -1 0 396)" fill="#F0EBDC" />
      <rect y="242" width="256" height="37" fill="url(#paint1_radial_329_885)" />
      <rect width="256" height="2" transform="matrix(1 0 0 -1 0 283)" fill="#F1EBDD" />
      <path
        d="M6 70.5H250C253.038 70.5 255.5 72.9624 255.5 76V479.612C255.5 483.104 252.289 485.712 248.872 484.996L130.323 460.159C129.451 459.976 128.55 459.975 127.678 460.155L7.11133 485.022C3.69891 485.726 0.5 483.12 0.5 479.636V76C0.500003 72.9624 2.96244 70.5 6 70.5Z"
        stroke="#B29E71"
      />
      <path
        d="M36 1H217C225.284 1 232 7.71573 232 16V184.769C232 191.68 227.277 197.697 220.563 199.339L131.531 221.112C129.222 221.677 126.812 221.684 124.5 221.135L32.5312 199.277C25.7717 197.671 21.0001 191.632 21 184.685V16C21 7.84503 27.5077 1.21001 35.6133 1.00488L36 1Z"
        fill={topBgColor}
        stroke="#C3B49D"
        strokeWidth="2"
      />
      <defs>
        <radialGradient
          id="paint0_radial_329_885"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(128 373.5) scale(172.271 909.978)"
        >
          <stop stopColor="#F9F7ED" />
          <stop offset="1" stopColor="#D2C29E" stopOpacity="0" />
        </radialGradient>

        <radialGradient
          id="paint1_radial_329_885"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(128 260.5) scale(172.271 909.978)"
        >
          <stop stopColor="#F9F7ED" />
          <stop offset="1" stopColor="#D2C29E" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function StatBlock({
  label,
  value,
  color,
}: {
  label: string;
  value: number | string;
  color?: string;
}) {
  return (
    <div className="w-full text-center">
      <div
        className="mx-auto w-[78%] py-[4%] uppercase text-[#8B7E5D] font-medium tracking-[0.12em]"
        style={{
          // responsive font
          fontSize: "clamp(10px, 1.4vw, 14px)",
          lineHeight: 1.1,
        }}
      >
        {label}
      </div>

      <div
        className="tracking-[0.04em] font-bold"
        style={{
          fontSize: "clamp(20px, 3.8vw, 36px)",
          lineHeight: 1.1,
          color: color || "#2A2A2A",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function RankCard({
  className,
  name = "NAME TEXT",
  currentValue = 20000,
  secondaryValue = 888,
  labelTop = "CURRENT",
  labelBottom = "SECONDARY",
  topBgColor,
  numberColor,
}: RankCardProps) {
  return (
    <div
      className={[
        "relative w-full max-w-[320px]", // bạn có thể chỉnh max-w
        "aspect-[256/487]",              // giữ đúng tỷ lệ theo SVG
        className ?? "",
      ].join(" ")}
    >
      <CardBg topBgColor={topBgColor} />

      {/* NAME: đặt theo % theo viewBox (gần top khu “card” lớn) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          top: "14%",
          width: "70%",
        }}
      >
        <div
          className="text-[#0e231e] tracking-[0.02em]"
          style={{
            fontFamily: "Collier, serif",
            fontSize: "clamp(18px, 3.2vw, 36px)",
            lineHeight: 1.15,
          }}
        >
          {name}
        </div>
      </div>

      {/* TOP STAT (in first band) */}
      <div
        className="absolute left-0 w-full text-center uppercase text-[#8B7E5D] font-medium tracking-[0.12em]"
        style={{
          top: "53.5%", // center of band 1
          transform: "translateY(-50%)",
          fontSize: "clamp(10px, 1.4vw, 14px)",
        }}
      >
        {labelTop}
      </div>
      <div
        className="absolute left-0 w-full text-center tracking-[0.04em] font-bold"
        style={{
          top: "65%", // whitespace below band 1
          transform: "translateY(-50%)",
          fontSize: "clamp(20px, 3.8vw, 36px)",
          color: numberColor || "#2A2A2A",
        }}
      >
        {currentValue}
      </div>

      {/* BOTTOM STAT (in second band) */}
      <div
        className="absolute left-0 w-full text-center uppercase text-[#8B7E5D] font-medium tracking-[0.12em]"
        style={{
          top: "76.7%", // center of band 2
          transform: "translateY(-50%)",
          fontSize: "clamp(10px, 1.4vw, 14px)",
        }}
      >
        {labelBottom}
      </div>
      <div
        className="absolute left-0 w-full text-center tracking-[0.04em] font-bold"
        style={{
          top: "88%", // whitespace below band 2
          transform: "translateY(-50%)",
          fontSize: "clamp(20px, 3.8vw, 36px)",
          color: "#2A2A2A",
        }}
      >
        {secondaryValue}
      </div>

      {/* nếu sau này bạn muốn “slot” icon/medal: đặt thêm layer ở đây theo % */}
      {/* <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "28%", width: "24%" }}>...</div> */}
    </div>
  );
}
