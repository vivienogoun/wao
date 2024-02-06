import heroImage from "../../assets/images/hero-image.png";
import heroImage1 from "../../assets/images/hero-image1.png";
import heroImage2 from "../../assets/images/hero-image2.png";
import heroImage3 from "../../assets/images/hero-image3.png";

function Hero() {
  return (
    <div className="bg-[#f1f3f3] relative flex justify-around items-center pb-32">
      <div className="flex flex-col items-start">
        <span className="font-medium text-[64px] text-[#384652] uppercase">
          Découvrez les
        </span>
        <span className="font-black text-[200px] leading-[200px] text-center uppercase">
          Wao
        </span>
        <span className="font-light text-2xl leading-[53px] tracking-[4%] text-[#384652] uppercase">
          Un peuple fascinant d'Afrique de l'Ouest
        </span>
        <button className="rounded-[93px] border-[5px] py-4 px-16 w-fit border-[#fff61b] mt-8">
          <span className="text-lg text-[#545454]">Apprendre plus sur eux</span>
        </button>
      </div>
      <div className="rounded-[62px] w-1/2">
        <img src={heroImage} alt="hero image" />
        <div className="flex gap-2">
          <Ellipse active />
          <Ellipse />
          <Ellipse />
          <Ellipse />
          <Ellipse />
        </div>
      </div>
      <div className="flex gap-16 absolute bottom-0 left-0">
        <img src={heroImage1} alt="" className="w-[227px] h-[250px]" />
        <img src={heroImage2} alt="" className="w-[227px] h-[250px]" />
        <img src={heroImage3} alt="" className="w-[227px] h-[250px]" />
      </div>
    </div>
  );
}

interface EllipseProps {
  active?: boolean;
}

function Ellipse({ active }: EllipseProps) {
  return <div className={`w-3 h-3 bg-white ${!active && "opacity-50"}`}></div>;
}

export default Hero;
