import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="w-full fixed">
      <div className="flex justify-around items-center">
        <div className="flex gap-24">
          <img src={logo} alt="logo wao" />
          <div className="flex gap-24 items-center">
            <a href="#a-propos">A Propos</a>
            <a href="#langue-waama">La Langue Waama</a>
            <a href="#galerie">Galerie</a>
          </div>
        </div>
        <button className="rounded-lg py-2 px-8">
          <span className="font-bold text-base leading-8 text-[#2b2b2b]">
            Contactez-Nous
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
