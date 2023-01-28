const Title = ({ title, center = false }) => {
  return (
    <>
      {!center ? (
        <div className="relative text-ex_dark_purple">
          <h2 className="font-Miju text-5xl pl-0 sm:pl-8 lg:pl-0">{title}</h2>
          <h3 className="font-Miju text-7xl absolute bottom-0 left-1/2  sm:left-0 lg:-left-8 -translate-x-1/2 sm:translate-x-0 whitespace-nowrap opacity-10">
            {title}
          </h3>
        </div>
      ) : (
        <div className="relative text-ex_dark_purple">
          <h2
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-center text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-8 whitespace-nowrap"
          ></h2>
          <h3
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-Miju text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-10"
          ></h3>
        </div>
      )}
    </>
  );
};
export default Title;
