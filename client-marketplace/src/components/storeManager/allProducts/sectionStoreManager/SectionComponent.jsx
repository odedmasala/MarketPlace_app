import React, { useState } from 'react'

const SectionComponent = ({section,categoryFilter}) => {
    const [category,setCategory]=useState(section)

    const changeCategory = (e)=>{
        setCategory({...category,name:e.target.value})
    }
    
  return (
    <div >
              <div
                className="m-3 text-end  p-4"
                key={section._id}
              >
                <p> שם</p>
                <input type="text" onChange={changeCategory} value={category.name} />
              </div>
              <div>
                <button className="border-2 bg-red-600 hover:bg-red-400 p-3 text-white rounded font-bold">
                  שמור שינויים
                </button>
                <button onClick={()=>{categoryFilter(section._id)}} className="border-2 bg-green-600 hover:bg-green-400 p-3 text-white rounded font-bold">
                  סנן לפי לקטגוריה
                </button>
              </div>
            </div>
  )
}

export default SectionComponent