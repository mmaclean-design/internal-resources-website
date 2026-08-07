type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[282px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "bg-[#f5f0e6] h-[104px] left-0 top-[134px] w-[1300px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`} />
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_6.31%_17.27%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">{`Who can I ask general questions, when I'm in-person, at the Design Lab?`}</p>}
      <div className={`absolute flex justify-center ${isVariant2 ? '-translate-y-1/2 [word-break:break-word] flex-col font-["Source_Sans_Pro:Regular",sans-serif] h-[73px] leading-[0] left-[23px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[184.5px] tracking-[1.0624px] w-[1256px]' : "inset-[0_2.2%_4.81%_95.72%] items-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        {isDefault && (
          <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
            <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
          </div>
        )}
        {isVariant2 && <p className="leading-[normal]">{`Design Lab Ambassadors are always happy to answer questions! The Ambassador desk is located in the Design Lab's kitchen/reception area, on the third floor of the DIB.`}</p>}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute bg-[#00629b] inset-[10.64%_0_60.99%_0]" />
          <div className="absolute flex h-[27px] items-center justify-center left-[1235px] top-[63px] w-[104.713px]">
            <div className="-rotate-90 flex-none">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[17.38%_6.31%_67.73%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">{`Who can I ask general questions, when I'm in-person, at the Design Lab?`}</p>
        </>
      )}
    </button>
  );
}