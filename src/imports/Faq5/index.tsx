type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[341px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "bg-[#f5f0e6] h-[148px] left-0 top-[152px] w-[1300px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`} />
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_8.23%_17.27%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Can I use a Design Lab Conference Room without a reservation?</p>}
      <div className={`absolute ${isVariant2 ? "bg-[#00629b] inset-[8.8%_0_67.74%_0]" : "flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        {isDefault && (
          <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
            <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
          </div>
        )}
      </div>
      {isVariant2 && (
        <>
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[14.37%_8.23%_73.31%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Can I use a Design Lab Conference Room without a reservation?</p>
          <div className="absolute flex inset-[0_2.2%_69.29%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[158px] leading-[normal] left-[21px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[183px] tracking-[1.0624px] w-[1250px]">Design Lab Conference Rooms are available for drop-in needs when not in-use by an existing reservation. Please note that reservations take priority for room usage, and occupants may be requested to vacate to honor a reservation. Refer to the Design Lab Conference Room page for the reservation request form and room calendars.</p>
        </>
      )}
    </button>
  );
}