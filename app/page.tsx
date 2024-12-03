import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  const hostedSites = [
    { id: 1, label: "ezyCommerce", img: "/ezyCommerce.png", ip: "127.0.0.1" },
    { id: 2, label: "Horses", img: "/Horses.png", ip: "127.0.0.1" },
  ];
  return (
    <main>
      <h1 className="text-4xl font-semibold mb-10">Hosted Sites:</h1>
      <div className="grid gap-x-10 grid-cols-4">
        {hostedSites.map((hostedSite) => (
          <Link key={hostedSite.img} href={`/${hostedSite.id}`}>
            <Card {...hostedSite} />
          </Link>
        ))}
      </div>
    </main>
  );
}
