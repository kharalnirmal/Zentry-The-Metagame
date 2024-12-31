import React from 'react'
import { FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa'
const links=[
    {
        href : "https://github.com/Nirmal-Kharal",icon:<FaDiscord />
    },
    {
        href : "https://www.facebook.com/nirmalkharal40/",icon:<FaFacebook />
    },
    {
        href : "https://www.linkedin.com/in/nirmal-kharal-37659a2a1/",icon:<FaLinkedin />
    },
    
]
const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300  py-4 text-black'>
<div className='container mx-auto flex flex-col  items-center  justify-between gap-4 px-4 md:flex-row'>
    <p className='text-center text-sm md:text-left '>
        &copy;Nova 2024.All rights Reserved</p>

<div className='flex justify-center gap-4 md:justify-start'>
{links.map((link)=>(
    <a href={link.href} key={link} target='_blank' rel='noopener and  noreferrer' className='text-black transition-colors duration-500  ease-in-out hover:'>
        {link.icon}
    </a>
))}
</div>
<a href="#privacy-policy"
className='text-center  text-sm  hover:underline  md:text-right '
>Privacy Policy</a>
</div>
    </footer>
  )
}

export default Footer