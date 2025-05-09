import logo from "../../assets/imgs/chaicode-white.png";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="chaicode" className="h-7 md:h-8 object-contain" />
    </a>
  );
};

export default Logo;
