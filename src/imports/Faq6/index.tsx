import svgPaths from "./svg-qsx8yj7kdu";
import imgScreenshot20260706At30016Pm1 from "./8f8ea29314c1b093be94352a5d13f19d848cf75e.png";
type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[552px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "contents left-0 top-[142px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`}>
        {isVariant2 && (
          <>
            <div className="absolute bg-[#f5f0e6] h-[410px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[142px] w-[1300px]" />
            <div className="absolute h-[346px] left-[420.5px] top-[174px] w-[848.833px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="346" preserveAspectRatio="none" viewBox="0 0 848.833 346" width="848.833">
                <path d={svgPaths.p393a7900} fill="white" id="Rectangle 19" />
              </svg>
            </div>
            <div className="absolute h-[314px] left-[435px] top-[191px] w-[821px]" data-name="Screenshot 2026-07-06 at 3.00.16 PM 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[116.19%] left-0 max-w-none top-0 w-[99.95%]" src={imgScreenshot20260706At30016Pm1} />
              </div>
            </div>
          </>
        )}
      </div>
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_8.23%_17.27%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">How can I stay updated on Design Lab events?</p>}
      <div className={`absolute ${isVariant2 ? "contents left-[26px] top-[325px]" : "flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        <div className={isVariant2 ? "absolute h-[44px] left-[26px] top-[325px] w-[360.15px]" : "flex-none h-[100cqh] rotate-180 w-[100cqw]"}>
          {isDefault && <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>}
          {isVariant2 && (
            <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 360.15 44" width="360.15">
              <path d={svgPaths.p236b0400} fill="#00629B" id="Rectangle 33" />
            </svg>
          )}
        </div>
        {isVariant2 && (
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[203.45px] not-italic text-[20px] text-center text-white top-[347px] tracking-[1px] uppercase w-[336px]">
            <p className="leading-[normal]">subscribe To Calendar</p>
          </div>
        )}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute bg-[#00629b] inset-[5.43%_0_80.07%_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[8.88%_8.23%_83.51%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">How can I stay updated on Design Lab events?</p>
          <div className="absolute flex inset-[0_2.2%_81.03%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}