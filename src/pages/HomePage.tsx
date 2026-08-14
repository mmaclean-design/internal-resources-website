import { useNavigate } from "react-router";
import NavBar from "@/components/NavBar";
import imgHero1 from "@/imports/Home/hero-aurora.png";
import imgWhiteDlAbLogo1 from "@/imports/Home/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import svgPaths from "@/imports/Home/svg-mp1aneno70";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
    {/* Desktop */}
    <div className="hidden md:flex bg-white min-w-[1440px] min-h-screen flex-col items-center">
      {/* NavBar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative h-[400px] w-[1440px]">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={imgHero1}
        />
        <p
          className="absolute left-[57.75px] top-[160px] w-[880.95px] text-[80px] uppercase tracking-[4.8px] text-white font-['Refrigerator_Deluxe:ExtraBold',sans-serif]"
        >
          Internal Resources
        </p>
        <p
          className="absolute left-[950.25px] top-[183px] w-[432px] text-[24px] uppercase tracking-[1.2px] text-white font-['Source_Sans_Pro:SemiBold',sans-serif]"
        >
          Your Essential Guide for All Things Design Lab
        </p>
      </div>

      {/* Building Block */}
      <div className="bg-white py-16 w-[1440px] flex items-center pl-[67px] gap-12">
        <div className="shrink-0">
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#00629b] text-[24px] tracking-[1.2px] whitespace-nowrap">Building Information</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#00c6d7] text-[48px] tracking-[2.4px] uppercase whitespace-nowrap">Building Hours</p>
        </div>

        {/* Cards: Design Lab left, DIB right */}
        <div className="flex gap-6 ml-auto mr-[48px]">
          {/* Design Lab */}
          <div className="bg-[#00629b] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[420px] flex flex-col px-6 pt-5 pb-6 shrink-0">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[28px] text-white leading-tight mb-3 whitespace-nowrap">DESIGN LAB</p>
            <div className="w-full h-[3px] bg-white rounded mb-5 shrink-0" />
            <div className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[20px] text-white tracking-[1px] flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="shrink-0">Mon - Fri:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">9:00am - 5:00pm</span>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0">Sat - Sun:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">Closed</span>
              </div>
            </div>
          </div>

          {/* DIB */}
          <div className="bg-[#00629b] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[420px] flex flex-col px-6 pt-5 pb-6 shrink-0">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[28px] text-white leading-tight mb-3 whitespace-nowrap">DESIGN AND INNOVATION BUILDING</p>
            <div className="w-full h-[3px] bg-white rounded mb-5 shrink-0" />
            <div className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[20px] text-white tracking-[1px] flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="shrink-0">Mon - Fri:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">8:00am - 11:00pm</span>
              </div>
              <div className="flex gap-4">
                <span className="shrink-0">Sat - Sun:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">Keycard Access Is Required For Entry</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Block */}
      <div className="relative bg-[#182b49] h-[620px] w-[1440px]">
        <div className="absolute right-[60px] top-[200px] text-right flex flex-col items-end gap-6">
          <div>
            <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[24px] text-white tracking-[1.2px]">Calendar &amp; Events</p>
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#ffcd00] text-[48px] tracking-[2.4px] uppercase leading-tight">Recurring<br />Events</p>
          </div>
          <a href="https://calendar.google.com/calendar/ical/ucsd.edu_vbnavb6gt92esd8or5geqkctdc%40group.calendar.google.com/public/basic.ics" target="_blank" rel="noreferrer" className="relative h-[44px] w-[360px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 360.15 44" width="360.15">
              <path d={svgPaths.p236b0400} fill="white" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[#00629b] text-[20px] tracking-[1px] uppercase">Subscribe To Calendar</p>
            </div>
          </a>
        </div>

        {/* Calendar embed */}
        <div className="absolute left-[61px] top-[119px] bg-[#1d355a] h-[410px] w-[890px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="absolute left-[30px] top-[32px] w-[830px] h-[346px] rounded-[26px] overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ucsd.edu_vbnavb6gt92esd8or5geqkctdc%40group.calendar.google.com&ctz=America%2FLos_Angeles&color=%23d06b64"
              className="w-full h-full border-0"
              frameBorder={0}
              scrolling="no"
              title="Design Lab Calendar"
            />
            <a
              href="https://calendar.google.com/calendar/u/0/newembed?color=%23d06b64&src=ucsd.edu_vbnavb6gt92esd8or5geqkctdc@group.calendar.google.com"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open Design Lab Calendar"
            />
          </div>
        </div>
      </div>

      {/* Mailing Block */}
      <div className="bg-white py-16 w-[1440px] flex items-center pl-[67px] gap-6">
        <div className="shrink-0">
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#00629b] text-[24px] tracking-[1.2px] w-[310.8px]">Deliveries &amp; Mail</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#00c6d7] text-[48px] tracking-[2.4px] uppercase w-[433.65px]">Mailing Address</p>
          <p className="capitalize font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic leading-[25px] text-[#00629b] text-[16px] tracking-[0.8px] w-[367.5px]">Mailboxes located on the First Floor of the DIB</p>
        </div>
        <div className="ml-auto mr-[48px]">
          <div className="bg-[#00629b] rounded-[5px] w-[864px] h-[216px] flex items-center px-9">
            <div className="[word-break:break-word] capitalize font-['Source_Sans_Pro:Bold',sans-serif] leading-[33px] text-[20px] text-white tracking-[1px] w-[628.95px]">
              <p className="mb-0">UCSD Design Lab</p>
              <p className="font-['Source_Sans_Pro:Regular',sans-serif]">Design &amp; Innovation Building 9500 Gilman Drive, MC0425<br />La Jolla, CA 92093</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Block */}
      <div className="bg-[#182b49] w-[1440px] py-16 relative">
        <div className="absolute right-[60px] top-[232px] -translate-y-1/2 text-right">
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[24px] text-white tracking-[1.2px]">Quick Access</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#ffcd00] text-[48px] tracking-[2.4px] uppercase">Resources</p>
        </div>

        <div className="flex flex-col gap-4 pl-[89px] pt-8">
          {/* Row 1 */}
          <div className="flex gap-4">
            <a href="https://forms.gle/oU2Xx2kkzgMyYqdB8" target="_blank" rel="noreferrer" className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">OPS REQUEST FORM</p>
              </div>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd87N57bpfJCcK5tKX82pt3Uh0c8Vo8DoCh-LC6hAR54N7DaA/viewform?usp=sharing" target="_blank" rel="noreferrer" className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">ACCESS REQUEST FORM</p>
              </div>
            </a>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:68698f1c-bb29-4cfc-b1c0-ce4a404fa764" target="_blank" rel="noreferrer" className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">BRAND GUIDELINES</p>
              </div>
            </a>
          </div>

          {/* Row 2 */}
          <div className="flex gap-4">
            <button onClick={() => navigate("/resources")} className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">SPACE RESOURCES</p>
              </div>
            </button>
            <button onClick={() => navigate("/contact", { state: { openStaff: true } })} className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">STAFF DIRECTORY</p>
              </div>
            </button>
            <a href="https://docs.google.com/document/d/1hDkawsiCSmUZG4NZ3R6ScbcNM9HIFQXKqTBE6k5BYko/edit?tab=t.0" target="_blank" rel="noreferrer" className="cursor-pointer">
              <div className="bg-[#00629b] h-[174px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[252px] flex items-center justify-center p-4">
                <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[#ffffff] text-[24px] text-center tracking-[1.2px] w-[184px]">POSTING POLICY</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#182b49] h-[141px] w-[1440px] flex flex-col items-center justify-center gap-3 mt-auto">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[14px] text-center text-white tracking-[0.7px]">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[29px] w-[97px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className="flex md:hidden bg-white min-h-screen flex-col items-center w-full">
      {/* NavBar */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={imgHero1}
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-6">
          <p className="text-[32px] leading-tight uppercase tracking-[1.6px] text-white font-['Refrigerator_Deluxe:ExtraBold',sans-serif]">
            Internal Resources
          </p>
          <p className="text-[12px] uppercase tracking-[0.8px] text-white font-['Source_Sans_Pro:SemiBold',sans-serif]">
            Your Essential Guide for All Things Design Lab
          </p>
        </div>
      </div>

      {/* Building Block */}
      <div className="bg-white w-full px-6 py-8 flex flex-col gap-6">
        <div>
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#00629b] text-[16px] tracking-[0.8px]">Building Information</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#00c6d7] text-[32px] tracking-[1.6px] uppercase">Building Hours</p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Design Lab */}
          <div className="bg-[#00629b] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex flex-col px-5 pt-4 pb-5">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[20px] text-white leading-tight mb-2">DESIGN LAB</p>
            <div className="w-full h-[3px] bg-white rounded mb-3 shrink-0" />
            <div className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[15px] text-white tracking-[0.5px] flex flex-col gap-2">
              <div className="flex gap-3">
                <span className="shrink-0">Mon - Fri:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">9:00am - 5:00pm</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0">Sat - Sun:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">Closed</span>
              </div>
            </div>
          </div>

          {/* DIB */}
          <div className="bg-[#00629b] rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex flex-col px-5 pt-4 pb-5">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[20px] text-white leading-tight mb-2">DESIGN AND INNOVATION BUILDING</p>
            <div className="w-full h-[3px] bg-white rounded mb-3 shrink-0" />
            <div className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[15px] text-white tracking-[0.5px] flex flex-col gap-2">
              <div className="flex gap-3">
                <span className="shrink-0">Mon - Fri:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">8:00am - 11:00pm</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0">Sat - Sun:</span>
                <span className="font-['Source_Sans_Pro:Bold',sans-serif]">Keycard Access Is Required For Entry</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Block */}
      <div className="bg-[#182b49] w-full px-6 py-10 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[16px] text-white tracking-[0.8px]">Calendar &amp; Events</p>
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#ffcd00] text-[32px] tracking-[1.6px] uppercase leading-tight">Recurring Events</p>
          </div>
          <a href="https://calendar.google.com/calendar/ical/ucsd.edu_vbnavb6gt92esd8or5geqkctdc%40group.calendar.google.com/public/basic.ics" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white rounded-full h-[44px] px-6 w-fit">
            <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[#00629b] text-[14px] tracking-[0.8px] uppercase whitespace-nowrap">Subscribe To Calendar</p>
          </a>
        </div>

        {/* Calendar embed */}
        <div className="bg-[#1d355a] rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3">
          <div className="relative rounded-[14px] overflow-hidden h-[360px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ucsd.edu_vbnavb6gt92esd8or5geqkctdc%40group.calendar.google.com&ctz=America%2FLos_Angeles&color=%23d06b64"
              className="w-full h-full border-0"
              frameBorder={0}
              scrolling="no"
              title="Design Lab Calendar"
            />
            <a
              href="https://calendar.google.com/calendar/u/0/newembed?color=%23d06b64&src=ucsd.edu_vbnavb6gt92esd8or5geqkctdc@group.calendar.google.com"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10"
              aria-label="Open Design Lab Calendar"
            />
          </div>
        </div>
      </div>

      {/* Mailing Block */}
      <div className="bg-white w-full px-6 py-10 flex flex-col gap-4">
        <div>
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#00629b] text-[16px] tracking-[0.8px]">Deliveries &amp; Mail</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#00c6d7] text-[32px] tracking-[1.6px] uppercase">Mailing Address</p>
          <p className="capitalize font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic text-[#00629b] text-[13px] tracking-[0.6px] mt-1">Mailboxes located on the First Floor of the DIB</p>
        </div>
        <div className="bg-[#00629b] rounded-[5px] w-full p-5">
          <div className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-[15px] text-white tracking-[0.5px] leading-[24px]">
            <p className="mb-0">UCSD Design Lab</p>
            <p className="font-['Source_Sans_Pro:Regular',sans-serif]">Design &amp; Innovation Building 9500 Gilman Drive, MC0425<br />La Jolla, CA 92093</p>
          </div>
        </div>
      </div>

      {/* Quick Access Block */}
      <div className="bg-[#182b49] w-full px-6 py-10 flex flex-col gap-6">
        <div>
          <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[16px] text-white tracking-[0.8px]">Quick Access</p>
          <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#ffcd00] text-[32px] tracking-[1.6px] uppercase">Resources</p>
        </div>

        <div className="flex flex-col gap-4">
          <a href="https://forms.gle/oU2Xx2kkzgMyYqdB8" target="_blank" rel="noreferrer" className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Ops Request Form</p>
            </div>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd87N57bpfJCcK5tKX82pt3Uh0c8Vo8DoCh-LC6hAR54N7DaA/viewform?usp=sharing" target="_blank" rel="noreferrer" className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Access Request Form</p>
            </div>
          </a>
          <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:68698f1c-bb29-4cfc-b1c0-ce4a404fa764" target="_blank" rel="noreferrer" className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Brand Guidelines</p>
            </div>
          </a>
          <button onClick={() => navigate("/resources")} className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Space Resources</p>
            </div>
          </button>
          <button onClick={() => navigate("/contact", { state: { openStaff: true } })} className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Staff Directory</p>
            </div>
          </button>
          <a href="https://docs.google.com/document/d/1hDkawsiCSmUZG4NZ3R6ScbcNM9HIFQXKqTBE6k5BYko/edit?tab=t.0" target="_blank" rel="noreferrer" className="cursor-pointer">
            <div className="bg-[#00629b] h-[64px] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full flex items-center justify-center px-4">
              <p className="capitalize font-['Source_Sans_Pro:Bold',sans-serif] text-white text-[16px] text-center tracking-[0.8px]">Posting Policy</p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#182b49] w-full px-6 py-8 flex-1 flex flex-col items-center justify-center gap-3">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[13px] text-center text-white tracking-[0.6px]">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[24px] w-[80px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>
    </>
  );
}
