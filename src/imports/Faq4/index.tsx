import svgPaths from "./svg-k5srgqym8g";
type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[1030px]" : "h-[137px]"}`}>
      <div className={`absolute ${isVariant2 ? "contents left-[5px] top-[179px]" : "bg-[#00629b] inset-[8.76%_0_0_0]"}`}>
        {isVariant2 && (
          <>
            <div className="absolute bg-[#f5f0e6] h-[255px] left-[5px] top-[179px] w-[625px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[38px] leading-[normal] left-[34px] not-italic text-[#1e1e1e] text-[24px] text-left top-[202px] tracking-[1.2px] w-[329px]">UNDERGRADUATE ACCESS</p>
          </>
        )}
      </div>
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[22.63%_8.23%_46.72%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">{`I'm an affiliated Design Lab faculty member, what spaces do I have access to?`}</p>}
      <div className={`absolute ${isVariant2 ? "contents left-[681px] top-[179px]" : "flex inset-[0_2.23%_23.57%_95.69%] items-center justify-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        <div className={isVariant2 ? "absolute bg-[#f5f0e6] h-[255px] left-[681px] top-[179px] w-[619px]" : "flex-none h-[100cqh] rotate-180 w-[100cqw]"}>{isDefault && <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>}</div>
        {isVariant2 && <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[32.624px] leading-[normal] left-[721px] not-italic text-[#1e1e1e] text-[24px] text-left top-[205px] tracking-[1.2px] w-[578.237px]">VISITING SCHOLARS AND RESEARCH STAFF</p>}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute contents left-[-2px] top-[480px]">
            <div className="absolute bg-[#f5f0e6] h-[266px] left-[-2px] top-[480px] w-[630px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[39.727px] leading-[normal] left-[32px] not-italic text-[#1e1e1e] text-[24px] text-left top-[505.16px] tracking-[1.2px] w-[468.659px]">GRADUATE AND POST DOC ACCESS</p>
          </div>
          <div className="absolute contents left-[678px] top-[480px]">
            <div className="absolute bg-[#f5f0e6] h-[266px] left-[678px] top-[480px] w-[625px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[39.454px] leading-[normal] left-[721px] not-italic text-[#1e1e1e] text-[24px] text-left top-[498.87px] tracking-[1.2px] w-[356.293px]">FACULTY ACCESS</p>
          </div>
          <div className="absolute contents left-[-2px] top-[803px]">
            <div className="absolute bg-[#f5f0e6] h-[215px] left-[-2px] top-[803px] w-[1305px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[33.967px] leading-[normal] left-[32px] not-italic text-[#1e1e1e] text-[24px] text-left top-[831.21px] tracking-[1.2px] w-[468.659px]">ACCESS REQUEST</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] left-[34px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[903px] tracking-[1.0624px] w-[1255px]">
            <p className="font-['Source_Sans_Pro:Light',sans-serif]">
              <span className="leading-[normal]">{`Affiliated Design Lab faculty, researchers, and students may request access to the Design Lab. Access is granted through the individual's `}</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] text-[#1e1e1e] underline" role="link" tabIndex="0">
                UC San Diego Campus Card
              </span>
              <span className="leading-[normal]">{`. `}</span>
            </p>
          </div>
          <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] leading-[0] left-[703px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[223px] tracking-[1.0624px] w-[568px]">
            <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[31.872px] whitespace-pre-wrap">
                <span className="leading-[normal]">{`DIB main entrance and elevators,  24/7`}</span>
              </li>
              <li className="mb-0 ms-[31.872px]">
                <span className="leading-[normal]">Specific Design Lab Project Space (pending approval by Faculty Advisor and/or Project Space Lead)</span>
              </li>
              <li className="mb-0 ms-[31.872px]">
                <span className="leading-[normal]">{`DIB Conference Rooms 306 & 307`}</span>
              </li>
              <li className="mb-0 ms-[31.872px]">
                <span className="leading-[normal]">{`Design Lab Conference Rooms 311 & 361`}</span>
              </li>
              <li className="ms-[31.872px]">
                <span className="leading-[normal]">Design Lab Graduate Student Workspace, Room 372</span>
              </li>
            </ul>
          </div>
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[214px] leading-[0] left-[19px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[250px] tracking-[1.0624px] w-[588px]">
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[99.13999938964844%]">DIB main entrance and elevator (daily, 8:00am - 6:00pm)</span>
            </li>
            <li className="ms-[31.872px]">
              <span className="leading-[99.13999938964844%]">Access to a Project Space is only provided if the undergraduate student will be engaged long-term (1 year or more) in a project and is approved by Project Space Leads.</span>
            </li>
          </ul>
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[208px] leading-[0] left-[22px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[553px] tracking-[1.0624px] w-[581px]">
            <li className="mb-0 ms-[31.872px] whitespace-pre-wrap">
              <span className="leading-[normal]">{`DIB main entrance and elevators,  24/7`}</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">Specific Design Lab Project Space (pending approval by Faculty Advisor and/or Project Space Lead)</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">{`DIB Conference Rooms 306 & 307`}</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">{`Design Lab Conference Rooms 311 & 361`}</span>
            </li>
            <li className="ms-[31.872px]">
              <span className="leading-[normal]">Design Lab Graduate Student Workspace, Room 372</span>
            </li>
          </ul>
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[210px] leading-[0] left-[706px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[536px] tracking-[1.0624px] w-[562px]">
            <li className="mb-0 ms-[31.872px] whitespace-pre-wrap">
              <span className="leading-[normal]">{`DIB main entrance and elevators,  24/7`}</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">{`Assigned Design Lab Project Space (access to additional project spaces require approval by the Design Lab Director's Office)`}</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">{`DIB Conference Rooms 306 & 307`}</span>
            </li>
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[normal]">{`Design Lab Conference Rooms 311 & 361`}</span>
            </li>
            <li className="ms-[31.872px]">
              <span className="leading-[normal]">Design Lab Graduate Student Workspace, Room 372</span>
            </li>
          </ul>
          <div className="absolute bg-[#00629b] inset-[1.17%_0_86.7%_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[3.01%_8.23%_92.91%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">{`I'm an affiliated Design Lab faculty member, what spaces do I have access to?`}</p>
          <div className="absolute flex inset-[0_2.23%_89.83%_95.69%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
          <div className="absolute contents left-[479px] top-[946px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[479px] top-[946px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[648px] not-italic text-[20px] text-center text-white top-[968px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Access Request Form</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}