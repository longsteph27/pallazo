import svgPaths from "./svg-a4wr4cczru";
import clsx from "clsx";
import imgEllipse4546 from "figma:asset/55dbb3bcb171def754390658bc0e4598b2b2a8d6.png";
import imgEllipse4547 from "figma:asset/7124b7cba3413fd5f8828d83bd7e98b111fd8c75.png";
import imgEllipse4548 from "figma:asset/9061f2cef48a3400b35d15abd0c4e5919781f109.png";
import imgEllipse4549 from "figma:asset/32980c3044cafc3ebf0bcb6b35332994ac42eda6.png";
type ConciegeImageProps = {
  additionalClassNames?: string;
};

function ConciegeImage({ additionalClassNames = "" }: ConciegeImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="428.779" src={imgEllipse4549} width="438.502" />
    </div>
  );
}
type SpaImageProps = {
  additionalClassNames?: string;
};

function SpaImage({ additionalClassNames = "" }: SpaImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="413.669" src={imgEllipse4548} width="407.416" />
    </div>
  );
}
type DiningImageProps = {
  additionalClassNames?: string;
};

function DiningImage({ additionalClassNames = "" }: DiningImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="413.69" src={imgEllipse4547} width="407.395" />
    </div>
  );
}
type StayImageProps = {
  additionalClassNames?: string;
};

function StayImage({ additionalClassNames = "" }: StayImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="428.491" src={imgEllipse4546} width="438.398" />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center translate-x-[-50%] translate-y-[100%]", additionalClassNames)}>
      <div className="flex-none rotate-[180deg]">
        <p className="font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] not-italic relative text-[16px] text-center text-nowrap text-white tracking-[0.32px] uppercase">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-[-226px] h-[1680px] left-[calc(50%+1px)] overflow-clip translate-x-[-50%] w-[1604px]">
        <div className="absolute left-[calc(50%-1px)] size-[98px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98 98">
            <circle cx="49" cy="49" fill="url(#paint0_radial_1_344)" fillOpacity="0.5" id="Ellipse 4549" r="49" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(0.340845 41.3114 -41.3114 1.32377 48.1336 41.3114)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_344" r="1">
                <stop stopColor="#F9F7ED" />
                <stop offset="1" stopColor="#DBCFB2" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute h-[1679.521px] left-[calc(50%-0.26px)] top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%] w-[1604.121px]" data-name="Element Wrap">
          <div className="absolute h-0 left-[calc(50%-0.74px)] top-[calc(50%-0.24px)] translate-x-[-50%] translate-y-[-50%] w-[1188px]" data-name="LR">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1188 0">
              <g clipPath="url(#clip0_1_173)" id="LR">
                <path clipRule="evenodd" d={svgPaths.p11961580} fill="var(--fill-0, #AC9666)" fillOpacity="0.44" fillRule="evenodd" id="Ellipse 4546" />
                <path clipRule="evenodd" d={svgPaths.p3d113b00} fill="var(--fill-0, #AC9666)" fillOpacity="0.44" fillRule="evenodd" id="Ellipse 4546_2" />
              </g>
              <defs>
                <clipPath id="clip0_1_173">
                  <rect fill="white" height="0.0001" width="1188" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute flex h-[1668.788px] items-center justify-center left-[calc(50%-0.71px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[1574.883px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[59.595deg]">
              <div className="h-[1053.291px] overflow-clip relative w-[1316.808px]" data-name="Stay">
                <StayImage additionalClassNames="absolute inset-[0_66.71%_59.32%_0]" />
                <div className="absolute flex inset-[59.32%_0_0_66.71%] items-center justify-center">
                  <div className="flex-none h-[428.491px] rotate-[180deg] w-[438.398px]">
                    <StayImage additionalClassNames="relative size-full" />
                  </div>
                </div>
                <div className="absolute flex inset-[25.31%_23.58%_25.25%_23.66%] items-center justify-center">
                  <div className="flex-none h-[760.409px] rotate-[303.995deg] w-[115.214px]">
                    <div className="relative size-full">
                      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.61px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">STAY</p>
                      <Text text="STAY" additionalClassNames="bottom-[11.15px] left-[calc(50%+0.39px)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1567.047px] items-center justify-center left-[calc(50%-1.16px)] top-[calc(50%-0.24px)] translate-x-[-50%] translate-y-[-50%] w-[1237.942px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[19deg]">
              <div className="h-[1368.811px] overflow-clip relative w-[837.953px]" data-name="Dining">
                <DiningImage additionalClassNames="absolute inset-[0_51.38%_69.78%_0]" />
                <div className="absolute flex inset-[69.78%_0_0_51.38%] items-center justify-center">
                  <div className="flex-none h-[413.69px] rotate-[180deg] w-[407.395px]">
                    <DiningImage additionalClassNames="relative size-full" />
                  </div>
                </div>
                <div className="absolute flex inset-[21.54%_24.77%_21.55%_24.89%] items-center justify-center">
                  <div className="flex-none h-[760.409px] rotate-[340.996deg] w-[184.342px]">
                    <div className="relative size-full">
                      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.67px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">premier dinning</p>
                      <Text text="premier dinning" additionalClassNames="bottom-[11.15px] left-[calc(50%-0.67px)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1567.105px] items-center justify-center left-[calc(50%-1.04px)] top-[calc(50%-0.25px)] translate-x-[-50%] translate-y-[-50%] w-[1238.163px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[341deg]">
              <div className="h-[1368.789px] overflow-clip relative w-[838.195px]" data-name="Spa">
                <SpaImage additionalClassNames="absolute inset-[0_0_69.78%_51.39%]" />
                <div className="absolute flex inset-[69.78%_51.39%_0_0] items-center justify-center">
                  <div className="flex-none h-[413.669px] rotate-[180deg] w-[407.416px]">
                    <SpaImage additionalClassNames="relative size-full" />
                  </div>
                </div>
                <div className="absolute flex inset-[21.55%_24.77%_21.54%_24.9%] items-center justify-center">
                  <div className="flex-none h-[760.409px] rotate-[19.004deg] w-[184.342px]">
                    <div className="relative size-full">
                      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.67px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">spa indulgence</p>
                      <Text text="spa indulgence" additionalClassNames="bottom-[11.15px] left-[calc(50%-0.67px)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[1679.521px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1604.121px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[303.333deg]">
              <div className="h-[1053.604px] overflow-clip relative w-[1317.262px]" data-name="Conciege">
                <ConciegeImage additionalClassNames="absolute inset-[0_0_59.3%_66.71%]" />
                <div className="absolute flex inset-[59.3%_66.71%_0_0] items-center justify-center">
                  <div className="flex-none h-[428.779px] rotate-[180deg] w-[438.502px]">
                    <ConciegeImage additionalClassNames="relative size-full" />
                  </div>
                </div>
                <div className="absolute flex inset-[27.99%_25.05%_28.02%_25.09%] items-center justify-center">
                  <div className="flex-none h-[761.785px] rotate-[56.005deg] w-[45.086px]">
                    <div className="relative size-full">
                      <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.54px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">conciege</p>
                      <Text text="conciege" additionalClassNames="bottom-[10.53px] left-[calc(50%+0.46px)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}