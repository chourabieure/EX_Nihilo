import { useEffect } from "react";
import Title from "@/components/Title";

const Section5 = () => {
  const sectionStyle =
    "h-screen snap-center text-slate-800 flex text-slate-200";

  useEffect(() => {
    const root = document.documentElement;

    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );

    const marqueeContent1 = document.querySelector(".marquee1");
    const marqueeContent2 = document.querySelector(".marquee2");
    const marqueeContent3 = document.querySelector(".marquee3");

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent1.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent1.appendChild(marqueeContent1.children[i].cloneNode(true));
      marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
      marqueeContent3.appendChild(marqueeContent3.children[i].cloneNode(true));
    }
  }, []);
  return (
    <section
      className={` ${sectionStyle} relative flex-col gap-8 items-center justify-start  w-full max-w-5xl m-auto px-8 pt-36 `}
    >
      <Title
        title={'Ils nous ont <br class="block sm:hidden" />fait confiance'}
        center={true}
      />
      <div className="h-[0.1rem] bg-ex_normal_purple w-32 sm:block hidden" />

      {[...Array(3)].map((elem_container, index_container) => {
        return (
          <div key={index_container} className="marquee">
            <ul className={`marquee-content marquee${index_container + 1}`}>
              {[...Array(16)].map((elem, index) => {
                return (
                  <li
                    className="mx-4 h-24 p-2 bg-ex_normal_purple rounded-lg"
                    key={index}
                  >
                    <img
                      className="h-full"
                      src={`/static/images/companies/company_${index + 1}.png`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* <div className="marquee">
        <ul className="marquee-content  marquee2">
          {[...Array(16)].map((elem, index) => {
            return (
              <li
                className="mx-4  h-16 p-2 bg-ex_normal_purple rounded-lg"
                key={index}
              >
                <img
                  className="h-full"
                  src={`/static/images/companies/company_${index + 1}.png`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="marquee">
        <ul className="marquee-content marquee3">
          {[...Array(16)].map((elem, index) => {
            return (
              <li
                className="mx-4  h-16 p-2 bg-ex_normal_purple rounded-lg"
                key={index}
              >
                <img
                  className="h-full"
                  src={`/static/images/companies/company_${index + 1}.png`}
                />
              </li>
            );
          })}
        </ul>
      </div> */}
    </section>
  );
};

export default Section5;
