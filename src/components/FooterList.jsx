import { list } from "../constants";
const FooterList = () => {
  const footer_list = [
    { l1: "About Us" },
    { l1: "Contact" },
    { l1: "Privacy policy" },
    { l1: "Sitemap" },
    { l1: "Terms of Use" },
  ];
  return (
    <div className="flex flex-col items-center text-left font-PJ mb-16">
      <div className="container  mx-auto lg:px-20 md:px-6 max-sm:px-4 font-PJ">
        <div className="grid  max-sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-6">
          {list.map((item) => (
            <div className="mb-6 leading-10">
              <h5 className="mb-2.5 text-zinc-900 text-base font-bold capitalize">
                {item.name}
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[1]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[2]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[3]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[4]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[5]}
                  </a>
                </li>
              </ul>
            </div>
          ))}
          {list.map((item) => (
            <div className="mb-6 leading-10">
              <h5 className="mb-2.5 text-zinc-900 text-base font-bold capitalize">
                {item.name}
              </h5>

              <ul className="mb-0 list-none">
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[1]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[2]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[3]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[4]}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className=" text-slate-600 text-base font-normal capitalize"
                  >
                    {item[5]}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-[90%]">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-6">
            {footer_list.map((item) => (
              <a href="#" className=" text-slate-600 text-base font-normal">
                {item.l1}
              </a>
            ))}
          </div>
          <div className="mb-6 md:mb-0 max-sm:mt-6 max-sm:text-center text-right text-slate-400 text-base font-normal">
            <p>© 2000-2021, All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterList;
