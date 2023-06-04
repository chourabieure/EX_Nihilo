import Link from "next/link";

const Button = ({
    title = "Button",
    bg_color = "bg-ex_light_purple",
    fill_color = "fill-ex_dark_purple",
    text_color = "text-ex_dark_purple",
    font_size = "text-sm",
    icon = false,
    link = "",
    target = "_blank",
    extra = "",
    loading = false,
}) => {
    const scrollIntoView = (route) => {
        let e = document.querySelector(route);
        e.scrollIntoView({
            block: "start",
            behavior: "smooth",
            inline: "start",
        });
    };
    return (
        // <Link href={link} passHref>
        <a
            // target={target}
            // rel="noopener noreferrer"
            className={`${text_color} ${bg_color} ${font_size} ${extra} flex  items-center justify-center gap-2 px-4 py-4 sm:py-2  rounded-lg font-semibold whitespace-nowrap scale-100 hover:scale-105 cursor-pointer transition-all duration-500`}
        >
            {loading && (
                <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                    <path
                        className="fill-slate-100"
                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                    ></path>
                    <path
                        className="fill-ex_dark_purple"
                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                    ></path>
                </svg>
            )}
            {title}

            {
                icon && (
                    <svg
                        className={`h-4 ${fill_color}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                    </svg>
                )
                // <img src="/static/svg/arrow-right.svg" alt="icon du bouton" className="w-8 fill-ex_dark_purple" />
            }
        </a>
        // </Link>
    );
};

export default Button;
