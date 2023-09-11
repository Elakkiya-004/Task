import { Button } from "../components";
import { Banner } from "../assets/images";
const Hero = () => {
  const list = [
    {
      bigFnt: 5000,
      smlFnt: "Cards Delivered",
    },
    {
      bigFnt: "$1M+",
      smlFnt: "Transaction Completed",
    },
    {
      bigFnt: "230+",
      smlFnt: "Happy customers",
    },
  ];
  return (
    <section
      id="home"
      className="w-full px-14 xl:pt-16 lg:pt-36 pt-16 md:px-6 max-sm:px-4 flex xl:flex-row flex-col justify-center gap-10 max-container"
    >
      <div className="text-center md:px-6 max-sm:px-0 lg:text-left">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-[-40px]">
              <h1
                className="mb-6 lg:text-5xl font-PJ text-zinc-900 font-extrabold
                text-left lg:leading-[60px] tracking-tight
                  md:text-4xl max-sm:text-[44px] md:leading-[50px] max-sm:leading-[60px]"
              >
                Empower Your Purchasing Power with Our Credit Cards
              </h1>
              <p className="text-zinc-600 text-lg text-left font-normal leading-[30px] mb-7">
                With a wide range of credit cards to choose from, you're sure to
                find the one that fits your lifestyle. From travel rewards to
                cash back, there's something for everyone.
              </p>
              <div className="w-full flex items-center max-sm:flex-col rounded-md gap-5 lg:p-1.5 md:p-0.5  sm:border border-zinc-400  sm:border-slate-gray">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="sm:flex-1 max-sm:w-full text-base leading-normal  placeholder:text-zinc-900 pl-5 max-sm:p-5
                   outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-md border-zinc-400 "
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                  <Button label="Get free card" fullWidth />
                </div>
              </div>
              <div className="grid xl:grid-cols-3 grid-cols-2 gap-8 sm:gap-4 py-10 text-left font-PJ">
                {/* <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"> */}
                {list.map((item) => (
                  <div className="flex gap-3 items-center">
                    <p className=" text-4xl font-palanquin font-bold">
                      {item.bigFnt}
                    </p>
                    <p className="leading-7 font-montserrat text-slate-gray">
                      {item.smlFnt}
                    </p>
                  </div>
                ))}

                {/* </div> */}
              </div>
            </div>

            <div className="mb-12 lg:mb-0 ">
              <div className=" relative w-full overflow-hidden">
                <img src={Banner} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
