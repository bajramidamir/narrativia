import React from 'react'

const Homepage = () => {
  return (
    <div>

        <nav className='p-6 flex justify-between bg-indigo-950'>
            <div>
                <img src="/logo-no-background.png" className='inline-block align-middle w-48' alt="" />
            </div>
            <div>
                <a href="">
                    <button className='bg-indigo-800 px-2 py-2.5 text-white'>
                        Sign In
                    </button>
                </a>
            </div>
        </nav>

    </div>
  )
}

export default Homepage