import Image from "next/image";
import Router from "next/router";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GiArchiveResearch } from "react-icons/gi";
import { FcLinux } from "react-icons/fc";
import { FaUbuntu } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { Inter } from "next/font/google";
import Account from "./components/account";
import Clock from "./components/time";
import { Button } from "../components/ui/button"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="md:h-screen w-full p-12">
      <div className="hidden md:flex gap-2 h-full w-full p-8 border rounded-xl">
        <div className="h-full w-1/3">
          <div className="flex gap-3 h-1/4 w-full p-1">
            <div className="h-full w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
              <Link href="https://github.com/UkyoTaniguchi" className="flex h-full w-full justify-center items-center">
                <FaGithub className="h-4/6 w-4/6"/>
              </Link>
            </div>
            <div className="h-full w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
              <Link href="https://x.com/Yoto4EYf8dP9X4y" className="flex h-full w-full justify-center items-center">
                <FaXTwitter className="h-4/6 w-4/6"/>
              </Link>
            </div>
          </div>
          <div className="h-3/4 w-full p-1">
            <div className="flex justify-center items-center h-full w-full border rounded-2xl p-2 hover:bg-[#232323]">
              <Link href="pages/projects" className="flex h-full w-full justify-center items-center">
                <div className="flex flex-col h-[90%] w-[90%]">
                  <h1 className="text-4xl font-bold text-center mb-3 p-3 border-b">Projects</h1>
                  <div className="relative flex flex-grow justify-center items-center w-full overflow-y-auto">
                    {/* <FaLaptopCode className="w-full h-full"/> */}
                    <IoLogoFirebase className="w-[30%] h-[30%] absolute top-16 left-0"/>
                    <SiTypescript className="w-[30%] h-[30%] absolute top-0 right-0"/>
                    <FaReact className="w-[30%] h-[30%] absolute bottom-0 left-7"/>
                    <SiNextdotjs className="w-[20%] h-[20%] absolute bottom-14 right-10"/>
                    <IoDocumentsOutline className="w-[40%] h-[40%]"/>
                  </div>
               </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3">
          <div className="flex gap-3 h-1/4 w-full p-1">
            <div className="h-full w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
              <Link href="https://www.instagram.com/ukyou1121.tw/" className="flex h-full w-full justify-center items-center">
                <FaInstagram className="h-4/6 w-4/6"/>
              </Link>
            </div>
            <div className="h-full w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
              <Link href="https://www.figma.com/files/team/1379362410831578195/recents-and-sharing/recently-viewed?fuid=1379362408020278415" className="flex h-full w-full justify-center items-center">
                <FaFigma className="h-4/6 w-4/6"/>
              </Link>
            </div>
          </div>
          <div className="h-2/4 w-full p-1">
            <div className="h-full w-full border rounded-2xl hover:bg-[#232323] overflow-y-auto">
              <Link href="pages/profile" className="flex h-full w-full justify-center items-center">
                <Account/>
              </Link>
            </div>
          </div>
          <div className="h-1/4 w-full p-1">
            <div className="flex justify-center items-center w-full h-full">
              <Clock/>
            </div>
          </div>
        </div>
        <div className="h-full w-1/3">
          <div className="h-3/4 w-full p-1">
            <div className="flex justify-center items-center h-full w-full border rounded-2xl p-2 hover:bg-[#232323]">
              <Link href="pages/study" className="flex h-full w-full justify-center items-center">
                <div className="flex flex-col h-[90%] w-[90%]">
                  <h1 className="text-4xl font-bold text-center mb-5 p-3 border-b">The Study</h1>
                  <div className="relative flex flex-grow w-full overflow-y-auto">
                  <GiArchiveResearch className="w-[40%] h-[40%] absolute top-0 left-0"/>
                  <FcLinux className="w-[40%] h-[40%] absolute top-6 right-0"/>
                  <FaUbuntu className="w-[30%] h-[30%] absolute bottom-14 left-14 "/>
                  <GiCctvCamera className="w-[30%] h-[30%] absolute bottom-5 right-5"/>
                  </div>
               </div>
              </Link>
            </div>
          </div>
          <div className="flex gap-3 h-1/4 w-full p-1">
            <div className="h-full w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
              <a href="mailto:ukyou.13.1121@icloud.com" className="flex h-full w-full justify-center items-center">
                <IoIosMail className="h-4/6 w-4/6"/>
              </a>
            </div>
            <div className="h-full w-1/2 rounded-2xl">

            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- ここからスマートフォン ------------------------------------------- */}

      <div className="md:hidden">
        <div className="flex justify-center items-center mb-5 w-full">
          <Clock/>
        </div>
        <div className="w-full border rounded-2xl mb-3 hover:bg-[#232323] overflow-y-auto">
          <Link href="pages/profile" className="flex w-full justify-center items-center">
            <Account/>
          </Link>
        </div>
        <div className="flex gap-3 w-full mb-3">
          <div className="relative w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
            <Link href="https://github.com/UkyoTaniguchi" className="flex w-full justify-center items-center p-5 sm:p-16">
              <FaGithub className="w-full h-fit"/>
            </Link>
          </div>
          <div className="relative w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
            <Link href="https://x.com/Yoto4EYf8dP9X4y" className="flex w-full justify-center items-center p-5 sm:p-16">
              <FaXTwitter className="w-full h-fit"/>
            </Link>
          </div>
        </div>
        <div className="flex gap-3 w-full mb-3">
          <div className="relative w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
            <Link href="https://www.instagram.com/ukyou1121.tw/" className="flex w-full justify-center items-center p-5 sm:p-16">
              <FaInstagram className="w-full h-fit"/>
            </Link>
          </div>
          <div className="relative w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
            <Link href="https://www.figma.com/files/team/1379362410831578195/recents-and-sharing/recently-viewed?fuid=1379362408020278415" className="flex w-full justify-center items-center p-5 sm:p-16">
              <FaFigma className="w-full h-fit"/>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full border rounded-2xl mb-3 p-2 hover:bg-[#232323] overflow-hidden">
          <Link href="pages/projects" className="flex h-full w-full justify-center items-center">
            <div className="flex flex-col w-[90%]">
              <h1 className="text-4xl font-bold text-center mb-3 p-3 border-b">Projects</h1>
              <div className="relative flex flex-grow justify-center items-center w-full gap-10 p-2 sm:p-10 overflow-y-auto">
                <SiTypescript className="w-1/3 h-fit"/>
                <FaReact className="w-1/3 h-fit"/>
                <IoLogoFirebase className="w-1/3 h-fit"/>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full border rounded-2xl mb-3 p-2 hover:bg-[#232323] overflow-hidden">
          <Link href="pages/study" className="flex h-full w-full justify-center items-center">
            <div className="flex flex-col w-[90%]">
              <h1 className="text-4xl font-bold text-center mb-3 p-3 border-b">The study</h1>
              <div className="relative flex flex-grow justify-center items-center w-full gap-10 p-2 sm:p-10 overflow-y-auto">
                <FcLinux className="w-1/3 h-fit"/>
                <FaUbuntu className="w-1/3 h-fit"/>
                <GiCctvCamera className="w-1/3 h-fit"/>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-3 w-full">
          <div className="relative w-1/2 border rounded-2xl hover:bg-[#232323] overflow-hidden">
            <a href="mailto:ukyou.13.1121@icloud.com" className="flex w-full justify-center items-center p-5 sm:16">
              <IoIosMail className="w-full h-fit"/>
            </a>
          </div>
          <div className="relative w-1/2 rounded-2xl overflow-hidden">
  
          </div>
        </div>
      </div>
    </main>
  );
}
