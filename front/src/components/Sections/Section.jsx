import Title from "@/components/UI/Title";

const Section = ({ title = "Section", children, section_id, extra_class }) => {
  return (
    <section
      id={section_id}
      className={` flex flex-col relative gap-8  max-w-5xl px-8 m-auto ${extra_class} `}
    >
      <Title title={title} />
      {children}
    </section>
  );
};

export default Section;
