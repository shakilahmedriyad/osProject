import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function DomainNameItem({
  name,
  setDomainName,
}: {
  name: string;
  setDomainName: Dispatch<SetStateAction<string>>;
}) {
  const [isSelected, setSelected] = useState(false);
  const handleClick = () => {
    if (!isSelected) {
      setDomainName(name);
      setSelected(true);
    } else {
      setDomainName("");
      setSelected(false);
    }
  };
  return (
    <li className="border flex justify-between items-center text-xl py-2 px-5">
      <p>{name}</p>
      <Button
        variant={isSelected ? "destructive" : "default"}
        onClick={handleClick}
      >
        {!isSelected ? "Select" : "Remove"}
      </Button>
    </li>
  );
}
