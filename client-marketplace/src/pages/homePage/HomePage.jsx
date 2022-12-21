import React from "react";
import { useNavigate } from "react-router-dom";
import FooterHomePage from "../../components/footer/FooterHomePage";

const HomePage = () => {
  const naviget = useNavigate();
  const data = [
    {
      name: "פירות וירקות",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      active: true,
    },
    {
      name: "כלי נגינה",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      active: true,
    },
    {
      name: "מוצרי פארם",
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      active: true,
    },
    {
      name: "משקאות",
      image:
        "data:image/jpeg;base64,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",
      active: true,
    },
  ];
  return (
    <div>
      <div
        className="bg-[url('https://images.pexels.com/photos/4443494/pexels-photo-4443494.jpeg?auto=compress&cs=tinysrgb&w=1600')]
      bg-no-repeat bg-center bg-cover flex flex-col items-center h-full py-8 px-4 md:px-20 justify-between text-right"
      >
        <div className="w-full md:w-[80%] px-8 mb-6 md:mt-14 ">
          <h1 className="text-4xl text-center mb-8">
            ברוך הבא לעולם החנויות שלך
          </h1>
          <input
            className="text-right w-full opacity-80 pr-10 border-none md:border-solid md:border-stone-400 rounded-sm"
            type="text"
            placeholder="מה תרצה לחפש היום"
          />
        </div>
        <div className="w-full md:w-[80%]">
          <h1 className="text-3xl text-center my-6">קטגוריות שונות</h1>
          <div className="w-full flex flex-wrap items-center justify-center">
            {data.map((section, i) => (
              <div
                onClick={() => naviget("store")}
                key={i}
                className="w-[47%] md:w-[32%] border-2 h-[160px] md:h-[260px] relative m-1 flex justify-center items-end cursor-pointer"
              >
                <img
                  className="absolute w-full h-full"
                  src={section.image}
                  alt={section.name}
                />
                <p className="z-10 py-3 md:p-6 w-full text-center bg-opacity-75 text-2xl bg-slate-100">
                  {section.name}
                </p>
              </div>
            ))}
          </div>
      
        </div>
      </div>
          <FooterHomePage />
    </div>
  );
};

export default HomePage;
