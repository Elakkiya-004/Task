import { headerLogo } from "../assets/images"
import { contact_list } from "../constants"

const FooterContact = () => {
  return (
    <section className="container  mx-auto lg:px-20 md:px-6 max-sm:px-4 font-PJ">
     <div className="mb-12">
            <img src={headerLogo} alt="" className="my-6"/>
            <p className=" text-slate-600 text-base font-normal leading-normal">Introducing the 
            <span className="text-cyan-600 text-base font-bold leading-normal"> UPMONEY </span>
             app, the ultimate tool for managing your credit card on-the-go. With our app,
             you can view your account information, make payments, redeem rewards, and more, all from your smartphone or tablet.</p>
        </div>
    <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
   
{
    contact_list.map((item) =>(
        <div className="mb-12">
        <div className="flex ">
          <div className="shrink-0">
            <img src={item.svgImg} alt="" />
          </div>
          <div className="ml-2 grow">
            <p className="mb-1  text-slate-600 text-base font-normal">{item.name}</p>
            <p className="text-zinc-900 text-base font-medium">
             {item.sub_name}
            </p>
          </div>
        </div>
      </div>
    ))
}
     
    </div>

  </section>

  )
}

export default FooterContact