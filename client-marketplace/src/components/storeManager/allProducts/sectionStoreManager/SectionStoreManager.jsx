import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SectionStoreManager = () => {
    const navigate =useNavigate()
    const {id}=useParams()
    const [sections,setSections] =useState([])
    const findSections = ()=>{
        const data =[
            {id:"1",name:"A section",store:"1"},
            {id:"2",name:"B section",store:"1"},
            {id:"3",name:"C section",store:"2"}
            
        ]
        const finalData = data.filter(section=>section.store === id)
        setSections(finalData)
    }
    
useEffect(()=>findSections(),[id])

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