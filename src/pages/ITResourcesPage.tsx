import { useState } from "react";
import NavBar from "@/components/NavBar";
import imgGradient from "@/imports/ItSupport/fa0647cf99bd411b2ade23b73af7083564e8d624.png";
import imgWhiteDlAbLogo1 from "@/imports/ItSupport/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";
import svgPaths from "@/imports/ItSupport/svg-c9mke9i38u";

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

function ItSupportDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="IT Support" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4">
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">General IT Support</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] mb-8">
              Design Lab faculty and students are encouraged to utilize UC San Diego's ITS Services Desk to receive IT support and resources. For further information (including contact and hours), please visit the ITS Service Desk webpage.
            </p>
            <div className="flex justify-center">
              <a href="https://blink.ucsd.edu/technology/help-desk/index.html" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[20px] text-center text-white tracking-[1px] uppercase">Access IT Support</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PrinterDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Printer" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex flex-col gap-4">
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
      )}
    </div>
  );
}

function EthernetDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full md:w-[1100px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] rounded-[8px] overflow-hidden">
      <DropdownHeader title="Ethernet" open={open} onToggle={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 flex flex-col gap-4">
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Step 1: Request Ethernet Port Activation</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] mb-4">
              Please refer to the following instructions for requesting ethernet port activation in Design Lab offices and project spaces:
            </p>
            <ol className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] list-decimal pl-8">
              <li>
                Submit a UC San Diego Telecom <a href="https://act.ucsd.edu/telecom/csr" target="_blank" rel="noreferrer" className="underline cursor-pointer">Customer Service Request (CSR)</a>. For the following fields, enter:
                <br />- Department Name: The Design Lab
                <br />- Mail Code: 0425
                <br />- Provide appropriate Project-Task-Fund (P-T-F) information.
                <div className="pl-6">
                  a) For Design Lab faculty offices, please contact the Design Lab Operations Team (<a href="mailto:dlab-ops@ucsd.edu" className="underline cursor-pointer">dlab-ops@ucsd.edu</a>) with this request
                  <br />b) For Project Spaces, individual faculty/home department funds should be utilized.
                </div>
                <br />- Under Service, select "Ethernet Connections"
                <br /><br />For description request, include the following information:
                <br />a) Location: Design/Innovation Building - Third Floor, Room XXX
                <br />b) Wall port(s) numbers where ethernet connection is requested
                <br />c) Requested VLAN: 316
              </li>
            </ol>
          </div>
          <div className="bg-[#f5f0e6] p-4 md:p-6 rounded-[8px]">
            <p className="font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-black text-[18px] md:text-[24px] tracking-[1.2px] uppercase mb-4">Step 2: Register Device(s) for Ethernet/Wired Connection</p>
            <p className="font-['Source_Sans_Pro:Light',sans-serif] text-black text-[15px] md:text-[21px] mb-6">
              Please refer to the Office of Engineering Computing (OEC) directions for establishing network connections at UC San Diego.
            </p>
            <div className="flex justify-center">
              <a href="https://support.eng.ucsd.edu/how-to-guides/network" target="_blank" rel="noreferrer" className="relative h-[44px] w-full max-w-[343px] md:w-[343px]">
                <svg className="absolute inset-0 size-full" fill="none" height="44" preserveAspectRatio="none" viewBox="0 0 343 44" width="343">
                  <path d={btnPath} fill="#00629B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-['Source_Sans_Pro:Bold',sans-serif] text-[16px] text-center text-white tracking-[0.8px] uppercase">OEC Network Connection Guide</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ITResourcesPage() {
  return (
    <div className="bg-white w-full md:min-w-[1440px] min-h-screen flex flex-col items-center">
      <div className="sticky top-0 z-50 w-full md:w-auto">
        <NavBar />
      </div>

      {/* Hero */}
      <div className="relative w-full md:w-[1440px] h-[220px] md:h-[400px] overflow-hidden flex items-center justify-center">
        <div className="flex-none rotate-90">
          <div className="h-[1519px] relative w-[428px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
          </div>
        </div>
        <p className="absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] text-[32px] md:text-[80px] text-white tracking-[1.9px] md:tracking-[4.8px] uppercase text-center w-full md:w-[880px] px-4">IT Resources</p>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col items-center w-full gap-[64px] py-12 px-4 md:px-0 bg-white">
        <ItSupportDropdown />
        <PrinterDropdown />
        <EthernetDropdown />
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
