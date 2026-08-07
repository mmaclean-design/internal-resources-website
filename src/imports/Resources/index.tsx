import imgDlabSquareLogo21 from "./8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";
import svgPaths from "./svg-wx2sby553w";
import imgGradient32 from "./fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "./c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";

function NavBar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[104px] relative w-[1512px]"}>
      <div className="absolute bg-[#182b49] inset-0" />
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_11.31%_41.01%_80.96%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">Contact</p>
      </button>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">home</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">{"home"}</p>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">FAQs</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_22.46%_41.01%_68.05%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">Resources</p>
      <div className="absolute aspect-[773/762] left-[1.39%] right-[93.4%] top-[11px]" data-name="dlab square logo 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDlabSquareLogo21} />
      </div>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">home</p>
      </button>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">FAQs</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_22.46%_41.01%_68.05%] leading-[normal] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">Resources</p>
      <div className="absolute aspect-[773/762] left-[1.39%] right-[93.4%] top-[11px]" data-name="dlab square logo 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDlabSquareLogo21} />
      </div>
    </div>
  );
}
type DLabRoomDropdownProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function DLabRoomDropdown({ className, property1 = "Default" }: DLabRoomDropdownProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[492px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "contents left-[3px] top-[141px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`}>
        {isVariant2 && (
          <>
            <div className="absolute bg-[#f5f0e6] h-[310px] left-[3px] top-[145px] w-[1297px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[105px] justify-center leading-[0] left-[30px] not-italic text-[0px] text-black text-left top-[257.5px] tracking-[1.0624px] w-[1235px] whitespace-pre-wrap">
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-[1.174] mb-0 text-[21.248px]">{`Conference Room reservation requests must be submitted a minimum of two (2) business days prior to the requested reservation date. Upon successful form submission, an email confirmation will be provided within one (1) business day. `}</p>
              <p className="leading-[1.174] mb-0 text-[20px]">​</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-[1.174] text-[20px]">Conference rooms are subject to availability, please review the room calendars below prior to submitting a reservation request.</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[85.428px] justify-center leading-[0] left-[30px] not-italic text-[#1e1e1e] text-[24px] text-left top-[183.71px] tracking-[1.2px] w-[233.728px]">
              <p className="leading-[normal]">Space Standards</p>
            </div>
          </>
        )}
      </div>
      {isDefault && (
        <>
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
          <div className="absolute contents left-[793px] top-[358px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[793px] top-[358px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[962px] not-italic text-[20px] text-center text-white top-[380px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Reserve Room</p>
            </div>
          </div>
          <div className="absolute contents left-[167px] top-[358px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[167px] top-[358px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] justify-center leading-[0] left-[336px] not-italic text-[20px] text-center text-white top-[380px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">room availability</p>
            </div>
          </div>
          <div className="absolute flex h-[27px] items-center justify-center left-[1232px] top-[62px] w-[104.713px]">
            <div className="-rotate-90 flex-none">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
type PoliciesDropdownProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function PoliciesDropdown({ className, property1 = "Default" }: PoliciesDropdownProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[716px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "contents left-0 top-[146px]" : "bg-[#00629b] inset-[27.16%_0_0_0]"}`}>
        {isVariant2 && (
          <>
            <div className="absolute bg-[#f5f0e6] h-[561px] left-[2px] top-[146px] w-[633px]" />
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[85.428px] justify-center leading-[0] left-[116.86px] not-italic text-[#1e1e1e] text-[21.248px] text-center top-[195.25px] tracking-[1.0624px] w-[233.728px]">
              <p className="leading-[normal]">Space Standards</p>
            </div>
          </>
        )}
      </div>
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_16.83%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">POlicies</p>}
      <div className={`absolute ${isVariant2 ? "contents left-[669px] top-[146px]" : "flex inset-[0_2.18%_4.39%_95.74%] items-center justify-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        <div className={isVariant2 ? "absolute bg-[#f5f0e6] h-[561px] left-[669px] top-[146px] w-[633px]" : "flex-none h-[100cqh] rotate-180 w-[100cqw]"}>{isDefault && <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>}</div>
        {isVariant2 && (
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[59.879px] justify-center leading-[0] left-[709px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[195.9px] tracking-[1.0624px] w-[233.728px]">
            <p className="leading-[normal]">Posting Policies</p>
          </div>
        )}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[31px]" data-name="Policies Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[31px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.482px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[50px] tracking-[1.9086px] uppercase w-[619.25px]">POlicies</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1234px] top-[65px] w-[105.167px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[105.167px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] leading-[0] left-[38px] not-italic text-[#1e1e1e] text-[0px] text-left top-[229px] tracking-[1.0625px] w-[562px] whitespace-pre-wrap">
            <p className="mb-0 text-[21.25px]">
              <span className="leading-[35px]">{`The occupancy and use of Design Lab spaces (defined as department offices, conference/meeting rooms, study/collaboration areas, and project spaces) is subject to the `}</span>
              <span className="leading-[35px] text-[#1e1e1e]">Design Lab Space Standards</span>
              <span className="leading-[35px]">. All occupants are encouraged to review the policy to ensure compliance.</span>
            </p>
            <p className="leading-[35px] mb-0 text-[21.25px]">​</p>
            <p className="text-[21.25px]">
              <span className="leading-[35px]">Please contact the Design Lab Operations Team (</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[35px] underline" role="link" tabIndex="0">
                dlab-ops@ucsd.edu
              </span>
              <span className="leading-[35px]">) with any further questions regarding the Space Standards.</span>
            </p>
          </div>
          <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] leading-[0] left-[709px] not-italic text-[#1e1e1e] text-[0px] text-left top-[229px] tracking-[1.0625px] w-[549px] whitespace-pre-wrap">
            <p className="leading-[35px] mb-0 text-[21.25px]">The Posting Policy is intended for Design Lab members, affiliated student organizations, and campus departments regarding posting criteria in Design Lab community spaces (defined as conference/meeting rooms and open collaboration areas). All members are encouraged to review the policy to ensure compliance.</p>
            <p className="leading-[35px] mb-0 text-[21.25px]">​</p>
            <p className="text-[21.25px]">
              <span className="leading-[35px]">Please contact the Design Lab Operations Team (</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[35px] text-[#1e1e1e] underline" role="link" tabIndex="0">
                dlab-ops@ucsd.edu
              </span>
              <span className="leading-[35px]">) with any further questions regarding the Posting Policy.</span>
            </p>
          </div>
          <div className="absolute h-[44px] left-[167px] top-[630px] w-[343px]" role="link" tabIndex="0">
            <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
              <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
            </svg>
          </div>
          <div className="absolute h-[44px] left-[814px] top-[630px] w-[343px]" role="link" tabIndex="0">
            <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
              <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
            </svg>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[339px] not-italic text-[20px] text-center text-white top-[651.5px] tracking-[1px] uppercase w-[320px]">
            <p className="leading-[normal]">space standards</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[986px] not-italic text-[20px] text-center text-white top-[651.5px] tracking-[1px] uppercase w-[320px]">
            <p className="leading-[normal]">posting policy</p>
          </div>
        </>
      )}
    </button>
  );
}
type AccessDropdownProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function AccessDropdown({ className, property1 = "Default" }: AccessDropdownProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[1004px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">AcCess Information</p>
          <div className="absolute flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
        </>
      )}
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[30px]" data-name="Access Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">AcCess Information</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1234px] top-[63px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[6px] top-[158px]">
            <div className="absolute bg-[#f5f0e6] h-[255px] left-[6px] top-[158px] w-[625px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[38px] leading-[normal] left-[35px] not-italic text-[#1e1e1e] text-[24px] text-left top-[181px] tracking-[1.2px] w-[329px]">Undergraduate Access</p>
          </div>
          <div className="absolute contents left-[682px] top-[158px]">
            <div className="absolute bg-[#f5f0e6] h-[255px] left-[682px] top-[158px] w-[619px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[32.624px] leading-[normal] left-[722px] not-italic text-[#1e1e1e] text-[24px] text-left top-[184px] tracking-[1.2px] w-[578.237px]">Visiting Scholars and Research Staff Access</p>
          </div>
          <div className="absolute contents left-[-1px] top-[459px]">
            <div className="absolute bg-[#f5f0e6] h-[266px] left-[-1px] top-[459px] w-[630px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[39.727px] leading-[normal] left-[33px] not-italic text-[#1e1e1e] text-[24px] text-left top-[484.16px] tracking-[1.2px] w-[468.659px]">Graduate and Post Doc Access</p>
          </div>
          <div className="absolute contents left-[679px] top-[459px]">
            <div className="absolute bg-[#f5f0e6] h-[266px] left-[679px] top-[459px] w-[625px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[39.454px] leading-[normal] left-[722px] not-italic text-[#1e1e1e] text-[24px] text-left top-[477.87px] tracking-[1.2px] w-[356.293px]">Faculty Access</p>
          </div>
          <div className="absolute contents left-[-1px] top-[782px]">
            <div className="absolute bg-[#f5f0e6] h-[242px] left-[-1px] top-[782px] w-[1301px]" />
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] h-[33.967px] leading-[normal] left-[33px] not-italic text-[#1e1e1e] text-[24px] text-left top-[810.22px] tracking-[1.2px] w-[468.659px]">Access Request</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[80px] justify-center leading-[0] left-[33px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[882px] tracking-[1.0624px] w-[1239px]">
            <p className="font-['Source_Sans_Pro:Light',sans-serif]">
              <span className="leading-[normal]">{`Affiliated Design Lab faculty, researchers, and students may request access to the Design Lab. Access is granted through the individual's `}</span>
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] text-[#1e1e1e] underline" role="link" tabIndex="0">
                UC San Diego Campus Card
              </span>
              <span className="leading-[normal]">{`. `}</span>
            </p>
          </div>
          <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] leading-[0] left-[704px] not-italic text-[#1e1e1e] text-[21.248px] text-left top-[202px] tracking-[1.0624px] w-[568px]">
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
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[214px] leading-[0] left-[20px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[229px] tracking-[1.0624px] w-[588px]">
            <li className="mb-0 ms-[31.872px]">
              <span className="leading-[99.13999938964844%]">DIB main entrance and elevator (daily, 8:00am - 6:00pm)</span>
            </li>
            <li className="ms-[31.872px]">
              <span className="leading-[99.13999938964844%]">Access to a Project Space is only provided if the undergraduate student will be engaged long-term (1 year or more) in a project and is approved by Project Space Leads.</span>
            </li>
          </ul>
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[208px] leading-[0] left-[23px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[532px] tracking-[1.0624px] w-[581px]">
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
          <ul className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[210px] leading-[0] left-[707px] list-disc not-italic text-[#1e1e1e] text-[21.248px] text-left top-[515px] tracking-[1.0624px] w-[562px]">
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
          <div className="absolute contents left-[478px] top-[938px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[478px] top-[938px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[647px] not-italic text-[20px] text-center text-white top-[960px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Access Request Form</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}

function Hero() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hero">
      <div className="col-1 flex h-[431px] items-center justify-center ml-0 mt-0 relative row-1 w-[1520px]">
        <div className="flex-none rotate-90">
          <div className="h-[1520px] relative w-[431px]" data-name="gradient3 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient32} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[116.55px] leading-[normal] ml-[424.5px] mt-[170.88px] not-italic relative row-1 text-[96px] text-white tracking-[4.8px] uppercase w-[880.95px]">space resources</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Footer">
      <div className="bg-[#182b49] col-1 h-[147.467px] ml-0 mt-0 relative row-1 w-[1512px]" />
      <p className="[word-break:break-word] capitalize col-1 font-['Source_Sans_Pro:SemiBold',sans-serif] h-[41.835px] leading-[normal] ml-[395px] mt-[43.93px] not-italic relative row-1 text-[14px] text-center text-white tracking-[0.7px] w-[787.5px] whitespace-pre-wrap">{`The Design Lab at UC San Diego |  9500 Gilman Drive, MC0425, La Jolla, CA 92093`}</p>
      <div className="col-1 h-[29.314px] ml-[739.5px] mt-[74.23px] relative row-1 w-[98.601px]" data-name="White DLAb logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDlAbLogo1} />
      </div>
    </div>
  );
}

function QuickAccessBlock() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Quick Access Block">
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[38px] h-[1061px] items-center justify-center left-0 top-[104px] w-[1512px]">
      <Hero />
      <AccessDropdown className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <PoliciesDropdown className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <DLabRoomDropdown className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <QuickAccessBlock />
    </div>
  );
}

export default function Resources() {
  return (
    <div className="bg-white relative size-full" data-name="resources">
      <Frame />
      <NavBar className="absolute h-[104px] left-0 top-0 w-[1512px]" />
    </div>
  );
}