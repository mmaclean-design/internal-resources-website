type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[296px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "bg-[#f5f0e6] h-[104px] left-0 top-[169px] w-[1300px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`} />
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_8.23%_17.27%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">How do I gain access to the DIB and my Design Lab Project Space?</p>}
      <div className={`absolute flex justify-center ${isVariant2 ? '-translate-y-1/2 [word-break:break-word] flex-col font-["Source_Sans_Pro:Regular",sans-serif] h-[73px] leading-[0] left-[22px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[221.5px] tracking-[1.0624px] w-[1256px]' : "inset-[0_2.2%_4.81%_95.72%] items-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        {isDefault && (
          <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
            <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
          </div>
        )}
        {isVariant2 && <p className="leading-[normal]">{`Affiliated Design Lab faculty, researchers, and students may request access to the Design Lab. Access is granted through the individual's UC San Diego Campus Card. Please review Space Resources for further instructions.`}</p>}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute bg-[#00629b] inset-[12.16%_0.01%_60.47%_0.14%]" />
          <div className="absolute flex h-[27px] items-center justify-center left-[1232px] top-[74px] w-[104.713px]">
            <div className="-rotate-90 flex-none">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[18.58%_8.25%_66.89%_2.37%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">How do I gain access to the DIB and my Design Lab Project Space?</p>
        </>
      )}
    </button>
  );
}