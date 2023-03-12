import Title from "@/components/UI/Title";

const Section = ({ title = "Section", children, section_id, center }) => {
  let extra_class = "";
  if (center) {
    extra_class = "items-center";
  }

  return (
    <section
      id={section_id}
      className={` flex flex-col relative gap-8  max-w-5xl px-8 m-auto ${extra_class} `}
    >
      <Title title={title} center={center} />
      {children}
    </section>
  );
};

export default Section;
