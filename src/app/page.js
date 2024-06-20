import { Barriecito } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 mb-4 bg-slate-400">
      <div className="flex justify-between">
        <h1 className="text-5xl font-bold text-Black">Molla Bari</h1>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Home
        </button>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Family Three
        </button>
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Contact
        </button>
      </div>
    </div>
    
  );
}
