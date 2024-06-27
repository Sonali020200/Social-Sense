import Image from 'next/image';
import React from 'react'

const SideBar = () => {
  return (
    <>
      <div class="h-full overflow-y-visible px-4 py-3 bg-gray-50 dark:bg-gray-800 w-full flex flex-col gap-5">
        <div className="w-full flex justify-center h-fit text-center items-center">
          <span class="text-xl font-semibold whitespace-nowrap dark:text-white">
            SocialSense
          </span>
        </div>

        <ul class="space-y-1 font-medium border-b-2 ">
          <p className="text-sm font-normal text-slate-400 mb-5">Menu</p>
          <li>
          <a
  href="#"
  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
>
  <svg
    class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 9.5V19c0 .55.45 1 1 1h5v-5h6v5h5c.55 0 1-.45 1-1V9.5l-8-6.69-8 6.69ZM13 19h-2v-4h2v4Zm7-11.95V8l-1 .84v-2.47L12 2 5 6.37v2.47l-1-.84v-.95l8-6.69 8 6.69Z"/>
  </svg>
  <span class="ms-3">Home</span>
</a>

          </li>
          <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 4V3H5v1H3v18h18V4H7ZM5 7h14v2H5V7Zm0 4h14v2H5v-2Zm0 4h14v2H5v-2Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">Schedule</span>
    </a>
  </li>
  <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm5 13H7v-2h10v2Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">Recommendation</span>
    </a>
  </li>
  <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2ZM11 17h2v-6h-2v6ZM11 9h2V7h-2v2Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">Analytics</span>
    </a>
  </li>
  <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2ZM16.41 8.11l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-2.12-2.12a1.5 1.5 0 1 1 2.12-2.12l1.06 1.06 4.44-4.44a1.5 1.5 0 1 1 2.12 2.12l-.1.1Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
    </a>
  </li>
  <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 5a1 1 0 0 0-1 1v10.8c0 .6-.4 1.2-1 1.2H5c-.6 0-1-.6-1-1.2V6a1 1 0 1 0-2 0v10.8C2 18.6 3.4 20 5 20h14c1.6 0 3-1.4 3-3.2V6a1 1 0 0 0-1-1ZM15 3h-6V1a1 1 0 1 0-2 0v2H5a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2h-2V1a1 1 0 1 0-2 0v2Z"/>
      </svg>
      <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
    </a>
  </li>
          <li>
            <a
              href="#"
              class="mb-6 flex items-center p-2 text-gray-900 rounded-lg dark:text-white group flex-1 font-bold ms-3 whitespace-nowrap text-white bg-black"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-white-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
              </svg>
              <span class="flex-1 font-bold ms-3 whitespace-nowrap">Themes</span>
            </a>
          </li>
        </ul>

        <ul className="h-fit ">
          <li className="h-fit ">
            <div className='h-fit'>
              <p className="text-sm font-normal text-slate-400 mb-5">Account</p>
              <a
                href="#"
                class="mb-6 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar