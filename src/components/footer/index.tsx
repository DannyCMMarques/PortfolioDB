import logo_footer from "./../../assets/db_footer.png";
const Footer = () => {
  return (
    <footer className="bg-[#85D4F4] w-full fixed bottom-0 ">
      <div className="flex justify-center items-center h-20">
        <img
          src={logo_footer}
          alt="Logo Footer"
          className="w-56"
        />
      </div>
    </footer>
  );
};

export default Footer;
