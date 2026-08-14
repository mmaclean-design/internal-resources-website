import { useState } from "react";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/Faq/e7b864d9e1a800659a00414048067b89c1a2232f.png";
import imgWhiteDlAbLogo1 from "@/imports/Faq/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import svgPaths from "@/imports/Faq/svg-rtmwrvp4u1";

const btnPath = svgPaths.peab5080;
const bigRectPath = svgPaths.p393a7900;
const subBtnPath = svgPaths.p236b0400;

function Chevron({ open }: { open: boolean }) {
  return (
    <div className={`transition-transform duration-200 ${open ? "" : "rotate-180"}`}>
      <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
        <path d="M3 18L13.5 8L24 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

type FaqItemProps = { question: string; children: React.ReactNode };

function FaqItem({ question, children }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#00629b] min-h-[70px] h-auto py-3 md:py-5 flex items-center justify-between px-4 md:px-7 cursor-pointer"
      >
        <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[16px] md:text-[35px] text-left text-white tracking-[0.8px] md:tracking-[1.7px] uppercase flex-1 text-left pr-4">{question}</p>
        <Chevron open={open} />
      </button>
      {open && <div className="bg-white p-4 flex flex-col gap-4">{children}</div>}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="bg-white w-full md:min-w-[1440px] min-h-screen md:min-h-0 flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
        <p className="relative font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[32px] md:text-[80px] text-white tracking-[2px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">FAQs</p>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col items-center w-full gap-[38px] py-12 px-4 md:px-0 bg-white">

        {/* FAQ 1: How can I stay updated on events? */}
        <FaqItem question="How can I stay updated on Design Lab events?">
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Design Lab Calendar</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] mb-6">
              The Design Lab maintains a shared Google Calendar for all recurring and special events. Subscribe to stay up-to-date with lab happenings.
            </p>
            <div className="relative bg-white rounded-[26px] overflow-hidden mb-6 h-[280px] md:h-[346px] max-w-[848px] mx-auto">
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
            <div className="flex justify-center">
              <a
                href="https://calendar.google.com/calendar/ical/ucsd.edu_vbnavb6gt92esd8or5geqkctdc%40group.calendar.google.com/public/basic.ics"
                target="_blank"
                rel="noreferrer"
                className="relative h-[44px] w-full max-w-[360px] md:w-[360px]"
              >
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 360.15 44" width="360.15">
                  <path d={subBtnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">subscribe To Calendar</p>
                </div>
              </a>
            </div>
          </div>
        </FaqItem>

        {/* FAQ 2: Conference Room without reservation */}
        <FaqItem question="Can I use a Design Lab Conference Room without a reservation?">
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px]">
              Design Lab Conference Rooms are available for drop-in needs when not in-use by an existing reservation. Please note that reservations take priority for room usage, and occupants may be requested to vacate to honor a reservation. Refer to the Design Lab Conference Room page for the reservation request form and room calendars.
            </p>
          </div>
        </FaqItem>

        {/* FAQ 3: Access to DIB and Project Space */}
        <FaqItem question="How do I gain access to the DIB and my Design Lab Project Space?">
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px]">
              Affiliated Design Lab faculty, researchers, and students may request access to the Design Lab. Access is granted through the individual's UC San Diego Campus Card. Please review Space Resources for further instructions.
            </p>
          </div>
        </FaqItem>

        {/* FAQ 4: Affiliated faculty spaces */}
        <FaqItem question="I'm an affiliated Design Lab faculty member, what spaces do I have access to?">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Undergraduate Access</p>
                <ul className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] list-disc pl-8 space-y-2">
                  <li>DIB main entrance and elevator (daily, 8:00am - 6:00pm)</li>
                  <li>Access to a Project Space is only provided if the undergraduate student will be engaged long-term (1 year or more) in a project and is approved by Project Space Leads.</li>
                </ul>
              </div>
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Visiting Scholars and Research Staff</p>
                <ul className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] list-disc pl-8 space-y-2">
                  <li>DIB main entrance and elevators, 24/7</li>
                  <li>Specific Design Lab Project Space (pending approval by Faculty Advisor and/or Project Space Lead)</li>
                  <li>DIB Conference Rooms 306 & 307</li>
                  <li>Design Lab Conference Rooms 311 & 361</li>
                  <li>Design Lab Graduate Student Workspace, Room 372</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Graduate and Post Doc Access</p>
                <ul className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] list-disc pl-8 space-y-2">
                  <li>DIB main entrance and elevators, 24/7</li>
                  <li>Specific Design Lab Project Space (pending approval by Faculty Advisor and/or Project Space Lead)</li>
                  <li>DIB Conference Rooms 306 & 307</li>
                  <li>Design Lab Conference Rooms 311 & 361</li>
                  <li>Design Lab Graduate Student Workspace, Room 372</li>
                </ul>
              </div>
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Faculty Access</p>
                <ul className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] list-disc pl-8 space-y-2">
                  <li>DIB main entrance and elevators, 24/7</li>
                  <li>Assigned Design Lab Project Space (access to additional project spaces require approval by the Design Lab Director's Office)</li>
                  <li>DIB Conference Rooms 306 & 307</li>
                  <li>Design Lab Conference Rooms 311 & 361</li>
                  <li>Design Lab Graduate Student Workspace, Room 372</li>
                </ul>
              </div>
            </div>
            <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Access Request</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] mb-6">
                Affiliated Design Lab faculty, researchers, and students may request access to the Design Lab. Access is granted through the individual's{" "}
                <a href="https://blink.ucsd.edu/HR/services/new/cards/" target="_blank" rel="noreferrer" className="underline cursor-pointer">UC San Diego Campus Card</a>.
              </p>
              <div className="flex justify-center">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd87N57bpfJCcK5tKX82pt3Uh0c8Vo8DoCh-LC6hAR54N7DaA/viewform?usp=sharing" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
                  <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                    <path d={btnPath} fill="#00629B" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">Access Request Form</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </FaqItem>

        {/* FAQ 5: Printer */}
        <FaqItem question="How do I connect to Design Lab printers?">
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">General Policies</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] mb-2">
                Please limit printing jobs to Design Lab related projects and work. Printers should not be used for personal projects or unrelated coursework. Ask an Ambassador for extra supplies and assistance.
              </p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px]">
                Please note that large files will take a few to several minutes to print. To speed up the print job, you may need to change your file format (e.g. PDF to JPG).
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Connection for Mac</p>
                <ol className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] list-decimal pl-8 space-y-2">
                  <li>Proceed to WiFi Settings on personal device</li>
                  <li>Access the "DesignLab" WiFi network</li>
                  <li>Proceed to System Preferences &gt; Printers & Scanners</li>
                  <li>Select "+" button located on the bottom left of Printers</li>
                  <li>Printer names (found below) should appear</li>
                  <li>Add/select printers as needed</li>
                </ol>
              </div>
              <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
                <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Connection for Windows</p>
                <ol className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] list-decimal pl-8 space-y-2">
                  <li>Proceed to WiFi Settings on your personal device</li>
                  <li>Access the "DesignLab" WiFi network</li>
                  <li>Proceed to the Printers & Scanners on your personal device</li>
                  <li>Select "Add Device"</li>
                  <li>Printer names (found below) should appear</li>
                  <li>Add printers as needed</li>
                </ol>
              </div>
            </div>
            <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Printer Name</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px]">HP Color LaserJet Enterprise MFP M681 (dlab-hp-mfpm681)</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px]">IP address: 192.168.0.171</p>
            </div>
          </div>
        </FaqItem>

      </div>

      {/* Footer */}
      <div className="bg-[#182b49] w-full md:w-[1440px] h-auto md:h-[141px] py-6 md:py-0 px-4 flex-1 md:flex-none flex flex-col items-center justify-center gap-3 mt-auto">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[12px] md:text-[14px] text-center text-white tracking-[0.7px]">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[29px] w-[97px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>
  );
}
