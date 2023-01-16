import Head from "next/head";
import { useEffect } from "react";
import Desktop from "/public/images/Desktop.png";
import Mobile from "/public/images/Mobile.png";
import Button from "/components/Button";

export default function Home() {
  const countDownDate = new Date("Jan 31, 2023 23:59:59").getTime();

  useEffect(() => {
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("counter").innerHTML =
        ("0" + days).slice(-2) +
        " : " +
        ("0" + hours).slice(-2) +
        " : " +
        ("0" + minutes).slice(-2) +
        " : " +
        ("0" + seconds).slice(-2);

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
      }
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Ex Nihilo</title>
        <meta name="description" content="Site d'Ex Nihilo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen flex flex-col justify-center items-center  px-10 overflow-hidden ">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[80%] max-w-5xl -z-[1] h-full opacity-[5%]">
          <img
            src="/svg/single_line.svg"
            className="w-2 absolute left-0 md:left-1/3 -translate-x-1/2"
            alt=""
          />
          <img
            src="/svg/single_line.svg"
            className="w-2 absolute left-full md:left-2/3 -translate-x-1/2"
            alt=""
          />
          <img
            src="/svg/single_line.svg"
            className="w-2 absolute md:block hidden left-0 -translate-x-1/2"
            alt=""
          />
          <img
            src="/svg/single_line.svg"
            className="w-2 absolute md:block hidden left-full -translate-x-1/2"
            alt=""
          />
        </div>
        <img
          src={Desktop.src}
          alt=""
          className=" lg:w-[700px] md:w-[600px] sm:w-[500px] sm:block hidden -z-[1] drop-shadow-xl"
        />
        <img
          src={Mobile.src}
          alt=""
          className=" sm:hidden block -z-[1] h-3/4"
        />

        <article className="rounded-lg h-full w-full  gap-8  flex flex-col justify-center items-center absolute">
          <h1 className=" text-ex_dark_yellow sm:text-3xl text-2xl font-bold whitespace-pre text-center">
            Changement
            <br className=" sm:hidden block" /> d'univers dans :
          </h1>

          <h3
            id="counter"
            className="text-slate-200 sm:text-5xl text-3xl font-bold text-left"
          >
            -- : -- : -- : --
          </h3>
          <div className="flex flex-col sm:flex-row pt-8 gap-4">
            <Button
              title="Entrons en contact"
              bg_color="bg-ex_light_yellow"
              text_color="text-ex_dark_purple"
              link="https://www.linkedin.com/in/jonathan-charles-42971a96/"
            />
            <Button
              title="En attendant"
              bg_color="bg-ex_normal_purple"
              fill_color="fill-white"
              text_color="text-white"
              icon={true}
              link="https://www.linkedin.com/company/exnihilo-smartworkwear/"
            />
          </div>
        </article>
      </main>
    </>
  );
}
