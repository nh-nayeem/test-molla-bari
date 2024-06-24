import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-31">
      <nav className="fixed top-0 z-50 mb-25 grid text-center bg-white bg-opacity-50 px-6 py-3 shadow-sm lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-8 lg:text-center">
          <Link href="/"> <h1 className="flex text-2xl font-semibold">মোল্লা বাড়ী </h1></Link>
        <Link href="/familytree">মোল্লা পরিবার</Link>
      </nav> 
      <div className="flex top-1 grid px-6 py-20 place-items-center font-bold">
        <div className="border border-gray-300 rounded-lg p-2">
          <h1 className="text-3xl font-semibold text-center">দায়চারা মোল্লা বাড়ী</h1>
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
            দীঘি: <br/>
            মোল্লা বাড়ীতে আসলেই এর দৃষ্টিনন্দন দীঘি চোখে পড়ে। <br/>
            এ দীঘি ১৯৫২ সালে ৮০০০ টাকা মজুরীর বিনিময়ে খনন করা হয়ছিলো। <br/>
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
            কাছারি ঘর: <br/>
            মোল্লা বাড়ীর পুরোনো কাছারি ঘর অল্প কিছুদিন আগে পাকা করা হয়। <br/>
            অনেক কাল আগে থেকেই নামাজের জায়গা আর মক্তব হিসেবে <br/> ব্যবহৃত হয়ে আসছে। <br/>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
