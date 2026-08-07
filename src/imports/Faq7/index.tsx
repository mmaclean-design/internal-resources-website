type FaqProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Faq({ className, property1 = "Default" }: FaqProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[870px]" : "h-[110px]"}`}>
      {property1 === "Default" && (
        <div className="absolute contents left-0 top-0" data-name="Access Dropdown">
          <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[1164px]">How do I connect to Design Lab printers?</p>
          <div className="absolute flex h-[104.713px] items-center justify-center left-[1244.37px] top-0 w-[27px]">
            <div className="flex-none rotate-180">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
        </div>
      )}
      {isVariant2 && (
        <>
          <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[1164px]">How do I connect to Design Lab printers?</p>
          <div className="absolute flex h-[104.713px] items-center justify-center left-[1244.37px] top-0 w-[27px]">
            <div className="flex-none rotate-180">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
            </div>
          </div>
          <div className="absolute contents left-[-1px] top-[138px]">
            <div className="absolute bg-[#f5f0e6] h-[200px] left-[-1px] top-[138px] w-[1300px]" />
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[27.6px] not-italic text-[24px] text-black text-left top-[175.52px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">General Policies</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[140px] justify-center leading-[0] left-[28.07px] not-italic text-[0px] text-black text-left top-[261px] tracking-[1.0624px] w-[1237.857px] whitespace-pre-wrap">
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-none mb-0 text-[21px]">Please limit printing jobs to Design Lab related projects and work. Printers should not be used for personal projects or unrelated coursework. Ask an Ambassador for extra supplies and assistance.</p>
              <p className="leading-none mb-0 text-[21.248px]">​</p>
              <p className="font-['Source_Sans_Pro:Light',sans-serif] leading-none text-[20px]">Please note that large files will take a few to several minutes to print. To speed up the print job, you may need to change your file format (e.g. PDF to JPG).</p>
            </div>
          </div>
          <div className="absolute contents left-0 top-[708px]">
            <div className="absolute contents left-0 top-[708px]">
              <div className="absolute bg-[#f5f0e6] h-[130px] left-0 top-[708px] w-[1300px]" />
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[29.694px] justify-center leading-[0] left-[29px] not-italic text-[24px] text-black text-left top-[742.77px] tracking-[1.2px] uppercase w-[575.063px]">
                <p className="leading-[normal]">Printer Name</p>
              </div>
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Light',sans-serif] h-[91px] justify-center leading-[0] left-[29.07px] not-italic text-[21px] text-black text-left top-[787.95px] tracking-[1.05px] w-[1237.857px]">
                <p className="leading-none mb-0">HP Color LaserJet Enterprise MFP M681 (dlab-hp-mfpm681)</p>
                <p className="leading-none">IP address: 192.168.0.171</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[-1px] top-[373px]">
            <div className="absolute bg-[#f5f0e6] h-[300px] left-[-1px] top-[373px] w-[633px]" />
            <ol className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[188px] leading-[0] left-[18px] list-decimal not-italic text-[21px] text-black text-left top-[458px] tracking-[1.05px] w-[584px]" start="1">
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Proceed to WiFi Settings on personal device</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Access the "DesignLab" WiFi network`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Proceed to System Preferences > Printers & Scanners`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Select "+" button located on the bottom left of Printers`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Printer names (found below) should appear</span>
              </li>
              <li className="ms-[31.5px]">
                <span className="leading-[normal]">Add/select printers as needed</span>
              </li>
            </ol>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[28px] not-italic text-[24px] text-black text-left top-[421.84px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">Connection for mac</p>
            </div>
          </div>
          <div className="absolute contents left-[664px] top-[373px]">
            <div className="absolute bg-[#f5f0e6] h-[300px] left-[664px] top-[373px] w-[633px]" />
            <ol className="[word-break:break-word] absolute block font-['Source_Sans_Pro:Light',sans-serif] h-[188px] leading-[0] left-[686px] list-decimal not-italic text-[21px] text-black text-left top-[458px] tracking-[1.05px] w-[590px]" start="1">
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Proceed to WiFi Settings on your personal device</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Access the "DesignLab" WiFi network`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Proceed to the Printers & Scanners on your personal device`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">{`Select "Add Device"`}</span>
              </li>
              <li className="mb-0 ms-[31.5px]">
                <span className="leading-[normal]">Printer names (found below) should appear</span>
              </li>
              <li className="ms-[31.5px]">
                <span className="leading-[normal]">Add printers as needed</span>
              </li>
            </ol>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] h-[45.683px] justify-center leading-[0] left-[695px] not-italic text-[24px] text-black text-left top-[421.84px] tracking-[1.2px] uppercase w-[575.063px]">
              <p className="leading-[normal]">Connection for Windows</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}