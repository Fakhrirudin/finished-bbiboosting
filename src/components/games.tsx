import React from "react"
import Image from "next/image"
import MLBB from '@/public/images/mlbb.jpg'
import VALO from '@/public/images/valorant.jpg'

export default function Games() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
            <a href="orderml" className="hover:opacity-80 transition-opacity duration-300">
                <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={MLBB} width={250} height={200} alt="MLBB" />
                <br />
                <p className="text-lg text-gray-400 text-center">Mobile Legends</p>
              </a>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
            <a href="ordervalo" className="hover:opacity-80 transition-opacity duration-300">
                <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={VALO} width={250} height={200} alt="VALO" />
                <br />
                <p className="text-lg text-gray-400 text-center ">Valorant</p>
              </a>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
