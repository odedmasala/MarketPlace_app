const mongoose = require("mongoose");
const { storesIds } = require("../storesRef");
// * SECTION ID  *//
// * FRUIT ID *//
const fruitSectionID1 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const fruitSectionID2 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
// * MUSIC ID *//
const musicSectionID1 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const musicSectionID2 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
// * BEAUTY ID *//
const BeautySectionID1 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const BeautySectionID2 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
// * ALCOHOL ID *//
const alcoholSectionID1 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const alcoholSectionID2 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
// * FRUIT SECTION *//

const { fruitProductID1, fruitProductID2 } = require("../fruitProduct");
const fruitSection1 = [
  {
    _id: fruitSectionID1[0],
    name: "פירות הדר",
    store: storesIds[0],
    products: [
      fruitProductID1[6],
      fruitProductID1[7],
      fruitProductID1[8],
      fruitProductID1[9],
      fruitProductID1[10],
      fruitProductID1[11],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[1],
    name: "פירות (ללא הדר)",
    store: storesIds[0],
    products: [
      fruitProductID1[18],
      fruitProductID1[19],
      fruitProductID1[20],
      fruitProductID1[21],
      fruitProductID1[22],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[2],
    name: "פירות טרופים",
    products: [
      fruitProductID1[12],
      fruitProductID1[13],
      fruitProductID1[14],
      fruitProductID1[15],
      fruitProductID1[16],
      fruitProductID1[17],
    ],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[3],
    name: "ירקות",
    store: storesIds[0],
    products: [
      fruitProductID1[0],
      fruitProductID1[1],
      fruitProductID1[2],
      fruitProductID1[3],
      fruitProductID1[4],
      fruitProductID1[5],
    ],
    createdBy: "Jacob admin",
  },
];

const fruitSection2 = [
  {
    _id: fruitSectionID2[0],
    name: "פירות הדר",
    store: storesIds[1],
    products: [
      fruitProductID2[6],
      fruitProductID2[7],
      fruitProductID2[8],
      fruitProductID2[9],
      fruitProductID2[10],
      fruitProductID2[11],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[1],
    name: "פירות (ללא הדר)",
    store: storesIds[1],
    products: [
      fruitProductID2[18],
      fruitProductID2[19],
      fruitProductID2[20],
      fruitProductID2[21],
      fruitProductID2[22],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[2],
    name: "פירות טרופים",
    store: storesIds[1],
    products: [
      fruitProductID2[12],
      fruitProductID2[13],
      fruitProductID2[14],
      fruitProductID2[15],
      fruitProductID2[16],
      fruitProductID2[17],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[3],
    name: "ירקות",
    store: storesIds[1],
    products: [
      fruitProductID2[0],
      fruitProductID2[1],
      fruitProductID2[2],
      fruitProductID2[3],
      fruitProductID2[4],
      fruitProductID2[5],
    ],
    createdBy: "Jacob admin",
  },
];
// * MUSIC SECTION *//
const { musicProductIDS1, musicProductIDS2 } = require("../musicProduct");
const musicSection1 = [
  {
    _id: musicSectionID1[0],
    name: "כלי נשיפה",
    store: storesIds[2],
    products: [
      musicProductIDS1[0],
      musicProductIDS1[1],
      musicProductIDS1[2],
      musicProductIDS1[3],
      musicProductIDS1[4],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[1],
    name: "גיטרות וכלי מיתר",
    store: storesIds[2],
    products: [
      musicProductIDS1[5],
      musicProductIDS1[6],
      musicProductIDS1[7],
      musicProductIDS1[8],
      musicProductIDS1[9],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[2],
    name: "תופים וכלי הקשה",
    store: storesIds[2],
    products: [
      musicProductIDS1[10],
      musicProductIDS1[11],
      musicProductIDS1[12],
      musicProductIDS1[13],
      musicProductIDS1[14],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[3],
    name: "קלידים ופסנתרים",
    products: [
      musicProductIDS1[15],
      musicProductIDS1[16],
      musicProductIDS1[17],
      musicProductIDS1[18],
    ],
    products,
    createdBy: "Jacob admin",
  },
];

const musicSection2 = [
  {
    _id: musicSectionID2[0],
    name: "כלי נשיפה",
    store: storesIds[3],
    products: [
      musicProductIDS2[0],
      musicProductIDS2[1],
      musicProductIDS2[2],
      musicProductIDS2[3],
      musicProductIDS2[4],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[1],
    name: "גיטרות וכלי מיתר",
    store: storesIds[3],
    products: [
      musicProductIDS2[5],
      musicProductIDS2[6],
      musicProductIDS2[7],
      musicProductIDS2[8],
      musicProductIDS2[9],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[2],
    name: "תופים וכלי הקשה",
    store: storesIds[3],
    products: [
      musicProductIDS2[10],
      musicProductIDS2[11],
      musicProductIDS2[12],
      musicProductIDS2[13],
      musicProductIDS2[14],
    ],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[3],
    name: "קלידים ופסנתרים",
    store: storesIds[3],
    products: [
      musicProductIDS2[15],
      musicProductIDS2[16],
      musicProductIDS2[17],
      musicProductIDS2[18],
    ],
    createdBy: "Jacob admin",
  },
];
// * BEAUTY SECTION *//

const BeautySection1 = [
  {
    _id: BeautySectionID1[0],
    name: "בישום יוקרה",
    store: storesIds[4],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[1],
    name: "טיפוח",
    store: storesIds[4],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[2],
    name: "איפור",
    store: storesIds[4],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[3],
    name: "טיפוח שיער מקצועי",
    store: storesIds[4],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[4],
    name: "גילוח והסרת שיער",
    store: storesIds[4],
    products,
    createdBy: "Jacob admin",
  },
];

const BeautySection2 = [
  {
    _id: BeautySectionID2[0],
    name: "בישום יוקרה",
    store: storesIds[5],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[1],
    name: "טיפוח",
    store: storesIds[5],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[2],
    name: "איפור",
    store: storesIds[5],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[3],
    name: "טיפוח שיער מקצועי",
    store: storesIds[5],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[4],
    name: "גילוח והסרת שיער",
    store: storesIds[5],
    products,
    createdBy: "Jacob admin",
  },
];
// * ALCOHOL SECTION *//
const alcoholSection1 = [
  {
    _id: alcoholSectionID1[0],
    name: "יין ובירה",
    store: storesIds[6],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[1],
    name: "וודקה",
    store: storesIds[6],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[2],
    name: "וויסקי",
    store: storesIds[6],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[3],
    name: "טקילה",
    store: storesIds[6],
    products,
    createdBy: "Jacob admin",
  },
];

const alcoholSection2 = [
  {
    _id: alcoholSectionID2[0],
    name: "יין ובירה",
    store: storesIds[7],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[1],
    name: "וודקה",
    store: storesIds[7],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[2],
    name: "וויסקי",
    store: storesIds[7],
    products,
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[3],
    name: "טקילה",
    store: storesIds[7],
    products,
    createdBy: "Jacob admin",
  },
];

const combineSections = [
  ...BeautySection1,
  ...BeautySection2,
  ...alcoholSection1,
  ...alcoholSection2,
  ...fruitSection1,
  ...fruitSection2,
  ...musicSection1,
  ...musicSection2,
];
module.exports = {
  fruitSectionID1,
  fruitSectionID2,
  musicSectionID1,
  musicSectionID2,
  BeautySectionID1,
  BeautySectionID2,
  alcoholSectionID1,
  alcoholSectionID2,
  fruitSection1,
  fruitSection2,
  musicSection1,
  musicSection2,
  BeautySection1,
  BeautySection2,
  alcoholSection1,
  alcoholSection2,
  combineSections,
};
