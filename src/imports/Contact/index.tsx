import imgDlabSquareLogo21 from "./8e28dbfbf7702b60ec39fc43e031b49fa66d5e92.png";
import imgRectangle56 from "./0b162df202f43d4a714622087f3fb81ab764d510.png";
import imgRectangle57 from "./9264ba3d457f36027fb3f9ee789d0d0d5bd42e95.png";
import imgRectangle58 from "./44f9a626d9caa8010174b65e4c11269cb33a0d8c.png";
import imgRectangle59 from "./494dc27e1fee3afa1f9df9f9cf7aa0ab66e3e749.png";
import imgRectangle60 from "./92ed9211a2ecd42b7652a760b188cb77a742615c.png";
import imgRectangle61 from "./83bc81ee859c66e18804dde669f5767ed15dbcb4.png";
import imgRectangle62 from "./721df8aa556e63a4475856a84a1660fb9a847b83.png";
import imgRectangle63 from "./a41628baad34c8c517d6429c85dca8102cccbebf.png";
import imgGradient3 from "./ad1d9ad5ceff45b5743e0da637cc10a95915f60d.png";
import imgWhiteDlAbLogo1 from "./c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";

function NavBar({ className }: { className?: string }) {
  return (
    <div className={className || "h-[104px] relative w-[1512px]"}>
      <div className="absolute bg-[#182b49] inset-0" />
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_11.31%_41.01%_80.96%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">Contact</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">{"home"}</p>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">{"FAQs"}</p>
      </button>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_35.37%_41.01%_60.07%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">home</p>
      </button>
      <button className="[word-break:break-word] absolute block cursor-pointer font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[0] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">
        <p className="leading-[normal]">FAQs</p>
      </button>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_22.46%_41.01%_68.05%] leading-[normal] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">Resources</p>
      <div className="absolute aspect-[773/762] left-[1.39%] right-[93.4%] top-[11px]" data-name="dlab square logo 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDlabSquareLogo21} />
      </div>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_3.33%_41.01%_92.11%] leading-[normal] not-italic text-[#00c6d7] text-[21.882px] text-center tracking-[1.0941px] uppercase">FAQs</p>
      <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.69%_22.46%_41.01%_68.05%] leading-[normal] not-italic text-[21.882px] text-center text-white tracking-[1.0941px] uppercase">Resources</p>
      <div className="absolute aspect-[773/762] left-[1.39%] right-[93.4%] top-[11px]" data-name="dlab square logo 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDlabSquareLogo21} />
      </div>
    </div>
  );
}
type ContactsProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Contacts({ className, property1 = "Default" }: ContactsProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[772px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">contacts</p>
          <div className="absolute flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
        </>
      )}
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[30px]" data-name="Access Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">contacts</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1233px] top-[64px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-0 top-[156px]">
            <div className="absolute bg-[#f5f0e6] h-[616px] left-0 top-[156px] w-[740px]" />
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] h-[504.357px] leading-[0] left-[29px] not-italic text-[#1e1e1e] text-[20px] text-left top-[228.25px] tracking-[1px] w-[448.906px] whitespace-pre-wrap">
              <p className="leading-[51px] mb-0">{`Design Lab Non Voting and Voting Faculty `}</p>
              <p className="leading-[51px] mb-0">Design Lab Graduate Students (PhD, Masters)</p>
              <p className="leading-[51px] mb-0">All affiliated members</p>
              <p className="leading-[51px] mb-0">Non voting faculty</p>
              <p className="leading-[51px] mb-0">Voting Faculty</p>
              <p className="leading-[51px] mb-0">All design lab staff members</p>
              <p className="leading-[51px] mb-0">Operations Team</p>
              <p className="leading-[51px] mb-0">Communications Team</p>
              <p className="leading-[51px]">Jobs</p>
            </div>
            <div className="-translate-x-full [word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] h-[504.357px] italic leading-[0] left-[692.91px] text-[#1e1e1e] text-[20px] text-right top-[228.25px] tracking-[1px] w-[448.906px] whitespace-pre-wrap">
              <p className="leading-[51px] mb-0">dlab-faculty-g@ucsd.edu</p>
              <p className="leading-[51px] mb-0">dlab-grads-g@ucsd.edu</p>
              <p className="leading-[51px] mb-0">{`dlab-members-g@ucsd.edu `}</p>
              <p className="leading-[51px] mb-0">dlab-nonvoting-faculty-g@ucsd.edu</p>
              <p className="leading-[51px] mb-0">dlab-voting-faculty-g@ucsd.edu</p>
              <p className="leading-[51px] mb-0">{`dlab-staff-g@ucsd.edu `}</p>
              <p className="leading-[51px] mb-0">{`dlab-ops@ucsd.edu `}</p>
              <p className="leading-[51px] mb-0">{`dlab-comms@ucsd.edu `}</p>
              <p className="leading-[51px]">{`dlab-jobs@ucsd.edu `}</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[38.542px] justify-center leading-[0] left-[29px] not-italic text-[#1e1e1e] text-[24px] text-left top-[199.45px] tracking-[1.2px] uppercase w-[734.186px]">
              <p className="leading-[normal]">Emails Mailing List</p>
            </div>
          </div>
          <div className="absolute contents left-[776px] top-[156px]">
            <div className="absolute bg-[#f5f0e6] h-[443px] left-[776px] top-[156px] w-[524px]" />
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] h-[485px] leading-[0] left-[800px] not-italic text-[#1e1e1e] text-[20px] text-left top-[228px] tracking-[1px] w-[339px] whitespace-pre-wrap">
              <p className="leading-[51px] mb-0">UCSD Police Dispatcher</p>
              <p className="leading-[51px] mb-0">Any Emergency</p>
              <p className="leading-[51px] mb-0">Hillcrest Emergency Room</p>
              <p className="leading-[51px] mb-0">{`Thornton Emergency Room `}</p>
              <p className="leading-[51px] mb-0">UCSD Facility Services</p>
              <p className="leading-[51px] mb-0">Emergency Status - Medical Center</p>
              <p className="leading-[51px]">Emergency Status - UCSD Campus</p>
            </div>
            <div className="-translate-x-full [word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] h-[183px] italic leading-[0] left-[1276px] text-[#1e1e1e] text-[20px] text-right top-[228px] tracking-[1px] w-[169px] whitespace-pre-wrap">
              <p className="leading-[51px] mb-0">(858)-534-4347</p>
              <p className="leading-[51px] mb-0">3-6-1-1-1</p>
              <p className="leading-[51px] mb-0">{`(619) 543-6400 `}</p>
              <p className="leading-[51px] mb-0">(858) 657-7600</p>
              <p className="leading-[51px] mb-0">{`(858) 534-2930 `}</p>
              <p className="leading-[51px] mb-0">{`(619) 543-6555 `}</p>
              <p className="leading-[51px]">(888) 308-8273</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[36.706px] justify-center leading-[0] left-[800px] not-italic text-[#1e1e1e] text-[24px] text-left top-[197.35px] tracking-[1.2px] uppercase w-[476.014px]">
              <p className="leading-[normal]">Emergency</p>
            </div>
          </div>
          <div className="absolute contents left-[776px] top-[630px]">
            <div className="absolute bg-[#f5f0e6] h-[142px] left-[776px] top-[630px] w-[524px]" />
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Light',sans-serif] h-[100.905px] leading-[0] left-[800px] not-italic text-[#1e1e1e] text-[20px] text-left top-[686px] tracking-[1px] w-[483.63px]">
              <p className="leading-[35px] mb-0">Facilities cc ops</p>
              <p className="leading-[35px] mb-0">Lost and Found</p>
              <p className="leading-[35px]">​</p>
            </div>
            <div className="-translate-x-full [word-break:break-word] absolute font-['Source_Sans_Pro:SemiBold_Italic',sans-serif] h-[101px] italic leading-[0] left-[1276px] text-[#1e1e1e] text-[20px] text-right top-[687px] tracking-[1px] w-[210px]">
              <p className="leading-[35px] mb-0">dib-help-g@ucsd.edu</p>
              <p className="leading-[35px] mb-0">(858)-682-2872</p>
              <p className="leading-[35px]">​</p>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Source_Sans_Pro:Bold',sans-serif] h-[11.899px] justify-center leading-[0] left-[800px] not-italic text-[#1e1e1e] text-[24px] text-left top-[662.95px] tracking-[1.2px] uppercase w-[476.039px]">
              <p className="leading-[normal]">Building Management</p>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
type StaffProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

function Staff({ className, property1 = "Default" }: StaffProps) {
  const isDefault = property1 === "Default";
  const isVariant2 = property1 === "Variant2";
  return (
    <button className={className || `block drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] relative w-[1300px] ${isVariant2 ? "h-[1302px]" : "h-[110px]"}`}>
      {isDefault && (
        <>
          <div className="absolute bg-[#00629b] inset-[27.27%_0_0_0]" />
          <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] inset-[44.55%_50.13%_17%_2.23%] leading-[normal] not-italic text-[38.173px] text-left text-white tracking-[1.9086px] uppercase">STAFF</p>
          <div className="absolute flex inset-[0_2.2%_4.81%_95.72%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
              <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] leading-[normal] not-italic relative size-full text-[93.697px] text-left text-white tracking-[4.6849px] uppercase">^</p>
            </div>
          </div>
        </>
      )}
      {isVariant2 && (
        <>
          <div className="absolute contents left-0 top-[30px]" data-name="Access Dropdown">
            <div className="absolute bg-[#00629b] h-[80px] left-0 top-[30px] w-[1300px]" />
            <p className="[word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[42.298px] leading-[normal] left-[29px] not-italic text-[38.173px] text-left text-white top-[49px] tracking-[1.9086px] uppercase w-[619.25px]">STAFF</p>
            <div className="absolute flex h-[27px] items-center justify-center left-[1230px] top-[64px] w-[104.713px]">
              <div className="-rotate-90 flex-none">
                <p className="[word-break:break-word] font-['Refrigerator_Deluxe:Light',sans-serif] h-[104.713px] leading-[normal] not-italic relative text-[93.697px] text-left text-white tracking-[4.6849px] uppercase w-[27px]">^</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[665px] top-[140px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[665px] top-[140px] w-[635px]" />
            <div className="absolute h-[214px] left-[686px] rounded-[7.372px] top-[161px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle56} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[959px] not-italic text-[32.767px] text-left text-white top-[184px] tracking-[1.6383px] uppercase w-[296px]">Nadir Weibel</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[36px] italic leading-[normal] left-[959px] text-[26.213px] text-left text-white top-[242px] tracking-[1.3107px] w-[296px]">Associate Faculty Director</p>
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[959px] not-italic text-[19.66px] text-left text-white top-[319px] tracking-[0.983px] w-[223.755px]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] mb-0 underline" role="link" tabIndex="0">
                weibel@ucsd.edu
              </p>
              <p className="leading-[normal]">DIB Office 360</p>
            </div>
          </div>
          <div className="absolute contents left-0 top-[140px]">
            <div className="absolute bg-[#182b49] h-[256px] left-0 top-[140px] w-[635px]" />
            <div className="absolute h-[214px] left-[21px] rounded-[7.372px] top-[161px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle57} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35.15px] leading-[normal] left-[294.12px] not-italic text-[32.767px] text-left text-white top-[184.33px] tracking-[1.6383px] uppercase w-[223.755px]">Mai nguyen</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[35.15px] italic leading-[normal] left-[294.12px] text-[26.213px] text-left text-white top-[242.37px] tracking-[1.3107px] w-[223.755px]">Director</p>
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[294.12px] not-italic text-[19.66px] text-left text-white top-[300.41px] tracking-[0.983px] w-[223.755px]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] mb-0 underline" role="link" tabIndex="0">
                mainguyen@ucsd.edu
              </p>
              <p className="leading-[normal]">DIB Office 353</p>
            </div>
          </div>
          <div className="absolute contents left-[-2px] top-[431px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[-2px] top-[431px] w-[635px]" />
            <div className="absolute h-[214px] left-[19px] rounded-[7.372px] top-[452px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle58} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[292px] not-italic text-[32.767px] text-left text-white top-[475px] tracking-[1.6383px] uppercase w-[319px]">SHeila Oberrecht</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[36px] italic leading-[normal] left-[292px] text-[26.213px] text-left text-white top-[533px] tracking-[1.3107px] w-[332px]">Executive Assistant to Director</p>
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[294px] not-italic text-[19.66px] text-left text-white top-[614px] tracking-[0.983px] w-[223.755px]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] mb-0 underline" role="link" tabIndex="0">
                spoberrecht@ucsd.edu
              </p>
              <p className="leading-[normal]">DIB Office 320</p>
            </div>
          </div>
          <div className="absolute contents left-[-2px] top-[722px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[-2px] top-[722px] w-[635px]" />
            <div className="absolute h-[214px] left-[19px] rounded-[7.372px] top-[743px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle59} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[292px] not-italic text-[32.767px] text-left text-white top-[766px] tracking-[1.6383px] uppercase w-[319px]">James White</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[36px] italic leading-[normal] left-[292px] text-[26.213px] text-left text-white top-[824px] tracking-[1.3107px] w-[332px]">Sr Program Manager</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[294px] not-italic text-[19.66px] text-left text-white top-[898px] tracking-[0.983px] w-[223.755px]">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline" role="link" tabIndex="0">
                jameswhite@ucsd.edu
              </span>
              <span className="leading-[normal]">
                <br aria-hidden />
                DIB Office 332
              </span>
            </p>
          </div>
          <div className="absolute contents left-0 top-[1013px]">
            <div className="absolute bg-[#182b49] h-[256px] left-0 top-[1013px] w-[635px]" />
            <div className="absolute h-[214px] left-[21px] rounded-[7.372px] top-[1034px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle60} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[294px] not-italic text-[32.767px] text-left text-white top-[1057px] tracking-[1.6383px] uppercase w-[319px]">elysia mac</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[36px] italic leading-[normal] left-[294px] text-[26.213px] text-left text-white top-[1115px] tracking-[1.3107px] w-[332px]">Program Manager</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[296px] not-italic text-[19.66px] text-left text-white top-[1189px] tracking-[0.983px] w-[223.755px] whitespace-pre-wrap">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline" role="link" tabIndex="0">
                esmac@ucsd.edu
              </span>
              <span className="leading-[normal]">
                {`  `}
                <br aria-hidden />
                DIB Office 335
              </span>
            </p>
          </div>
          <div className="absolute contents left-[663px] top-[431px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[663px] top-[431px] w-[635px]" />
            <div className="absolute h-[214px] left-[684px] rounded-[7.372px] top-[452px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle61} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[957px] not-italic text-[32.767px] text-left text-white top-[475px] tracking-[1.6383px] uppercase w-[287px]">Megan maclean</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[35.15px] italic leading-[normal] left-[957.12px] text-[26.213px] text-left text-white top-[533.37px] tracking-[1.3107px] w-[223.755px]">Operations Officer</p>
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[957.12px] not-italic text-[19.66px] text-left text-white top-[591.41px] tracking-[0.983px] w-[223.755px]">
              <p className="leading-[normal] mb-0">mmaclean@ucsd.edu</p>
              <p className="leading-[normal]">DIB Office 316</p>
            </div>
          </div>
          <div className="absolute contents left-[663px] top-[722px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[663px] top-[722px] w-[635px]" />
            <div className="absolute h-[214px] left-[684px] rounded-[7.372px] top-[743px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle62} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[957px] not-italic text-[32.767px] text-left text-white top-[766px] tracking-[1.6383px] uppercase w-[287px]">olivia gale</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[35.15px] italic leading-[normal] left-[957.12px] text-[26.213px] text-left text-white top-[824.37px] tracking-[1.3107px] w-[223.755px]">Program Manager</p>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49.046px] leading-[0] left-[957.12px] not-italic text-[19.66px] text-left text-white top-[882.41px] tracking-[0.983px] w-[223.755px]">
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline" role="link" tabIndex="0">
                o1gale@ucsd.edu
              </span>
              <span className="leading-[normal]">
                <br aria-hidden />
                DIB Office 335
              </span>
            </p>
          </div>
          <div className="absolute contents left-[665px] top-[1013px]">
            <div className="absolute bg-[#182b49] h-[256px] left-[665px] top-[1013px] w-[635px]" />
            <div className="absolute h-[214px] left-[686px] rounded-[7.372px] top-[1034px] w-[215px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[7.372px] size-full" src={imgRectangle63} />
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Bold',sans-serif] h-[35px] leading-[normal] left-[959px] not-italic text-[32.767px] text-left text-white top-[1043px] tracking-[1.6383px] uppercase w-[339px]">Gaela Fernandez Florin</p>
            <div className="[word-break:break-word] absolute font-['Source_Sans_Pro:Italic',sans-serif] h-[35px] italic leading-[0] left-[959px] text-[26.213px] text-left text-white top-[1125px] tracking-[1.3107px] w-[314px]">
              <p className="leading-[normal] mb-0">Head of Strategic Partnerships</p>
              <p className="leading-[normal]">​</p>
            </div>
            <p className="[word-break:break-word] absolute font-['Source_Sans_Pro:Regular',sans-serif] h-[49px] leading-[normal] left-[959px] not-italic text-[19.66px] text-left text-white top-[1214px] tracking-[0.983px] w-[266px]">gfernandezflorin@ucsd.edu</p>
          </div>
        </>
      )}
    </button>
  );
}

function Hero() {
  return (
    <div className="absolute contents left-0 top-[104px]" data-name="Hero">
      <div className="absolute flex h-[427px] items-center justify-center left-0 top-[104px] w-[1512px]">
        <div className="flex-none rotate-90">
          <div className="h-[1512px] relative w-[427px]" data-name="gradient 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient3} />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Refrigerator_Deluxe:ExtraBold',sans-serif] h-[116.55px] leading-[normal] left-[calc(50%+0.52px)] not-italic text-[96px] text-center text-white top-[259.4px] tracking-[4.8px] uppercase w-[880.95px]">Contacts</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Footer">
      <div className="bg-[#182b49] col-1 h-[147.467px] ml-0 mt-0 relative row-1 w-[1512px]" />
      <p className="[word-break:break-word] capitalize col-1 font-['Source_Sans_Pro:SemiBold',sans-serif] h-[41.835px] leading-[normal] ml-[395px] mt-[43.93px] not-italic relative row-1 text-[14px] text-center text-white tracking-[0.7px] w-[787.5px] whitespace-pre-wrap">{`The Design Lab at UC San Diego |  9500 Gilman Drive, MC0425, La Jolla, CA 92093`}</p>
      <div className="col-1 h-[29.314px] ml-[739.5px] mt-[74.23px] relative row-1 w-[98.601px]" data-name="White DLAb logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteDlAbLogo1} />
      </div>
    </div>
  );
}

function QuickAccessBlock() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Quick Access Block">
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[71px] items-center left-px top-[556px] w-[1512px]">
      <Staff className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <Contacts className="block cursor-pointer drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[110px] relative shrink-0 w-[1300px]" />
      <QuickAccessBlock />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-white relative size-full" data-name="contact">
      <Hero />
      <Frame />
      <NavBar className="absolute h-[104px] left-0 top-0 w-[1512px]" />
    </div>
  );
}