import React from 'react'


function Login({ setOpen }) {
    
    const handleSubmit =(e)=>{
        e.preventDefault();
    }

    return (
        <div className='w-screen h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center'>

            <div className=" w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight ml-16 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-login-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-login-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium text-login-600 hover:underline dark:text-login-500">Forgot password?</a>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="/signUp" className="font-medium text-login-600 hover:underline dark:text-login-500 ">Sign up</a>
                                </p>
                            </div>
                            <div className="flex justify-end gap-5">
                                <button type="submit" className=" text-white bg-login-600 hover:bg-login-700 focus:ring-4 focus:outline-none focus:ring-login-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-login-600 dark:hover:bg-login-700 dark:focus:ring-login-800">
                                    Sign in
                                </button>
                                <button  onClick={() => setOpen(false) } className=" text-white bg-login-600 hover:bg-login-700 focus:ring-4 focus:outline-none focus:ring-login-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-login-600 dark:hover:bg-login-700 dark:focus:ring-login-800">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
