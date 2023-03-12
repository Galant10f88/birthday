import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fyrefliLogo from '../../assets/fyrefli.png'
import { AiOutlineSearch } from 'react-icons/ai'
import diamond from '../../public/Pacman.png'

//text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
//bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
//bg-[#04111d]
//bg-opacity-90
//bg-gradient-to-r from-fuchsia-600 to-pink-600
//shadow-cyan-500/50
//text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-600 font-bold text-3xl

const style = {
    wrapper: 'sticky top-0 z-50 bg-[#04111d] bg-opacity-0 w-screen px-[1.2rem] py-4 flex bg-transparent',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-white font-bold text-3xl',
    searchBar: 'flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]',
    searchIcon: 'text-[#8a939b] mx-3 font-bold text-lg',
    searchInput: 'h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]',
    headerItems: 'flex items-center justify-end',
    headerItem: 'text-white px-4 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerSwap: 'text-white px-2 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    headerIcon: 'text-slate-400 text-4xl px-4 hover:text-white cursor-pointer',
    cheating: 'text-transparent px-4 font-bold',
    button: `border px-1 border-cyan-300 bg-[#04111d] p-[0.1rem] text-xl font-semibold rounded-lg cursor-pointer text-[#fb4848]`,
    snow: `h-screen w-screen bg-blue-200 relative`
}


const Header1 = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div class="rounded-full px-3 py-1 bg-black bg-opacity-10 backdrop-blur-xl">
            <div className={style.logoContainer}>
                <span class="relative flex h-5 w-5">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-5 w-5 bg-red-600"></span>
                </span>
            <div className={style.logoText}>Live</div>
            </div>
            </div>
            </Link>
            <div class="absolute bottom-0 right-20">
            <div class="rounded-full px-3 py-1 bg-transparent bg-opacity-10">
            <div className={style.logoContainer}>
                <div class="flex space-x-6">
                    <Link href="../birth2">
                <div>
                <span class="relative flex h-8 w-8">
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-orange-500"></span>
                </span>
                </div>
                </Link>
                <Link href="../birth3">
                <div>
                <span class="relative flex h-8 w-8">
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-green-500"></span>
                </span>
                </div>
                </Link>
                <Link href="../birth4">
                <div>
                <span class="relative flex h-8 w-8">
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-pink-500"></span>
                </span>
                </div>
                </Link>
                <Link href="../birth5">
                <div>
                <span class="relative flex h-8 w-8">
                    <span class="relative inline-flex rounded-full h-8 w-8 bg-blue-500"></span>
                </span>
                </div>
                </Link>
            </div>
            </div>
            </div>
            </div>
    </div>;
}

export default Header1