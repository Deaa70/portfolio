import SirajProject from '@/assets/siraj-project.png';
import SirajPhone from '@/assets/siraj-phone.png';
import TailwindProject from '@/assets/tailwind-project.png';
import Klimate from '@/assets/klimate.png';
export default function Projects() {

    return <div className="flex justify-center items-center flex-col py-4 not-md:w-[95%] not-md:mx-auto">



        <p className="px-4 py-0.5  dark:bg-neutral-800 bg-neutral-300 font-semibold dark:text-[#d1d5db] text-neutral-600 my-3 rounded-full w-fit text-[10px]">
            Projects
        </p>
        <p className="text-sm not-md:text-xs text-neutral-600 dark:text-[#9ca3af] mb-3 not-md:text-center">
            Some of the projects I have built :
        </p>

        <div className="bg-white dark:bg-[#111827] min-h-60 md:w-4xl flex items-start flex-wrap rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">

            <div className='md:w-[50%] bg-[#f9f9f9]  dark:bg-[#1f2937] h-full md:p-8 p-4'>
                <img src={SirajProject} alt="siraj project" width={500} height={500} className='rounded-sm' />
            </div>

            <div className='md:w-[50%] h-full p-3 pt-6 text-neutral-600 dark:text-[#9ca3af]' >
                <h1 className='font-semibold'>
                    Siraj LMS Platform
                </h1>
                <p className='text-xs mt-3'>
                    A full-featured Learning Management System built with React typescript and Django. Includes course management, student
                    progress tracking and educational content upload.
                </p>
                <div className="my-4 gap-2 flex flex-wrap">
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Vite</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Typescript</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tailwind CSS</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tanstack Query</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React Router DOM</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React form hook</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Zod</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>shadcn UI</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>zustand</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>django</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>DRF</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>mysql</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>JWT</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Redis</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>docker</span>
                </div>
                <a href="https://siraj.sy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                    </svg></a>
            </div>
        </div>




        <div className="bg-white dark:bg-[#111827] min-h-60 md:w-4xl my-5 flex items-end flex-wrap-reverse rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className='md:w-[50%] h-full p-3 pt-6 text-neutral-600 dark:text-[#9ca3af]' >
                <h1 className='font-semibold'>
                    Siraj Edu mobile app
                </h1>
                <p className='text-xs mt-3'>
                    Mobile companion to the Siraj LMS platform, allowing students to access courses offline, receive push notifications, and
                    complete quizzes on the go. Built with Expo and published using EAS.
                </p>
                <div className="my-4 gap-2 flex flex-wrap">
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React Native</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Expo</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Expo notification</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tanstack Query</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Nativewind</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Expo router</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React form hook</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Zod</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Gluestack UI</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>zustand</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>expo file system</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>firebase</span>
                </div>
                <a href="https://siraj.sy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                    </svg></a>
            </div>



            <div className='md:w-[50%] bg-[#f9f9f9]  dark:bg-[#1f2937] h-full not-md:mx-auto md:p-8 p-4'>
                <img src={SirajPhone} alt="siraj project" width={200} className='rounded-sm mx-auto' />
            </div>

        </div>






        <div className="bg-white dark:bg-[#111827] min-h-60 md:w-4xl my-5 flex items-end flex-wrap-reverse rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


            <div className='md:w-[50%] h-full p-3 pt-6 text-neutral-600 dark:text-[#9ca3af]' >
                <h1 className='font-semibold'>
                    Klimate
                </h1>
                <p className='text-xs mt-3'>
                    I developed a dynamic and responsive web application that provides real-time weather updates for the user's current location, as well as the ability to check the weather conditions for any city around the globe.
                </p>
                <div className="my-4 gap-2 flex flex-wrap">
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Vite</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Typescript</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tailwind CSS</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tanstack Query</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Shadcn/UI</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Redux</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>
                        Lucide react</span>
                </div>
                <a href="https://siraj.sy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                    </svg></a>
            </div>

            <div className='md:w-[50%] bg-[#f9f9f9]  dark:bg-[#1f2937] h-full md:p-8 p-4'>
                <img src={Klimate} alt="siraj project" width={500} className='rounded-sm mx-auto' />
            </div>


        </div>


        <div className="bg-white dark:bg-[#111827] min-h-60 md:w-4xl my-5 flex items-start flex-wrap rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">



            <div className='md:w-[50%] bg-[#f9f9f9]  dark:bg-[#1f2937] h-full md:p-8 p-4'>
                <img src={TailwindProject} alt="siraj project" width={500} className='rounded-sm mx-auto' />
            </div>


            <div className='md:w-[50%] h-full p-3 pt-6 text-neutral-600 dark:text-[#9ca3af]' >
                <h1 className='font-semibold'>
                    Tailwind css project
                </h1>
                <p className='text-xs mt-3'>
                    Developed a simple web responsive page that support dark/light mode using the latest features of tailwind v4
                </p>
                <div className="my-4 gap-2 flex flex-wrap">
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Vite</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>React</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Typescript</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tailwind CSS</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Tanstack Query</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Shadcn/UI</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>Redux</span>
                    <span className='project-skill bg-[#d1d5db] dark:bg-[#1f2937]'>
                        Lucide react</span>
                </div>
                <a href="https://siraj.sy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                    </svg></a>
            </div>

        </div>

    </div>
}