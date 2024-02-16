import Link from 'next/link';
import React from 'react'

const SocialTree = ({social}) => {
    const {
        facebook,
        twitter,
        instagram,
        youtube,
        linkedin,
        github
    } = social;
    return (
        <>
            <div className="social flex flex-row justify-center my-4">
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://facebook.com/${facebook}`}>
                    <img className='w-6' src="/facebook.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://instagram.com/${facebook}`}>
                    <img className='w-6' src="/instagram.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://youtube.com/${facebook}`}>
                    <img className='w-6' src="/youtube.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://linkedin.com/${facebook}`}>
                    <img className='w-6' src="/linkedin.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://github.com/${facebook}`}>
                    <img className='w-6' src="/github.svg"/>
                </Link>
                <Link className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border border-gray-70 mx-1 select-none' target='_blank' href={`https://twitter.com/${facebook}`}>
                    <img className='w-6' src="/twitter.svg"/>
                </Link>
            </div>
        </>
    )
}

export default SocialTree