"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center sm:mb-40 leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-semibold">Full Stack Developer</span>{" "}
        specializing in the <span className="font-medium">MERN</span> stack,
        with the expertise in{" "}
        <span className="italic">React, Node, Express, MongoDB</span>. My
        proficiency extends to technologies like{" "}
        <span className="underline">Typescript</span> and{" "}
        <span className="underline">Next.js</span>, enabling me to build robust
        and scalable web applications.
      </p>
      <p className="mb-3">
        I am driven by a perpetual curiosity and a hunger for learning{" "}
        <span className="font-medium">new technologies</span>. Keeping up with
        the latest industry trends is not just a habit but a commitment that
        fuels my desire to deliver cutting-edge solutions.
      </p>
      <p className="mb-3">
        My dedication to delivering{" "}
        <span className="">high-quality software</span>, coupled with an
        eagerness to take on challenges, defines my professional ethos. I thrive
        in dynamic environments where <span className="">innovation</span> and{" "}
        <span className="">adaptability</span> are valued.
      </p>
      <p className="">
        I am open to new <span className="underline">opportunities</span> and{" "}
        <span className="underline">collaborations</span> that allow me to
        leverage my skills and contribute to exciting projects. If you're
        looking for a Full Stack Developer who combines technical expertise with
        a passion for innovation,{" "}
        <span className="font-bold">let's connect</span>.
      </p>
    </motion.section>
  );
}
