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
const fruitSection1 = [
  {
    _id: fruitSectionID1[0],
    name: "פירות הדר",
    store: storesIds[0],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[1],
    name: "פירות (ללא הדר)",
    store: storesIds[0],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[2],
    name: "פירות טרופים",
    store: storesIds[0],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID1[3],
    name: "ירקות",
    store: storesIds[0],
    createdBy: "Jacob admin",
  },
];

const fruitSection2 = [
  {
    _id: fruitSectionID2[0],
    name: "פירות הדר",
    store: storesIds[1],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[1],
    name: "פירות (ללא הדר)",
    store: storesIds[1],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[2],
    name: "פירות טרופים",
    store: storesIds[1],
    createdBy: "Jacob admin",
  },
  {
    _id: fruitSectionID2[3],
    name: "ירקות",
    store: storesIds[1],
    createdBy: "Jacob admin",
  },
];

// * MUSIC SECTION *//
const musicSection1 = [
  {
    _id: musicSectionID1[0],
    name: "כלי נשיפה",
    store: storesIds[2],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[1],
    name: "גיטרות וכלי מיתר",
    store: storesIds[2],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[2],
    name: "תופים וכלי הקשה",
    store: storesIds[2],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID1[3],
    name: "קלידים ופסנתרים",

    createdBy: "Jacob admin",
  },
];

const musicSection2 = [
  {
    _id: musicSectionID2[0],
    name: "כלי נשיפה",
    store: storesIds[3],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[1],
    name: "גיטרות וכלי מיתר",
    store: storesIds[3],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[2],
    name: "תופים וכלי הקשה",
    store: storesIds[3],
    createdBy: "Jacob admin",
  },
  {
    _id: musicSectionID2[3],
    name: "קלידים ופסנתרים",
    store: storesIds[3],
    createdBy: "Jacob admin",
  },
];

// * BEAUTY SECTION *//
const BeautySection1 = [
  {
    _id: BeautySectionID1[0],
    name: "בישום יוקרה",
    store: storesIds[4],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[1],
    name: "טיפוח",
    store: storesIds[4],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[2],
    name: "איפור",
    store: storesIds[4],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[3],
    name: "טיפוח שיער מקצועי",
    store: storesIds[4],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID1[4],
    name: "גילוח והסרת שיער",
    store: storesIds[4],
    createdBy: "Jacob admin",
  },
];

const BeautySection2 = [
  {
    _id: BeautySectionID2[0],
    name: "בישום יוקרה",
    store: storesIds[5],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[1],
    name: "טיפוח",
    store: storesIds[5],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[2],
    name: "איפור",
    store: storesIds[5],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[3],
    name: "טיפוח שיער מקצועי",
    store: storesIds[5],
    createdBy: "Jacob admin",
  },
  {
    _id: BeautySectionID2[4],
    name: "גילוח והסרת שיער",
    store: storesIds[5],
    createdBy: "Jacob admin",
  },
];

// * ALCOHOL SECTION *//
const alcoholSection1 = [
  {
    _id: alcoholSectionID1[0],
    name: "יין ובירה",
    store: storesIds[6],
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[1],
    name: "וודקה",
    store: storesIds[6],

    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[2],
    name: "וויסקי",
    store: storesIds[6],
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID1[3],
    name: "טקילה",
    store: storesIds[6],
    createdBy: "Jacob admin",
  },
];

const alcoholSection2 = [
  {
    _id: alcoholSectionID2[0],
    name: "יין ובירה",
    store: storesIds[7],
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[1],
    name: "וודקה",
    store: storesIds[7],
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[2],
    name: "וויסקי",
    store: storesIds[7],
    createdBy: "Jacob admin",
  },
  {
    _id: alcoholSectionID2[3],
    name: "טקילה",
    store: storesIds[7],
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
