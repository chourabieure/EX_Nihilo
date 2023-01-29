// import Menu from "@/components/Menu";

const Contact = () => {
  return (
    <>
      {/* <Menu /> */}
      <div className="w-full h-screen flex lg:px-40 px-[50px] items-center">
        <div className="flex flex-col items-start space-y-[10px] w-full">
          <p className="md:text-5xl text-3xl font-Miju text-ex_dark_purple">
            Bonjour,
          </p>
          <div className="flex lg:flex-row lg:space-x-[20px] w-full flex-col sm:space-y-[10px]">
            <p className="md:text-5xl text-3xl sm:font-2xl font-Miju text-ex_dark_purple">
              Mon nom est{" "}
            </p>
            <input
              className="border-b-[0.2rem] bg-transparent border-ex_dark_purple outline-none focus:ring-0 text-ex_normal_purple text-2xl font-bold flex-1 bg-ex_input bg-repeat-x bg-[left_bottom_5px] focus:bg-none"
              type="text"
            />
          </div>
          <div className="flex lg:flex-row lg:space-x-[20px] w-full flex-col sm:space-y-[10px]">
            <p className="md:text-5xl text-3xl font-Miju text-ex_dark_purple">
              Merci de m'appeler au{" "}
            </p>
            <input
              className="border-b-[0.2rem] bg-transparent border-ex_dark_purple outline-none focus:ring-0 text-ex_normal_purple text-2xl font-bold flex-1 bg-ex_input bg-repeat-x bg-[left_bottom_5px] focus:bg-none"
              type="text"
            />
          </div>

          <div className="flex lg:flex-row lg:space-x-[20px] w-full flex-col sm:space-y-[10px]">
            <p className="md:text-5xl text-3xl font-Miju text-ex_dark_purple">
              Ou de menvoyer un mail à{" "}
            </p>
            <input
              className="border-b-[0.2rem] bg-transparent border-ex_dark_purple outline-none focus:ring-0 text-ex_normal_purple text-2xl font-bold flex-1 bg-ex_input bg-repeat-x bg-[left_bottom_5px] focus:bg-none"
              type="email"
            />
          </div>
          <div className="flex">
            <button className="text-white bg-ex_dark_purple rounded-md px-7 py-2">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
