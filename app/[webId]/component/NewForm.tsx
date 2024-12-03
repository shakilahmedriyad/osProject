"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import DomainNameItem from "./DomainName";
import Image from "next/image";
const tlds = [
  "com",
  "org",
  "net",
  "edu",
  "gov",
  "mil",
  "int",
  "xyz",
  "info",
  "co",
  "io",
  "app",
  "dev",
  "ai",
  "tech",
  "site",
  "online",
  "store",
  "blog",
  "design",
  "pro",
];

export default function NewForm({ id }: { id: number }) {
  const hostedSites = [
    { id: 1, label: "ezyCommerce", img: "/ezyCommerce.png", ip: "127.0.0.1" },
    { id: 2, label: "Horses", img: "/Horses.png", ip: "127.0.0.2" },
  ];
  const selectedWebsite = hostedSites.find((hosted) => hosted.id == id);
  const [domainName, setDomainName] = useState("");
  const [selectedDomainName, setSelectedDomainName] = useState("");

  const handleSubmit = () => {
    console.log({
      domain: selectedDomainName,
      ip: selectedWebsite?.ip,
    });
  };
  return (
    <div>
      <div className="flex w-full gap-x-20 items-center justify-center">
        <div className="max-w-[20rem] w-full">
          <Label className="text-2xl">Search Domain</Label>
          <Input onChange={(e) => setDomainName(e.currentTarget?.value)} />
          <Button className="mt-4">Search</Button>
        </div>
        <div className="max-w-[25rem] border px-2 py-2 rounded-md shadow-md">
          <Image
            src={selectedWebsite?.img as string}
            alt={selectedWebsite?.label as string}
            width={1920}
            height={1080}
            className="object-cover max-w-[25rem] w-full h-full"
          />
          <h2 className="text-xl text-center mt-2">{selectedWebsite?.label}</h2>
        </div>
      </div>
      {domainName.trim().length > 0 && (
        <>
          <h3 className="mt-6 mb-4 text-xl font-bold">Suggested Domain</h3>
          <div className=" border px-5 py-3 max-h-[20rem] overflow-y-auto overflow-x-hidden">
            <ul className="w-full space-y-2">
              {tlds.map((tld) => (
                <DomainNameItem
                  name={domainName + "." + tld}
                  setDomainName={setSelectedDomainName}
                  key={tld}
                />
              ))}
            </ul>
          </div>
          <Button onClick={handleSubmit} className="mt-5">
            Add Domain
          </Button>
        </>
      )}
    </div>
  );
}
