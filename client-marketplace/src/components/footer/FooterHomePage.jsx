import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FooterHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[url('https://images.pexels.com/photos/952353/pexels-photo-952353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] md:h-96 h-64 bg-center bg-cover ">
        <div className="h-full pt-14 font-sans font-semibold subpixel-antialiased flex flex-col items-center justify-center text-center text-gray-200 text-[25px] md:text-[50px] lg:text-[70px]">
          <p>
            ? אין לך <span className="text-yellow-300">כח</span> לעבור בסופר
          </p>
          <p>
            <span className="text-yellow-300">Market</span> is for you.
          </p>
        </div>
      </div>
      <Footer bgDark={true}>
        <div className="w-full flex flex-col items-center  bg-gray-900">
          <div className="grid w-3/4 list-none text-gray-400 grid-cols-2 gap-8 py-8 text-center px-6 md:grid-cols-5">
            <div>
              <Footer.Link>
                <span
                  className="cursor-pointer"
                  onClick={() => navigate('/info/blog')}
                >
                  בלוג
                </span>
              </Footer.Link>
            </div>
            <div>
              <Footer.Link>
                <span className="cursor-pointer" onClick={() => navigate('/info/about')}>אודותינו</span>
              </Footer.Link>
            </div>
            <div>
              <Footer.Link>
                <span className="cursor-pointer" onClick={() => navigate('/info/suppliers')}>ספקים</span>
              </Footer.Link>
            </div>
            <div>
              <Footer.Link>
                <span className="cursor-pointer" onClick={() => navigate('/info/questions')}>
                  שאלות נפוצות
                </span>
              </Footer.Link>
            </div>
            <div>
              <Footer.Link>
                <span className="cursor-pointer" onClick={() => navigate('/info/company')}>
                  משרדי החברה
                </span>
              </Footer.Link>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center text-center bg-gray-900 p-4">
            <div className="flex justify-center space-x-6">
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-2 ">
                <FaFacebookF size={'20px'} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-2 ">
                <BsInstagram size={'20px'} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-2">
                <HiOutlineMail size={'20px'} />
              </div>
            </div>
            <div className="text-gray-500 mt-3">
              © כל הזכויות שמורות לחברת מרקט
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
