import React from "react";
import { Accordion, Table } from "flowbite-react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import Receipt from "../../components/receipt/Receipt";
import { useState } from "react";

export default function MyOrders() {
  return (
    <div className="mt-10 bg-white">
      <h1 className="text-xl text-right m-5">ההזמנות שלי</h1>
      <Accordion arrowIcon={HiOutlineArrowCircleDown}>
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex">
              <p className="mx-5">מספר הזמנה: 1111111111</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <Receipt/>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
