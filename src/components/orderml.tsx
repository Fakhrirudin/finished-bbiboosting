import React from "react";  
import Image from "next/image";
import MLBB from '@/public/images/mlbb.jpg'

export default function Orderml() {
    return (
        <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                    <div className="container">
                    <h2 className="h2 mb-4 text-center">Joki MLBB</h2>
                    <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={MLBB} width={250} height={200} alt="MLBB" />
                    <div className="mb-4">
                        <label htmlFor="ML" className="block text-lg font-medium text-white">ID & Server </label>
                         <div className="item">
                        <input type="text" name="quantityItem1" className="mt-1 p-2 border border-black text-black rounded-md w-full"  placeholder="ID Pengguna" />
                        <input type="text" name="quantityItem2" className="mt-1 p-2 border border-black text-black rounded-md w-full"  placeholder="Server" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-white">Email Address</label>
                        <input type="text" id="email" name="email" className="mt-1 p-2 border border-black text-black rounded-md w-full" placeholder="Enter your email" />
                    </div>
                        <div className="mb-4">
                        <label htmlFor="startRank" className="block text-lg font-medium text-white">Current Rank</label>
                        <select id="startRank" name="startRank" className="mt-1 p-2 border border-black text-black rounded-md w-full">
			            <option value="epic1">Epic 1</option>
                            <option value="epic2">Epic 2</option>
                            <option value="epic3">Epic 3</option>
                            <option value="epic4">Epic 3</option>
                            <option value="epic5">Epic 3</option>
                            <option value="legend1">Legend 1</option>
                            <option value="legend2">Legend 2</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                        </select>
                    </div>
                        <div className="mb-4">
                        <label htmlFor="targetRank" className="block text-lg font-medium text-white">Target Rank</label>
                        <select id="targetRank" name="targetRank" className="mt-1 p-2 border border-black text-black rounded-md w-full">
                            <option value="epic2">Epic 2</option>
                            <option value="epic3">Epic 3</option>
                            <option value="epic4">Epic 3</option>
                            <option value="epic5">Epic 3</option>
                            <option value="legend1">Legend 1</option>
                            <option value="legend2">Legend 2</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                            <option value="legend3">Legend 3</option>
                        </select>
                    </div>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <a  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://api.whatsapp.com/send?phone=6285900395298">Checkout</a>
                        </div>
                </div>
                </div>
                </div>
        </section>
    )
}