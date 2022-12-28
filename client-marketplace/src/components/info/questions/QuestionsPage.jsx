import React from "react";
import Dropdown from "./Dropdown";

const QuestionsPage = () => {
  const questions = [
    {
      title: " המשלוח לוקח יותר מדי זמן     ",
      info: "הסיבות הנפוצות לאיחור במשלוחים הן עומס במסעדה או עומס עם משלוח וולט. אנו מתאימים אוטומטית את הערכות הזמן שלנו על סמך הזמנים בפועל.",
    },
    {
      title: "האפליקציה לא לקחה בחשבון את הזיכויים שלי      ",
      info: "לאפליקציית iOS יש מסך אישור כחול שחוזר על עובדות ההזמנה הבסיסיות, כמו הסכום הכולל. אנו תמיד משתמשים בזיכויים שלך אם ההזמנה יכולה להשתמש בהם. חלק מהזיכויים תקפים להזמנות משלוח בלבד.",
    },

    {
      title: "חלק מהפריטים בהזמנה שלי חסרים או שגויים  ",
      info: "צור קשר עם התמיכה שלנו ואנו נתקן את זה. לפעמים מסעדות או שליחים טועים. אנחנו עושים כל שביכולתנו כדי לתקן כל טעות אנוש",
    },
  ];
  return (
    <div className="py-6 px-14 text-end">
      <h1 className="text-center text-4xl mb-14">שאלות נפוצות</h1>

      {questions.map((question, i) => (
        <Dropdown key={i} question={question} />
      ))}
    </div>
  );
};

export default QuestionsPage;
