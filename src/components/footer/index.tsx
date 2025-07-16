import logo_footer from "./../../assets/db_footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#85D4F4] shadow-md w-full py-0 sm:py-0">
      <div className="flex justify-center items-center">
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
