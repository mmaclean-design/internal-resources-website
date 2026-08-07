import svgPaths from "./svg-ajyn8vv8ny";
import imgDlabSquareLogo21 from "./8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";
import imgGradient31 from "./fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "./c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
type OpsRequestInfoProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function OpsRequestInfo({ className, property1 = "Default" }: OpsRequestInfoProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[426px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">OPERATIONS EVENT SUPPORT</p>
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
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">OPERATIONS EVENT SUPPORT</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1229px] top-[69px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[915px] top-[223px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[915px] top-[223px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[1084px] not-italic text-[20px] text-center text-white top-[245px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">Access Request Form</p>
            </div>
          </div>
          <div className="absolute contents left-0 top-[145px]">
            <div className="absolute bg-[#f5f0e6] h-[200px] left-0 top-[145px] w-[855px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[53px] justify-center leading-[0] left-[19px] not-italic text-[21.248px] text-black text-left top-[186.5px] tracking-[1.0624px] uppercase w-[788px]">
              <p className="leading-[normal]">{`Design Lab Operations Event Support Request `}</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[138.112px] justify-center leading-[0] left-[22px] not-italic text-[21.248px] text-black text-left top-[257.42px] tracking-[1.0624px] w-[792.55px]">
              <p className="leading-[normal]">Text</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}

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

function Hero() {
  return (
    <div className="absolute contents left-[-0.5px] top-[104.12px]" data-name="Hero">
      <div className="absolute flex h-[428px] items-center justify-center left-[-0.5px] top-[104.12px] w-[1519px]">
        <div className="flex-none rotate-90">
          <div className="h-[1519px] relative w-[428px]" data-name="gradient3 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient31} />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[116.55px] leading-[normal] left-[calc(50%+0.53px)] not-italic text-[96px] text-center text-white top-[259.4px] tracking-[4.8px] uppercase w-[880.95px]">ops request form</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Footer">
      <div className="bg-[#182b49] col-1 h-[141px] ml-0 mt-0 relative row-1 w-[1530px]" />
      <p className="[word-break:break-word] capitalize col-1 font-['Source_Sans_Pro:SemiBold',sans-serif] h-[40px] leading-[normal] ml-[399.7px] mt-[42px] not-italic relative row-1 text-[14px] text-center text-white tracking-[0.7px] w-[796.875px] whitespace-pre-wrap">{`The Design Lab at UC San Diego |  9500 Gilman Drive, MC0425, La Jolla, CA 92093`}</p>
      <div className="col-1 h-[28.834px] ml-[749.69px] mt-[70.57px] relative row-1 w-[96.987px]" data-name="White DLAb logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDlAbLogo1} />
      </div>
    </div>
  );
}

function QuickAccessBlock() {
  return (
    <div className="content-stretch flex flex-col h-[141px] items-center justify-center relative shrink-0 w-full" data-name="Quick Access Block">
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[135px] items-center left-0 top-[588px] w-[1512px]">
      <OpsRequestInfo className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <QuickAccessBlock />
    </div>
  );
}

export default function OpsRequestForm() {
  return (
    <div className="bg-white relative size-full" data-name="ops request form">
      <NavBar className="absolute bottom-0 h-[974px] left-0 pointer-events-none top-0" />
      <Hero />
      <Frame />
    </div>
  );
}