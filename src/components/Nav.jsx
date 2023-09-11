import { headerLogo } from "../assets/images"
import { nav_links } from "../constants/index"
import {Button} from "./index"
import { hamburger } from "../assets/icons"

export const Nav = () => {
  return (
    <header className='px-14 py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href='/'>
        <img
          src={headerLogo}
          alt='logo'
          width={120}
          height={40}
          className='m-0 w-[120px] h-[40px]'
        />
      </a>
      <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {nav_links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='font-PJ leading-normal text-[16px] text-slate-gray'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex  justify-center items-center gap-10 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
        <a href='/'   className='font-PJ leading-normal text-[16px] text-slate-gray '>Sign in</a>
        <Button label='Create an account'/>
      </div>
      <div className='hidden max-lg:block'>
        <img src={hamburger} alt='hamburger icon' width={25} height={25} />
      </div>
    </nav>
  </header>
  )
}
