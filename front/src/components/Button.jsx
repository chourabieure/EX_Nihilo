const Button = ({
  title = "Button",
  bg_color = "bg-ex_light_purple",
  fill_color = "fill-ex_dark_purple",
  text_color = "text-ex_dark_purple",
  font_size = "text-md",
  icon = false,
  link = "#",
  target = "_blank",
}) => {
  return (
    <a
      href={link}
      target={target}
      className={`${text_color} ${bg_color} ${font_size} flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold whitespace-nowrap scale-100 hover:scale-105 cursor-pointer transition-all duration-500`}
    >
      {title}
      {
        icon && (
          <svg
            className={`w-8 ${fill_color}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
          </svg>
        )
        // <img src="/static/svg/arrow-right.svg" alt="icon du bouton" className="w-8 fill-ex_dark_purple" />
      }
    </a>
  );
};

export default Button;
