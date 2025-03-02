import Link from "next/link"
import logo from "../../../public/Group 2 (1).svg"
import Image from "next/image"

export default function Navbar (){
    const navMenu=()=>{
        return(
            <>
            <li>
                <Link href={'/'} >Home</Link>
                </li>
    <li>
        <Link href={'/about'}>About</Link>
        </li>
    <li>
        <Link href={'/service'}>Service</Link>
        </li>
    <li>
        <Link href={'/blog'}>Blog</Link>
        </li>
    <li>
        <Link href={'/contact'}>Contact</Link>
        </li>
    <li>
        <Link href={'/register'}>registter</Link>
        </li>
        </>
        )
    }
    return(
        <div className="navbar px-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navMenu()}
            </ul>
          </div>
          <a className=" text-xl"> 
        <Image className="w-24 h-12"  alt="logo" src={logo}/>
             </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal *:text-black px-1">
          {navMenu()}
          </ul>
        </div>
        <div className="navbar-end gap-2">
       <Link href={'/register'}>Register</Link>
          <a className="btn">Appointment</a>
        </div>
      </div>
    )
}