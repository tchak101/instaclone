import Image from "next/legacy/image";
import React from "react";
// import './Header.css';
import {
  Bars3Icon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="lg:mt-0 mt-3 shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
        {/* left part */}
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div
          onClick={() => router.push("/")}
          className="relative h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer"
        >
          {/* left part */}
          <Image
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs lg:mt-7">
          <div className="relative mt-1 p-1 h-8 rounded-md bg-gray-50 flex">
            {/* middle part search bar */}
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
            </div>
            <input
              className="bg-gray-100 block w-full pl-7 pr-2 py-0.5 text-sm border-gray-400 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn -rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon  onClick={() => setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <div className=" relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  onClick={signOut}
                  src={session.user.image}
                  layout="fill"
                  objectFit="cover"
                  alt="profile pic"
                />
              </div>
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
