"use client";
import Link from 'next/link'
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post("/api/users/signin", user);
        console.log("Login success", response.data);
        toast.success("Login success");
        router.push("/games");
    } catch (error:any) {
        console.log("Login failed", error.message);
        toast.error(error.message);
    } finally{
    setLoading(false);
    }
}

useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
        setButtonDisabled(false);
    } else{
        setButtonDisabled(true);
    }
}, [user]);

  return (

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">{loading ? "Processing" : "Login"}</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                </div>
              </div>

            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Masuk dengan email mu</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input className="form-input w-full text-gray-300"
                  id="email"
                  type="text"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  placeholder="you@gmail.com" />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input className="form-input w-full text-gray-300"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="Password (minimal 10 karakter)" required />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-400 ml-2">Keep me signed in</span>
                    </label>
                    <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Lupa Password?</Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                  onClick={onLogin}
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">{buttonDisabled ? "No Login" : "Login"}</button>
                </div>
              </div>

            <div className="text-gray-400 text-center mt-6">
              Belum punya Akun? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
  )
}
