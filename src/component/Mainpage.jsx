import { useState } from "react";
import CreateProfile from "./CreateProfile";

export default function Mainpage(prop) {
  const { check } = prop;
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <div class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-[#20354b]">
        <div class="w-full h-full max-w-md md:h-auto">
          <div class=" bg-gray-300 rounded-lg shadow">
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900">
                Sign in to our platform
              </h3>
              <form class="space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
                  
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={(e) => setPassword(e.target.value)}
              
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={() => check(name, password)}
                >
                  Login to your account
                </button>
                 <CreateProfile/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
