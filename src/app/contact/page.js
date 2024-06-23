import Image from "next/image";
import Link from "next/link";
export default function Family() {
  return (
    <main className="flex min-h-screen flex-col items-top justify-between p-31">
      <nav className="fixed top-0 z-50 mb-25 grid text-top bg-white bg-opacity-50 px-6 py-3 shadow-sm lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-8 lg:text-center">
          <Link href="/"> <h1 className="flex text-2xl font-semibold">Molla Bari </h1></Link>
          <h1></h1><h1></h1>
          <Link href="/">Home</Link>
          <Link href="/familytree">Family Tree</Link>
          <Link href="/contact">Contact</Link>
          <h1></h1><h1></h1>
      </nav>
      <div className="flex top-1 grid px-6 py-20 place-items-center font-bold">
        <h1 className="text-3xl font-semibold text-center">Contact</h1>
      </div>
    </main>
  );
}
