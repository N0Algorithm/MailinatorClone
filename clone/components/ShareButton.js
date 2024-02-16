import React from 'react'
import {useRouter} from 'next/router'
import {toast} from 'react-toastify'
const ShareButton = () => {
    const router= useRouter();
    const copyLink=()=>{
        navigator.clipboard.writeText(`http://localhoast:3000/${router.query.handle}`)
        toast("Copied to clipboard")
    }
  return (
    <>
    <div className="absolute cursor-pointertop-28 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400">
    <img className='w-4' src="/share.svg"   onClick={copyLink} />
    </div>
    </>
  )
}

export default ShareButton