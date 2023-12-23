import React from "react";  
import Image from "next/image";
import VALO from '@/public/images/valorant.jpg'

export default function Ordervalo() {
    return (
        <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20">
                    <div className="container">
                    <h2 className="h2 mb-4 text-center">Joki Valorant</h2>
                    <Image className="max-w-full mx-auto md:max-w-none h-auto rounded" src={VALO} width={250} height={200} alt="MLBB" />
                    <div className="mb-4">
                        <label htmlFor="riotId" className="block text-lg font-medium text-white">Riot ID</label>
                        <input type="text" id="riotId" name="riotId" className="mt-1 p-2 border border-black text-black rounded-md w-full" placeholder="Enter your Riot ID" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-white">Email Address</label>
                        <input type="text" id="email" name="email" className="mt-1 p-2 border border-black text-black rounded-md w-full" placeholder="Enter your email" />
                    </div>
                        <div className="mb-4">
                        <label htmlFor="startRank" className="block text-lg font-medium text-white">Current Rank</label>
                        <select id="startRank" name="startRank" className="mt-1 p-2 border border-black text-black rounded-md w-full">
                            <option value="iron1">Iron 1</option>
                            <option value="iron2">Iron 2</option>
                            <option value="iron3">Iron 3</option>
                            <option value="bronze1">Bronze 1</option>
                            <option value="bronze2">Bronze 2</option>
                            <option value="bronze3">Bronze 3</option>
                            <option value="silver1">Silver 1</option>
                            <option value="silver2">Silver 2</option>
                            <option value="silver3">Silver 3</option>
                            <option value="gold1">Gold 1</option>
                            <option value="gold2">Gold 2</option>
                            <option value="gold3">Gold 3</option>
                            <option value="platinum1">Platinum 1</option>
                            <option value="platinum2">Platinum 2</option>
                            <option value="platinum3">Platinum 3</option>
                            <option value="diamond1">Diamond 1</option>
                            <option value="diamond2">Diamond 2</option>
                            <option value="diamond3">Diamond 3</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="targetRank" className="block text-lg font-medium text-white">Target Rank</label>
                        <select id="targetRank" name="targetRank" className="mt-1 p-2 border border-black text-black rounded-md w-full">
                            <option value="iron1">Iron 1</option>
                            <option value="iron2">Iron 2</option>
                            <option value="iron3">Iron 3</option>
                            <option value="bronze1">Bronze 1</option>
                            <option value="bronze2">Bronze 2</option>
                            <option value="bronze3">Bronze 3</option>
                            <option value="silver1">Silver 1</option>
                            <option value="silver2">Silver 2</option>
                            <option value="silver3">Silver 3</option>
                            <option value="gold1">Gold 1</option>
                            <option value="gold2">Gold 2</option>
                            <option value="gold3">Gold 3</option>
                            <option value="platinum1">Platinum 1</option>
                            <option value="platinum2">Platinum 2</option>
                            <option value="platinum3">Platinum 3</option>
                            <option value="diamond1">Diamond 1</option>
                            <option value="diamond2">Diamond 2</option>
                            <option value="diamond3">Diamond 3</option>
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