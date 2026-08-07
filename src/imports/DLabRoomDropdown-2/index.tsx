import svgPaths from "./svg-o45b9b0r8f";
import imgScreenshot20260805At12626Pm1 from "./f88a0a902b5f1674dcdd9df5104e0ddfb7e40fb5.png";
import imgScreenshot20260805At12515Pm1 from "./cdf16af384fe4a43f775cdc733a166f78a4b7b02.png";
type DLabRoomDropdownProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function DLabRoomDropdown({ className, property1 = "Default" }: DLabRoomDropdownProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[950px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Design Lab Room Reservation</p>
          <div className="absolute flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
        </>
      )}
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[30px]" data-name="DLab Room Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">Design Lab Room Reservation</p>
          </div>
          <div className="absolute flex h-[27px] items-center justify-center left-[1232px] top-[62px] w-[104.713px]">
            <div className="-rotate-90 flex-none">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
          <div className="absolute contents left-px top-[123px]">
            <div className="absolute bg-[#f5f0e6] h-[200px] left-px top-[123px] w-[1297px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[29.53px] not-italic text-[#182b49] text-[24px] text-left top-[160.52px] tracking-[1.2px] uppercase w-[573.736px]">
              <p className="leading-[normal]">Reservation Request Timeline</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[105px] justify-center leading-[0] left-[28px] not-italic text-[#182b49] text-[0px] text-left top-[235.5px] tracking-[1.0624px] w-[1235px] whitespace-pre-wrap">
              <p className="leading-[1.174] mb-0 text-[20px]">{`Conference Room reservation requests must be submitted a minimum of two (2) business days prior to the requested reservation date. Upon successful form submission, an email confirmation will be provided within one (1) business day. `}</p>
              <p className="leading-[1.174] mb-0 text-[20px]">​</p>
              <p className="font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic leading-[1.174] text-[20px]">Conference rooms are subject to availability, please review the room calendars below prior to submitting a reservation request.</p>
            </div>
          </div>
          <div className="absolute contents left-[-63px] top-[342px]" role="link" tabIndex="0">
            <div className="absolute bg-[#f5f0e6] h-[494px] left-0 top-[358px] w-[633px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[75.225px] justify-center leading-[0] left-[53.86px] not-italic text-[#182b49] text-[21.248px] text-center top-[379.61px] tracking-[1.0624px] w-[233.728px]">
              <p className="leading-[normal]">311</p>
            </div>
            <div className="absolute h-[437px] left-[23px] top-[393px] w-[585px]" data-name="Screenshot 2026-08-05 at 1.26.26 PM 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260805At12626Pm1} />
            </div>
          </div>
          <div className="absolute contents left-[594px] top-[342px]" role="link" tabIndex="0">
            <div className="absolute bg-[#f5f0e6] h-[494px] left-[667px] top-[358px] w-[633px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[75.225px] justify-center leading-[0] left-[710.86px] not-italic text-[#182b49] text-[21.248px] text-center top-[379.61px] tracking-[1.0624px] w-[233.728px]">
              <p className="leading-[normal]">361</p>
            </div>
          </div>
          <div className="absolute contents left-[145px] top-[871px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[145px] top-[871px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[314px] not-italic text-[20px] text-center text-white top-[893px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Reserve Room</p>
            </div>
          </div>
          <div className="absolute contents left-[812px] top-[871px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[812px] top-[871px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[981px] not-italic text-[20px] text-center text-white top-[893px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Reserve Room</p>
            </div>
          </div>
          <div className="absolute h-[437px] left-[693px] top-[393px] w-[582px]" data-name="Screenshot 2026-08-05 at 1.25.15 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260805At12515Pm1} />
          </div>
        </>
      )}
    </button>
  );
}