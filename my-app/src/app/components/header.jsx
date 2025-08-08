import React from 'react'

const Header = () => {
  return (
    <div>
       <header>
        <nav className="h-20 w-full grid grid-cols-2 content-center font-sans">
         <div>
            <img
             src="https://archetypethemes.co/cdn/shop/files/Frame_115_120x.png?v=1657647211" 
             className="w-24 ml-20 mt-2"
             alt="logo image" />
         </div>
         <div>
            <ul className="flex justify-around">
                <li><a href="/" className="text-[18px]">Devikit</a></li>
                <li><a href="/" className="text-[18px]">Themes</a></li>
                <li><a href="/" className="text-[18px]">Resources</a></li>
                <li><a href="/" className="text-[18px]">Support</a></li>
                <li><a href="/" className="text-[18px]">Start Shopify Trial</a></li>
            </ul>
         </div>
        </nav>
       </header>
    </div>
  )
}

export default Header
