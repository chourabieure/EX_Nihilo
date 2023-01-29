import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./UI/Button";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const navbarItems = [
    {
      id: 1,
      name: "Présentation",
      route: "#qui_sommes_nous",
    },
    {
      id: 2,
      name: "Offre",
      route: "#que_faisons_nous",
    },
    // {
    //   id: 3,
    //   name: "Références",
    //   route: "#nos_valeurs",
    // },
    {
      id: 4,
      name: "Équipe",
      route: "#equipe",
    },
    {
      id: 5,
      name: "FAQ",
      route: "#faq",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useEffect(() => {}, []);

  const scrollIntoView = (route) => {
    let e = document.querySelector(route);
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };
  return (
    <>
      <nav className="fixed navbar z-20 top-0 w-full py-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
        {/* Logo */}
        <div className="m-auto max-w-7xl justify-between items-center flex px-8 gap-4">
          <Link href="/">
            <svg
              className=" cursor-pointer h-5 sm:h-6 pr-4 mb-0 sm:mb-2 fill-ex_dark_purple dark:fill-ex_normal_purple"
              viewBox="0 0 522 99"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356L99.9022 26.8848L100.055 26.8848C100.08 27.0456 100.105 27.1981 100.131 27.3589Z" />
              <path d="M32.1367 98.3584L31.781 98.3584C31.3323 98.3584 30.8919 98.3499 30.4516 98.333C31.0105 98.3499 31.5694 98.3584 32.1367 98.3584Z" />
              <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356L99.9022 26.8848L100.055 26.8848C100.08 27.0456 100.105 27.1981 100.131 27.3589Z" />
              <path d="M30.4516 98.333C30.8919 98.3499 31.3323 98.3584 31.781 98.3584L32.1367 98.3584C31.5694 98.3584 31.0105 98.3499 30.4516 98.333Z" />
              <path d="M137.616 97.0216L122.992 74.1508L116.024 63.2362C123.644 54.794 129.927 45.1411 134.542 34.582C135.618 32.1265 136.608 29.6285 137.489 27.0798C137.523 27.0205 137.54 26.9528 137.557 26.8766L104.694 26.8765C104.719 27.0374 104.745 27.1898 104.77 27.3507C105.126 29.6454 105.321 31.9994 105.321 34.4042C105.321 37.9352 104.914 41.3645 104.144 44.6584L95.6254 31.3305L97.6999 26.885L59.5452 26.885L81.9334 61.9067L87.3441 70.3658C79.8419 75.9967 70.5106 79.3414 60.4004 79.3414C48.8761 79.3414 38.3594 74.9976 30.4084 67.8594C30.3745 67.834 30.3491 67.8002 30.3153 67.7663L56.7425 67.7663C60.4174 60.2979 61.3911 52.8126 59.7484 45.9793C58.2666 39.7895 54.6086 34.3619 49.4688 30.6954C44.202 26.9443 37.699 25.2677 31.162 25.962C30.1205 26.0721 29.079 26.2415 28.0545 26.4786C23.7021 27.427 19.4853 29.4083 15.5479 32.3127C13.9052 33.5235 12.3048 34.8953 10.7807 36.428C3.92197 43.2867 0.145446 52.3977 0.145445 62.0931C0.145445 71.7884 3.92196 80.891 10.7807 87.7412C17.3176 94.2866 25.9121 98.0208 35.1079 98.3426C35.6667 98.3595 36.2256 98.368 36.793 98.368L37.0639 98.368C58.2242 98.368 77.9367 92.1951 94.4992 81.543L101.561 92.5847L99.4866 97.0301L137.633 97.0301L137.616 97.0216ZM14.3624 48.2486C10.8399 42.5076 9.67992 38.3501 11.1787 36.8513C12.2794 35.759 13.7274 35.4118 15.4971 35.8437C15.8697 35.9284 16.2592 36.0554 16.6571 36.2078C18.918 37.1053 21.4582 39.0529 23.9138 41.7032C25.1416 43.0241 26.3524 44.5229 27.4871 46.1571C30.9418 51.1361 33.0672 56.4537 33.1858 60.408C33.2789 63.5325 32.1866 65.7256 29.9427 66.9534C29.8496 67.0127 29.7479 67.055 29.6548 67.1143C28.2407 65.6664 26.8605 64.2184 25.548 62.7704C20.9417 57.6984 17.0636 52.6771 14.354 48.2486L14.3624 48.2486Z" />
              <path d="M132.917 26.8848C132.9 26.9525 132.883 27.0287 132.85 27.088L132.977 26.8848L132.917 26.8848ZM99.9193 26.8848L99.9024 26.8848L99.9362 26.9356C99.9362 26.9356 99.9278 26.9017 99.9193 26.8848Z" />
              <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356C99.9361 26.9186 99.9276 26.9017 99.9192 26.8848L100.046 26.8848C100.072 27.0456 100.097 27.1981 100.122 27.3589L100.131 27.3589Z" />
              <path d="M244.408 97.0037L212.663 97.0037L212.663 60.7627C212.663 53.0149 211.8 46.8251 210.089 42.3712C208.396 37.9596 206.287 36.3084 204.814 35.6988C203.324 35.0806 201.766 35.2754 200.656 36.1814L200.656 86.758L205.432 97.0122L168.912 97.0122L173.687 86.758L173.687 37.1552L168.912 26.901L200.656 26.901L200.656 35.3093C205.043 31.1094 209.928 28.1373 214.84 26.6809C219.785 25.2244 224.543 25.343 228.608 27.028C235.61 29.9324 239.633 37.079 239.633 46.6473L239.633 86.758L244.408 97.0122L244.408 97.0037Z" />
              <path d="M253.036 86.733L253.036 45.132L248.261 34.8778L280.006 34.8778L280.006 86.733L284.781 96.9957L248.261 96.9957L253.036 86.733ZM253.595 17.5787C251.436 10.4405 255.467 2.89595 262.605 0.73673C269.743 -1.42249 277.287 2.60807 279.447 9.7462C281.606 16.8843 277.575 24.4205 270.437 26.5881C263.299 28.7474 255.755 24.7168 253.595 17.5787Z" />
              <path d="M364.189 97.0043L332.444 97.0043L332.444 61.9487C332.444 54.2009 331.58 48.0111 329.87 43.5572C328.176 39.1456 326.068 37.4945 324.595 36.8848C323.096 36.2582 321.521 36.4614 320.42 37.3844L320.42 86.7501L325.196 97.0043L288.675 97.0043L293.451 86.7501L293.451 10.4407L288.675 0.18652L320.42 0.186522L320.42 36.5122C324.815 32.2954 329.709 29.3148 334.629 27.8584C339.574 26.402 344.332 26.5205 348.397 28.2056C355.399 31.1099 359.422 38.265 359.422 47.8248L359.422 86.7501L364.197 97.0043L364.189 97.0043Z" />
              <path d="M372.937 86.733L372.937 45.132L368.161 34.8778L399.906 34.8778L399.906 86.733L404.682 96.9957L368.161 96.9957L372.937 86.733ZM373.496 17.5787C371.336 10.4405 375.367 2.89595 382.505 0.73673C389.643 -1.42249 397.188 2.60807 399.347 9.7462C401.506 16.8843 397.476 24.4205 390.338 26.5881C383.199 28.7474 375.655 24.7168 373.496 17.5787Z" />
              <path d="M413.354 86.733L413.354 22.693L409.476 14.3525L413.972 12.261L440.332 -2.08751e-07L440.332 86.7414L445.107 97.0041L408.587 97.0041L413.363 86.7414L413.354 86.733Z" />
              <path d="M449.433 62.0754C449.433 52.38 453.21 43.269 460.06 36.4187C466.91 29.5685 476.021 25.792 485.717 25.792C495.412 25.792 504.515 29.5685 511.373 36.4187C518.223 43.269 522 52.38 522 62.0754C522 71.7707 518.223 80.8733 511.373 87.732C504.523 94.5822 495.412 98.3587 485.717 98.3587C476.021 98.3587 466.91 94.5822 460.06 87.732C453.21 80.8733 449.433 71.7707 449.433 62.0754ZM464.505 47.3927C468.375 53.1083 474.235 59.9923 481.017 66.7748C487.8 73.5573 494.684 79.4253 500.399 83.2865C505.835 86.9614 509.773 88.4602 510.933 87.3001C512.093 86.1401 510.594 82.1943 506.919 76.7581C503.05 71.0425 497.19 64.1584 490.408 57.3759C475.318 42.2867 462.761 34.5813 460.492 36.8506C459.315 38.0276 460.831 41.948 464.505 47.3842L464.505 47.3927Z" />
            </svg>
          </Link>
          {router.pathname == "/contact" ? (
            <ul className="flex items-center gap-4 flex-grow">
              <Link href="/">
                <li
                  onClick={() => setIsActive(false)}
                  className=" cursor-pointer hidden min-[1000px]:block p-4  text-ex_dark_purple dark:text-ex_light_purple  font-medium text-sm hover:text-ex_dark_yellow transition-all"
                >
                  Accueil
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="flex items-center gap-4 flex-grow">
              {navbarItems.map((elem) => {
                return (
                  <li
                    key={elem.id}
                    onClick={() => scrollIntoView(elem.route)}
                    className=" cursor-pointer hidden min-[1000px]:block p-4  text-ex_dark_purple dark:text-ex_light_purple  font-medium text-sm hover:text-ex_dark_yellow transition-all"
                  >
                    {elem.name}
                  </li>
                );
              })}
            </ul>
          )}

          <ul className="hidden min-[1000px]:flex gap-4 items-center ">
            <li className={`${router.pathname == "/contact" ? "hidden" : ""}`}>
              <Button title="Contactez-nous" link="/contact" target="_self" />
            </li>
            <li
              className="bg-ex_dark_purple dark:bg-ex_dark_yellow rounded-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <svg
                  className="w-8 p-1 fill-slate-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              ) : (
                <svg
                  className="w-8 p-1 fill-slate-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </li>
          </ul>
          <svg
            onClick={() => setIsActive(!isActive)}
            className="block  min-[1000px]:hidden h-6  stroke-[3px]  stroke-ex_dark_purple dark:stroke-ex_light_purple fill-none"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.84615" cy="4.84615" r="3.34615" />
            <circle cx="18.0005" cy="4.84615" r="3.34615" />
            <path d="M34.4999 4.84615C34.4999 6.69418 33.0018 8.19231 31.1538 8.19231C29.3057 8.19231 27.8076 6.69418 27.8076 4.84615C27.8076 2.99812 29.3057 1.5 31.1538 1.5C33.0018 1.5 34.4999 2.99812 34.4999 4.84615Z" />
            <path d="M34.4999 18C34.4999 19.848 33.0018 21.3461 31.1538 21.3461C29.3057 21.3461 27.8076 19.848 27.8076 18C27.8076 16.1519 29.3057 14.6538 31.1538 14.6538C33.0018 14.6538 34.4999 16.1519 34.4999 18Z" />
            <circle cx="18.0005" cy="18" r="3.34615" />
            <circle cx="4.84615" cy="18" r="3.34615" />
            <path d="M8.19231 31.1538C8.19231 33.0018 6.69418 34.4999 4.84615 34.4999C2.99812 34.4999 1.5 33.0018 1.5 31.1538C1.5 29.3057 2.99812 27.8076 4.84615 27.8076C6.69418 27.8076 8.19231 29.3057 8.19231 31.1538Z" />
            <path d="M21.3466 31.1538C21.3466 33.0018 19.8485 34.4999 18.0005 34.4999C16.1524 34.4999 14.6543 33.0018 14.6543 31.1538C14.6543 29.3057 16.1524 27.8076 18.0005 27.8076C19.8485 27.8076 21.3466 29.3057 21.3466 31.1538Z" />
            <circle cx="31.1538" cy="31.1538" r="3.34615" />
          </svg>
          <div
            className="block  min-[1000px]:hidden bg-ex_dark_purple dark:bg-ex_dark_yellow rounded-lg"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <svg
                className="w-8 p-1 fill-slate-900 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            ) : (
              <svg
                className="w-8 p-1 fill-slate-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            )}
          </div>
        </div>
        {/* Burger menu */}
        <div
          className={`${
            isActive ? "flex" : "hidden "
          } px-4 h-screen w-screen top-0 left-1/2`}
        >
          {router.pathname == "/contact" ? (
            <ul className={`flex w-full flex-col gap-4 pt-8`}>
              <Link href="/">
                <li
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  className=" cursor-pointer p-4  text-ex_dark_purple dark:text-ex_light_purple font-medium text-2xl hover:text-ex_dark_yellow transition-all"
                >
                  Accueil
                </li>
              </Link>
            </ul>
          ) : (
            <ul className={`flex w-full flex-col gap-4 pt-8`}>
              {navbarItems.map((elem) => {
                return (
                  <li
                    onClick={() => {
                      setIsActive(!isActive);
                      scrollIntoView(elem.route);
                    }}
                    key={elem.id}
                    className=" cursor-pointer p-4  text-ex_dark_purple dark:text-ex_light_purple font-medium text-2xl hover:text-ex_dark_yellow transition-all"
                  >
                    {elem.name}
                  </li>
                );
              })}

              <li className="w-full pt-4" onClick={() => setIsActive(false)}>
                <Button title="Contactez-nous" link="/contact" target="_self" />
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
