"use client";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Contact1 from "@/components/sections/contact/Contact1";
import Hero from "@/components/sections/heros/Hero";
import Hero2 from "@/components/sections/heros/Hero2";
import Hero3 from "@/components/sections/heros/Hero3";
import Portfolio1 from "@/components/sections/portfolio/Portfolio1";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import Portfolio3 from "@/components/sections/portfolio/Portfolio3";
import Resume1 from "@/components/sections/resume/Resume1";
import Services1 from "@/components/sections/services/Services1";
import Skills1 from "@/components/sections/skills/Skills1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";

const IndexMain = () => {
  return (
    <main>
      <Hero />
      <Services1 />
      <Portfolio1 />
      <Resume1 />
      <Skills1 />
      {/* <Testimonials1 /> */}
      {/* <Blogs1 /> */}
      <Contact1 />
    </main>
  );
};

export default IndexMain;
