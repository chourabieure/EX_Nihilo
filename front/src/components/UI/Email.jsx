import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from "react";

const baseUrl = `https://exnihilo.fr`

export function Email({
    name,
    phone = "xx xx xx xx xx",
    email = "xxx.xxx@gmail.com",
}) {
    return (
        <Html>
            <Head />
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
                }}>
                <Body Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`${baseUrl}/static/portrait/logo.png`}
                                width="40"
                                height="37"
                                alt="Logo Ex Nihilo"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-ex_dark_purple text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                            Demande de contact
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Bonjour je suis {name},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            J'aimerais être recontacter par mail au 
                            <Link
                                href={`mailto:${email}`}
                                className="text-ex_normal_purple no-underline"
                            >
                                {email}
                            </Link>
                             ou bien par téléphone au 
                            <Link
                                href={`tel:${phone}`}
                                className="text-ex_normal_purple no-underline"
                            >
                                {phone}
                            </Link>.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            En vous remerciant par avance.
                        </Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html >


        // <Tailwind
        //     config={{
        //         theme: {
        //             extend: {
        //                 colors: {
        //                     ex_light_purple: "#C6C2ED",
        //                     ex_normal_purple: "#8D85DA",
        //                     ex_medium_purple: "#5448C8",
        //                     ex_dark_purple: "#3A1772",
        //                     ex_light_yellow: "#FEC806",
        //                     ex_dark_yellow: "#F9AF36",
        //                     ex_red: "#FF6969",
        //                     ex_gray: "#92848C",
        //                 },
        //             },
        //         },
        //     }}
        // >
        //     <section className="flex flex-col text-ex_medium_purple gap-4">
        //         <h1 className="">{name}</h1>
        //         <h2 className="">{phone}</h2>
        //         <h2 className="">{email}</h2>
        //     </section>
        // </Tailwind>
    );
}
