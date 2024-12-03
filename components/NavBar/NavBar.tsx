import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full py-7 border-b flex justify-center items-center mb-8">
      <Link href={"/"}>
        <h1 className="text-4xl font-bold uppercase">DNS Resolver</h1>
      </Link>
    </nav>
  );
}
