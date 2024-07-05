import { useEffect, useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

export default function Hero() {
  const [imageUrl, setImageUrl] = useState("/shoe.png");

  useEffect(() => {
    setImageUrl(imageUrl);
  }, [imageUrl]);

  return (
    <div>
      <div
        id="home"
        className="container flex flex-col justify-center w-full min-h-screen mx-auto xl:flex-row gap-y-10"
      >
        <section className="relative z-10 flex flex-col items-start justify-center px-8 xl:w-2/5 pt-28">
          <p className="text-xl text-[#ff6452]">Our Summer Collections</p>
          <h1 className="mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] leaading-[106px] max-sm:leading-[82px] font-bold">
            <span className="relative z-10 pr-10 bg-white lg:text-8xl font-palanquin xl:whitespace-nowrap">
              The New Arrival
            </span>{" "}
            <br />
            <span className="text-[#ff6452] inline-block mt-3">Nike</span>Shoes
          </h1>
          <p className="text-[#6D6D6D] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button className="flex justify-center items-center gap-2 px-7 py-4 border-none rounded-full bg-[#ff6452] text-white hoverBtn">
            Shop Now
            <HiArrowCircleRight className="ml-2 text-2xl rounded-full" />
          </button>
          <div className="flex flex-wrap items-start justify-start w-full gap-10 mt-20 lg:gap-15">
            <div>
              <p className="text-5xl font-bold text-black font-palanquin">
                1k+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D]">Brands</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-black font-palanquin">
                500+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D]">shops</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-black font-palanquin">
                250k+
              </p>
              <p className="leading-7 font-montserrat text-[#6D6D6D]">
                Customers
              </p>
            </div>
          </div>
        </section>
        <section>
          <img src={imageUrl} alt="" />
          <div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
