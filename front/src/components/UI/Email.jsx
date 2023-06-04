import * as React from "react";

import { Tailwind } from "@react-email/tailwind";

export function Email({
    name,
    phone = "xx xx xx xx xx",
    email = "xxx.xxx@gmail.com",
}) {
    return (
        <Tailwind
            config={{
                theme: {
                    extend: {
                        colors: {
                            ex_light_purple: "#C6C2ED",
                            ex_normal_purple: "#8D85DA",
                            ex_medium_purple: "#5448C8",
                            ex_dark_purple: "#3A1772",
                            ex_light_yellow: "#FEC806",
                            ex_dark_yellow: "#F9AF36",
                            ex_red: "#FF6969",
                            ex_gray: "#92848C",
                        },
                    },
                },
            }}
        >
            <section className="flex flex-col text-ex_medium_purple gap-4">
                <h1 className="">{name}</h1>
                <h2 className="">{phone}</h2>
                <h2 className="">{email}</h2>
            </section>
        </Tailwind>
    );
}
