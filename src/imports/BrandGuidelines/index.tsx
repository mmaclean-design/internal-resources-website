import imgDlabSquareLogo21 from "./8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";
import imgScreenshot20260710At123728Pm1 from "./3c41fc13869711671bd6113b527d26e0a85cd644.png";
import svgPaths from "./svg-0yog0ioqmw";
import imgScreenshot20260710At104904Am2 from "./3bce18bea8f1fbe409b1c64a6213c6b094cf6888.png";
import imgGradient31 from "./fa0647cf99bd411b2ade23b73af7083564e8d624.png";
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
type PromoteWorkProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function PromoteWork({ className, property1 = "Default" }: PromoteWorkProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[794px]" : "h-[110px]"}`}>
      <div className={`absolute ${isVariant2 ? "contents left-[-1px] top-[155px]" : "bg-[#00629b] inset-[27.27%_0_0_0]"}`}>{isVariant2 && <div className="absolute bg-[#d9d9d9] h-[574px] left-[-1px] top-[155px] w-[858px]" />}</div>
      {isDefault && <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">How to Promote Your work</p>}
      <div className={`absolute ${isVariant2 ? "contents left-[892px] top-[155px]" : "flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center"}`} style={isDefault ? { containerType: "size" } : undefined}>
        <div className={isVariant2 ? "absolute bg-[#d9d9d9] h-[192.216px] left-[892px] top-[155px] w-[407px]" : "flex-none h-[100cqh] rotate-180 w-[100cqw]"}>{isDefault && <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>}</div>
        {isVariant2 && (
          <>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[43.274px] justify-center leading-[0] left-[906px] not-italic text-[24px] text-black text-left top-[201.8px] tracking-[1.2px] uppercase w-[379px]">
              <p className="leading-[normal]">SOP: Engage with CommS</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[72.081px] justify-center leading-[0] left-[907px] not-italic text-[20px] text-black text-left top-[269.04px] tracking-[1px] w-[377.272px]">
              <p className="leading-[normal]">Design Lab Members may want to utilize the following branded assets and templates:</p>
            </div>
          </>
        )}
      </div>
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[30px]" data-name="Access Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">How to Promote Your work</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1232px] top-[69px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[439px] left-[31px] rounded-[25px] top-[222px] w-[793px]" data-name="Screenshot 2026-07-10 at 12.37.28 PM 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
              <img alt="" className="absolute h-[102.86%] left-0 max-w-none top-[-2.86%] w-full" src={imgScreenshot20260710At123728Pm1} />
            </div>
          </div>
        </>
      )}
    </button>
  );
}
type BrandAssetsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function BrandAssets({ className, property1 = "Default" }: BrandAssetsProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[773px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">Brand Assets</p>
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
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">Brand Assets</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1234px] top-[69px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-0 top-[145px]">
            <div className="absolute bg-[#f5f0e6] h-[574px] left-0 top-[145px] w-[858px]" />
            <div className="absolute h-[516.691px] left-[32px] rounded-[25px] top-[174px] w-[794.116px]" data-name="Screenshot 2026-07-10 at 10.49.04 AM 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
                <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.05%] w-[100.52%]" src={imgScreenshot20260710At104904Am2} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[893px] top-[145px]">
            <div className="absolute bg-[#f5f0e6] h-[271px] left-[893px] top-[145px] w-[407px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[43.274px] justify-center leading-[0] left-[921px] not-italic text-[#1e1e1e] text-[24px] text-left top-[191.64px] tracking-[1.2px] uppercase w-[379px]">
              <p className="leading-[normal]">Brand Downloads</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Light',sans-serif] h-[72px] justify-center leading-[0] left-[921px] not-italic text-[#1e1e1e] text-[20px] text-left top-[259px] tracking-[1px] w-[329px]">
              <p className="leading-[normal]">Design Lab Members may want to utilize the following branded assets and templates:</p>
            </div>
          </div>
          <div className="absolute contents left-[925px] top-[343px]" role="link" tabIndex="0" data-name="Button">
            <div className="absolute h-[44px] left-[925px] top-[343px] w-[343px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={svgPaths.peab5080} fill="#00629B" id="Rectangle 33" />
              </svg>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[13px] justify-center leading-[0] left-[1094px] not-italic text-[20px] text-center text-white top-[365px] tracking-[1px] uppercase w-[320px]">
              <p className="leading-[normal]">access Brand Assets</p>
            </div>
          </div>
        </>
      )}
    </button>
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
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[116.55px] leading-[normal] left-[calc(50%+0.53px)] not-italic text-[96px] text-center text-white top-[259.4px] tracking-[4.8px] uppercase w-[880.95px]">Brand Guidelines</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Footer">
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Quick Access Block">
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[68px] h-[497px] items-center left-[-5px] top-[577px] w-[1530px]">
      <BrandAssets className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <PromoteWork className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <QuickAccessBlock />
    </div>
  );
}

export default function BrandGuidelines() {
  return (
    <div className="bg-white relative size-full" data-name="brand guidelines">
      <Hero />
      <Frame />
      <NavBar className="absolute h-[104px] left-0 top-0 w-[1512px]" />
    </div>
  );
}