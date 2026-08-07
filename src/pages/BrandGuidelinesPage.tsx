import { useState } from "react";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/BrandGuidelines/fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "@/imports/BrandGuidelines/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import imgBrandScreenshot from "@/imports/BrandGuidelines/3bce18bea8f1fbe409b1c64a6213c6b094cf6888.png";
import imgCommsScreenshot from "@/imports/BrandGuidelines/3c41fc13869711671bd6113b527d26e0a85cd644.png";
import svgPaths from "@/imports/BrandGuidelines/svg-0yog0ioqmw";

const btnPath = svgPaths.peab5080;

function Chevron({ open }: { open: boolean }) {
  return (
    <div className={`transition-transform duration-200 ${open ? "" : "rotate-180"}`}>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M3 18L13.5 8L24 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DropdownHeader({ title, open, onToggle }: { title: string; open: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="w-full bg-[#00629b] h-[70px] flex items-center justify-between px-7 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[35px] text-left text-white tracking-[1.7px] uppercase">{title}</p>
      <Chevron open={open} />
    </button>
  );
}

function BrandAssetsDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Brand Assets" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex gap-4">
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:68698f1c-bb29-4cfc-b1c0-ce4a404fa764" target="_blank" rel="noreferrer" className="bg-[#f5f0e6] w-[858px] p-4 rounded-[8px] block">
            <div className="rounded-[25px] overflow-hidden h-[516px]">
              <img alt="Brand assets" className="w-full h-full object-cover" src={imgBrandScreenshot} />
            </div>
          </a>
          <div className="bg-[#f5f0e6] flex-1 p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[24px] tracking-[1.2px] uppercase mb-4">Brand Downloads</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[20px] tracking-[1px] mb-8">
              Design Lab Members may want to utilize the following branded assets and templates:
            </p>
            <div className="flex justify-center">
              <a href="https://drive.google.com/file/d/1PbhsrF9VuZt9wGjLtts68ewkdm0pBi_n/view?usp=drive_link" target="_blank" rel="noreferrer" className="relative h-[44px] w-[343px]">
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">access Brand Assets</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PromoteWorkDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="How to Promote Your Work" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex gap-4">
          <a href="https://docs.google.com/presentation/d/1Ddian_sg-zFxJLFXwhFV9tM_ztR8DusTypzN4ZHXgZo/present?slide=id.p" target="_blank" rel="noreferrer" className="bg-[#f5f0e6] w-[858px] p-4 rounded-[8px] block">
            <div className="rounded-[25px] overflow-hidden h-[439px]">
              <img alt="Comms screenshot" className="w-full h-full object-cover" src={imgCommsScreenshot} />
            </div>
          </a>
          <div className="bg-[#f5f0e6] flex-1 p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[24px] tracking-[1.2px] uppercase mb-4">SOP: Engage with CommS</p>
            <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-black text-[20px] tracking-[1px]">
              Design Lab Members may want to utilize the following branded assets and templates:
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BrandGuidelinesPage() {
  return (
    <div className="bg-white min-w-[1440px] flex flex-col items-center">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative h-[400px] w-[1440px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1519px] relative w-[428px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[80px] text-white tracking-[4.8px] uppercase text-center w-[880px]">Brand Guidelines</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center gap-[68px] py-12 bg-white">
        <BrandAssetsDropdown />
        <PromoteWorkDropdown />
      </div>

      {/* Footer */}
      <div className="bg-[#182b49] h-[141px] w-[1440px] flex flex-col items-center justify-center gap-3 mt-auto">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[14px] text-center text-white tracking-[0.7px]">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[29px] w-[97px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>
  );
}
