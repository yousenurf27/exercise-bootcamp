import profileImg from '../assets/profile-photo.jpg';
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiVite } from "react-icons/si";

const Home = () => {
  return (
    <div className="h-svh grid grid-cols-12 grid-rows-12 gap-3 p-3 bg-primary">
      <div className="row-span-full lg:col-span-3 md:col-span-4 col-span-full p-4 rounded bg-secondary">
        <div className="contet-left h-full flex flex-col items-center justify-center">
          <div className="content_img mb-14 lg:size-40 md:size-36 size-32 rounded-full overflow-hidden">
            <img src={profileImg} alt="Profile" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Youse Nur Fauzi</h2>
          <h4 className="text-sm font-medium mb-6">Fullstack Developer 🚀</h4>
          <div className="flex">
            <a className="mr-3" href="https://github.com/yousenurf27" target="_blank">
              <FaGithub size={26}/>
            </a>
            <a href="https://www.linkedin.com/in/youse-nur-fauzi-210a95234/" target="_blank">
              <FaLinkedin size={26}/>
            </a>
          </div>
        </div>
      </div>
      <div className="row-span-5 lg:col-span-9 md:col-span-8 col-span-full p-4 rounded bg-secondary">
        <div className="flex">
          <p className="w-fit text-2xl font-bold mr-1">Hello</p>
          <div className="text-xl hello-hand">👋</div>
        </div>
        <p>
          I'm Youse, just a Freelancer as a Frontend Web Developer. You can call me Yose 😉 this is my simple project, 
          so don't expect more to me 😬 and actually I'm noob 🙈<br />
          There are still many things I need to learn as a Programmer and to improve my career, 
          becuse of that I took part in the Bootcamp in Purwadhika, like you maybe 😬
        </p>
      </div>
      <div className="row-span-7 lg:col-span-9 md:col-span-8 col-span-full grid grid-rows-12 p-4 rounded bg-secondary">
        <h4 className="md:row-span-2 row-span-4 text-2xl font-semibold">My Skills and Achivement</h4>
        <div className="md:row-span-10 row-span-8 grid grid-cols-2 grid-flow-row gap-2 h-full">
          <div className="md:col-span-1 col-span-full p-3 rounded-md border-2 border-gray-400 flex">
            <FaNodeJs size={32} className="mr-2"/>
            <FaReact size={32} className="mr-2"/>
            <SiVite size={32} className="mr-2"/>
            <SiExpress size={32} className="mr-2"/>
          </div>
          <div className="md:col-span-1 col-span-full p-3 rounded-md border-2 border-gray-400">
            <ul className="list-achiv">
              <li className="relative mb-2 pl-4">Belajar Membuat Aplikasi Web dengan React (Dicoding)</li>
              <li className="relative mb-2 pl-4">Belajar Fundamental Aplikasi Back-End (Dicoding)</li>
              <li className="relative mb-2 pl-4">Belajar Membuat Aplikasi Back-End untuk Pemula (Dicoding)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home