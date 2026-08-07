type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[483px]" : "h-[110px]"}`}>
      <div className={`absolute bg-[#00629b] ${isVariant2 ? "inset-[6.21%_0_77.23%_0]" : "inset-[27.27%_0_0_0]"}`} />
      {property1 === "Default" && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Is the DIB open on weekends?</p>}
      <div className={`absolute flex items-center justify-center ${isVariant2 ? "inset-[12.84%_-2.59%_81.57%_94.54%]" : "inset-[0_2.2%_4.81%_95.72%]"}`} style={{ containerType: "size" }}>
        <div className={`flex-none ${isVariant2 ? "-rotate-90 h-[100cqw] w-[100cqh]" : "h-[100cqh] rotate-180 w-[100cqw]"}`}>
          <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
        </div>
      </div>
      {isVariant2 && (
        <>
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[10.14%_50.13%_81.1%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Is the DIB open on weekends?</p>
          <div className="absolute bg-[#f5f0e6] inset-[38.3%_13.51%_7.04%_51.27%] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute bg-[#f5f0e6] inset-[38.3%_51.55%_7.04%_13.23%] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:Extrabold',sans-serif] inset-[42.65%_71.68%_46.17%_15.07%] leading-[normal] not-italic text-[#1e1e1e] text-[34px] text-left">DESIGN LAB</p>
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:Extrabold',sans-serif] inset-[42.65%_14.54%_46.17%_53.07%] leading-[normal] not-italic text-[#1e1e1e] text-[34px] text-left">DESIGN AND INNOVATION BUILDING</p>
          <div className="[word-break:break-word] absolute capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[61.49%_57.01%_20.5%_15.76%] leading-[0] not-italic text-[#1e1e1e] text-[20px] text-left tracking-[1px] whitespace-pre-wrap">
            <p className="mb-0">
              <span className="leading-[48px]">{`Mon - Fri:                    `}</span>
              <span className="[word-break:break-word] font-['Source_Sans_Pro:Bold',sans-serif] leading-[48px] not-italic">9:00am - 5:00pm</span>
            </p>
            <p>
              <span className="leading-[48px]">{`Sat - Sun:                    `}</span>
              <span className="[word-break:break-word] font-['Source_Sans_Pro:Bold',sans-serif] leading-[48px] not-italic">Closed</span>
            </p>
          </div>
          <p className="[word-break:break-word] absolute capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[60.46%_19.7%_32.09%_53.07%] leading-[0] not-italic text-[#1e1e1e] text-[20px] text-left tracking-[1px] whitespace-pre-wrap">
            <span className="leading-[48px]">{`Mon - Fri:        `}</span>
            <span className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[48px]">{`         8:00am - 11:00pm`}</span>
          </p>
          <p className="[word-break:break-word] absolute capitalize font-['Source_Sans_Pro:Bold',sans-serif] inset-[72.88%_18.85%_10.97%_66.68%] leading-[25px] not-italic text-[#1e1e1e] text-[20px] text-left tracking-[1px]">keycard access is required for entry</p>
          <p className="[word-break:break-word] absolute capitalize font-['Source_Sans_Pro:Bold',sans-serif] inset-[74.33%_38.47%_20.91%_53.07%] leading-[0] not-italic text-[#1e1e1e] text-[20px] text-left tracking-[1px] whitespace-pre-wrap">
            <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[25px]">{`Sat - Sun: `}</span>
            <span className="leading-[25px]">{`               `}</span>
          </p>
          <div className="absolute flex inset-[53.83%_55.47%_45.96%_15.07%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-0.000681712cqw,99.9997cqh)] rotate-[0.15deg] w-[hypot(100cqw,100cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-4px_0_0_0]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 383.001 4" width="383.001">
                    <line id="Line 4" stroke="#1E1E1E" strokeWidth="4" x2="383.001" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[53.83%_16.08%_45.95%_53.07%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-0.000651112cqw,95.5109cqh)] rotate-[0.15deg] w-[hypot(100cqw,100cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-4px_0_0_0]">
                  <svg className="block size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 401.001 4" width="401.001">
                    <line id="Line 5" stroke="#1E1E1E" strokeWidth="4" x2="401.001" y1="2" y2="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </button>
  );
}