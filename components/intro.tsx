"use client";

import { useActiveSectionContext } from "@/context/active-section-content";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex itmes-center justify-center">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={
                "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.jpg?s=612x612&w=is&k=20&c=aSA6MAeUA8LngFd23ELCLuyhA9et1uP4GHeySt_MEC0="
              }
              alt="Portrait"
              height={"192"}
              width={"192"}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ajay Singh.</span> I'm a{" "}
        <span className="font-bold">Full Stack Developer</span> with{" "}
        <span className="font-bold">many years</span>{" "}
        <span>of Self-Directed Learning. I enjoy building</span>{" "}
        <span className="italiic">sites & apps</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-2 items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href={""}
          className="group bg-rose-500 dark:bg-white/10 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-rose-550 active:scale-105 transition"
          target="_blank"
        >
          My Resume
          <FaLocationArrow className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ajayyssingh"}
          className="p-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.25] active:scale-105 transition"
          target="_blank"
        >
          <FaLinkedin size={"30"} />
        </Link>
        <Link
          href={"https://www.instagram.com/ajayyssingh/"}
          className="p-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.25] active:scale-105 transition"
          target="_blank"
        >
          <FaInstagram size={"30"} />
        </Link>
      </motion.div>
    </section>
  );
}
