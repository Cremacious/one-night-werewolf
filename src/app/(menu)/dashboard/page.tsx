// import VillagerCard from '@/components/cards/villager';
import villageImage from '@/assets/background-images/town.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="">
      <div className="w-full mb-8">
        <div className="rubik text-blue-100 text-4xl md:text-5xl font-bold text-center drop-shadow-2xl">
          One Night Werewolf
        </div>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-800 p-6 rounded-xl shadow-xl">
        {/* Buttons Section */}
        <div className="flex flex-col gap-6 md:gap-8 md:col-span-1">
          <Button
          
            className="bg-[#202020] border-b-4 border-b-slate-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg  hover:border-b-blue-950 hover:text-blue-300"
          >
            Create Game
          </Button>
          <Button className="bg-[#202020] border-b-4 border-b-slate-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg  hover:border-b-blue-950 hover:text-blue-300">
            Join Game
          </Button>
          <Button
            asChild
            className="bg-[#202020] border-b-4 border-b-slate-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg  hover:border-b-blue-950 hover:text-blue-300"
          >
            <Link href="/profile">Profile</Link>
          </Button>
          <Button className="bg-[#202020] border-b-4 border-b-slate-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg  hover:border-b-blue-950 hover:text-blue-300">
            Friends
          </Button>
          <Button className="bg-[#202020] border-b-4 border-b-slate-700 text-white font-bold py-4 rounded-xl shadow-lg text-lg  hover:border-b-blue-950 hover:text-blue-300">
            Settings
          </Button>
        </div>
        {/* Image Section */}
        <div className="md:col-span-2 flex justify-center items-center w-full">
          <Image
            src={villageImage}
            alt="Village"
            width={900}
            height={700}
            className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[70vh]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
