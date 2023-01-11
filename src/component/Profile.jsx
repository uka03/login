export default function Profile(prop) {
    const {logout} = prop
    const {data} = prop
    const {index} = prop
  return (
    <section class=" bg-[#071e34] flex font-medium items-center justify-center h-screen">
      <section class="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
        <div class="flex items-center justify-between">
          <span class="text-gray-400 text-sm">2d ago</span>
          <span class="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
          <img
            src={data[index].image}
            class="rounded-full w-28 "
            alt="profile picture"
            srcSet=""
          />
        </div>

        <div class="mt-8 ">
          <h2 class="text-white font-bold text-2xl tracking-wide">
          {data[index].name} <br /> AQUA
          </h2>
        </div>
        <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-4/5 bg-yellow-500 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">Storage:</span>
          <span>80%</span>
        </div>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mt-5 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#20354b] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={()=>logout(false)}>
            Log Out
          </span>
        </button>
      </section>
    </section>
  );
}
