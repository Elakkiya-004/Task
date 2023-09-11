import { Button } from "../components";

const Newsletter = () => {
  return (
    <section className="mb-32 text-center lg:text-left">
      <div className="flex flex-wrap justify-center">
        <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-11/12 lg:w-11/12 xl:w-11/12">
          <div className="grid items-center gap-x-12 lg:grid-cols-2  bg-black py-4 px-6 rounded-md">
            <div className="mb-10 lg:mb-0 text-left text-white
text-opacity-80
text-base
font-normal font-PJ">
              <div className=" flex-col justify-center items-start gap-1 inline-flex">
                <div className=" text-base font-medium capitalize">
                  Newsletter
                </div>
                <div className=" text-opacity-80 text-base font-normal">
                  Be the first one to know about discounts, offers and events
                </div>
              </div>
            </div>
            
            <div className="mb-6 flex-row md:mb-0 md:flex xl:pl-32 lg:pl-26 ">
              <div className="w-full  relative flex  max-sm:flex-col rounded-md gap-5 lg:p-2 md:p-2  bg-[#18181B]
               max-sm:bg-black ">
                 <span class="absolute inset-y-0  left-0 flex items-center max-sm:pb-14 pl-3 ">
                 <svg width="16" height="16" className="items-center" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 13.6667H4.66659C2.66659 13.6667 1.33325 12.6667 1.33325 10.3334V5.66671C1.33325 3.33337 2.66659 2.33337 4.66659 2.33337H11.3333C13.3333 2.33337 14.6666 3.33337 14.6666 5.66671V10.3334C14.6666 12.6667 13.3333 13.6667 11.3333 13.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3334 6L9.24674 7.66667C8.56008 8.21333 7.43341 8.21333 6.74674 7.66667L4.66675 6" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </span>
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="sm:flex-1 max-sm:w-full platext-base leading-normal bg-[#18181B] placeholder:text-white pl-7 max-sm:p-4 max-sm:px-10
                   outline-none sm:border-none max-sm:rounded-md"
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                  <button className=" w-full px-4 py-1 rounded-md max-sm:py-2 bg-white text-black">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
