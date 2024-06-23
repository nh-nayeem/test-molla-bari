"use client"
import React from "react";
import Link from "next/link";
import 'reactflow/dist/style.css';
import FamilyTree from "./familytreeinit";
export default function Family() {
  return (
    <main className="flex min-h-screen px-3">
      <nav className="fixed top-0 z-50 mb-25 grid text-center bg-white bg-opacity-50 px-6 py-3 shadow-sm lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-8 lg:text-center">
          <Link href="/"> <h1 className="flex text-2xl font-semibold">Molla Bari </h1></Link>
          <h1></h1><h1></h1>
          <Link href="/">Home</Link>
          <Link href="/familytree">Family Tree</Link>
          <Link href="/contact">Contact</Link>
          <h1></h1><h1></h1>
      </nav>  
      <div className="flex grid rows-2 w-full">
        <div className='h-auto py-20'>
          <h1 className='px-10 font-semibold'>Molla Family</h1>
          <FamilyTree/>
        </div>
      </div>
  </main>
  );
}
