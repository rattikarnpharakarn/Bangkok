'use client';

import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import axios from 'axios';


type UserSubmitForm = {
  username: string;
  password: string;
};


const Login = (props: any) => {
  const [message, setMessage] = useState<boolean>();
  const [data, setData] = useState<any>();
  const pathname = usePathname();
  const router = useRouter();

  const phoneRegExp = /^(0[6,8,9]{1,2}[0-9]{3,10})$/
  const nameRegexEn = /^[A-za-z0-9]+$/;


  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
  });

  const [user, setUserName] = useState<any>(sessionStorage.getItem("user"));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = async (data: UserSubmitForm) => {
    console.log(data, 'data')
    try{
      const response = await axios.post('api/login', {
        username: data.username,
        password: data.password
      })
      .then(function (res:any) {
        console.log(response);
      })
      .catch(function (res:any) {

      });
    // your logic
    }catch(err){
      console.log(err)
    }
    // if ((users?.username === data.username) && (users?.password === data.password)) {
    //   setMessage(true)
    //   setTimeout(() => {
    //     if (pathname === '/pages/register') {
    //       router.push('/pages/');
    //     } else {
    //       location.reload()
    //     }
    //   }, 1000);
    //   sessionStorage.setItem('login', 'login')
    // } else if ((users?.username != data.username.toString()) || (users?.password != data.password.toString())) {
    //   setMessage(false)

    // }
    // else {
    //   setMessage(false)
    //   setData(undefined);
    // }
  };




  return (
    <>
      <div id="authentication-modal" aria-hidden="true" className="
      justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
      ">
        <div className="relative w-full max-w-md max-h-full">
          {message &&
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 bg-white outline-none focus:outline-none ">
                  <div id="alert-additional-content-3" className="p-4 mb-4 text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                    <div className="flex items-center mb-10">
                      <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                      <span className="sr-only">Info</span>
                      <h3 className="text-lg font-medium">Login success 🥳</h3>
                    </div>
                    <div className="flex">
                      <button type="button"
                        className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        <svg aria-hidden="true" className="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" onClick={() => setMessage(false)}></path></svg>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal" onClick={() => props.onClose(true)}>
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8 z-20 shadow-2xl">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in 😉</h3>
              <form className="space-y-6 invalid-feedback" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input type="text"
                    id="username" placeholder="Username"
                    {...register('username')}
                    className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input type="password" id="password" placeholder="••••••••"
                    {...register('password')}
                    className={` shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                  {message === false && <div className="invalid-feedback">username  or password wrong</div>}
                </div>

                <button type="submit"
                  className="w-full text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?
                  <Link href="/pages/register" className="text-blue-700 hover:underline dark:text-blue-500" >
                    Create account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login