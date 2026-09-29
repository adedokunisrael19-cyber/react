import React from 'react';
// import { useSignMutation } from '../api/dummyDataApi';
import { Link } from 'react-router';


export default function signup() {

   return (
      <main className="max-w-4xl flex items-center mx-auto md:min-h-screen p-4 md:p-8">
         <div
            className="grid items-center gap-y-10 bg-white border border-slate-100 [box-shadow:0_2px_10px_-3px_rgba(14,14,14,0.3)] rounded-lg overflow-hidden md:grid-cols-3">
            <div
               className="flex flex-col justify-center space-y-6 min-h-full bg-gradient-to-r from-slate-900 to-slate-700 p-6 max-md:order-1 md:space-y-16">
               <div>
                  <h2 className="text-white text-lg font-medium">Create Your Account</h2>
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">Welcome to our registration page! Get started by
                     creating your account.</p>
               </div>
               <div>
                  <h2 className="text-white text-lg font-medium">Simple & Secure Registration</h2>
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">Our registration process is designed to be
                     straightforward and secure. We prioritize your privacy and data security.</p>
               </div>
            </div>

            <div className="w-full py-6 px-6 max-w-lg mx-auto md:col-span-2 md:px-14">
               <div className="mb-10">
                  <h1 className="text-slate-900 text-2xl font-bold">Create an account</h1>
               </div>

               <form className="space-y-6">
                  <div>
                     <label htmlFor="email"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
                     <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                  </div>
                  <div>
                     <label htmlFor="password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Password</label>
                     <input type="password" id="password" name="password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                  </div>
                  <div>
                     <label htmlFor="confirm-password"
                        className="mb-2 text-slate-900 font-medium text-sm inline-block">Confirm
                        password</label>
                     <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required
                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                  </div>

                  <div className="flex items-start flex-wrap gap-2">
                     <label className="flex items-center group has-[input:checked]:text-slate-900">
                        <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                        {/* Custom box */}
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600" aria-hidden="true">
                           {/* Checkmark */}
                           <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                              fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 5l3 3 7-7" />
                           </svg>
                        </span>
                        <span className="ml-3 text-sm text-slate-700">
                           I accept the
                        </span>
                     </label>

                     <a href="#"
                        className="ml-1 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        Terms and Conditions
                     </a>
                  </div>
                     <Link to="/login"> <button type="submit"
                     className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                     Create an account</button></Link>
                 
               </form>

               <div className="mt-6 text-slate-900 text-sm text-center">Already have an account? <a href="#"
                  className="text-blue-700 hover:underline ml-1 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                  Login here</a>
               </div>
            </div>
         </div>
      </main>
   );
}