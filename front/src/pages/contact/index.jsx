// import Menu from "@/components/Menu";

import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };
  const inputStyle =
    "ml-8 font-Poppins bg-transparent text-lg sm:text-2xl font-bold border-b-[0.2rem] border-ex_dark_purple dark:border-ex_light_purple outline-none focus:ring-0 text-ex_normal_purple flex-1 focus:bg-none";

  const labelStyle =
    "text-3xl md:text-4xl font-Miju text-ex_dark_purple dark:text-ex_light_purple ";
  return (
    <>
      {/* <Menu /> */}
      <div className="w-full  h-screen flex flex-col px-8 max-w-5xl m-auto items-start justify-start gap-8">
        <Title title="Contactez-nous" />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start  w-full  gap-4"
        >
          <p className={`${labelStyle}`}>Bonjour,</p>
          <div className="flex lg:flex-row w-full flex-col">
            <label className={`${labelStyle}`}>Mon nom est </label>
            <input
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={`${inputStyle}`}
              type="text"
              required
            />
          </div>
          <div className="flex  flex-col lg:flex-row w-full">
            <label className={`${labelStyle}`}>Merci de m'appeler au </label>
            <input
              id="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className={`${inputStyle}`}
              type="tel"
              required
            />
          </div>

          <div className="flex lg:flex-row w-full flex-col ">
            <label className={`${labelStyle}`}>Ou de menvoyer un mail à </label>
            <input
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`${inputStyle}`}
              type="email"
              required
            />
          </div>

          <div className=" flex w-full flex-col sm:flex-row pt-20 gap-8">
            <Link
              href="/"
              className="text-white w-full bg-ex_dark_purple rounded-md px-7 py-2"
            >
              <button className="text-white w-full bg-ex_red rounded-md px-7 py-2">
                Retourner sur le site
              </button>
            </Link>
            <button
              type="submit"
              className="text-white w-full bg-ex_normal_purple rounded-md px-7 py-2"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
