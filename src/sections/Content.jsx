  import dashboard from '../assets/images/dashboard.png'
 const Content = () => {
  return (
  <section className="container mx-auto text-center">
    <div className="text-center text-PJ lg:px-48 md:px-20 max-sm:px-px">
    <span className="text-zinc-900 text-[42px] max-sm:text-3xl font-semibold leading-[62px] max-sm:leading-[48px]">With </span>
    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#62b8e6] via-[#93bdd4] to-[#f61c11]
     text-[42px] max-sm:text-3xl font-semibold leading-[62px] max-sm:leading-[48px]">UPMONEY </span>
    <span className="text-zinc-900 text-[42px] max-sm:text-3xl font-semibold leading-[62px] max-sm:leading-[48px]"> 
    app, you'll never miss a beat when it comes to managing your credit card</span></div>

    <div className="mb-10  flex flex-wrap justify-center">
        <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat"
          data-te-ripple-init data-te-ripple-color="light">
          <img src={dashboard}  className="h-auto max-w-full lrounded-lg shadow-black/30"
 />
    
      </div> 
    </div>
   
  </section>
  
  )
}

export default Content