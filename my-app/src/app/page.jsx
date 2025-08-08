"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { FiTag, FiGlobe, FiHeart } from 'react-icons/fi'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
       <div>
       {/* section no.1        */}
      <section className="w-full px-16 py-12">
      <div className="grid grid-cols-2 gap-10">

        <div className="space-y-6 w-[850px]">
          <img
            src="https://archetypethemes.co/cdn/shop/files/impulse_apparel_1080x.png.jpg?v=1719945161"
            alt="hero image"
            className="w-full rounded"
          />
          <img
            src="https://archetypethemes.co/cdn/shop/files/impulse_clean_1080x.png.jpg?v=1719945161"
            alt="hero image"
            className="w-full rounded"
          />
          <img
            src="https://archetypethemes.co/cdn/shop/files/impulse_modern_3ca98702-33c1-4542-bb6a-dafdc670a41c_1080x.png.jpg?v=1719945239"
            alt="hero image"
            className="w-full rounded"
          />
        </div>


        <div className="relative ml-60">
          <div className="sticky top-36">
            <div className="w-[400px] p-6 text-gray-800 space-y-4">
              <p className="text-[13px] text-black">Shopify Theme</p>
              <h2 className="text-3xl font-bold text-gray-900">Impulse</h2>
              <p className="text-lg font-medium text-gray-900">$400</p>

              <div className="flex items-center gap-2">
                <div className="flex text-green-700">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="text-sm text-gray-700 font-medium">(1100+)</span>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Keep the focus on your products and messaging with this premium Shopify
                theme, Impulse, featuring a clean and minimal design style. Fast,
                flexible, Impulse also has one of the strongest feature sets of any
                theme available on Shopify—menu lists, advanced search and filtering,
                promotion tiles, quick shop, and much more.
              </p>

              <p className="text-sm font-medium text-gray-800">Inventory LARGE</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <FiTag />
                  <span>Clothing and accessories</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiGlobe />
                  <span>Sports and recreation</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FiHeart />
                  <span>Health and beauty</span>
                </div>
              </div>

              <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


     {/* section no.2 */}
     <section className="h-auto w-full ">
       <h3 className="text-3xl font-bold ml-12 ">Key Features</h3>
       <div className="grid grid-cols-2 ml-12 mt-6">
        <div className="h-auto w-[600px]">
          <img 
          src="https://archetypethemes.co/cdn/shop/files/IMPULSE_STORYTELLING_3953b1ba-ea82-4ae1-87e6-f48a5817bca2.png?v=1660056678&width=1920"
          className="rounded-lg"
           alt="" />
          <h4 className="text-[24px] mt-4 font-bold text-[#31323f]">Powerful visual storytelling</h4>
          <p className="text-lg mt-4 text-[#535751]">Catch your buyer’s eye with this minimal Shopify theme—large media, wide spacing, parallax 
             and smooth animation designed to showcase your brand and products to the fullest.</p>
        </div>

        <div className="h-auto w-[600px]">
        <img 
          src="https://archetypethemes.co/cdn/shop/files/IMPULSE_PROMOTION.png?v=1660056303&width=1920"
          className="rounded-lg"
           alt="" />
          <h4 className="text-[24px] mt-4 font-bold text-[#31323f]">Powerful visual storytelling</h4>
          <p className="text-lg mt-4 text-[#535751]">Catch your buyer’s eye with this minimal Shopify theme—large media, wide spacing, parallax 
             and smooth animation designed to showcase your brand and products to the fullest.</p>
        </div>
       </div>

        <div className="mb-14 w-full mt-14">
        <div className="grid grid-cols-2 ml-12 mt-6">
        <div className="h-auto w-[600px]">
          <img 
          src="https://archetypethemes.co/cdn/shop/files/IMPULSE_MOBILE_FIRST.png?v=1660056303&width=1920"
          className="rounded-lg"
           alt="" />
          <h4 className="text-[24px] mt-4 font-bold text-[#31323f]">Truly mobile-first</h4>
          <p className="text-lg mt-4 text-[#535751]">Fast, compact and thumb-friendly design optimized for mobile SEO.
             Your store will load quickly and look great on every device, every time.</p>
        </div>

        <div className="h-auto w-[600px]">
        <img 
          src="https://archetypethemes.co/cdn/shop/files/QUICK_BUY.gif?v=1660056517&width=1920"
          className="rounded-lg"
           alt="" />
          <h4 className="text-[24px] mt-4 font-bold  ">Quick buy</h4>
          <p className="text-lg mt-4 text-[#535751]">Allow customers to quickly view product information,
             select their size and add to cart or buy instantly without leaving the collection page.</p>
        </div>
       </div>
        </div>

    </section>



      {/* section no.3 */}
      <section className="h-auto w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-[#eeedeb] border-b border-black pb-1 mx-12 my-6 cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-gray-800">Benefits</h2>
        <span className="text-gray-700 text-3xl">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="mx-12 space-y-6 pb-8 grid grid-cols-3">
          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Free support</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Get fast and personalized world-class support from our experienced customer team, 
              as well as access to regularly updated detailed documentation.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Sections everywhere</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Easily customize your theme with our 20+ drag-and-drop sections. 
              Our minimalist approach to design leaves you plenty of room to add your signature style, 
              with little to no code.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Unlimited free trials</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Try our themes for free with your own products, brand colors, and customizations before committing. 
              Only pay if you publish the theme to your store.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Choose from 3 presets</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Create your very own design using one of our free pre-designed preset styles as your springboard. 
              Pick a preset, then start customizing the one you like best to fit your brand perfectly.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Built for conversion</h4>
            <p className="text-sm mt-4 text-[#535751]">
              We've studied every major ecommerce trend for the past 10 years. 
              Our designs only use the most proven patterns for conversion and longevity.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Non-expiring license</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Your payment entitles you to use the theme on one single store, and keep it as long as you like.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Mobile-first</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Just like your customers. Fast, compact, and thumb-friendly design. 
              Our themes deliver the best mobile experience.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Speed optimized</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Our lightning-fast themes meet Shopify’s high performance standards. 
              Created with modern browsers and mobile devices in mind, they use less code to ensure 
              fast loading pages—all without compromising on style or features.
            </p>
          </div>

          <div className="h-52">
            <h4 className="text-3xl font-bold mt-4">Free theme updates</h4>
            <p className="text-sm mt-4 text-[#535751]">
              Get free lifetime updates with every theme purchase. 
              We regularly release upgrades that offer new features, functionality, and bug fixes. 
              Your theme is guaranteed to be up to date with Shopify's latest features and ecommerce trends.
            </p>
          </div>
        </div>
      )}
    </section>


    {/* section no.4 */}
    <section className="h-auto w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-[#eeedeb] border-b border-black pb-1 mx-12 my-6 cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-gray-800">Standerd sections</h2>
        <span className="text-gray-700 text-3xl">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
      <div className="h-[500px] w-auto grid grid-cols-4 gap-10 mt-10 mx-12">
      <div className="">
        <h4 className="text-2xl">Marketing & conversion</h4>
        <ul className="mt-4">
          <li className="text-sm">Blogs</li>
          <li className="text-sm mt-1">Cross-selling</li>
          <li className="text-sm mt-1">Coustomizable contant form</li>
          <li className="text-sm mt-1">FAQ page</li>
          <li className="text-sm mt-1">Press coverage</li>
          <li className="text-sm mt-1">Product badges</li>
          <li className="text-sm mt-1">Product reviews</li>
          <li className="text-sm mt-1">Promo banners</li>
          <li className="text-sm mt-1">Promo popups</li>
          <li className="text-sm mt-1">Promo tiles</li>
          <li className="text-sm mt-1">Quiks view</li>
          <li className="text-sm mt-1">Recently viewed</li>
          <li className="text-sm mt-1">Recommended products</li>
          <li className="text-sm mt-1">Stock counter</li>
          <li className="text-sm mt-1">Store locator</li>
          <li className="text-sm mt-1">Trust badges</li>
        </ul>
      </div>

      <div className="">
        <h4 className="text-3xl">Merchandising</h4>
        <ul className="mt-4">
          <li className="text-sm">Animation</li>
          <li className="text-sm mt-1">Color swatches</li>
          <li className="text-sm mt-1">High-resolution images</li>
          <li className="text-sm mt-1">Image galleries</li>
          <li className="text-sm mt-1">Image zoom</li>
          <li className="text-sm mt-1">LookBooks</li>
          <li className="text-sm mt-1">Product options</li>
          <li className="text-sm mt-1">Product tabs</li>
          <li className="text-sm mt-1">Product video</li>
          <li className="text-sm mt-1">Shipping/delivery information</li>
          <li className="text-sm mt-1">Size chart</li>
          <li className="text-sm mt-1">Slideshow</li>
          <li className="text-sm mt-1">Usage information</li>
        </ul>
      </div>

      <div className="">
        <h4 className="text-3xl">Product discovery</h4>
        <ul className="mt-4">
          <li className="text-sm mt-1">Breadcrumbs</li>
          <li className="text-sm mt-1">Collection page navigation</li>
          <li className="text-sm mt-1">Enhanced search</li>
          <li className="text-sm mt-1">Mega menu</li>
          <li className="text-sm mt-1">Product filtering and sorting</li>
          <li className="text-sm mt-1">Recently viewed</li>
          <li className="text-sm mt-1">Recommended products</li>
          <li className="text-sm mt-1">Sticky header</li>
        </ul>
      </div>

      <div className="">
        <h4 className="text-3xl">Cart & chectout</h4>
        <ul className="mt-4">
          <li className="text-sm">Cart notes</li>
          <li className="text-sm mt-1">In-store pickups</li>
          <li className="text-sm mt-1">Quik buy</li>
          <li className="text-sm mt-1">Slide-out cart</li>
        </ul>
      </div>
      </div>
      )}
    </section>


    {/* section no.5 */}
    <section className="h-auto w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-[#eeedeb] border-b border-black pb-1 mx-12 my-6 cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-gray-800">For developers</h2>
        <span className="text-gray-700 text-3xl">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
       <div className=" grid grid-cols-2 mx-12 my-10">
         <div className="mb-4">
          <h5 className="text-3xl font-bold mb-4">Custom events</h5>
          <p className="text-sm">With exposed events and a standalone file for custom scripts,
             you can start adding  <br /> functionality to the theme without editing any unfamiliar javascript files.</p>
         </div>

         <div>
          <h5 className="text-3xl font-bold mb-4" >Custom Liquid</h5>
          <p className="text-sm">The Custom Liquid Section lets you add a custom drag-and-drop section using Liquid <br />
             code directly in the theme editor on any page.</p>
         </div>

         <div>
         <h5 className="text-3xl font-bold mb-4" >Editable JS</h5>
         <p className="text-sm">Impulse comes with the original classic build file if you need to make edits to the theme <br /> Javascript.</p>
         </div>

         <div>
          <h5 className="text-3xl font-bold mb-4">App Extension Compatible</h5>
          <p className="text-sm">Theme app extensions allow merchants to easily add dynamic elements to their themes <br />
             without having to interact with Liquid templates or code.</p>
         </div>
       </div>
      )}
    </section>




    {/* section no.6 */}
    <section className="h-auto w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between bg-[#eeedeb] border-b border-black pb-1 mx-12 my-6 cursor-pointer"
      >
        <h2 className="text-3xl font-bold text-gray-800">Documentation</h2>
        <span className="text-gray-700 text-3xl">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
       <div className="mx-12 mt-6 grid grid-cols-3">
         <div>
          <h6 className="text-3xl font-bold mb-4">7.6.2</h6>
          <a className="text-base text-[#535751]">Version</a>
         </div>

         <div>
          <h6 className="text-3xl font-bold mb-4">May 6, 2025</h6>
          <a className="text-base underline text-[#535751]" href="#">Release Notes</a>
         </div>

         <div>
          <h6 className="text-3xl font-bold mb-4">Support</h6>
          <a className="text-base underline text-[#535751]" href="#">Impules</a>
         </div>
       </div>
      )}
    </section>




       </div> 
  );
}
