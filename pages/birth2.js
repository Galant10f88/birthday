import React from 'react'
import Link from 'next/link'
//import ConnectWallet from '../ConnectWallet'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-black before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://media.tenor.com/EKZY95OPNmUAAAAC/cheers-the-great-gatsby.gif")] before:bg-cover before:bg-center before:opacity-90',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-fit bg-black bg-opacity-10 rounded-md backdrop-blur w-min px-2',
    title: 'relative text-white text-[46px] font-semibold',
    description: 'text-gray-200 container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]',
    ctaContainer: 'flex bg-black bg-opacity-40 rounded-md backdrop-blur px-4 py-6 w-fit',
    accentedButton: 'relative text-lg font-semibold px-12 py-4 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:from-green-200 hover:via-green-400 hover:to-purple-700 rounded-full mr-5 text-black border border-black hover:border-white cursor-pointer',
    gameButton: 'relative text-lg font-semibold px-10 py-4 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:from-green-200 hover:via-green-400 hover:to-purple-700 rounded-full mr-5 text-black border border-black hover:border-white cursor-pointer',
    button: 'relative text-lg animate-bounce font-semibold px-14 py-4 rounded-full mr-5 text-cyan-300 hover:text-black bg-gradient-to-br from-black to-black hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 border border-cyan-300 hover:border-white cursor-pointer',
    cardContainer: 'rounded-[3rem] px-4',
    infoContainer: 'h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white',
    author: 'flex flex-col justify-center ml-4',
    name: '',
    infoIcon: 'flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold',
    crypt: `text-yellow-300`
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Cheers to the last of the roaring 20's
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero