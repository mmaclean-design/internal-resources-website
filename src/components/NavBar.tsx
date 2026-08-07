import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import imgDlabSquareLogo21 from "@/imports/Home/8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";

const resourcesSubpages = [
  { label: "SPACE RESOURCES", path: "/resources" },
  { label: "IT SUPPORT", path: "/it-resources" },
  { label: "BRAND GUIDELINES", path: "/brand-guidelines" },
  { label: "OPS REQUEST FORM", path: "/ops-request" },
];

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const active = (path: string) => location.pathname === path;
  const resourcesActive =
    active("/resources") ||
    location.pathname.startsWith("/brand") ||
    location.pathname.startsWith("/it") ||
location.pathname.startsWith("/ops");

  return (
    <div className="h-[80px] relative w-[1440px] shrink-0">
      <div className="absolute bg-[#182b49] inset-0" />
      <div className="absolute w-[58px] h-[58px] left-[20px] top-[11px]">
        <img
          alt="Design Lab"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full cursor-pointer"
          src={imgDlabSquareLogo21}
          onClick={() => navigate("/")}
        />
      </div>
      <button
        onClick={() => navigate("/")}
        className={`[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[0] not-italic text-[18px] text-center tracking-[0.9px] uppercase ${active("/") ? "text-[#00c6d7]" : "text-white"}`}
      >
        <p className="leading-[normal]">Home</p>
      </button>
      <div
        className="absolute inset-[32.69%_22.46%_41.01%_68.05%]"
        onMouseEnter={() => setResourcesOpen(true)}
        onMouseLeave={() => setResourcesOpen(false)}
      >
        <button
          onClick={() => navigate("/resources")}
          className={`[word-break:break-word] size-full cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[0] not-italic text-[18px] text-center tracking-[0.9px] uppercase ${resourcesActive ? "text-[#00c6d7]" : "text-white"}`}
        >
          <p className="leading-[normal]">Resources</p>
        </button>
        {resourcesOpen && (
          <div className="absolute top-full left-0 bg-[#182b49] min-w-[190px] pt-4 pb-5 px-5 z-50 drop-shadow-[0px_4px_8px_rgba(0,0,0,0.35)]">
            {resourcesSubpages.map((item) => (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setResourcesOpen(false); }}
                className={`block w-full text-left font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] tracking-[0.7px] uppercase py-2 cursor-pointer transition-colors duration-100 ${active(item.path) ? "text-[#00c6d7]" : "text-white hover:text-[#00c6d7]"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => navigate("/faqs")}
        className={`[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[18px] text-center tracking-[0.9px] uppercase ${active("/faqs") ? "text-[#00c6d7]" : "text-white"}`}
      >
        <p className="leading-[normal]">FAQs</p>
      </button>
      <button
        onClick={() => navigate("/contact")}
        className={`[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_11.31%_41.01%_80.96%] leading-[0] not-italic text-[18px] text-center tracking-[0.9px] uppercase ${active("/contact") ? "text-[#00c6d7]" : "text-white"}`}
      >
        <p className="leading-[normal]">Contact</p>
      </button>
    </div>
  );
}
