import { Copy, Mail, Phone } from 'lucide-react'
import Experience from './components/experience'
import Header from './components/header'
import PersonalInfo from './components/personal-info'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {



  return (
    <div id="root-element" className={`min-h-screen bg-white  dark:bg-[#030712] relative `} >
      <Header />
      <PersonalInfo />
      <Skills />
      <Experience />
      <Projects />




      <div className="bg-white dark:bg-[#111827] min-h-60  flex items-center justify-center flex-col flex-wrap rounded-md shadow-xs shadow-[#d0d0d0] dark:shadow-neutral-900">


        <p className="px-4 py-0.5  dark:bg-neutral-800 bg-neutral-300 font-semibold dark:text-[#d1d5db] text-neutral-600 my-3 rounded-full w-fit text-[10px]">
          Get in touch
        </p>
        <p className="text-sm not-md:text-[10px] text-neutral-600 dark:text-[#9ca3af] mb-3 not-md:text-center">
          What's next? Feel free to reach out to me if you're  looking for <br /> a developer , have a query or simply want to connect.
        </p>

        <div className='text-xl font-semibold text-neutral-600 dark:text-[#9ca3af]' >

          <div className='flex justify-center items-center gap-4'>
            <Mail size={16} />
            <span>  deaa.work7@gmail.com </span>
            <button onClick={() => window.navigator.clipboard.writeText('deaa.work7@gmail.com')} className='cursor-pointer'>
              <Copy size={16} />
            </button>
          </div>


          <div className='flex justify-center items-center mt-3 gap-4'>
            <Phone size={16} /> +963 980 734 524
            <button onClick={() => window.navigator.clipboard.writeText('+963980734524')} className='cursor-pointer'>
              <Copy size={16} />
            </button>
          </div>
        </div>

        
        <div className='text-neutral-600 dark:text-[#9ca3af] mb-2 mt-6 text-sm not-md:text-[10px]'>
          Created By : Deaa 
         </div>
      </div>

    </div>
  )
}

export default App
