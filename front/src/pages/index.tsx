// @ts-nocheck
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

  const sectionStyle = 'h-screen snap-center text-slate-800 flex'
  const shapesStyle = 'absolute opacity-20 w-56 transition-all duration-700 ease-in-out'



  useEffect(() => {
    const container = document.querySelector('.shapesContainer')
    const shapes = document.querySelectorAll('.shapesContainer img')
    let i = 0

    const handleMouseMove = (event: any) => {
      container.style.top = -(event.clientY * 0.01) + 'px'
      container.style.left = -(event.clientX * 0.01) + 'px'
    };

    const timer = setInterval(() => {
      // shapes[i].style.opacity = 0.2
      // shapes[i + 1].style.opacity = 0.8

      if (i < shapes.length - 1) {
        shapes[i]["style"].opacity = 0.2
        shapes[i].style.scale = 1
        shapes[i + 1].style.opacity = 0.8
        shapes[i + 1].style.scale = 1.1
        i++
      } else {

        shapes[i].style.opacity = 0.2
        shapes[i].style.scale = 1
        shapes[0].style.opacity = 0.8
        shapes[0].style.scale = 1.1

        i = 0

      }
      // i <= shapes.length - 1 ? i++ : i = 1
    }, 1700)

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  // shapesContainer


  return (
    <div className="relative h-screen overflow-scroll snap-y snap-mandatory">
      <section className={`${sectionStyle}  justify-start items-center flex-col`}>
        <Navbar />

        <section className="flex flex-col items-center justify-around flex-grow gap-4 text-center ">

          {/* <h1 className="text-9xl text-main_blue">Ex nihilo</h1> */}

          <svg className="" viewBox="0 0 522 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356L99.9022 26.8848L100.055 26.8848C100.08 27.0456 100.105 27.1981 100.131 27.3589Z" fill="#3A1772" />
            <path d="M32.1367 98.3584L31.781 98.3584C31.3323 98.3584 30.8919 98.3499 30.4516 98.333C31.0105 98.3499 31.5694 98.3584 32.1367 98.3584Z" fill="#3A1772" />
            <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356L99.9022 26.8848L100.055 26.8848C100.08 27.0456 100.105 27.1981 100.131 27.3589Z" fill="#3A1772" />
            <path d="M30.4516 98.333C30.8919 98.3499 31.3323 98.3584 31.781 98.3584L32.1367 98.3584C31.5694 98.3584 31.0105 98.3499 30.4516 98.333Z" fill="#3A1772" />
            <path d="M137.616 97.0216L122.992 74.1508L116.024 63.2362C123.644 54.794 129.927 45.1411 134.542 34.582C135.618 32.1265 136.608 29.6285 137.489 27.0798C137.523 27.0205 137.54 26.9528 137.557 26.8766L104.694 26.8765C104.719 27.0374 104.745 27.1898 104.77 27.3507C105.126 29.6454 105.321 31.9994 105.321 34.4042C105.321 37.9352 104.914 41.3645 104.144 44.6584L95.6254 31.3305L97.6999 26.885L59.5452 26.885L81.9334 61.9067L87.3441 70.3658C79.8419 75.9967 70.5106 79.3414 60.4004 79.3414C48.8761 79.3414 38.3594 74.9976 30.4084 67.8594C30.3745 67.834 30.3491 67.8002 30.3153 67.7663L56.7425 67.7663C60.4174 60.2979 61.3911 52.8126 59.7484 45.9793C58.2666 39.7895 54.6086 34.3619 49.4688 30.6954C44.202 26.9443 37.699 25.2677 31.162 25.962C30.1205 26.0721 29.079 26.2415 28.0545 26.4786C23.7021 27.427 19.4853 29.4083 15.5479 32.3127C13.9052 33.5235 12.3048 34.8953 10.7807 36.428C3.92197 43.2867 0.145446 52.3977 0.145445 62.0931C0.145445 71.7884 3.92196 80.891 10.7807 87.7412C17.3176 94.2866 25.9121 98.0208 35.1079 98.3426C35.6667 98.3595 36.2256 98.368 36.793 98.368L37.0639 98.368C58.2242 98.368 77.9367 92.1951 94.4992 81.543L101.561 92.5847L99.4866 97.0301L137.633 97.0301L137.616 97.0216ZM14.3624 48.2486C10.8399 42.5076 9.67992 38.3501 11.1787 36.8513C12.2794 35.759 13.7274 35.4118 15.4971 35.8437C15.8697 35.9284 16.2592 36.0554 16.6571 36.2078C18.918 37.1053 21.4582 39.0529 23.9138 41.7032C25.1416 43.0241 26.3524 44.5229 27.4871 46.1571C30.9418 51.1361 33.0672 56.4537 33.1858 60.408C33.2789 63.5325 32.1866 65.7256 29.9427 66.9534C29.8496 67.0127 29.7479 67.055 29.6548 67.1143C28.2407 65.6664 26.8605 64.2184 25.548 62.7704C20.9417 57.6984 17.0636 52.6771 14.354 48.2486L14.3624 48.2486Z" fill="#3A1772" />
            <path d="M132.917 26.8848C132.9 26.9525 132.883 27.0287 132.85 27.088L132.977 26.8848L132.917 26.8848ZM99.9193 26.8848L99.9024 26.8848L99.9362 26.9356C99.9362 26.9356 99.9278 26.9017 99.9193 26.8848Z" fill="#3A1772" />
            <path d="M100.131 27.3589C100.072 27.2235 100.012 27.0795 99.9361 26.9356C99.9361 26.9186 99.9276 26.9017 99.9192 26.8848L100.046 26.8848C100.072 27.0456 100.097 27.1981 100.122 27.3589L100.131 27.3589Z" fill="#3A1772" />
            <path d="M244.408 97.0037L212.663 97.0037L212.663 60.7627C212.663 53.0149 211.8 46.8251 210.089 42.3712C208.396 37.9596 206.287 36.3084 204.814 35.6988C203.324 35.0806 201.766 35.2754 200.656 36.1814L200.656 86.758L205.432 97.0122L168.912 97.0122L173.687 86.758L173.687 37.1552L168.912 26.901L200.656 26.901L200.656 35.3093C205.043 31.1094 209.928 28.1373 214.84 26.6809C219.785 25.2244 224.543 25.343 228.608 27.028C235.61 29.9324 239.633 37.079 239.633 46.6473L239.633 86.758L244.408 97.0122L244.408 97.0037Z" fill="#3A1772" />
            <path d="M253.036 86.733L253.036 45.132L248.261 34.8778L280.006 34.8778L280.006 86.733L284.781 96.9957L248.261 96.9957L253.036 86.733ZM253.595 17.5787C251.436 10.4405 255.467 2.89595 262.605 0.73673C269.743 -1.42249 277.287 2.60807 279.447 9.7462C281.606 16.8843 277.575 24.4205 270.437 26.5881C263.299 28.7474 255.755 24.7168 253.595 17.5787Z" fill="#3A1772" />
            <path d="M364.189 97.0043L332.444 97.0043L332.444 61.9487C332.444 54.2009 331.58 48.0111 329.87 43.5572C328.176 39.1456 326.068 37.4945 324.595 36.8848C323.096 36.2582 321.521 36.4614 320.42 37.3844L320.42 86.7501L325.196 97.0043L288.675 97.0043L293.451 86.7501L293.451 10.4407L288.675 0.18652L320.42 0.186522L320.42 36.5122C324.815 32.2954 329.709 29.3148 334.629 27.8584C339.574 26.402 344.332 26.5205 348.397 28.2056C355.399 31.1099 359.422 38.265 359.422 47.8248L359.422 86.7501L364.197 97.0043L364.189 97.0043Z" fill="#3A1772" />
            <path d="M372.937 86.733L372.937 45.132L368.161 34.8778L399.906 34.8778L399.906 86.733L404.682 96.9957L368.161 96.9957L372.937 86.733ZM373.496 17.5787C371.336 10.4405 375.367 2.89595 382.505 0.73673C389.643 -1.42249 397.188 2.60807 399.347 9.7462C401.506 16.8843 397.476 24.4205 390.338 26.5881C383.199 28.7474 375.655 24.7168 373.496 17.5787Z" fill="#3A1772" />
            <path d="M413.354 86.733L413.354 22.693L409.476 14.3525L413.972 12.261L440.332 -2.08751e-07L440.332 86.7414L445.107 97.0041L408.587 97.0041L413.363 86.7414L413.354 86.733Z" fill="#3A1772" />
            <path d="M449.433 62.0754C449.433 52.38 453.21 43.269 460.06 36.4187C466.91 29.5685 476.021 25.792 485.717 25.792C495.412 25.792 504.515 29.5685 511.373 36.4187C518.223 43.269 522 52.38 522 62.0754C522 71.7707 518.223 80.8733 511.373 87.732C504.523 94.5822 495.412 98.3587 485.717 98.3587C476.021 98.3587 466.91 94.5822 460.06 87.732C453.21 80.8733 449.433 71.7707 449.433 62.0754ZM464.505 47.3927C468.375 53.1083 474.235 59.9923 481.017 66.7748C487.8 73.5573 494.684 79.4253 500.399 83.2865C505.835 86.9614 509.773 88.4602 510.933 87.3001C512.093 86.1401 510.594 82.1943 506.919 76.7581C503.05 71.0425 497.19 64.1584 490.408 57.3759C475.318 42.2867 462.761 34.5813 460.492 36.8506C459.315 38.0276 460.831 41.948 464.505 47.3842L464.505 47.3927Z" fill="#3A1772" />
          </svg>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-main_blue">Nous sommes une agence de</h2>
            <TypeAnimation
              sequence={[
                1000,
                'Design',
                2000,
                'Vêtements',
                2000,
                'Conseils',
                2000
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
              className="h-10 text-4xl font-bold text-main_yellow"
            />

            <h2 className="text-2xl text-main_blue">spécialiste des vêtements professionels qui vous</h2>
            <TypeAnimation
              sequence={[
                'Révèle',
                2000,
                'Habille',
                2000,
                'Accompagne',
                2000
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
              className="h-10 text-4xl font-bold text-main_yellow"
            />
          </div>

          <span className="text-xl text-main_blue" >SCROLL</span>
        </section>

        <section className="absolute top-0 left-0 w-screen h-screen shapesContainer -z-10">
          <img src="static/Shapes/Vector-1.svg" alt="" className={`${shapesStyle} left-[68%] -top-[11%]`} />
          <img src="static/Shapes/Vector-2.svg" alt="" className={`${shapesStyle} left-[2%] -top-[8%]`} />
          <img src="static/Shapes/Vector-3.svg" alt="" className={`${shapesStyle} left-[87%] top-[18%]`} />
          <img src="static/Shapes/Vector-4.svg" alt="" className={`${shapesStyle} left-[1%] top-[67%]`} />
          <img src="static/Shapes/Vector-5.svg" alt="" className={`${shapesStyle} left-[19%] top-[23%]`} />
          <img src="static/Shapes/Vector-6.svg" alt="" className={`${shapesStyle} left-[77%] top-[59%]`} />
          <img src="static/Shapes/Vector-7.svg" alt="" className={`${shapesStyle} left-[44%] top-[71%]`} />

        </section>

      </section >
      <section className={`bg-green-200 ${sectionStyle} items-center justify-center`}>
        Section 2
      </section>
      <section className={`bg-blue-200 ${sectionStyle} items-center justify-center`}>
        Section 3
      </section>
      <section className={`bg-gray-200 ${sectionStyle} items-center justify-center`}>
        Section 4
      </section>
      <section className={`bg-pink-200 ${sectionStyle} items-center justify-center`}>
        Section 5
      </section>
    </div >
  )
}

export default Home