import Head from "next/head";
import { useEffect } from "react";
import bg from "/public/images/BG.jpeg";

export default function Home() {
  const countDownDate = new Date("Jan 30, 2023 23:00:00").getTime();

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
      <main className="relative h-screen  flex flex-col justify-center items-center   px-10 overflow-hidden ">
        <img
          src="images/Lines.svg"
          alt=""
          className="absolute opacity-10 -z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px]"
        />
        <img src={bg.src} alt="" className=" max-w-lg -z-[1]" />

        <article className="rounded-lg h-full w-full  gap-4  flex flex-col justify-center items-center absolute">
          <h1 className="text-slate-400 text-4xl font-bold">
            On lève bientôt le voile ...
          </h1>

          <h2 id="counter" className="text-slate-200 text-2xl font-bold">
            -- : -- : -- : --
          </h2>
        </article>
      </main>
    </>
  );
}
