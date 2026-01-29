import svgPaths from "./svg-rfqgsfsfm9";
import clsx from "clsx";
import imgEllipse4546 from "figma:asset/928708b3ea8dd4c5eca04b5c5c82891a427a0030.png";
import imgEllipse4547 from "figma:asset/841c9fd9a26a1dbf967cde4d61e2a7caf72c3f60.png";
import imgEllipse4548 from "figma:asset/110a0ad13b80ea6b520c9585df6740d3c7d80505.png";
import imgEllipse4549 from "figma:asset/d5d613d3e9205c8a1b3dacfdf1e66e984150873f.png";
type ConciegeImageProps = {
  additionalClassNames?: string;
};

function ConciegeImage({ additionalClassNames = "" }: ConciegeImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="372.161" src={imgEllipse4549} width="380.599" />
    </div>
  );
}
type SpaImageProps = {
  additionalClassNames?: string;
};

function SpaImage({ additionalClassNames = "" }: SpaImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="359.046" src={imgEllipse4548} width="353.618" />
    </div>
  );
}
type DiningImageProps = {
  additionalClassNames?: string;
};

function DiningImage({ additionalClassNames = "" }: DiningImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="359.064" src={imgEllipse4547} width="353.6" />
    </div>
  );
}
type StayImageProps = {
  additionalClassNames?: string;
};

function StayImage({ additionalClassNames = "" }: StayImageProps) {
  return (
    <div className={additionalClassNames}>
      <img alt="" className="block max-w-none size-full" height="371.91" src={imgEllipse4546} width="380.509" />
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
      <div className="absolute left-1/2 size-[1228px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1228 1228">
          <circle cx="614" cy="614" fill="url(#paint0_radial_1_44)" fillOpacity="0.5" id="Ellipse 4549" r="614" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(4.27099 517.657 -517.657 16.5876 603.143 517.657)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_44" r="1">
              <stop stopColor="#F9F7ED" />
              <stop offset="1" stopColor="#DBCFB2" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-1/2 size-[1228px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Element Wrap">
        <div className="absolute h-[287.682px] left-1/2 top-[calc(50%+0.02px)] translate-x-[-50%] translate-y-[-50%] w-[1188px]" data-name="LR">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1188 288">
            <g clipPath="url(#clip0_1_40)" id="LR">
              <path clipRule="evenodd" d={svgPaths.p24eefd00} fill="var(--fill-0, #AC9666)" fillOpacity="0.44" fillRule="evenodd" id="Ellipse 4546" />
              <path clipRule="evenodd" d={svgPaths.p1b2a4000} fill="var(--fill-0, #AC9666)" fillOpacity="0.44" fillRule="evenodd" id="Ellipse 4546_2" />
            </g>
            <defs>
              <clipPath id="clip0_1_40">
                <rect fill="white" height="287.682" width="1188" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute h-[914.208px] left-[calc(50%+0.13px)] overflow-clip top-[calc(50%-0.19px)] translate-x-[-50%] translate-y-[-50%] w-[1142.929px]" data-name="Stay">
          <StayImage additionalClassNames="absolute inset-[0_66.71%_59.32%_0]" />
          <div className="absolute flex inset-[59.32%_0_0_66.71%] items-center justify-center">
            <div className="flex-none h-[371.91px] rotate-[180deg] w-[380.509px]">
              <StayImage additionalClassNames="relative size-full" />
            </div>
          </div>
          <div className="absolute flex inset-[25.31%_23.58%_25.24%_23.66%] items-center justify-center">
            <div className="flex-none h-[660px] rotate-[303.995deg] w-[100px]">
              <div className="relative size-full">
                <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-1px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">STAY</p>
                <Text text="STAY" additionalClassNames="bottom-[10.74px] left-1/2" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1188.064px] left-[calc(50%-0.27px)] overflow-clip top-[calc(50%+0.03px)] translate-x-[-50%] translate-y-[-50%] w-[727.305px]" data-name="Dining">
          <DiningImage additionalClassNames="absolute inset-[0_51.38%_69.78%_0]" />
          <div className="absolute flex inset-[69.78%_0_0_51.38%] items-center justify-center">
            <div className="flex-none h-[359.064px] rotate-[180deg] w-[353.6px]">
              <DiningImage additionalClassNames="relative size-full" />
            </div>
          </div>
          <div className="absolute flex inset-[21.54%_24.77%_21.55%_24.89%] items-center justify-center">
            <div className="flex-none h-[660px] rotate-[340.996deg] w-[160px]">
              <div className="relative size-full">
                <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.5px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">premier dinning</p>
                <Text text="premier dinning" additionalClassNames="bottom-[10.74px] left-[calc(50%-0.5px)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[1188.046px] left-[calc(50%-0.16px)] overflow-clip top-[calc(50%+0.02px)] translate-x-[-50%] translate-y-[-50%] w-[727.515px]" data-name="Spa">
          <SpaImage additionalClassNames="absolute inset-[0_0_69.78%_51.39%]" />
          <div className="absolute flex inset-[69.78%_51.39%_0_0] items-center justify-center">
            <div className="flex-none h-[359.046px] rotate-[180deg] w-[353.618px]">
              <SpaImage additionalClassNames="relative size-full" />
            </div>
          </div>
          <div className="absolute flex inset-[21.55%_24.77%_21.54%_24.9%] items-center justify-center">
            <div className="flex-none h-[660px] rotate-[19.004deg] w-[160px]">
              <div className="relative size-full">
                <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.5px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">spa indulgence</p>
                <Text text="spa indulgence" additionalClassNames="bottom-[10.74px] left-[calc(50%-0.5px)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[914.479px] left-[calc(50%+0.74px)] overflow-clip top-[calc(50%+0.24px)] translate-x-[-50%] translate-y-[-50%] w-[1143.322px]" data-name="Conciege">
          <ConciegeImage additionalClassNames="absolute inset-[0_0_59.3%_66.71%]" />
          <div className="absolute flex inset-[59.3%_66.71%_0_0] items-center justify-center">
            <div className="flex-none h-[372.161px] rotate-[180deg] w-[380.599px]">
              <ConciegeImage additionalClassNames="relative size-full" />
            </div>
          </div>
          <div className="absolute flex inset-[27.99%_25.05%_28.02%_25.09%] items-center justify-center">
            <div className="flex-none h-[661.194px] rotate-[56.005deg] w-[39.133px]">
              <div className="relative size-full">
                <p className="absolute font-['Helvetica_Neue:Medium',sans-serif] leading-[1.28] left-[calc(50%-0.57px)] not-italic text-[16px] text-center text-nowrap text-white top-0 tracking-[0.32px] translate-x-[-50%] uppercase">conciege</p>
                <Text text="conciege" additionalClassNames="bottom-[10.94px] left-[calc(50%+0.43px)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}