import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SectionStoreManager = () => {
    const navigate =useNavigate()
    const {id}=useParams()
    const sections = [
        {id:"1",name:"A section"},
        {id:"2",name:"B section"},
        {id:"3",name:"C section"}
    ]
  return (
    <div>
        {
            sections.map((section)=>{
                return <button className='m-3 text-white bg-green-500 p-4' onClick={()=>navigate(`/storeManager/allProduct/${section.id}`)} key={section.id}>{section.name}</button>
            })
        }

    </div>
  )
}

export default SectionStoreManager