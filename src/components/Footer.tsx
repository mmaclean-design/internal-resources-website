import imgWhiteDlAbLogo1 from "@/imports/c8b9d6f8944bd1fd45b800dedfe054568c29db87.png";

export default function Footer() {
  return (
    <div className="bg-[#182b49] w-full py-8 flex flex-col items-center gap-3">
      <p className="capitalize font-['Source_Sans_Pro:SemiBold',sans-serif] text-[14px] text-center text-white tracking-[0.7px] whitespace-pre-wrap">
        The Design Lab at UC San Diego | 9500 Gilman Drive, MC0425, La Jolla, CA 92093
      </p>
      <div className="h-[29px] w-[97px]">
        <img alt="Design Lab" className="object-contain size-full" src={imgWhiteDlAbLogo1} />
      </div>
    </div>
  );
}
