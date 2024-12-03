import Image from "next/image";

export default function Card({
  img,
  label,
  ip,
  domain,
}: {
  img: string;
  label: string;
  ip: string;
  domain?: string;
}) {
  return (
    <div className="max-w-[25rem] cursor-pointer shadow-xl border px-5 py-5 rounded-md">
      <div>
        <Image
          src={img}
          className="w-full object-cover"
          alt={label}
          width={1920}
          height={1080}
        />
      </div>
      <h2 className="text-3xl mt-7 font-bold mb-3">{label}</h2>
      <div className="flex gap-x-4">
        <p>IP:</p>
        <p>{ip}</p>
      </div>
      {domain && (
        <div className="flex gap-x-4 mt-2">
          <p>Domain:</p>
          <a target="_blank" href={"http://ezyCommerce.com"}></a>
        </div>
      )}
    </div>
  );
}
