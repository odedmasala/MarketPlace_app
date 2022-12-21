import React from 'react'
import Dropdown from './Dropdown'

const QuestionsPage = () => {
  const questions =[
    {
      title:"חחכחכחכ",
      info:"dvsvs sdv sdvc iugd kads fkus ;jksd;basd jhsvdh  vhzs nzkcjbv;s fdzsdb ubdsfsd fb sdnbskd fb"
    },
    {
      title:"חחכחכחכ",
      info:"dvsvs sdv sdvc iugd kads fkus ;jksd;basd jhsvdh  vhzs nzkcjbv;s fdzsdb ubdsfsd fb sdnbskd fb"
    },
    {
      title:"חחכחכחכ",
      info:"dvsvs sdv sdvc iugd kads fkus ;jksd;basd jhsvdh  vhzs nzkcjbv;s fdzsdb ubdsfsd fb sdnbskd fb"
    },
    {
      title:"חחכחכחכ",
      info:"dvsvs sdv sdvc iugd kads fkus ;jksd;basd jhsvdh  vhzs nzkcjbv;s fdzsdb ubdsfsd fb sdnbskd fb"
    },
    {
      title:"חחכחכחכ",
      info:"dvsvs sdv sdvc iugd kads fkus ;jksd;basd jhsvdh  vhzs nzkcjbv;s fdzsdb ubdsfsd fb sdnbskd fb"
    },
  ]
  return (
    <div className="py-6 px-14 text-end">
    <h1 className="text-center text-4xl mb-14">שאלות נפוצות</h1>
   
   {
    questions.map((question,i)=><Dropdown key={i} question={question}/>)
   }
   
   
  </div>
  )
}

export default QuestionsPage