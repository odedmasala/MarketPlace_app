import React from "react";
import { ImLocation } from "react-icons/im";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import DetailsUser from "./details/DetailsUser";
import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";
import { useState } from "react";
export default function CheckOut() {
  const [toggle, setToggle] = useState(false);
  const [patAccordion, setPayAccordion] = useState(false);
  return (
    <div className="w-[85%]">
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {toggle ? (
              <RiArrowDropRightLine size={"50px"} />
            ) : (
              <RiArrowDropDownLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">הוסף כתובת למשלוח</h3>
            <ImLocation className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div className={toggle ? "hidden" : ""}>
          <DetailsUser toggle={setToggle} />
        </div>
      </div>
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {toggle ? (
              <RiArrowDropRightLine size={"50px"} />
            ) : (
              <RiArrowDropDownLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">זמן למשלוח</h3>
            <AiFillClockCircle className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div className={patAccordion?"hidden":""}>{toggle ? <Delivery nextPage={setPayAccordion} /> : ""}</div>
      </div>
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {patAccordion ? (
               <RiArrowDropDownLine size={"50px"} />
            ) : (
              <RiArrowDropRightLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">תשלום</h3>
            <ImLocation className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div>
          {patAccordion?<Payment/>:""}
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="flex justify-between ">
<div>
{toggle ? (
     <RiArrowDropDownLine size={"50px"} /> 
    ) : (
      <RiArrowDropRightLine size={"50px"} />
    )}
</div>
<div className="flex items-center">
  <h3 className="px-2 text-2xl">זמן למשלוח</h3>
  <AiFillClockCircle className="text-teal-500" size={"30px"} />
</div>
</div>
<div className="flex justify-between ">
<div>
  <RiArrowDropDownLine size={"50px"} />
</div>
<div className="flex items-center">
  <h3 className="px-2 text-2xl">תשלום</h3>
  <BsCreditCard2FrontFill className="text-teal-500" size={"30px"} />
</div>
</div> */
}

// import React from "react";
// import { Accordion } from "flowbite-react";
// import DetailsUser from "./details/DetailsUser";
// import Delivery from "./delivery/Delivery";
// import Payment from "./payment/Payment";

// export default function CheckOut() {
//   return (
//     <div className="w-[75%]">
//       <Accordion className="w-full">
//         <Accordion.Panel>
//           <Accordion.Title>פרטי משלוח</Accordion.Title>
//           <Accordion.Content>
//             <DetailsUser />
//           </Accordion.Content>
//         </Accordion.Panel>
//         <Accordion.Panel>
//           <Accordion.Title>זמן משלוח</Accordion.Title>
//           <Accordion.Content>
//             <Delivery />
//           </Accordion.Content>
//         </Accordion.Panel>
//         <Accordion.Panel>
//           <Accordion.Title>תשלום</Accordion.Title>
//           <Accordion.Content>
//             <Payment />
//           </Accordion.Content>
//         </Accordion.Panel>
//       </Accordion>
//     </div>
//   );
// }
