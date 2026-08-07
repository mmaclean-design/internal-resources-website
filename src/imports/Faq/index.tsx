import imgDlabSquareLogo21 from "./8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";
import svgPaths from "./svg-rtmwrvp4u1";
import imgScreenshot20260706At30016Pm1 from "./8f8ea29314c1b093be94352a5d13f19d848cf75e.png";
import imgGradient21 from "./e7b864d9e1a800659a00414048067b89c1a2232f.png";
import imgWhiteDlAbLogo1 from "./c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";

function NavBar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[104px] relative w-[1512px]"}>
      <div className="absolute bg-[#182b49] inset-0" />
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_11.31%_41.01%_80.96%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">Contact</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">{"home"}</p>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">{"FAQs"}</p>
      </button>
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
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">FAQs</p>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_22.46%_41.01%_68.05%] leading-[normal] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">Resources</p>
      <div className="absolute aspect-[773/762] left-[1.39%] right-[93.4%] top-[11px]" data-name="dlab square logo 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDlabSquareLogo21} />
      </div>
    </div>
  );
}
type Faq6Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq6({ className, property1 = "Default" }: Faq6Props) {
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
type Faq5Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq5({ className, property1 = "Default" }: Faq5Props) {
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
type Faq7Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq7({ className, property1 = "Default" }: Faq7Props) {
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[870px]" : "h-[110px]"}`}>
      {property1 === "Default" && (
        <div className="absolute contents left-0 top-0" data-name="Access Dropdown">
          <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[1164px]">How do I connect to Design Lab printers?</p>
          <div className="absolute flex h-[104.713px] items-center justify-center left-[1244.37px] top-0 w-[27px]">
            <div className="flex-none rotate-180">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
        </div>
      )}
      {isVariant2 && (
        <>
          <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[1164px]">How do I connect to Design Lab printers?</p>
          <div className="absolute flex h-[104.713px] items-center justify-center left-[1244.37px] top-0 w-[27px]">
            <div className="flex-none rotate-180">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
          <div className="absolute contents left-[-1px] top-[138px]">
            <div className="absolute bg-[#f5f0e6] h-[200px] left-[-1px] top-[138px] w-[1300px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[27.6px] not-italic text-[24px] text-black text-left top-[175.52px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">General Policies</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[140px] justify-center leading-[0] left-[28.07px] not-italic text-[0px] text-black text-left top-[261px] tracking-[1.0624px] w-[1237.857px] whitespace-pre-wrap">
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-none mb-0 text-[21px]">Please limit printing jobs to Design Lab related projects and work. Printers should not be used for personal projects or unrelated coursework. Ask an Ambassador for extra supplies and assistance.</p>
              <p className="leading-none mb-0 text-[21.248px]">​</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-none text-[20px]">Please note that large files will take a few to several minutes to print. To speed up the print job, you may need to change your file format (e.g. PDF to JPG).</p>
            </div>
          </div>
          <div className="absolute contents left-0 top-[708px]">
            <div className="absolute contents left-0 top-[708px]">
              <div className="absolute bg-[#f5f0e6] h-[130px] left-0 top-[708px] w-[1300px]" />
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[29.694px] justify-center leading-[0] left-[29px] not-italic text-[24px] text-black text-left top-[742.77px] tracking-[1.2px] uppercase w-[575.063px]">
                <p className="leading-[normal]">Printer Name</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Light',sans-serif] h-[91px] justify-center leading-[0] left-[29.07px] not-italic text-[21px] text-black text-left top-[787.95px] tracking-[1.05px] w-[1237.857px]">
                <p className="leading-none mb-0">HP Color LaserJet Enterprise MFP M681 (dlab-hp-mfpm681)</p>
                <p className="leading-none">IP address: 192.168.0.171</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[-1px] top-[373px]">
            <div className="absolute bg-[#f5f0e6] h-[300px] left-[-1px] top-[373px] w-[633px]" />
            <ol className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[188px] leading-[0] left-[18px] list-decimal not-italic text-[21px] text-black text-left top-[458px] tracking-[1.05px] w-[584px]" start="1">
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Proceed to WiFi Settings on personal device</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Access the "DesignLab" WiFi network`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Proceed to System Preferences > Printers & Scanners`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Select "+" button located on the bottom left of Printers`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Printer names (found below) should appear</span>
              </li>
              <li className="ms-[31.5px]">
                <span className="leading-[normal]">Add/select printers as needed</span>
              </li>
            </ol>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[28px] not-italic text-[24px] text-black text-left top-[421.84px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">Connection for mac</p>
            </div>
          </div>
          <div className="absolute contents left-[664px] top-[373px]">
            <div className="absolute bg-[#f5f0e6] h-[300px] left-[664px] top-[373px] w-[633px]" />
            <ol className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[188px] leading-[0] left-[686px] list-decimal not-italic text-[21px] text-black text-left top-[458px] tracking-[1.05px] w-[590px]" start="1">
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Proceed to WiFi Settings on your personal device</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Access the "DesignLab" WiFi network`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Proceed to the Printers & Scanners on your personal device`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Select "Add Device"`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Printer names (found below) should appear</span>
              </li>
              <li className="ms-[31.5px]">
                <span className="leading-[normal]">Add printers as needed</span>
              </li>
            </ol>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[695px] not-italic text-[24px] text-black text-left top-[421.84px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">Connection for Windows</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
type Faq4Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq4({ className, property1 = "Default" }: Faq4Props) {
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
type Faq3Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq3({ className, property1 = "Default" }: Faq3Props) {
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
type Faq2Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq2({ className, property1 = "Default" }: Faq2Props) {
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
type Faq1Props = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Faq1({ className, property1 = "Default" }: Faq1Props) {
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

function Hero() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Hero">
      <div className="col-1 flex h-[427px] items-center justify-center ml-0 mt-0 relative row-1 w-[1512px]">
        <div className="flex-none rotate-90">
          <div className="h-[1512px] relative w-[427px]" data-name="gradient2 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient21} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] col-1 font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[116.55px] leading-[normal] ml-[316.05px] mt-[155.4px] not-italic relative row-1 text-[96px] text-center text-white tracking-[4.8px] uppercase w-[880.95px]">FAQ</p>
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
    <div className="absolute content-stretch flex flex-col gap-[44px] h-[889px] items-center left-0 top-[104px] w-[1512px]">
      <Hero />
      <Faq1 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Faq2 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Faq3 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Faq4 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[137px] relative shrink-0 w-[1300px]" />
      <Faq7 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Faq5 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Faq6 className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <QuickAccessBlock />
    </div>
  );
}

export default function Faq() {
  return (
    <div className="bg-white relative size-full" data-name="FAQ">
      <Frame />
      <NavBar className="absolute h-[104px] left-0 top-0 w-[1512px]" />
    </div>
  );
}