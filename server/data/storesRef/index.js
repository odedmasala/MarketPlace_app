const mongoose = require("mongoose");

const { departmentsIds } = require("../departments");
const {
  BeautySectionID1,
  BeautySectionID2,
  alcoholSectionID1,
  alcoholSectionID2,
  fruitSectionID1,
  fruitSectionID2,
  musicSectionID2,
  musicSectionID1,
} = require("../section");
// * STORE IDS *//
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

// * STORE OBJECT *//
const stores = [
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
    Products: "",
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
    Products: "",
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
    Products: "",
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
    Products: "",
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
    name: "סופר פארם",
    description: "סופר פארם הרשת הגדולה במדינה",
    logo: {
      public_id: "stores/פארם/סופר_פארם_thrdtw",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671465181/stores/%D7%A4%D7%90%D7%A8%D7%9D/%D7%A1%D7%95%D7%A4%D7%A8_%D7%A4%D7%90%D7%A8%D7%9D_thrdtw.png",
    },
    phone: "050-55555555",
    email: "cccccc@aa.aa",
    department: departmentsIds[2],
    Products: "",
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
    Products: "",
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
    Products: "",
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
    Products: "",
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

module.exports = {
  stores,
  storesIds
};