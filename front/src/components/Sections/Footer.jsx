const Footer = () => {

  const navbarItems = [
    {
      id: 1,
      name: "Accueil",
      route: "#main_container",
    },
    {
      id: 2,
      name: "Présentation",
      route: "#qui_sommes_nous",
    },
    {
      id: 3,
      name: "Offre",
      route: "#nos_valeurs",
      offset: 0,
    },
    {
      id: 4,
      name: "Références",
      route: "#companies",
    },
    {
      id: 5,
      name: "Équipe",
      route: "#equipe",
    },
    {
      id: 6,
      name: "FAQ",
      route: "#faq",
    },
  ];

  const scrollIntoView = (route, yOffset = -150) => {
    let e = document.querySelector(route);
    const y = e.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // e.scrollIntoView({
    //   block: "start",
    //   behavior: "smooth",
    //   inline: "start",
    // });
  };

  return (
    <section>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://exnihilo.fr/" className="flex items-center justify-center mb-9 md:mb-0">
              <img src="/static/svg/Logo_complet.svg" className="h-52 mx-5" alt="Exnihilo Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-[30px]">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sections</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                {navbarItems.map((elem) => {
                  return (
                    <li
                      key={elem.id}
                      onClick={() =>
                        scrollIntoView(elem.route, elem.offset ? "" : elem.offset)
                      }
                      className="mb-4 hover:underline"
                    >
                      {elem.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Suviez-nous</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/company/exnihilo-smartworkwear/" target="_blank" className="hover:underline ">Linkedin</a>
                </li>
                <li>
                  <a href="https://instagram.com/exnihilo_smartworkwear?igshid=YmMyMTA2M2Y=" target='_blank' className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contactez-nous</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="tel:+33(0) 556 409 686" className="hover:underline">+33(0) 556 409 686</a>
                </li>
                <li className="mb-4">
                  <a href="mailto:contact@exnihilo.fr" className="hover:underline">contact@exnihilo.fr</a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/place/17+Rue+P%C3%A9nicaud+3330o,+33300+Bordeaux,+France/@44.8556202,-0.5710074,18.74z/data=!4m13!1m7!3m6!1s0xd55287bafb452b7:0xd0f10130a4f6dc39!2s17+Rue+P%C3%A9nicaud+3330o,+33300+Bordeaux,+France!3b1!8m2!3d44.8556446!4d-0.5702508!3m4!1s0xd55287bafb452b7:0xd0f10130a4f6dc39!8m2!3d44.8556446!4d-0.5702508" target='_blank' className="hover:underline">17, Rue Pénicaud 3330O BORDEAUX</a>
                </li>
              </ul>
            </div>
            {/* Section légal */}
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://epure.digital/" target='_blank' className="hover:underline">Épure™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
            <a href="https://www.linkedin.com/company/exnihilo-smartworkwear/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" /></svg>
              <span className="sr-only">Linkedin page</span>
            </a>
            <a href="https://instagram.com/exnihilo_smartworkwear?igshid=YmMyMTA2M2Y=" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
};

export default Footer;
