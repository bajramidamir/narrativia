import React from 'react'

const LoginSignup = () => {
  return (
    <div className='md:px-36 px-16 pb-8 pt-8 md:pb-24 shadow-lg text-slate-300  bg-indigo-950'>

        <form>
            <img src="/logo.png" alt="brand-logo" className='w-72 mx-auto' />
            <div className='text-center py-8'>
                <p className='text-lg font-semibold my-4'>
                    Email
                </p>
                <input type="email" className='w-1/2 mb-4 text-black  px-2 py-3' />
                <p className='text-lg font-semibold my-4'>
                    Password
                </p>
                <input type="password" className='w-1/2 mb-4 text-black px-2 py-3' />
                <button className='block mx-auto w-1/2 px-2 py-3 my-4 text-lg bg-indigo-600 hover:bg-indigo-500'>
                    SIGN UP
                </button>
            </div>

            <div className='flex items-center'>
                <hr className='flex-grow'  />
                <p className='mx-4'>OR</p>
                <hr className='flex-grow'  />
            </div>
            
            
            <div className='text-center my-4'>
                <p>
                    Already a user? <a className='underline hover:text-slate-100' href="">LOGIN</a>
                </p>
            </div>
            
        </form>
        
        

    </div>
  )
}

export default LoginSignup