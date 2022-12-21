// import React from "react";
// import { ImLocation } from "react-icons/im";
// import { RiArrowDropDownLine } from "react-icons/ri";

// export default function CheckOut() {
//   return (
//     <div className="w-[60%]">
//       <div className="flex justify-between ">
//         <div>
//           <RiArrowDropDownLine size={"30px"}/>
//         </div>
//         <div className="flex items-center">
//           <h3 className="px-2 text-2xl">הוסף כתובת למשלוח</h3>
//           <ImLocation className="text-teal-500" size={"30px"} />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Accordion } from "flowbite-react";
import DetailsUser from "./details/DetailsUser";
import Delivery from "./delivery/Delivery";

export default function CheckOut() {
  return (
    <div className="w-[75%]">
      <Accordion className="w-full">
        <Accordion.Panel>
          <Accordion.Title>פרטי משלוח</Accordion.Title>
          <Accordion.Content>
            <DetailsUser />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>זמן משלוח</Accordion.Title>
          <Accordion.Content>
          <Delivery/>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            תשלום
          </Accordion.Title>
          <Accordion.Content>

          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
