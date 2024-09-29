



import { FaDownload } from "react-icons/fa";



export default function Header() {
  return (
   <header className='w-full min-h-[70px] bg-gray-900 text-white flex items-center px-10 justify-between fixed z-10'>
    <h1 className='text-2xl font-bold'>Gaurav Dev</h1>

          <a href="https://drive.google.com/file/d/16R8gzdH3PRExUlu6nXw-gobXY_tBMtwa/view?usp=sharing" target="_blank" className='bg-green-600 px-2 py-2 w-[150px] rounded-2xl flex  justify-center hover:bg-green-500 items-center gap-2'>
       
            <h1>Download</h1>
            
            <FaDownload/>

    </a>
   </header>
  )
}