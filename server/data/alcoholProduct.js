const mongoose = require("mongoose");

const vodkaID = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
]
// const beerID =
const alcoholProduct = [
    {
      image: {
        public_id: "products/משקאות/baluga_cwidk6",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/baluga_cwidk6.png"
      },
      name: "באלוגה",
      price: 122,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "באלוגה",
      brand: "ruski standard",
      active: true,
      description: "באלוגה ליטר",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/ruski_eyxuqk",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/ruski_eyxuqk.jpg"
      },
      name: "רוסקי",
      price: 90,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "רוסקי",
      brand: "ruski standard",
      active: true,
      description: "רוסקי",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/van_gogh_i7sza3",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/van_gogh_i7sza3.jpg"
      },
      name: "ואן גוך",
      price: 120,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "ואן גוך",
      brand: "van gogh",
      active: true,
      description: "ואן גוך",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/gregos_mumgpk",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/gregos_mumgpk.jpg"
      },
      name: "גרייגוס",
      price: 120,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.75,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "גרייגוס",
      brand: "grey goose",
      active: true,
      description: "גרייגוס",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/filandia_no0l0b",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/filandia_no0l0b.jpg"
      },
      name: "פילנדיה",
      price: 120,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.75,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "פילנדיה",
      brand: "finlandia",
      active: true,
      description: "פילנדיה",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/carlsberg_kavzwf",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/carlsberg_kavzwf.jpg"
      },
      name: "קאלסברג",
      price: 12,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.3,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "קאלסברג",
      brand: "carlsberg",
      active: true,
      description: "קאלסברג",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/heineken_imnbmp",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/heineken_imnbmp.jpg"
      },
      name: "הייניקן",
      price: 12,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.3,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "הייניקן",
      brand: "heineken",
      active: true,
      description: "הייניקן",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/blue_nun_lcsved",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359268/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/blue_nun_lcsved.jpg"
      },
      name: "בלו נאן",
      price: 30,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.75,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "בלו נאן",
      brand: "blue nun",
      active: true,
      description: "בלו נאן",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/cabrne_sabinion_hltyrd",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359268/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/cabrne_sabinion_hltyrd.jpg"
      },
      name: "דרך ארץ קברנה סוביניון",
      price: 230,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "דרך ארץ קברנה סוביניון",
      brand: "דרך ארץ קברנה סוביניון",
      active: true,
      description: "דרך ארץ קברנה סוביניון",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/cabrne_vento_mtphe",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359268/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/cabrne_vento_mtphef.jpg"
      },
      name: "לה קצ'יאטורה קברנה ונטו",
      price: 430,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "לה קצ'יאטורה קברנה ונטו",
      brand: "לה קצ'יאטורה קברנה ונטו",
      active: true,
      description: "לה קצ'יאטורה קברנה ונטו",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/black_label_qmlcjx",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/black_label_qmlcjx.jpg"
      },
      name: "בלאק לאבל",
      price: 130,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "בלאק לאבל",
      brand: "black label",
      active: true,
      description: "בלאק לאבל",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/מיקטרס_ברבן_mfallc",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%9E%D7%99%D7%A7%D7%98%D7%A8%D7%A1_%D7%91%D7%A8%D7%91%D7%9F_mfallc.jpg"
      },
      name: "מקרס ברבן",
      price: 180,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "מקרס ברבן",
      brand: "makers barben",
      active: true,
      description: "מקרס ברבן",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/דלמור_פורט_ווד_c3afaj",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%93%D7%9C%D7%9E%D7%95%D7%A8_%D7%A4%D7%95%D7%A8%D7%98_%D7%95%D7%95%D7%93_c3afaj.jpg"
      },
      name: "דלמור פורט ווד",
      price: 170,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "דלמור פורט ווד",
      brand: "דלמור פורט ווד",
      active: true,
      description: "דלמור פורט ווד",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/וויסקי_טומטין_s8xbw9",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%95%D7%95%D7%99%D7%A1%D7%A7%D7%99_%D7%98%D7%95%D7%9E%D7%98%D7%99%D7%9F_s8xbw9.jpg"
      },
      name: "וויסקי טומטין",
      price: 110,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "וויסקי טומטין",
      brand: "tomatin",
      active: true,
      description: "וויסקי טומטין",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/ג_ק_דניאלס_fbzwfp",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359269/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%92_%D7%A7_%D7%93%D7%A0%D7%99%D7%90%D7%9C%D7%A1_fbzwfp.jpg"
      },
      name: "ג'ק דניאלס",
      price: 115,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 0.75,
        weightUnit: "mls"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "ג'ק דניאלס",
      brand: "jack daniels",
      active: true,
      description: "ג'ק דניאלס",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/סנוטה_קריסטלינו_אנייחו_zdnhxy",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%A1%D7%A0%D7%95%D7%98%D7%94_%D7%A7%D7%A8%D7%99%D7%A1%D7%98%D7%9C%D7%99%D7%A0%D7%95_%D7%90%D7%A0%D7%99%D7%99%D7%97%D7%95_zdnhxy.jpg"
      },
      name: "סנוטה קריסטלינו אנייחו",
      price: 175,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "סנוטה קריסטלינו אנייחו",
      brand: "סנוטה קריסטלינו אנייחו",
      active: true,
      description: "סנוטה קריסטלינו אנייחו",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/פאדרה_אזול_אנייחו_wi17kq",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359271/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%A4%D7%90%D7%93%D7%A8%D7%94_%D7%90%D7%96%D7%95%D7%9C_%D7%90%D7%A0%D7%99%D7%99%D7%97%D7%95_wi17kq.jpg"
      },
      name: "פאדרה אזול אנייחו",
      price: 185,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 2,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "פאדרה אזול אנייחו",
      brand: "פאדרה אזול אנייחו",
      active: true,
      description: "פאדרה אזול אנייחו",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/סיירה_קינמון_תפוז_l1djok",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%A1%D7%99%D7%99%D7%A8%D7%94_%D7%A7%D7%99%D7%A0%D7%9E%D7%95%D7%9F_%D7%AA%D7%A4%D7%95%D7%96_l1djok.jpg"
      },
      name: "סיירה קינמון תפוז",
      price: 110,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "סיירה קינמון תפוז",
      brand: "סיירה קינמון תפוז",
      active: true,
      description: "סיירה קינמון תפוז",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/קא_בלנקו_mmukyt",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%A7%D7%90_%D7%91%D7%9C%D7%A0%D7%A7%D7%95_mmukyt.jpg"
      },
      name: "קא בלאנקו",
      price: 70,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 1,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "קא בלאנקו",
      brand: "קא בלאנקו",
      active: true,
      description: "קא בלאנקו",
      quantity: 10,
      createBy: "oded admin"
    },
    {
      image: {
        public_id: "products/משקאות/רוסטר_רוחו_בלאנק_qwsi8r",
        url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359270/products/%D7%9E%D7%A9%D7%A7%D7%90%D7%95%D7%AA/%D7%A8%D7%95%D7%A1%D7%98%D7%A8_%D7%A8%D7%95%D7%97%D7%95_%D7%91%D7%9C%D7%90%D7%A0%D7%A7_qwsi8r.jpg"
      },
      name: "רוסטר רוחו בלאנק",
      price: 470,
      storeId: "",
      subCategory: "",
      weight: {
        inWeight: true,
        avgWeightPerUnit: 2,
        weightUnit: "liters"
      },
      unit: {
        measureUnits: "liters"
      },
      manufacture: "רוסטר רוחו בלאנק",
      brand: "רוסטר רוחו בלאנק",
      active: true,
      description: "רוסטר רוחו בלאנק",
      quantity: 10,
      createBy: "oded admin"
    }
  ]