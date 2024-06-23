import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-31">
      <nav className="fixed top-0 z-50 mb-25 grid text-center bg-white bg-opacity-50 px-6 py-3 shadow-sm lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-8 lg:text-center">
          <Link href="/"> <h1 className="flex text-2xl font-semibold">Molla Bari </h1></Link>
          <Link href="/familytree">Molla Family</Link>
      </nav> 
      <div className="flex top-1 grid px-6 py-20 place-items-center font-bold">
        <div className="border border-gray-300 rounded-lg p-2">
          <h1 className="text-3xl font-semibold text-center">Diachara Molla Bari</h1>
        </div>
        <div className="flex grid py-10 item-left lg:grid-cols-2 gap-10">
          <div className="border border-gray-300 rounded-lg p-2">
            <Image
              src="/mollabaridighi.jpg"
              alt="Molla Bari"
              width={500}
              height={500}
            />
            <p>
            Dighi: <br/>
            The signature of the Diachara Molla bari is its large Dighi.<br/>
            In 1952 the Dighi was excavated by hiring some labour at <br/>
            a cost of 8000BDT.
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-2">
            <Image
              src="/mollabarikachari.png"
              alt="Molla Bari"
              width={500}
              height={500}
            />
            <p>
            Kachari Ghor: <br/>
            This is the very recent version of the Kachari ghor. <br/>
            It is used for praying namaj and also teaching Quran.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
