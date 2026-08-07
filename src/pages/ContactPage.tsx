import { useState } from "react";
import { useLocation } from "react-router";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/Contact/ad1d9ad5ceff45b5743e0da637cc10a95915f60d.png";
import imgWhiteDlAbLogo1 from "@/imports/Contact/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import imgMaiNguyen from "@/imports/Contact/9264ba3d457f36027fb3f9ee789d0d0d5bd42e95.png";
import imgNadirWeibel from "@/imports/Contact/0b162df202f43d4a714622087f3fb81ab764d510.png";
import imgSheilaOberrecht from "@/imports/Contact/44f9a626d9caa8010174b65e4c11269cb33a0d8c.png";
import imgJamesWhite from "@/imports/Contact/494dc27e1fee3afa1f9df9f9cf7aa0ab66e3e749.png";
import imgElysiaMac from "@/imports/Contact/92ed9211a2ecd42b7652a760b188cb77a742615c.png";
import imgMeganMaclean from "@/imports/Contact/83bc81ee859c66e18804dde669f5767ed15dbcb4.png";
import imgOliviaGale from "@/imports/Contact/721df8aa556e63a4475856a84a1660fb9a847b83.png";
import imgGaela from "@/imports/Contact/a41628baad34c8c517d6429c85dca8102cccbebf.png";

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
      className="w-full bg-[#00629b] h-[56px] md:h-[70px] flex items-center justify-between px-4 md:px-7 drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[18px] md:text-[35px] text-left text-white tracking-[0.9px] md:tracking-[1.7px] uppercase">{title}</p>
      <Chevron open={open} />
    </button>
  );
}

type StaffMember = {
  name: string;
  title: string;
  email?: string;
  office?: string;
  img: string;
};

const staffMembers: StaffMember[] = [
  { name: "Mai Nguyen", title: "Director", email: "mainguyen@ucsd.edu", office: "DIB Office 353", img: imgMaiNguyen },
  { name: "Nadir Weibel", title: "Associate Faculty Director", email: "weibel@ucsd.edu", office: "DIB Office 360", img: imgNadirWeibel },
  { name: "Sheila Oberrecht", title: "Executive Assistant to Director", email: "spoberrecht@ucsd.edu", office: "DIB Office 320", img: imgSheilaOberrecht },
  { name: "Megan Maclean", title: "Operations Officer", email: "mmaclean@ucsd.edu", office: "DIB Office 316", img: imgMeganMaclean },
  { name: "James White", title: "Head of Studios", email: "jameswhite@ucsd.edu", office: "DIB Office 332", img: imgJamesWhite },
  { name: "Olivia Gale", title: "Program Manager", email: "o1gale@ucsd.edu", office: "DIB Office 335", img: imgOliviaGale },
  { name: "Elysia Mac", title: "Program Manager", email: "esmac@ucsd.edu", office: "DIB Office 335", img: imgElysiaMac },
  { name: "Gaela Fernandez Florin", title: "Head of Strategic Partnerships", email: "gfernandezflorin@ucsd.edu", office: "", img: imgGaela },
];

function StaffCard({ member }: { member: StaffMember }) {
  return (
    <div className="bg-[#182b49] flex gap-4 p-4 md:p-5 h-auto md:h-[256px] rounded-[8px]">
      <div className="shrink-0 h-[110px] w-[110px] md:h-[214px] md:w-[215px] rounded-[7px] overflow-hidden">
        <img alt={member.name} className="size-full object-cover rounded-[7px]" src={member.img} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] md:text-[32px] text-white tracking-[1.6px] uppercase leading-tight">{member.name}</p>
        <p className="font-['Source_Sans_Pro:Italic',sans-serif] text-[16px] md:text-[26px] italic text-white tracking-[1.3px] leading-tight mt-1">{member.title}</p>
        <div className="mt-3 font-['Source_Sans_Pro:Regular',sans-serif] text-[14px] md:text-[19px] text-white tracking-[0.98px]">
          {member.email && <p className="underline cursor-pointer">{member.email}</p>}
          {member.office && <p>{member.office}</p>}
        </div>
      </div>
    </div>
  );
}

function StaffDropdown({ initialOpen = false }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Staff" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {staffMembers.map((m) => (
            <StaffCard key={m.name} member={m} />
          ))}
        </div>
      )}
    </div>
  );
}

type ContactRow = { label: string; value: string };

const emailList: ContactRow[] = [
  { label: "Design Lab Non Voting and Voting Faculty", value: "dlab-faculty-g@ucsd.edu" },
  { label: "Design Lab Graduate Students (PhD, Masters)", value: "dlab-grads-g@ucsd.edu" },
  { label: "All affiliated members", value: "dlab-members-g@ucsd.edu" },
  { label: "Non voting faculty", value: "dlab-nonvoting-faculty-g@ucsd.edu" },
  { label: "Voting Faculty", value: "dlab-voting-faculty-g@ucsd.edu" },
  { label: "Design Lab Staff", value: "dlab-staff-g@ucsd.edu" },
  { label: "Operations Team", value: "dlab-ops@ucsd.edu" },
  { label: "Communications Team", value: "dlab-comms@ucsd.edu" },
];

const emergencyList: ContactRow[] = [
  { label: "UCSD Police Dispatcher", value: "(858)-534-4347" },
  { label: "Any Emergency", value: "3-6-1-1-1" },
  { label: "Hillcrest Emergency Room", value: "(619) 543-6400" },
  { label: "Thornton Emergency Room", value: "(858) 657-7600" },
  { label: "UCSD Facility Services", value: "(858) 534-2930" },
  { label: "Emergency Status - Medical Center", value: "(619) 543-6555" },
  { label: "Emergency Status - UCSD Campus", value: "(888) 308-8273" },
];

const buildingList: ContactRow[] = [
  { label: "Facilities cc ops", value: "dib-help-g@ucsd.edu" },
  { label: "Lost and Found", value: "(858)-682-2872" },
];

function ContactsDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Contacts" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex flex-col md:flex-row gap-4">
          {/* Email mailing list */}
          <div className="bg-[#f5f0e6] w-full md:w-[600px] p-4 md:p-6 rounded-[8px] flex flex-col">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Emails Mailing List</p>
            <div className="flex flex-col md:flex-1 md:justify-between gap-2 md:gap-0">
              {emailList.map((row) => (
                <div key={row.value} className="flex justify-between items-center gap-4">
                  <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[13px] md:text-[16px] md:whitespace-nowrap">{row.label}</p>
                  <p className="font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic text-[#1e1e1e] text-[13px] md:text-[16px] text-right shrink-0 md:whitespace-nowrap">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4 w-full md:flex-1">
            <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Emergency</p>
              {emergencyList.map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-3">
                  <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[13px] md:text-[16px] md:whitespace-nowrap">{row.label}</p>
                  <p className="font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic text-[#1e1e1e] text-[13px] md:text-[16px] text-right shrink-0 md:whitespace-nowrap">{row.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
              <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[#1e1e1e] text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Building Management</p>
              {buildingList.map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-3">
                  <p className="font-['Source_Sans_Pro:Light',sans-serif] text-[#1e1e1e] text-[13px] md:text-[16px] md:whitespace-nowrap">{row.label}</p>
                  <p className="font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] italic text-[#1e1e1e] text-[13px] md:text-[16px] text-right shrink-0 md:whitespace-nowrap">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const { state } = useLocation();
  const openStaff = (state as { openStaff?: boolean } | null)?.openStaff ?? false;
  return (
    <div className="bg-white w-full md:min-w-[1440px] flex flex-col items-center">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1440px] relative w-[427px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[32px] md:text-[80px] text-white tracking-[1.6px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">Contacts</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center w-full gap-[71px] py-12 px-4 md:px-0 bg-white">
        <StaffDropdown initialOpen={openStaff} />
        <ContactsDropdown />
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
