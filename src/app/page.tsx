"use client"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import Image from "next/image"
import Logo from "@/components/Logo"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen py-24">
      <div className="max-w-[1200px] mx-auto">
        <Logo />

        <p className="text-center text-blue-500 font-bold text-xl my-2">
          Presents
        </p>
        <h1 className="text-7xl font-extrabold text-center leading-[80px]">
          Intra University Programming Contest - 2024
        </h1>

        <Carousel
          className="mt-12 h-[400px] w-[1100px] mx-auto rounded-xl"
          opts={{ loop: true }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="h-[400px] w-[1100px] rounded-xl overflow-hidden bg-[url('/1.jpg')] bg-cover"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-[400px] w-[1100px] rounded-xl overflow-hidden bg-[url('/2.jpg')] bg-cover"></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <h3 className="text-2xl mt-24 font-bold">News 📣</h3>
        <p className="mt-2 text-gray-700">
          Hello competitive programmers, we are announcing Intra University
          Programming Contest - 2024 for the first time ever. We are really
          excited to invite you to participate in this contest and showcase your
          problem solving and programming skills and win exciting prizes.
        </p>

        <h3 className="text-2xl mt-8 font-bold">Eligibility Criteria</h3>
        <ul className="mt-2 text-gray-700 list-inside list-disc">
          <li>you must be a student of Begum Rokeya University, Rangpur</li>
          <li>
            your codeforces rating should be below{" "}
            <span className="text-green-500 font-semibold">pupil</span> that is
            less than 1200
          </li>
        </ul>

        <h3 className="text-2xl mt-8 font-bold">Event Schedule</h3>
        <div className="mt-3 flex flex-col gap-3">
          <div className="border border-gray-300 bg-amber-50 px-3 py-2 rounded-lg flex items-center gap-4">
            🗓️ Registration Deadline: <div className="font-bold">May 28</div>
          </div>
          <div className="border border-gray-300 bg-amber-50 px-3 py-2 rounded-lg flex items-center gap-4">
            🗓️ Mock Contest: <div className="font-bold">Jun 03</div>
          </div>
          <div className="border border-gray-300 bg-amber-50 px-3 py-2 rounded-lg flex items-center gap-4">
            🗓️ Main Onsite Contest: <div className="font-bold">Jun 04</div>
          </div>
          <div className="border border-gray-300 bg-amber-50 px-3 py-2 rounded-lg flex items-center gap-4">
            💵 Registration Fee: <div className="font-bold">610 TK</div>
          </div>
        </div>

        <h3 className="text-xl mt-8 font-bold">
          All participants of the onsite will get:{" "}
        </h3>
        <ul className="list-disc list-inside mt-2">
          <li>T-Shirt</li>
          <li>Snacks</li>
          <li>Participation Certificate</li>
        </ul>

        <h3 className="text-2xl mt-24 font-bold text-amber-500 text-center">
          Open to all
        </h3>
        <p className="text-center mt-2">
          Any student from any department of BRUR can participate in this
          contest.
        </p>

        <Link href="/register">
          <Button size="lg" className="block mx-auto mt-8">
            Register Now
          </Button>
        </Link>

        <h3 className="text-2xl mt-20 font-bold text-center">
          Meet Our Problem Setters
        </h3>

        <div className="px-8 py-6 rounded-lg bg-gray-50 border border-indigo-200 max-w-[700px] mx-auto mt-4 flex items-center gap-8">
          <div className="h-28 w-28 rounded-full overflow-hidden bg-[url('/rasel.png')] bg-cover"></div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Shamim Ahammad Rasel</h3>
            <p>Final Year Student at BRUR</p>
            <p>
              Codeforces Max Rating:{" "}
              <span className="text-[#04A79E] font-bold">1536</span>{" "}
              <span>{`(Specialist)`}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
