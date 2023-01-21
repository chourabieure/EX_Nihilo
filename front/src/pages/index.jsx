// @ts-nocheck
import Button from "@/components/Button";
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  const sectionStyle = 'h-screen snap-center text-slate-800 flex text-slate-200'
  const wordPurple = 'text-ex_normal_purple font-bold tracking-wide'



  // shapesContainer


  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory ">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[80%] max-w-5xl w-full -z-[1] h-full opacity-10">
        <img src="/static/svg/single_line.svg" className="w-2 absolute left-2/3 -translate-x-1/2" alt="" />
        <img src="/static/svg/single_line.svg" className="w-2 absolute left-1/3 -translate-x-1/2" alt="" />
        <img src="/static/svg/single_line.svg" className="w-2 absolute md:block hidden left-0 -translate-x-1/2" alt="" />
        <img src="/static/svg/single_line.svg" className="w-2 absolute md:block hidden left-full -translate-x-1/2" alt="" />
      </div>


      <section className={`${sectionStyle} justify-between items-center flex-col py-8 text-ex_dark_purple`}>
        <Navbar />

        <section className="px-8">
          <h1 className="text-3xl sm:text-4xl text-center text-white font-medium leading-9 sm:leading-[50px] pb-8">Parce que nos collaborateurs<br />sont <span className={`${wordPurple}`}>précieux</span>, vous cherchez<br />des vêtements pros<br /><span className={`${wordPurple}`}>extraordinaires</span>.</h1>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center m-auto sm:m-0 w-[80%] sm:w-full">
            <Button title="Entrons en contact" bg_color="bg-ex_light_yellow" text_color="text-ex_dark_purple" />
            <Button title="Nos domaines" bg_color="bg-ex_normal_purple" fill_color="fill-white" text_color="text-white" icon={true} />
          </div>


        </section>

        <img className="animate-bounce w-4 sm:w-8" src="/static/svg/scroll.svg" alt="scroll down indicator" />
      </section >
      <section className={` ${sectionStyle} items-center justify-center`}>
        Section 2
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 3
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 4
      </section>
      <section className={`${sectionStyle} items-center justify-center`}>
        Section 5
      </section>
    </div >
  )
}

export default Home