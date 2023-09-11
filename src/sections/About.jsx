import { About_image1 } from "../assets/images";
import { About_image2 } from "../assets/images";
import { Tick } from "../assets/icons";
const About = () => {
  return (
    <div className="container md:pt-36 mx-auto md:px-6">
      <section className="mb-32 text-center md:text-left lg:px-14 max-sm:px-6  font-PJ ">
        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12  text-left">
          <div className="max-sm:order-1 xl:px-20 lg:pr-10 mb-20">
            <div
              className="mb-3 flex  text-transparent bg-clip-text
             bg-gradient-to-br from-[#79c8f3] via-[#ff44ec] to-[#ff675e]
             text-base font-semibold leading-7  md:justify-start text-left"
            >
              Improve your worklife
            </div>
            <h3 className="mb-3 text-zinc-900 text-[42px] font-bold leading-[48px] max-sm:text-3xl">
              Track all your payments in one place
            </h3>

            <p className="text-zinc-600 text-lg font-normal max-sm:text-sm md:text-base leading-[30px] max-sm:leading-[30px]">
              Our app provides real-time access to your account information, so
              you can stay on top of your spending and keep track of your
              rewards.
            </p>
          </div>
          <div className="mb-6 md:mb-0 max-sm:order-2">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat ">
              <img src={About_image1} className="w-full" alt="Louvre" />
            </div>
          </div>
        </div>

        <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12  text-left">
          <div className="mb-6 max-sm:order-2 md:mb-0">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img src={About_image2} className="w-full" alt="Louvre" />
            </div>
          </div>
          <div className=" max-sm:order-1  xl:pr-20 lg:pr-10">
            <div
              className="mb-3 flex  text-transparent bg-clip-text
             bg-gradient-to-br from-[#79c8f3] via-[#ff44ec] to-[#ff675e]
             text-base font-semibold leading-7  md:justify-start text-left"
            >
              Improve your worklife
            </div>
            <h3 className="mb-3 text-zinc-900 text-[42px] font-bold leading-[48px] md:text-3xl max-sm:text-3xl">
              Redeeming rewards has never been easier
            </h3>

            <div className="grid grid-cols-2 gap-2 my-6 max-sm:grid-cols-1">
              <div className="flex items-start ">
                <img src={Tick} />
                <div className="px-6">
                  <span className="text-zinc-600 text-lg font-normal max-sm:text-sm md:text-base  leading-[30px] max-sm:leading-[30px]">You can also receive alerts and notification</span>
                </div>
              </div>
              <div className="flex items-start">
              <img src={Tick}/>
                <div className="px-6">
                  <span className="text-zinc-600 text-lg font-normal max-sm:text-sm md:text-base  leading-[30px] max-sm:leading-[30px]">Robust security features, multi-factor authentication and secure data storage</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
