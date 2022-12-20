const mongoose = require("mongoose");
const { storesIds } = require("../storesRef");

const departmentsIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

console.log(departmentsIds);
const departments = [
  {
    _id: departmentsIds[0],
    name: "פירות וירקות",
    image: {
      public_id: "department/Fruit_vegetabl-_department_t14yga",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671453317/department/Fruit_vegetabl-_department_t14yga.jpg",
    },
    active: true,
    stores: [storesIds[0], storesIds[1]],
    createdBy: "oded admin",
  },
  {
    _id: departmentsIds[1],
    name: "כלי נגינה",
    image: {
      public_id: "department/Musical-department_br2vnv",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671453150/department/Musical-department_br2vnv.jpg",
    },
    active: true,
    stores: [storesIds[2], storesIds[3]],
    createdBy: "oded admin",
  },
  {
    _id: departmentsIds[2],
    name: "מוצרי פארם",
    image: {
      public_id: "department/Beauty-products-department_ihispy",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671453190/department/Beauty-products-department_ihispy.jpg",
    },
    active: true,
    stores: [storesIds[4], storesIds[5]],
    createdBy: "oded admin",
  },
  {
    _id: departmentsIds[3],
    name: "משקאות",
    image: {
      public_id: "department/Liquor-store-department_ecpoyz",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671453074/department/Liquor-store-department_ecpoyz.jpg",
    },
    active: true,
    stores: [storesIds[6], storesIds[7]],
    createdBy: "oded admin",
  },
];

module.exports = {
  departmentsIds,
  departments,
};
