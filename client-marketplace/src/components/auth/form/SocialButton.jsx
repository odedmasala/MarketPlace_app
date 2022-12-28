import React from "react";

const SocialButton = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/api/auth/google/callback`, "_self");
  };
  const faceBookAuth = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/api/auth/facebook/callback`, "_self");
  };
  return (
    <div className="flex justify-center flex-col w-12/12 items-center">
      <div className="lex justify-center flex-col w-12/12">
        <button
          type="button"
          onClick={faceBookAuth}
          className="mb-3 w-12/12 text-center flex items-center justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 transform active:scale-75 transition-transform  font-medium  text-sm px-5 py-2.5"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
            ></path>
          </svg>
          Sign in with Facebook
        </button>
        <button
        onClick={googleAuth}
          type="button"
          className="mb-3 12/12 text-center flex items-center justify-center text-white bg-[#d72525] hover:bg-[#f13c3c]/90 transform active:scale-75 transition-transform  font-medium  text-sm px-5 py-2.5"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          <p className="mr-4">Sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialButton;
