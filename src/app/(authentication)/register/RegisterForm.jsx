import Image from 'next/image';
import login from '../../../../public/assets/images/login/login.svg'
import Link from 'next/link';

function RegisterForm() {
    return (
        <div className='lg:flex justify-center mx-10 mt-10 space-y-5 gap-16 items-center'>
       <div className='flex justify-center'>

           <Image src={login} width={460} alt='loginImage' />
       </div>
       {/* form */}
       <div className=' border-2  lg:w-4/12'>
  
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full w-full">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full ">
          <form action="#" method="POST" className="space-y-6">
            {/* name */}
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
               Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="name"
                  type="text"
                  required
                  autoComplete="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 border-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
{/* email */}
<div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 border-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Confirm Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 border-2 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-indigo-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>

      {/* other sign up */}
<div className='space-y-3'>
<p className='text-center'>Or sign up with</p>
      <div className='flex justify-center  gap-4'>
     <button>
     <Image src={'https://img.icons8.com/?size=48&id=aP2AQnuFNo85&format=gif'} width={55}  className='p-2 shadow-2xl bg-[#F5F5F8] rounded-full'  height={55} alt='facebook logo'/>
     </button>
     <button>
     <Image src={'https://img.icons8.com/?size=48&id=TpMqKvVFD9pP&format=gif'}  width={55}  className='p-2 shadow-2xl bg-[#F5F5F8] rounded-full' height={55} alt='facebook logo'/>
     </button>
     <button>
     <Image src={'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png'} width={55} className='animate-spin p-2 shadow-2xl bg-[#F5F5F8] rounded-full'  height={55} alt='facebook logo'/>
     </button>
      </div>
     <p className='text-center pb-10  text-[#737373]'> All Ready have an account? <span className='text-red-500'><Link href={'/login'}>Login</Link></span></p>
</div>
       </div>
        </div>
    );
}

export default RegisterForm;