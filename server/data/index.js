const mongoose = require("mongoose");
// * STORE AND DEPARTMENT ID *//
const storesIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
const departmentsIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];
// * INSERT DATA TO DEPARTMENT *//
module.exports.departments = [
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
// * INSERT DATA TO STORES *//
module.exports.stores = [
  {
    _id: storesIds[0],
    bnNumber: "aaa111",
    name: "נוי השדה",
    description:
      "נוי השדה מביאה אליך הביתה את כל טוב השדה ובאכות הכי גבוהה שיש",
    logo: {
      public_id: "stores/פירות ירקות/נוי_השדה_drijdu",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465512/stores/%D7%A4%D7%99%D7%A8%D7%95%D7%AA%20%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A0%D7%95%D7%99_%D7%94%D7%A9%D7%93%D7%94_drijdu.png",
    },
    phone: "050-1111111",
    email: "aaa@aa.aa",
    department: departmentsIds[0],
    sections:fruitSectionID1,
    Products,
    address: {
      city: "חיפה",
      street: "הרצל",
      building: 86,
      apartment: 2,
      floor: 0,
      zone: "צפון",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[1],
    bnNumber: "aaa222",
    name: "המושבה",
    description:
      "המושבה יבואנית הפירות הותיקה בשוק , הפרות והירקות שכולנו גדלנו עליהם",
    logo: {
      public_id: "stores/פירות ירקות/המושבה-לוגו-בלי-רקע_nxcvdi",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465533/stores/%D7%A4%D7%99%D7%A8%D7%95%D7%AA%20%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%94%D7%9E%D7%95%D7%A9%D7%91%D7%94-%D7%9C%D7%95%D7%92%D7%95-%D7%91%D7%9C%D7%99-%D7%A8%D7%A7%D7%A2_nxcvdi.png",
    },
    phone: "050-2222222222",
    email: "dddd@aa.aa",
    department: departmentsIds[0],
    sections:fruitSectionID2,
    Products,
    address: {
      city: "תל אביב",
      street: "ארלוזורוב",
      building: 3,
      apartment: 0,
      floor: 0,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[2],
    bnNumber: "bbbb22222",
    name: "musicZol",
    description:
      "מיוסקזול חרטה על דגלה להביא ללקוחתייה את כלי הנגינה ברמה הגבוה ביותר",
    logo: {
      public_id: "stores/כלי נגינה/musicZol_ktfxze",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465114/stores/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94/musicZol_ktfxze.jpg",
    },
    phone: "050-44444444",
    email: "bbbbb@aa.aa",
    department: departmentsIds[1],
    sections:musicSectionID1,
    Products,
    address: {
      city: "לוד",
      street: "בת שמונה",
      building: 23,
      apartment: 2,
      floor: 4,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[3],
    bnNumber: "bbb1111",
    name: "SARINA RECORDS",
    description:
      "סרינה רקורד'ס באה לתת לכם את כל כלי הנגינה במחיר שווה לכל כיס",
    logo: {
      public_id: "stores/כלי נגינה/sarina_oozqok",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465105/stores/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94/sarina_oozqok.jpg",
    },
    phone: "050-333333333",
    email: "eeee@aa.aa",
    department: departmentsIds[1],
    sections:musicSectionID2,
    Products,
    address: {
      city: "לוד",
      street: "בת שבע",
      building: 7,
      apartment: 8,
      floor: 10,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[4],
    bnNumber: "cccc1111",
    name: "סופר פראם",
    description: "סופר פארם הרשת הגדולה במדינה",
    logo: {
      public_id: "stores/פארם/סופר_פארם_thrdtw",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465181/stores/%D7%A4%D7%90%D7%A8%D7%9D/%D7%A1%D7%95%D7%A4%D7%A8_%D7%A4%D7%90%D7%A8%D7%9D_thrdtw.png",
    },
    phone: "050-55555555",
    email: "cccccc@aa.aa",
    department: departmentsIds[2],
    sections:BeautySectionID1,
    Products,
    address: {
      city: "באר שבע",
      street: "המסגר",
      building: 8,
      apartment: 8,
      floor: 4,
      zone: "דרום",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[5],
    bnNumber: "cccc22222",
    name: "בי פארם",
    description:
      "בי פארם הוקמה בשנת 2019 כשראתה את עליית המחירים והחליטה להפוך לרשת החברתית הראשונה בישראל  ",
    logo: {
      public_id: "stores/פארם/בי_פארם_yfckph",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465441/stores/%D7%A4%D7%90%D7%A8%D7%9D/%D7%91%D7%99_%D7%A4%D7%90%D7%A8%D7%9D_yfckph.jpg",
    },
    phone: "050-666666",
    email: "fffffff@aa.aa",
    department: departmentsIds[2],
    sections:BeautySectionID2,
    Products,
    address: {
      city: "רמת גן",
      street: "המסגר",
      building: 8,
      apartment: 8,
      floor: 4,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[6],
    bnNumber: "ddd11111",
    name: "באר המשקאות",
    description:
      "כשאתה מארגן אירוע ואתה נהיה צמא מרוב תכנון בוא לבאר המשקאות ואנחנו נרווה את הצמא שלך",
    logo: {
      public_id: "stores/משקאות/באר_המשקאות_ecftae",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465142/stores/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%91%D7%90%D7%A8_%D7%94%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA_ecftae.jpg",
    },
    phone: "050-777777",
    email: "gggggg@aa.aa",
    department: departmentsIds[3],
    sections:alcoholSectionID1,
    Products,
    address: {
      city: "רחובות",
      street: "הרצל",
      building: 210,
      apartment: 3,
      floor: 0,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
  {
    _id: storesIds[7],
    bnNumber: "ddd22222",
    name: "בנא משקאות",
    description: "בנא משקאות המקום של האלכוהל בישראל",
    logo: {
      public_id: "stores/משקאות/בנא_משקאות_i3wvvm",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465147/stores/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%91%D7%A0%D7%90_%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA_i3wvvm.png",
    },
    phone: "050-777777",
    email: "gggggg@aa.aa",
    department: departmentsIds[3],
    sections:alcoholSectionID2,
    Products,
    address: {
      city: "קרית עקרון",
      street: "בילו",
      building: 500,
      apartment: 7,
      floor: 0,
      zone: "מרכז",
    },
    createdBy: "Jacob admin",
  },
];
// * INSERT DATA TO SECTIONS *//
// * FRUIT SECTION *//
const fruitSection1 = [
  { _id:fruitSectionID1[0], name: "פירות הדר", store:storesIds[0], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID1[1], name: "פירות (ללא הדר)", store:storesIds[0], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID1[2], name: "פירות טרופים", store:storesIds[0], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID1[3], name: "ירקות", store:storesIds[0], products, createdBy: "Jacob admin" },
];
const fruitSection2 = [
  { _id:fruitSectionID2[0], name: "פירות הדר", store:storesIds[1], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID2[1], name: "פירות (ללא הדר)", store:storesIds[1], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID2[2], name: "פירות טרופים", store:storesIds[1], products, createdBy: "Jacob admin" },
  { _id:fruitSectionID2[3], name: "ירקות", store:storesIds[1], products, createdBy: "Jacob admin" },
];
// * MUSIC SECTION *//
const musicSection1 = [
  { _id:musicSectionID1[0], name: "כלי נשיפה", store:storesIds[2], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID1[1], name: "גיטרות וכלי מיתר", store:storesIds[2], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID1[2], name: "תופים וכלי הקשה", store:storesIds[2], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID1[3], name: "קלידים ופסנתרים", store:storesIds[2], products, createdBy: "Jacob admin" },
];
const musicSection2 = [
  { _id:musicSectionID2[0], name: "כלי נשיפה", store:storesIds[3], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID2[1], name: "גיטרות וכלי מיתר", store:storesIds[3], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID2[2], name: "תופים וכלי הקשה", store:storesIds[3], products, createdBy: "Jacob admin" },
  {  _id:musicSectionID2[3], name: "קלידים ופסנתרים", store:storesIds[3], products, createdBy: "Jacob admin" },
];
// * BEAUTY SECTION *//
const BeautySection1 = [
  { _id:BeautySectionID1[0], name: "בישום יוקרה", store:storesIds[4], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID1[1], name: "טיפוח", store:storesIds[4], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID1[2], name: "איפור", store:storesIds[4], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID1[3], name: "טיפוח שיער מקצועי", store:storesIds[4], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID1[4], name: "גילוח והסרת שיער", store:storesIds[4], products, createdBy: "Jacob admin" },
];
const BeautySection2 = [
  { _id:BeautySectionID2[0], name: "בישום יוקרה", store:storesIds[5], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID2[1], name: "טיפוח", store:storesIds[5], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID2[2], name: "איפור", store:storesIds[5], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID2[3], name: "טיפוח שיער מקצועי", store:storesIds[5], products, createdBy: "Jacob admin" },
  { _id:BeautySectionID2[4], name: "גילוח והסרת שיער", store:storesIds[5], products, createdBy: "Jacob admin" },
];
// * ALCOHOL SECTION *//
const alcoholSection1 = [
  { _id:alcoholSectionID1[0], name: "יין ובירה", store:storesIds[6], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID1[1], name: "וודקה", store:storesIds[6], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID1[2], name: "וויסקי", store:storesIds[6], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID1[3], name: "טקילה", store:storesIds[6], products, createdBy: "Jacob admin" },
];
const alcoholSection2 = [
  { _id:alcoholSectionID2[0], name: "יין ובירה", store:storesIds[7], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID2[1], name: "וודקה", store:storesIds[7], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID2[2], name: "וויסקי", store:storesIds[7], products, createdBy: "Jacob admin" },
  { _id:alcoholSectionID2[3], name: "טקילה", store:storesIds[7], products, createdBy: "Jacob admin" },
];

module.exports.combineSections = [...fruitSection1,...fruitSection2,...musicSection1,...musicSection2,...BeautySection1,...BeautySection2,...alcoholSection1,...alcoholSection2]
// * INSERT DATA TO PRODUCTS *//


