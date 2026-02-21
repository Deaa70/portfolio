export default function Experience() {

    return <div className="flex justify-center items-center flex-col py-4 not-md:w-[95%] not-md:mx-auto">

        <p className="px-4 py-0.5  dark:bg-neutral-800 bg-neutral-300 font-semibold dark:text-[#d1d5db] text-neutral-600 my-3 rounded-full w-fit text-[10px]">
            Experience
        </p>
        <p className="text-sm not-md:text-xs text-neutral-600 dark:text-[#9ca3af] mb-3 not-md:text-center">
            here is a quick summary of my most recent experiences  :
        </p>

        <div className="bg-[#f9f9f9] dark:bg-[#111827] md:p-8 p-4 md:w-2xl  flex-wrap items-center rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className="flex  justify-between items-center">
                <h1 className="text-xl not-md:text-base font-semibold  dark:text-[#d1d5db]">  Frontend Development </h1>

                <span className="text-[10px] not-md:text-[8px] dark:text-[#9ca3af]">
                    Mar 2024 - Present
                </span>
            </div>

            <ul className="list-disc p-4 text-neutral-900 w-[85%] not-md:w-[90%] dark:text-[#9ca3af] text-sm not-md:text-xs space-y-2">

                <li>
                    Build responsive web apps with <b>React</b>, <b>TypeScript</b>, and <b>Vite</b>
                </li>
                <li>
                    Style with <b>Tailwind CSS</b> and <b>shadcn/ui</b> for modern, customizable interfaces
                </li>
                <li>
                    Manage state using <b>Zustand</b> and <b>Redux</b>
                </li>
                <li>
                    Handle data fetching/caching with <b>TanStack Query</b>
                </li>
                <li>
                    Implement forms with <b>React Hook Form</b> and <b>Zod</b> validation
                </li>
                <li>
                    Focus on performance, accessibility, and responsive design
                </li>
            </ul>

        </div>




        <div className="bg-[#f9f9f9] dark:bg-[#111827] md:p-8 p-4 my-5 md:w-2xl   flex-wrap items-center rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className="flex  justify-between items-center">
                <h1 className="text-xl not-md:text-base font-semibold  dark:text-[#d1d5db]">  Backend Development </h1>

                <span className="text-[10px] not-md:text-[8px] dark:text-[#9ca3af]">
                    Mar 2024 - Present
                </span>
            </div>

            <ul className="list-disc p-4 text-neutral-900 w-[85%] not-md:w-[90%] dark:text-[#9ca3af] text-sm not-md:text-xs space-y-2">

                <li>
                    Develop scalable APIs with <b>Python</b>, <b>Django</b>, and <b>Django REST Framework
                    </b>
                </li>
                <li>
                    Implement <b>JWT</b> authentication and secure authorization
                </li>
                <li>
                    Optimize performance with <b>Redis</b> caching and <b>Celery</b> for async tasks
                </li>
                <li>
                    Manage <b>MySQL</b> databases with efficient query design
                </li>
                <li>
                    Deploy on <b>VPS</b>, using <b>Dockploy</b> for containerization and <b>Cloudflare</b> for CDN/DNS
                </li>
                <li>
                    Integrate <b>Backblaze S3</b> for scalable storage and automated backups
                </li>
            </ul>

        </div>



        <div className="bg-[#f9f9f9] dark:bg-[#111827] md:p-8 p-4 mb-5 md:w-2xl   flex-wrap items-center rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className="flex  justify-between items-center">
                <h1 className="text-xl not-md:text-base font-semibold  dark:text-[#d1d5db]">  Mobile Development </h1>

                <span className="text-[10px] not-md:text-[8px] dark:text-[#9ca3af]">
                    Mar 2024 - Present
                </span>
            </div>

            <ul className="list-disc p-4 text-neutral-900 w-[85%] not-md:w-[90%] dark:text-[#9ca3af] text-sm not-md:text-xs space-y-2">

                <li>
                    Build cross-platform iOS/Android apps with <b>React Native</b> and <b>Expo</b>
                </li>
                <li>
                    Implement navigation using <b>Expo Router</b>
                </li>
                <li>
                    Style with <b>NativeWind</b> (Tailwind for React Native) and <b>GlueStack UI</b>
                </li>
                <li>
                    Deploy production builds via <b>EAS</b> (published to Google Play)
                </li>
                <li>
                    Add offline access, push notifications, and mobile-optimized features
                </li>

            </ul>

        </div>





        <div className="bg-[#f9f9f9] dark:bg-[#111827] md:p-8 p-4 mb-5 md:w-2xl   flex-wrap items-center rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className="flex  justify-between items-center">
                <h1 className="text-xl not-md:text-base font-semibold  dark:text-[#d1d5db]">  Project Leadership</h1>

                <span className="text-[10px] not-md:text-[8px] dark:text-[#9ca3af]">
                    Mar 2024 - Present
                </span>
            </div>

            <ul className="list-disc p-4 text-neutral-900 w-[85%] not-md:w-[90%] dark:text-[#9ca3af] text-sm not-md:text-xs space-y-2">

                <li>
                    Led end-to-end development of <b>Siraj LMS Platform</b> (web) and <b>Siraj Edu App</b> (mobile), optimizing both for production deployment
                </li>
                <li>
                    Made technical decisions: <b>React + TypeScript, Django, Expo</b> stacks
                </li>
                <li>
                    Ensured seamless integration between web and mobile platforms
                </li>
                <li>
                    Optimized projects for production: performance tuning, security hardening, and scalable infrastructure setup (VPS, Cloudflare, automated backups, caching strategies)
                </li>

            </ul>

        </div>



    </div>
}