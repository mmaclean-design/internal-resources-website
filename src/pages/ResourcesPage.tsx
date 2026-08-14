import { useState } from "react";
import { useLocation } from "react-router";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/Resources/fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "@/imports/Resources/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import svgPaths from "@/imports/Resources/svg-wx2sby553w";

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
      className="w-full bg-[#00629b] h-[56px] md:h-[70px] flex items-center justify-between px-4 md:px-7 cursor-pointer"
    >
      <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[18px] md:text-[35px] text-left text-white tracking-[0.9px] md:tracking-[1.7px] uppercase">{title}</p>
      <Chevron open={open} />
    </button>
  );
}

function AccessInformation() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Access Information" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Undergraduate Access</p>
              <ul className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] list-disc pl-8 space-y-2">
                <li>DIB main entrance and elevator (daily, 8:00am - 6:00pm)</li>
                <li>Access to a Project Space is only provided if the undergraduate student will be engaged long-term (1 year or more) in a project and is approved by Project Space Leads.</li>
              </ul>
            </div>
            <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Visiting Scholars and Research Staff Access</p>
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
      )}
    </div>
  );
}

function PoliciesDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Policies" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex flex-col md:flex-row gap-4">
          <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Space Standards</p>
            <div className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] space-y-4 mb-6">
              <p>The occupancy and use of Design Lab spaces (defined as department offices, conference/meeting rooms, study/collaboration areas, and project spaces) is subject to the{" "}
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif]">Design Lab Space Standards</span>. All occupants are encouraged to review the policy to ensure compliance.</p>
              <p>Please contact the Design Lab Operations Team (<span className="underline cursor-pointer">dlab-ops@ucsd.edu</span>) with any further questions regarding the Space Standards.</p>
            </div>
            <div className="flex justify-center">
              <button className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">space standards</p>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-[#f5f0e6] flex-1 p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Posting Policies</p>
            <div className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[15px] md:text-[21px] space-y-4 mb-6">
              <p>The Posting Policy is intended for Design Lab members, affiliated student organizations, and campus departments regarding posting criteria in Design Lab community spaces (defined as conference/meeting rooms and open collaboration areas). All members are encouraged to review the policy to ensure compliance.</p>
              <p>Please contact the Design Lab Operations Team (<span className="underline cursor-pointer">dlab-ops@ucsd.edu</span>) with any further questions regarding the Posting Policy.</p>
            </div>
            <div className="flex justify-center">
              <a href="https://docs.google.com/document/d/1hDkawsiCSmUZG4NZ3R6ScbcNM9HIFQXKqTBE6k5BYko/edit?tab=t.0" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">posting policy</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RoomReservationDropdown({ initialOpen = false }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Design Lab Room Reservation" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white flex flex-col gap-[5px] pt-[5px] pb-6">
          {/* Reservation timeline info block */}
          <div className="bg-[#f5f0e6] mx-[1px] px-4 md:px-7 py-5">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#182b49] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-3">Reservation Request Timeline</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#182b49] text-[15px] md:text-[21px] leading-[1.174]">
              Conference Room reservation requests must be submitted a minimum of two (2) business days prior to the requested reservation date. Upon successful form submission, an email confirmation will be provided within one (1) business day.
            </p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] italic text-[#182b49] text-[15px] md:text-[21px] leading-[1.174] mt-3">
              Conference rooms are subject to availability, please review the room calendars below prior to submitting a reservation request.
            </p>
          </div>

          {/* Room calendar blocks */}
          <div className="flex flex-col md:flex-row gap-[5px]">
            {/* 311 */}
            <a
              href="https://calendar.google.com/calendar/embed?src=c_i5gqda41rr6oaop69ifnoajhmg%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f5f0e6] w-full md:flex-1 h-[300px] md:h-[494px] relative overflow-hidden block"
            >
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#182b49] text-[21.248px] tracking-[1.0624px] uppercase absolute top-4 left-5 z-10">311</p>
              <div className="absolute inset-x-5 top-14 bottom-5 overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c_i5gqda41rr6oaop69ifnoajhmg%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                  className="w-full h-full border-0 pointer-events-none"
                  frameBorder={0}
                  scrolling="no"
                  title="Room 311 Calendar"
                />
              </div>
              <span className="absolute inset-0 z-10" />
            </a>
            {/* 361 */}
            <a
              href="https://calendar.google.com/calendar/embed?src=c_36lmr3kbg5j68hfnes4tv745ek%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              target="_blank"
              rel="noreferrer"
              className="bg-[#f5f0e6] w-full md:flex-1 h-[300px] md:h-[494px] relative overflow-hidden block"
            >
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] text-[#182b49] text-[21.248px] tracking-[1.0624px] uppercase absolute top-4 left-5 z-10">361</p>
              <div className="absolute inset-x-5 top-14 bottom-5 overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c_36lmr3kbg5j68hfnes4tv745ek%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                  className="w-full h-full border-0 pointer-events-none"
                  frameBorder={0}
                  scrolling="no"
                  title="Room 361 Calendar"
                />
              </div>
              <span className="absolute inset-0 z-10" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center mt-5 justify-center gap-4 md:gap-x-[325px]">
            <a href="https://script.google.com/a/macros/ucsd.edu/s/AKfycbzVW_BijuR04t-ih6PLpcc5Uoe7yKxZSriucf4WRPb60USsKdkFrbDLx5AeRMY6xienTA/exec" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
              <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={btnPath} fill="#00629B" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">Reserve Room</p>
              </div>
            </a>
            <a href="https://script.google.com/a/macros/ucsd.edu/s/AKfycbxY8bRVzUsM1Sc5AZkzPahzNCeSguNEEf5VHK6zY18m0mnkD96aNfDJMJmI-4LKTCg/exec" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
              <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                <path d={btnPath} fill="#00629B" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">Reserve Room</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function DibRoomReservationDropdown({ initialOpen = false }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Additional Room Reservations" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white flex flex-col gap-[5px] pt-[5px] pb-6">
          {/* Info block + button */}
          <div className="flex flex-col md:flex-row gap-[5px] items-stretch">
            <div className="bg-[#f5f0e6] flex-1 px-4 md:px-6 py-5">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#182b49] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-3">
                DIB Event Space &amp; Conference Room Reservations
              </p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#182b49] text-[15px] md:text-[21px] leading-[1.4]">
                Event space and general-use conference rooms in the Design/Innovation Building (DIB) are reserved through the Operations Team. Please utilize the provided form for space reservation requests for 306 &amp; 307.
              </p>
            </div>
            <div className="bg-[#f5f0e6] flex items-center justify-center px-8 py-4 md:py-0">
              <a
                href="https://docs.google.com/forms/d/1nqCa45x2DGsrMr6WnbLlkaqb9ynXvuM_In0T1RCQwIM/edit?usp=sharing_eil&ts=6a5a85ab"
                target="_blank"
                rel="noreferrer"
                className="relative h-[44px] w-full max-w-[343px] md:w-[343px]"
              >
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[18px] text-center text-white tracking-[0.9px] uppercase">Ops Request Form</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  const { state } = useLocation();
  const openReservations = (state as { openReservations?: boolean } | null)?.openReservations ?? false;
  return (
    <div className="bg-white w-full md:min-w-[1440px] min-h-screen md:min-h-0 flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1520px] relative w-[428px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[32px] md:text-[80px] text-white tracking-[1.6px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">space resources</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center w-full gap-[38px] py-12 px-4 md:px-0 bg-white">
        <AccessInformation />
        <PoliciesDropdown />
        <RoomReservationDropdown initialOpen={openReservations} />
        <DibRoomReservationDropdown initialOpen={openReservations} />
      </div>

      {/* Footer */}
      <div className="bg-[#182b49] w-full md:w-[1440px] h-auto md:h-[141px] py-6 md:py-0 flex-1 md:flex-none flex flex-col items-center justify-center gap-3 mt-auto">
        <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[12px] md:text-[14px] text-center text-white tracking-[0.7px] px-4">The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093</p>
        <div className="h-[29px] w-[97px]">
          <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
        </div>
      </div>
    </div>
  );
}
