import { useState } from "react";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/Onboarding/fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "@/imports/Onboarding/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";

function Chevron({ open }: { open: boolean }) {
  return (
    <div className={`transition-transform duration-200 ${open ? "" : "rotate-180"}`}>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M3 18L13.5 8L24 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const usefulLinks = [
  { label: "UCSD Blink", href: "https://blink.ucsd.edu" },
  { label: "Design Lab Website", href: "https://design.ucsd.edu" },
  { label: "TritonLink", href: "https://tritonlink.ucsd.edu" },
  { label: "UC San Diego Library", href: "https://library.ucsd.edu" },
  { label: "UCSD VPN", href: "https://blink.ucsd.edu/technology/network/vpn/index.html" },
];

function UsefulLinksDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#00629b] h-[56px] md:h-[70px] flex items-center justify-between px-4 md:px-7 cursor-pointer"
      >
        <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[18px] md:text-[35px] text-left text-white tracking-[0.9px] md:tracking-[1.7px] uppercase">Useful Links</p>
        <Chevron open={open} />
      </button>
      {open && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[2px]">
          {usefulLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="bg-[#d9d9d9] h-[100px] md:h-[201px] flex items-center justify-center p-4 hover:bg-[#c9c9c9] transition-colors"
            >
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#1e1e1e] text-[14px] md:text-[18px] text-center tracking-[0.9px]">{link.label}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <div className="bg-white w-full md:min-w-[1440px] min-h-screen flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1519px] relative w-[428px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[32px] md:text-[80px] text-white tracking-[2px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">onboarding</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center w-full gap-[72px] py-12 px-4 md:px-0 bg-white">
        <UsefulLinksDropdown />
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
