const mongoose = require("mongoose");
const { storesIds } = require("../storesRef");
const { musicSectionID1, musicSectionID2 } = require("../section");

const musicProductIDS1 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const musicProduct1 = [
  {
    _id: musicProductIDS1[0],
    image: {
      public_id: "products/כלי נגינה /חלילית_nlzxum",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%97%D7%9C%D7%99%D7%9C%D7%99%D7%AA_nlzxum.jpg",
    },
    name: "STUDIO Tenor in 'C' pear Küng",
    price: 53,
    storeId: storesIds[2],
    subCategory: musicSectionID1[0],
    manufacture: "כלי שיר",
    brand: "STUDIO Tenor",
    description: "חלילית טנור מעץ אגס דגם 1501 מבית חברת Küng הגרמנית",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[1],
    image: {
      public_id: "products/כלי נגינה /חצוצרה_isz35y",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%97%D7%A6%D7%95%D7%A6%D7%A8%D7%94_isz35y.jpg",
    },
    name: "Trumpet 390 Getzen",
    price: 253,
    storeId: storesIds[2],
    subCategory: musicSectionID1[0],
    manufacture: "כלי שיר",
    brand: "Trumpet",
    description: "חצוצרה דגם 390 Bb הכוללת ארגז קשיח ופיה מבית Getzen ",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[2],
    image: {
      public_id: "products/כלי נגינה /סקסופון_vzwwkb",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A1%D7%A7%D7%A1%D7%95%D7%A4%D7%95%D7%9F_vzwwkb.jpg",
    },
    name: "Alto Saxophone Antigua",
    price: 177,
    storeId: storesIds[2],
    subCategory: musicSectionID1[0],
    manufacture: "בטהובן ובניו",
    brand: "Antigua",
    description: "סקסופון אלט Eb עם תו #F נוסף מבית Antigua ",
    quantity: 50,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[3],
    image: {
      public_id: "products/כלי נגינה /מפוחית_zzoc63",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A4%D7%95%D7%97%D7%99%D7%AA_zzoc63.jpg",
    },
    name: "Harmonic Minor F#m Tombo",
    price: 90,
    storeId: storesIds[2],
    subCategory: musicSectionID1[0],
    manufacture: "בטהובן ובניו",
    brand: "Harmonic",
    description: "מפוחית מינור הרמוני פה דיאז מבית Lee Oskar מבית Tombo",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[4],
    image: {
      public_id: "products/כלי נגינה /טרומבון_k8herm",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%98%D7%A8%D7%95%D7%9E%D7%91%D7%95%D7%9F_k8herm.jpg",
    },
    name: "Trombone Antigua",
    price: 940,
    storeId: storesIds[2],
    subCategory: musicSectionID1[0],
    manufacture: "בטהובן ובניו",
    brand: "Antigua",
    description:
      "טרומבון ברס סלייד מסדרת X/P, כולל פיה, מטלית ניקוי וארגז נשיאה מבית Antigua",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[5],
    image: {
      public_id: "products/כלי נגינה /גיטרה_קלאסית_roldnv",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA_roldnv.jpg",
    },
    name: "גיטרה קלאסית גודל",
    price: 220,
    storeId: storesIds[2],
    subCategory: musicSectionID1[1],
    manufacture: "Valencia",
    brand: "Valencia ",
    description:
      "Valencia נוסדה באוסטרליה לפני כ50 שנה וכיום מייצרת גיטרות מדהימות שמאופיינות באיכות גבוהה במיוחד ביחס למחיר.",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[6],
    image: {
      public_id: "products/כלי נגינה /מנדולינה_wtze5x",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A0%D7%93%D7%95%D7%9C%D7%99%D7%A0%D7%94_wtze5x.jpg",
    },
    name: "RMA5NA מנדולינה איכותית מעץ מהגוני מבית Ortega",
    price: 220,
    storeId: storesIds[2],
    subCategory: musicSectionID1[1],
    manufacture: "בטהובן ובניו",
    brand: "Ortega",
    description:
      "ה – RMA5NA היא מנדולינה איכותית מעץ מהגוני מבית חברת ortega. המנדולינות של חברת ortega נבנות לפי מיטב המסורת אך יחד עם זאת מותאמות גם לצרכים ולרצונות של נגנים מודרניים, כלים נפלאים שמציבים סטנדרטים חדשים בתעשייה. חלקו הקדמי של ה – RMA5NA עשוי מעץ מהגוני איכותי, כאשר חלקו האחורי עשוי מעץ מהגוני מעוקל. העץ הנהדר הזה הוא חזק ועמיד לאורך זמן רב וכמו כן הוא מספק צליל עשיר ומלא נוכחות המדגיש הטון המזוהה כל כך עם המנדולינה. הפרטבורד עשוי מעץ אובנגקול (Ovangkol) איכותי, מפתחות הכיוון מצופים בכרום חלק ואלגנטי והמיתרים המגיעים יחד עם ה – RMA5NA הם מיתרי EXP74 נפלאים מבית החברה. כדי לשמור על תחושת העץ המקורית של הכלי, הגימור הוא בסגנון Open Pore, משמע שגוף הכלי נשאר מעט מחוספס, תכונה שהופכת את המגע במנדולינה, ואת תחושת הנגינה, למיוחדת ואותנטית במיוחד. ",
    quantity: 40,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[7],
    image: {
      public_id: "products/כלי נגינה /גיטרה_חשמלית_bwr4am.",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%97%D7%A9%D7%9E%D7%9C%D7%99%D7%AA_bwr4am.jpg",
    },
    name: "Gibson Les Paul Standard '60s",
    price: 220,
    storeId: storesIds[2],
    subCategory: musicSectionID1[1],
    manufacture: "בטהובן ובניו",
    brand: "Gibson Les",
    description:
      "ה-Les Paul בגרסה קלאסית חדשה, רלוונטית ואהובה גם היום עבור כל כך הרבה נגנים במגוון סגנונות.",
    quantity: 42,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[8],
    image: {
      public_id: "products/כלי נגינה /גיטרה_בס_xybmih",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%91%D7%A1_xybmih.jpg",
    },
    name: "גיטרה בס חשמליתIbanez TMB100",
    price: 220,
    storeId: storesIds[2],
    subCategory: musicSectionID1[1],
    manufacture: "כלי זמר",
    brand: "Ibanez",
    description:
      "סדרת הבס Talman משלבת עיצוב יפהפה של צורת הגוף ההיסטורית של Ibanez עם הסאונד הורסטילי המפתיע וחוצה הז'אנרים.",
    quantity: 15,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[9],
    image: {
      public_id: "products/כלי נגינה /גיטרה_lrpkwk",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_lrpkwk.jpg",
    },
    name: "גיטרה אקוסטית ED-11N מבית Legrand",
    price: 400,
    storeId: storesIds[2],
    subCategory: musicSectionID1[1],
    manufacture: "כלי זמר",
    brand: "Legrand",
    description:
      "גיטרה אקוסטית עם צליל עשיר ורמת גימור גבוהה מבית מבית Legrand",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[10],
    image: {
      public_id: "products/כלי נגינה /מערכת_תופים_abokdx",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA_%D7%AA%D7%95%D7%A4%D7%99%D7%9D_abokdx.jpg",
    },
    name: "מערכת תופים 5 חלקים Yamaha Recording Custom 5 Piece Shell Pack - Classic Walnut",
    price: 1999,
    storeId: storesIds[2],
    subCategory: musicSectionID1[2],
    manufacture: "כלי זמר",
    brand: "Yamaha",
    description:
      "סדרת Recording Custom מבית Yamaha היא פסגת האומנות עם איכות בניה וצליל ברמה הגבוהה ביותר.",
    quantity: 42,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[11],
    image: {
      public_id: "",
      url: "",
    },
    name: "תוף מסגרת עם עור 10",
    price: 20,
    storeId: storesIds[2],
    subCategory: musicSectionID1[2],
    manufacture: "כלי זמר",
    brand: "Meinl",
    description:
      "תופי יד מצוידים בראש העיזים הטובים ביותר שנבחרו ביד. המסגרת המסולסלת מבטיחה אחיזה נוחה, המאפשרת לאצבעות להפעיל לחץ לצורך תו 'כיפוף'. הבנייה הקלה והעם זאת מוצקה שלהם הופכת אותם למושלמים לסיטואציות ניידות וכלי הקשה ברחוב.",
    quantity: 12,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[12],
    image: {
      public_id: "products/כלי נגינה /מצילתיים_ddgaif",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A6%D7%99%D7%9C%D7%AA%D7%99%D7%99%D7%9D_ddgaif.jpg",
    },
    name: "Sultan מצילתיים 16",
    price: 50,
    storeId: storesIds[2],
    subCategory: musicSectionID1[2],
    manufacture: "כלי זמר",
    brand: "Sultan",
    description: "SULTAM מצילתיים 16 MARCHCYMB 14",
    quantity: 43,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[13],
    image: {
      public_id: "products/כלי נגינה /גונג_vcdhbl",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%95%D7%A0%D7%92_vcdhbl.jpg",
    },
    name: "SULTAN GONG-16 גונג 16 עם מקל",
    price: 1.9,
    storeId: storesIds[2],
    subCategory: musicSectionID1[2],
    manufacture: "כלי זמר",
    brand: "Sultan",
    description: "גונג על סטנד בינוני",
    quantity: 45,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[14],
    image: {
      public_id: "products/כלי נגינה /תוף_בס_למצעד_g8gsei",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%AA%D7%95%D7%A3_%D7%91%D7%A1_%D7%9C%D7%9E%D7%A6%D7%A2%D7%93_g8gsei.jpg",
    },
    name: "תוף בס למצעד 22*10 מבית STAGG",
    price: 350,
    storeId: storesIds[2],
    subCategory: musicSectionID1[2],
    manufacture: "כלי זמר",
    brand: "STAGG",
    description:
      "תוף מצעד גדול מסוג בייס-דראם, התוף בנוי מ-7 רבדים של עץ טיליה (Basswood) איכותי בעל הדהוד גדול ומלא בנוכחות. הוא מוחזק משני צידיו על ידי חישוקי מתכת בקוטר 1.5 מילימטר והוא מצויד בשמונה זוגות של זיזים חזקים מפלדה מותכת. מבית Stagg.",
    quantity: 44,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[15],
    image: {
      public_id: "products/כלי נגינה /אורגנית_owprz8",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99%D7%AA_owprz8.jpg",
    },
    name: "אורגן/תחנת עבודהYamaha PSR-EW410 (מתצוגה)",
    price: 350,
    storeId: storesIds[2],
    subCategory: musicSectionID1[3],
    manufacture: "כלי ואן-גוך",
    brand: "Yamaha",
    description:
      "PSR EW410 היא מקלדת האם של סדרת PSR-E המיועדת לנגנים המכוונים יותר לנגינת פסנתר והופעה על במה.",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[16],
    image: {
      public_id: "products/כלי נגינה /פסנתר_כנף_bypwoz",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A4%D7%A1%D7%A0%D7%AA%D7%A8_%D7%9B%D7%A0%D7%A3_bypwoz.jpg",
    },
    name: "Steinway & Sons Model B - Spirio | r",
    price: 1500,
    storeId: storesIds[2],
    subCategory: musicSectionID1[3],
    manufacture: "כלי ואן-גוך",
    brand: "Spirio",
    description:
      "החדשנות של Steinway עולה שלב נוסף עם הסדרה היוקרתית Spirio ופותחת עבורכם הפסנתרנים ואוהבי המוזיקה עולם שלם של אפשרויות: לנגן, להקליט, להפוך את ההופעה שלכם לבלתי נשכחת וליהנות ממוזיקה בצורה פורצת דרך בהחלט !",
    quantity: 40,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[17],
    image: {
      public_id: "products/כלי נגינה /אורגנית_owprz8",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99%D7%AA_owprz8.jpg",
    },
    name: "פסנתר חשמלי + ספק כוח מקוריYamaha NP-12",
    price: 25000,
    storeId: storesIds[2],
    subCategory: musicSectionID1[3],
    manufacture: "כלי ואן-גוך",
    brand: "Yamaha",
    description:
      "צליל פסנתר פנטסטי בכלי השוקל מעט וקומפקטי במידותיו. Piaggero NP היא סדרת פסנתרים דיגיטליים אידיאלית ואלגנטית בפשטותה. היא הוצבה עם האלמנטים ההכרחיים בלבד המאפשרים לכם להתרכז בנגינה. סדרת NP מתרכזת בהנאה וההשראה שבנגינת פסנתר עם התמקדות עיקרית בצליל פסנתר הכנף מהמשובחים של Yamaha.",
    quantity: 10,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS1[18],
    image: {
      public_id: "products/כלי נגינה /פסנתר_קלאסי_gkz3xb",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A4%D7%A1%D7%A0%D7%AA%D7%A8_%D7%A7%D7%9C%D7%90%D7%A1%D7%99_gkz3xb.jpg",
    },
    name: "פסנתר עומד Steinway & Sons Professional Model K-132",
    price: 12500,
    storeId: storesIds[2],
    subCategory: musicSectionID1[3],
    manufacture: "כלי ואן-גוך",
    brand: "Steinway & Sons Professional",
    description:
      "במשך למעלה מ-160 שנים שחברת Steinway & Sons מקדישה עצמה לייצור הפסנתרים הטובים בעולם. השיטות החלוציות בעבודת יד כמיטב המסורת פועלות עד היום על מנת להבטיח את הסטנדרטים הבלתי מתפשרים של האיכות, הצליל, הטאץ' והיופי.",
    quantity: 15,
    createBy: "shely admin",
  },
];

const musicProductIDS2 = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const musicProduct2 = [
  {
    _id: musicProductIDS2[0],
    image: {
      public_id: "products/כלי נגינה /חלילית_nlzxum",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%97%D7%9C%D7%99%D7%9C%D7%99%D7%AA_nlzxum.jpg",
    },
    name: "STUDIO Tenor in 'C' pear Küng",
    price: 53,
    storeId: storesIds[3],
    subCategory: musicSectionID2[0],
    manufacture: "כלי שיר",
    brand: "STUDIO Tenor",
    description: "חלילית טנור מעץ אגס דגם 1501 מבית חברת Küng הגרמנית",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[1],
    image: {
      public_id: "products/כלי נגינה /חצוצרה_isz35y",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%97%D7%A6%D7%95%D7%A6%D7%A8%D7%94_isz35y.jpg",
    },
    name: "Trumpet 390 Getzen",
    price: 253,
    storeId: storesIds[3],
    subCategory: musicSectionID2[0],
    manufacture: "כלי שיר",
    brand: "Trumpet",
    description: "חצוצרה דגם 390 Bb הכוללת ארגז קשיח ופיה מבית Getzen ",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[2],
    image: {
      public_id: "products/כלי נגינה /סקסופון_vzwwkb",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A1%D7%A7%D7%A1%D7%95%D7%A4%D7%95%D7%9F_vzwwkb.jpg",
    },
    name: "Alto Saxophone Antigua",
    price: 177,
    storeId: storesIds[3],
    subCategory: musicSectionID2[0],
    manufacture: "בטהובן ובניו",
    brand: "Antigua",
    description: "סקסופון אלט Eb עם תו #F נוסף מבית Antigua ",
    quantity: 50,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[3],
    image: {
      public_id: "products/כלי נגינה /מפוחית_zzoc63",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A4%D7%95%D7%97%D7%99%D7%AA_zzoc63.jpg",
    },
    name: "Harmonic Minor F#m Tombo",
    price: 90,
    storeId: storesIds[3],
    subCategory: musicSectionID2[0],
    manufacture: "בטהובן ובניו",
    brand: "Harmonic",
    description: "מפוחית מינור הרמוני פה דיאז מבית Lee Oskar מבית Tombo",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[4],
    image: {
      public_id: "products/כלי נגינה /טרומבון_k8herm",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%98%D7%A8%D7%95%D7%9E%D7%91%D7%95%D7%9F_k8herm.jpg",
    },
    name: "Trombone Antigua",
    price: 940,
    storeId: storesIds[3],
    subCategory: musicSectionID2[0],
    manufacture: "בטהובן ובניו",
    brand: "Antigua",
    description:
      "טרומבון ברס סלייד מסדרת X/P, כולל פיה, מטלית ניקוי וארגז נשיאה מבית Antigua",
    quantity: 35,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[5],
    image: {
      public_id: "products/כלי נגינה /גיטרה_קלאסית_roldnv",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA_roldnv.jpg",
    },
    name: "גיטרה קלאסית גודל",
    price: 220,
    storeId: storesIds[3],
    subCategory: musicSectionID2[1],
    manufacture: "Valencia",
    brand: "Valencia ",
    description:
      "Valencia נוסדה באוסטרליה לפני כ50 שנה וכיום מייצרת גיטרות מדהימות שמאופיינות באיכות גבוהה במיוחד ביחס למחיר.",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[6],
    image: {
      public_id: "products/כלי נגינה /מנדולינה_wtze5x",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A0%D7%93%D7%95%D7%9C%D7%99%D7%A0%D7%94_wtze5x.jpg",
    },
    name: "RMA5NA מנדולינה איכותית מעץ מהגוני מבית Ortega",
    price: 220,
    storeId: storesIds[3],
    subCategory: musicSectionID2[1],
    manufacture: "בטהובן ובניו",
    brand: "Ortega",
    description:
      "ה – RMA5NA היא מנדולינה איכותית מעץ מהגוני מבית חברת ortega. המנדולינות של חברת ortega נבנות לפי מיטב המסורת אך יחד עם זאת מותאמות גם לצרכים ולרצונות של נגנים מודרניים, כלים נפלאים שמציבים סטנדרטים חדשים בתעשייה. חלקו הקדמי של ה – RMA5NA עשוי מעץ מהגוני איכותי, כאשר חלקו האחורי עשוי מעץ מהגוני מעוקל. העץ הנהדר הזה הוא חזק ועמיד לאורך זמן רב וכמו כן הוא מספק צליל עשיר ומלא נוכחות המדגיש הטון המזוהה כל כך עם המנדולינה. הפרטבורד עשוי מעץ אובנגקול (Ovangkol) איכותי, מפתחות הכיוון מצופים בכרום חלק ואלגנטי והמיתרים המגיעים יחד עם ה – RMA5NA הם מיתרי EXP74 נפלאים מבית החברה. כדי לשמור על תחושת העץ המקורית של הכלי, הגימור הוא בסגנון Open Pore, משמע שגוף הכלי נשאר מעט מחוספס, תכונה שהופכת את המגע במנדולינה, ואת תחושת הנגינה, למיוחדת ואותנטית במיוחד. ",
    quantity: 40,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[7],
    image: {
      public_id: "products/כלי נגינה /גיטרה_חשמלית_bwr4am.",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%97%D7%A9%D7%9E%D7%9C%D7%99%D7%AA_bwr4am.jpg",
    },
    name: "Gibson Les Paul Standard '60s",
    price: 220,
    storeId: storesIds[3],
    subCategory: musicSectionID2[1],
    manufacture: "בטהובן ובניו",
    brand: "Gibson Les",
    description:
      "ה-Les Paul בגרסה קלאסית חדשה, רלוונטית ואהובה גם היום עבור כל כך הרבה נגנים במגוון סגנונות.",
    quantity: 42,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[8],
    image: {
      public_id: "products/כלי נגינה /גיטרה_בס_xybmih",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_%D7%91%D7%A1_xybmih.jpg",
    },
    name: "גיטרה בס חשמליתIbanez TMB100",
    price: 220,
    storeId: storesIds[3],
    subCategory: musicSectionID2[1],
    manufacture: "כלי זמר",
    brand: "Ibanez",
    description:
      "סדרת הבס Talman משלבת עיצוב יפהפה של צורת הגוף ההיסטורית של Ibanez עם הסאונד הורסטילי המפתיע וחוצה הז'אנרים.",
    quantity: 15,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[9],
    image: {
      public_id: "products/כלי נגינה /גיטרה_lrpkwk",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%99%D7%98%D7%A8%D7%94_lrpkwk.jpg",
    },
    name: "גיטרה אקוסטית ED-11N מבית Legrand",
    price: 400,
    storeId: storesIds[3],
    subCategory: musicSectionID2[1],
    manufacture: "כלי זמר",
    brand: "Legrand",
    description:
      "גיטרה אקוסטית עם צליל עשיר ורמת גימור גבוהה מבית מבית Legrand",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[10],
    image: {
      public_id: "products/כלי נגינה /מערכת_תופים_abokdx",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A2%D7%A8%D7%9B%D7%AA_%D7%AA%D7%95%D7%A4%D7%99%D7%9D_abokdx.jpg",
    },
    name: "מערכת תופים 5 חלקים Yamaha Recording Custom 5 Piece Shell Pack - Classic Walnut",
    price: 1999,
    storeId: storesIds[3],
    subCategory: musicSectionID2[2],
    manufacture: "כלי זמר",
    brand: "Yamaha",
    description:
      "סדרת Recording Custom מבית Yamaha היא פסגת האומנות עם איכות בניה וצליל ברמה הגבוהה ביותר.",
    quantity: 42,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[11],
    image: {
      public_id: "",
      url: "",
    },
    name: "תוף מסגרת עם עור 10",
    price: 20,
    storeId: storesIds[3],
    subCategory: musicSectionID2[2],
    manufacture: "כלי זמר",
    brand: "Meinl",
    description:
      "תופי יד מצוידים בראש העיזים הטובים ביותר שנבחרו ביד. המסגרת המסולסלת מבטיחה אחיזה נוחה, המאפשרת לאצבעות להפעיל לחץ לצורך תו 'כיפוף'. הבנייה הקלה והעם זאת מוצקה שלהם הופכת אותם למושלמים לסיטואציות ניידות וכלי הקשה ברחוב.",
    quantity: 12,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[12],
    image: {
      public_id: "products/כלי נגינה /מצילתיים_ddgaif",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%9E%D7%A6%D7%99%D7%9C%D7%AA%D7%99%D7%99%D7%9D_ddgaif.jpg",
    },
    name: "Sultan מצילתיים 16",
    price: 50,
    storeId: storesIds[3],
    subCategory: musicSectionID2[2],
    manufacture: "כלי זמר",
    brand: "Sultan",
    description: "SULTAM מצילתיים 16 MARCHCYMB 14",
    quantity: 43,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[13],
    image: {
      public_id: "products/כלי נגינה /גונג_vcdhbl",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359300/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%92%D7%95%D7%A0%D7%92_vcdhbl.jpg",
    },
    name: "SULTAN GONG-16 גונג 16 עם מקל",
    price: 1.9,
    storeId: storesIds[3],
    subCategory: musicSectionID2[2],
    manufacture: "כלי זמר",
    brand: "Sultan",
    description: "גונג על סטנד בינוני",
    quantity: 45,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[14],
    image: {
      public_id: "products/כלי נגינה /תוף_בס_למצעד_g8gsei",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%AA%D7%95%D7%A3_%D7%91%D7%A1_%D7%9C%D7%9E%D7%A6%D7%A2%D7%93_g8gsei.jpg",
    },
    name: "תוף בס למצעד 22*10 מבית STAGG",
    price: 350,
    storeId: storesIds[3],
    subCategory: musicSectionID2[2],
    manufacture: "כלי זמר",
    brand: "STAGG",
    description:
      "תוף מצעד גדול מסוג בייס-דראם, התוף בנוי מ-7 רבדים של עץ טיליה (Basswood) איכותי בעל הדהוד גדול ומלא בנוכחות. הוא מוחזק משני צידיו על ידי חישוקי מתכת בקוטר 1.5 מילימטר והוא מצויד בשמונה זוגות של זיזים חזקים מפלדה מותכת. מבית Stagg.",
    quantity: 44,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[15],
    image: {
      public_id: "products/כלי נגינה /אורגנית_owprz8",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99%D7%AA_owprz8.jpg",
    },
    name: "אורגן/תחנת עבודהYamaha PSR-EW410 (מתצוגה)",
    price: 350,
    storeId: storesIds[3],
    subCategory: musicSectionID2[3],
    manufacture: "כלי ואן-גוך",
    brand: "Yamaha",
    description:
      "PSR EW410 היא מקלדת האם של סדרת PSR-E המיועדת לנגנים המכוונים יותר לנגינת פסנתר והופעה על במה.",
    quantity: 25,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[16],
    image: {
      public_id: "products/כלי נגינה /פסנתר_כנף_bypwoz",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A4%D7%A1%D7%A0%D7%AA%D7%A8_%D7%9B%D7%A0%D7%A3_bypwoz.jpg",
    },
    name: "Steinway & Sons Model B - Spirio | r",
    price: 1500,
    storeId: storesIds[3],
    subCategory: musicSectionID2[3],
    manufacture: "כלי ואן-גוך",
    brand: "Spirio",
    description:
      "החדשנות של Steinway עולה שלב נוסף עם הסדרה היוקרתית Spirio ופותחת עבורכם הפסנתרנים ואוהבי המוזיקה עולם שלם של אפשרויות: לנגן, להקליט, להפוך את ההופעה שלכם לבלתי נשכחת וליהנות ממוזיקה בצורה פורצת דרך בהחלט !",
    quantity: 40,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[17],
    image: {
      public_id: "products/כלי נגינה /אורגנית_owprz8",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359301/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%90%D7%95%D7%A8%D7%92%D7%A0%D7%99%D7%AA_owprz8.jpg",
    },
    name: "פסנתר חשמלי + ספק כוח מקוריYamaha NP-12",
    price: 25000,
    storeId: storesIds[3],
    subCategory: musicSectionID2[3],
    manufacture: "כלי ואן-גוך",
    brand: "Yamaha",
    description:
      "צליל פסנתר פנטסטי בכלי השוקל מעט וקומפקטי במידותיו. Piaggero NP היא סדרת פסנתרים דיגיטליים אידיאלית ואלגנטית בפשטותה. היא הוצבה עם האלמנטים ההכרחיים בלבד המאפשרים לכם להתרכז בנגינה. סדרת NP מתרכזת בהנאה וההשראה שבנגינת פסנתר עם התמקדות עיקרית בצליל פסנתר הכנף מהמשובחים של Yamaha.",
    quantity: 10,
    createBy: "shely admin",
  },
  {
    _id: musicProductIDS2[18],
    image: {
      public_id: "products/כלי נגינה /פסנתר_קלאסי_gkz3xb",
      url: "https://res.cloudinary.com/dlcq6p2up/image/upload/v1671359302/products/%D7%9B%D7%9C%D7%99%20%D7%A0%D7%92%D7%99%D7%A0%D7%94%20/%D7%A4%D7%A1%D7%A0%D7%AA%D7%A8_%D7%A7%D7%9C%D7%90%D7%A1%D7%99_gkz3xb.jpg",
    },
    name: "פסנתר עומד Steinway & Sons Professional Model K-132",
    price: 12500,
    storeId: storesIds[3],
    subCategory: musicSectionID2[3],
    manufacture: "כלי ואן-גוך",
    brand: "Steinway & Sons Professional",
    description:
      "במשך למעלה מ-160 שנים שחברת Steinway & Sons מקדישה עצמה לייצור הפסנתרים הטובים בעולם. השיטות החלוציות בעבודת יד כמיטב המסורת פועלות עד היום על מנת להבטיח את הסטנדרטים הבלתי מתפשרים של האיכות, הצליל, הטאץ' והיופי.",
    quantity: 15,
    createBy: "shely admin",
  },
];

module.exports = {
  musicProductIDS1,
  musicProduct1,
  musicProductIDS2,
  musicProduct2,
};
