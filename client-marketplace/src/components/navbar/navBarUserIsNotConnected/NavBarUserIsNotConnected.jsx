import React from 'react';
import LoginButton from '../../auth/login/LoginButton';

export default function NavBarUserIsNotConnected() {
  return (
    <div className="w-[53%] hidden sm:flex justify-between text-xs  xl:text-base text-right">
      <LoginButton />
      <a className="mx-1 nav-list" href="#">
        כניסת מנהל חנות
      </a>
      <a className="mx-1 nav-list" href="#">
        תנאי שימוש
      </a>
      <a className="mx-1 nav-list" href="#">
        צור קשר
      </a>
    </div>
  );
}
