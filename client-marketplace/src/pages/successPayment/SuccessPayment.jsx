import React from 'react'
import {FiCheckCircle} from 'react-icons/fi'
import {CiFaceSmile} from 'react-icons/ci'
import { Button } from 'flowbite-react'

export default function SuccessPayment() {
  return (
    <div className='w-5/12 border-black border-2 flex flex-col items-center my-36 m-auto text-center pt-5 h-[40rem]'>
        <FiCheckCircle className='text-8xl text-[#0899A5] mb-10'/>
        <div className='text-lg w-3/4 border-b-[1px] border-b-gray-400 mb-4 font-thin'>
            <p className='text-4xl'>!תודה שהזמנת דרכנו</p>
            <p className='flex items-center justify-center mb-4'><CiFaceSmile/>המשלוח כבר בדרך אלייך</p>
        </div>
        <div className='flex flex-col items-center justify-between h-[5rem]'>
        <p>מספר הזמנה: 111111111111111</p>
        <Button className='w-3/4 bg-[#0899A5]'>חזרה לאתר</Button>
        </div>
    </div>
  )
}
