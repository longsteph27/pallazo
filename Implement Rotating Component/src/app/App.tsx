import { motion, PanInfo } from "motion/react";
import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-rfqgsfsfm9";
import clsx from "clsx";
import imgEllipse4546 from "figma:asset/928708b3ea8dd4c5eca04b5c5c82891a427a0030.png";
import imgEllipse4547 from "figma:asset/841c9fd9a26a1dbf967cde4d61e2a7caf72c3f60.png";
import imgEllipse4548 from "figma:asset/110a0ad13b80ea6b520c9585df6740d3c7d80505.png";
import imgEllipse4549 from "figma:asset/d5d613d3e9205c8a1b3dacfdf1e66e984150873f.png";

type ConciegeImageProps = {
  additionalClassNames?: string;
};

function ConciegeImage({
  additionalClassNames = "",
}: ConciegeImageProps) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" viewBox="0 0 378 369" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M183.286 1.86918C185.034 -0.310687 188.232 -0.635649 190.366 1.16765C278.092 75.2723 344.044 174.343 377.263 287.421C378.05 290.1 376.465 292.895 373.767 293.616L92.4028 368.814C89.7971 369.51 87.1128 368.013 86.288 365.445C70.0583 314.918 40.4855 270.372 1.71762 235.955C-0.298533 234.165 -0.585954 231.106 1.10095 229.003L183.286 1.86918Z" fill="#A4A4A4"/>
      </svg>
    </div>
  );
}

type SpaImageProps = {
  additionalClassNames?: string;
};

function SpaImage({ additionalClassNames = "" }: SpaImageProps) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" viewBox="0 0 352 358" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M350.437 128.028C352.185 125.849 351.81 122.658 349.587 120.965C253.495 47.7817 134.423 3.22213 5.0889 0.0017475C2.29612 -0.0677918 1.00073e-07 2.18589 2.22187e-07 4.97953L1.29495e-05 296.145C1.30673e-05 298.842 2.13998 301.048 4.83297 301.182C63.1029 304.083 116.891 324.007 161.327 356.083C163.511 357.66 166.557 357.276 168.243 355.174L350.437 128.028Z" fill="#A4A4A4"/>
      </svg>
    </div>
  );
}

type DiningImageProps = {
  additionalClassNames?: string;
};

function DiningImage({
  additionalClassNames = "",
}: DiningImageProps) {
  return (
    <div className={additionalClassNames}>
      <svg
        className="block size-full"
        viewBox="0 0 352 358"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M351.519 4.97933C351.519 2.18556 349.222 -0.0681558 346.43 0.00157567C217.101 3.23058 98.0356 47.7964 1.94909 120.983C-0.273456 122.676 -0.648615 125.867 1.09947 128.046L183.293 355.191C184.979 357.293 188.025 357.677 190.21 356.1C234.64 324.021 288.422 304.092 346.687 301.183C349.379 301.048 351.519 298.842 351.519 296.146V4.97933Z"
          fill="#a4a4a4"
          fillOpacity="1"
        />
      </svg>
    </div>
  );
}

type StayImageProps = {
  additionalClassNames?: string;
};

function StayImage({ additionalClassNames = "" }: StayImageProps) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" viewBox="0 0 378 369" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M291.182 365.199C290.355 367.765 287.672 369.26 285.068 368.564L3.69829 293.364C0.999589 292.643 -0.585864 289.847 0.202602 287.167C33.4407 174.198 99.3535 75.2194 187.006 1.16781C189.141 -0.635666 192.339 -0.310761 194.087 1.8692L376.272 229.004C377.959 231.107 377.672 234.165 375.656 235.955C336.957 270.318 307.423 314.776 291.182 365.199Z" fill="#A4A4A4"/>
      </svg>
    </div>
  );
}

type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "absolute flex items-center justify-center translate-x-[-50%] translate-y-[100%]",
        additionalClassNames,
      )}
    >
      <div className="flex-none rotate-[180deg]">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] not-italic relative text-center text-nowrap text-white tracking-[0.32px] uppercase">
          {text}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [rotation, setRotation] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true); // Start in collapsed state
  const containerRef = useRef<HTMLDivElement>(null);
  const startAngleRef = useRef(0);
  const startRotationRef = useRef(0);
  const totalDragDistanceRef = useRef(0);

  // Auto-expand after 3 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Configuration for expanded and collapsed states
  const stateConfig = {
    backgroundCircle: {
      expanded: { scale: 1 },
      collapsed: { scale: 0.2 },
    },
    textOpacity: {
      expanded: 1,
      collapsed: 0,
    },
    LR: {
      expanded: { height: 287.682 },
      collapsed: { height: 0 },
    },
    Stay: {
      expanded: {
        width: 1142.929,
        height: 914.208,
        rotate: 0,
      },
      collapsed: {
        width: 1316.808,
        height: 1053.291,
        rotate: 58,
      },
    },
    Dining: {
      expanded: {
        width: 727.305,
        height: 1188.064,
        rotate: 0,
      },
      collapsed: {
        width: 837.953,
        height: 1368.811,
        rotate: 19,
      },
    },
    Spa: {
      expanded: {
        width: 727.515,
        height: 1188.046,
        rotate: 0,
      },
      collapsed: {
        width: 838.195,
        height: 1368.789,
        rotate: -20,
      },
    },
    Conciege: {
      expanded: {
        width: 1143.322,
        height: 914.479,
        rotate: 0,
      },
      collapsed: {
        width: 1317.262,
        height: 1053.604,
        rotate: -57,
      },
    },
  };

  const getAngleFromCenter = (
    clientX: number,
    clientY: number,
  ) => {
    if (!containerRef.current) return 0;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate angle in degrees
    const angleRad = Math.atan2(deltaY, deltaX);
    const angleDeg = angleRad * (180 / Math.PI);

    return angleDeg;
  };

  const handleDragStart = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    startAngleRef.current = getAngleFromCenter(
      info.point.x,
      info.point.y,
    );
    startRotationRef.current = rotation;
    totalDragDistanceRef.current = 0;
  };

  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const currentAngle = getAngleFromCenter(
      info.point.x,
      info.point.y,
    );
    const deltaAngle = currentAngle - startAngleRef.current;

    // Track total drag distance
    const dragDistance = Math.sqrt(
      info.offset.x ** 2 + info.offset.y ** 2,
    );
    totalDragDistanceRef.current = dragDistance;

    // Update rotation based on angle difference
    setRotation(startRotationRef.current + deltaAngle);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = totalDragDistanceRef.current;

    // If drag distance is less than 24px, restore to original position
    if (dragDistance < 24) {
      setRotation(startRotationRef.current);
      return;
    }

    // Calculate angle difference to determine direction
    const currentAngle = getAngleFromCenter(
      info.point.x,
      info.point.y,
    );
    const angleDelta = currentAngle - startAngleRef.current;

    // Normalize angle delta to -180 to 180 range
    let normalizedDelta = angleDelta % 360;
    if (normalizedDelta > 180) normalizedDelta -= 360;
    if (normalizedDelta < -180) normalizedDelta += 360;

    // Determine rotation direction based on angle delta
    let targetRotation;
    if (normalizedDelta >= 0) {
      // Rotating clockwise - snap to next 180 increment
      targetRotation =
        Math.ceil(startRotationRef.current / 180) * 180;
      if (targetRotation === startRotationRef.current) {
        targetRotation += 180;
      }
    } else {
      // Rotating counter-clockwise - snap to previous 180 increment
      targetRotation =
        Math.floor(startRotationRef.current / 180) * 180;
      if (targetRotation === startRotationRef.current) {
        targetRotation -= 180;
      }
    }

    setRotation(targetRotation);
  };

  // Animation config for collapse/expand
  const transitionConfig = {
    duration: 1,
    ease: [0.42, 0, 0.36, 0.99] as const,
  };

  return (
    <div className="relative size-full bg-white overflow-hidden">
      {/* Fixed background circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1228px] h-[1228px] pointer-events-none"
        animate={{
          scale: isCollapsed
            ? stateConfig.backgroundCircle.collapsed.scale
            : stateConfig.backgroundCircle.expanded.scale,
        }}
        transition={transitionConfig}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1228 1228"
        >
          <circle
            cx="614"
            cy="614"
            fill="url(#paint0_radial_1_44)"
            fillOpacity="0.5"
            id="Ellipse 4549"
            r="614"
          />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="matrix(4.27099 517.657 -517.657 16.5876 603.143 517.657)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_1_44"
              r="1"
            >
              <stop stopColor="#F9F7ED" />
              <stop offset="1" stopColor="#DBCFB2" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Rotating container with fixed size */}
      <div
        ref={containerRef}
        className="absolute left-1/2 top-1/2 w-[1228px] h-[1228px] -translate-x-1/2 -translate-y-1/2"
        style={{ transformOrigin: "center center" }}
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
          style={{
            transformOrigin: "center center",
            touchAction: "none",
          }}
          animate={{ rotate: rotation }}
          drag
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            mass: 0.9,
            bounce: 0.5,
          }}
        >
          <motion.div
            className="absolute left-1/2 top-[calc(50%+0.02px)] translate-x-[-50%] translate-y-[-50%] w-[1188px]"
            data-name="LR"
            animate={{
              height: isCollapsed ? 0 : 287.682,
            }}
            transition={transitionConfig}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1188 288"
            >
              <g clipPath="url(#clip0_1_40)" id="LR">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p24eefd00}
                  fill="var(--fill-0, #AC9666)"
                  fillOpacity="0.44"
                  fillRule="evenodd"
                  id="Ellipse 4546"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1b2a4000}
                  fill="var(--fill-0, #AC9666)"
                  fillOpacity="0.44"
                  fillRule="evenodd"
                  id="Ellipse 4546_2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_40">
                  <rect
                    fill="white"
                    height="287.682"
                    width="1188"
                  />
                </clipPath>
              </defs>
            </svg>
          </motion.div>

          <motion.div
            className="absolute left-[calc(50%+0.13px)] overflow-clip top-[calc(50%-0.19px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Stay"
            animate={{
              height: isCollapsed
                ? stateConfig.Stay.collapsed.height
                : stateConfig.Stay.expanded.height,
              width: isCollapsed
                ? stateConfig.Stay.collapsed.width
                : stateConfig.Stay.expanded.width,
              rotate: isCollapsed
                ? stateConfig.Stay.collapsed.rotate
                : stateConfig.Stay.expanded.rotate,
            }}
            transition={transitionConfig}
          >
            <StayImage additionalClassNames="absolute inset-[0_66.71%_59.32%_0]" />
            <div className="absolute flex inset-[59.32%_0_0_66.71%] items-center justify-center">
              <div className="flex-none h-[371.91px] rotate-[180deg] w-[380.509px]">
                <StayImage additionalClassNames="relative size-full" />
              </div>
            </div>
            <div className="absolute flex inset-[25.31%_23.58%_25.24%_23.66%] items-center justify-center">
              <motion.div
                className="flex-none h-[660px] rotate-[303.995deg] w-[100px]"
                animate={{
                  opacity: isCollapsed
                    ? stateConfig.textOpacity.collapsed
                    : stateConfig.textOpacity.expanded,
                }}
                transition={transitionConfig}
              >
                <div className="relative size-full">
                  <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-1px)] not-italic text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">
                    STAY
                  </p>
                  <Text
                    text="STAY"
                    additionalClassNames="bottom-[10.74px] left-1/2"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[calc(50%-0.27px)] overflow-clip top-[calc(50%+0.03px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Dining"
            animate={{
              height: isCollapsed
                ? stateConfig.Dining.collapsed.height
                : stateConfig.Dining.expanded.height,
              width: isCollapsed
                ? stateConfig.Dining.collapsed.width
                : stateConfig.Dining.expanded.width,
              rotate: isCollapsed
                ? stateConfig.Dining.collapsed.rotate
                : stateConfig.Dining.expanded.rotate,
            }}
            transition={transitionConfig}
          >
            <DiningImage additionalClassNames="absolute inset-[0_51.38%_69.78%_0]" />
            <div className="absolute flex inset-[69.78%_0_0_51.38%] items-center justify-center">
              <div className="flex-none h-[359.064px] rotate-[180deg] w-[353.6px]">
                <DiningImage additionalClassNames="relative size-full" />
              </div>
            </div>
            <div className="absolute flex inset-[21.54%_24.77%_21.55%_24.89%] items-center justify-center">
              <motion.div
                className="flex-none h-[660px] rotate-[340.996deg] w-[160px]"
                animate={{
                  opacity: isCollapsed
                    ? stateConfig.textOpacity.collapsed
                    : stateConfig.textOpacity.expanded,
                }}
                transition={transitionConfig}
              >
                <div className="relative size-full">
                  <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.5px)] not-italic text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">
                    premier dinning
                  </p>
                  <Text
                    text="premier dinning"
                    additionalClassNames="bottom-[10.74px] left-[calc(50%-0.5px)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[calc(50%-0.16px)] overflow-clip top-[calc(50%+0.02px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Spa"
            animate={{
              height: isCollapsed
                ? stateConfig.Spa.collapsed.height
                : stateConfig.Spa.expanded.height,
              width: isCollapsed
                ? stateConfig.Spa.collapsed.width
                : stateConfig.Spa.expanded.width,
              rotate: isCollapsed
                ? stateConfig.Spa.collapsed.rotate
                : stateConfig.Spa.expanded.rotate,
            }}
            transition={transitionConfig}
          >
            <SpaImage additionalClassNames="absolute inset-[0_0_69.78%_51.39%]" />
            <div className="absolute flex inset-[69.78%_51.39%_0_0] items-center justify-center">
              <div className="flex-none h-[359.046px] rotate-[180deg] w-[353.618px]">
                <SpaImage additionalClassNames="relative size-full" />
              </div>
            </div>
            <div className="absolute flex inset-[21.55%_24.77%_21.54%_24.9%] items-center justify-center">
              <motion.div
                className="flex-none h-[660px] rotate-[19.004deg] w-[160px]"
                animate={{
                  opacity: isCollapsed
                    ? stateConfig.textOpacity.collapsed
                    : stateConfig.textOpacity.expanded,
                }}
                transition={transitionConfig}
              >
                <div className="relative size-full">
                  <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.5px)] not-italic text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">
                    spa indulgence
                  </p>
                  <Text
                    text="spa indulgence"
                    additionalClassNames="bottom-[10.74px] left-[calc(50%-0.5px)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[calc(50%+0.74px)] overflow-clip top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Conciege"
            animate={{
              height: isCollapsed
                ? stateConfig.Conciege.collapsed.height
                : stateConfig.Conciege.expanded.height,
              width: isCollapsed
                ? stateConfig.Conciege.collapsed.width
                : stateConfig.Conciege.expanded.width,
              rotate: isCollapsed
                ? stateConfig.Conciege.collapsed.rotate
                : stateConfig.Conciege.expanded.rotate,
            }}
            transition={transitionConfig}
          >
            <ConciegeImage additionalClassNames="absolute inset-[0_0_59.3%_66.71%]" />
            <div className="absolute flex inset-[59.3%_66.71%_0_0] items-center justify-center">
              <div className="flex-none h-[372.161px] rotate-[180deg] w-[380.599px]">
                <ConciegeImage additionalClassNames="relative size-full" />
              </div>
            </div>
            <div className="absolute flex inset-[27.99%_25.05%_28.02%_25.09%] items-center justify-center">
              <motion.div
                className="flex-none h-[661.194px] rotate-[56.005deg] w-[39.133px]"
                animate={{
                  opacity: isCollapsed
                    ? stateConfig.textOpacity.collapsed
                    : stateConfig.textOpacity.expanded,
                }}
                transition={transitionConfig}
              >
                <div className="relative size-full">
                  <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.57px)] not-italic text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">
                    conciege
                  </p>
                  <Text
                    text="conciege"
                    additionalClassNames="bottom-[10.94px] left-[calc(50%+0.43px)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Toggle button - fixed position */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed bottom-8 right-8 size-16 rounded-full bg-gradient-to-br from-[#F9F7ED] to-[#DBCFB2] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label={isCollapsed ? "Expand" : "Collapse"}
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#8B7355"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}