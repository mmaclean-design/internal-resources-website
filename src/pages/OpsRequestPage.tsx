import { useState } from "react";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/OpsRequestForm/fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "@/imports/OpsRequestForm/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import svgPaths from "@/imports/OpsRequestForm/svg-ajyn8vv8ny";

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

function OpsEventSupportDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#00629b] h-[56px] md:h-[70px] flex items-center justify-between px-4 md:px-7 cursor-pointer"
      >
        <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[18px] md:text-[35px] text-left text-white tracking-[0.9px] md:tracking-[1.7px] uppercase">Operations Event Support</p>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="bg-white p-4 flex flex-col md:flex-row gap-4">
          <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Design Lab Operations Event Support Request</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] mb-4">
              The Design Lab Operations team provides event support for Design Lab affiliated events hosted in the DIB. Submit a request to inquire about available support for your event.
            </p>
          </div>
          <div className="bg-[#f5f0e6] p-6 flex items-center justify-center w-full md:w-[400px] rounded-[8px]">
            <a href="https://forms.gle/oU2Xx2kkzgMyYqdB8" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
              <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={btnPath} fill="#00629B" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">Access Request Form</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function OpsRequestPage() {
  return (
    <div className="bg-white w-full md:min-w-[1440px] min-h-screen flex flex-col items-center">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1519px] relative w-[428px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[28px] md:text-[80px] text-white tracking-[1.7px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">ops request form</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center w-full gap-[64px] py-12 px-4 md:px-0 bg-white">
        <OpsEventSupportDropdown />
      </div>

      {/* Footer */}
      <div className="bg-[#182b49] w-full md:w-[1440px] h-auto md:h-[141px] py-6 md:py-0 px-4 flex flex-col items-center justify-center gap-3 mt-auto">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[12px] md:text-[14px] text-center text-white tracking-[0.7px]">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[29px] w-[97px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>
  );
}
