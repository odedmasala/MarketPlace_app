import React from "react";

const BlogPage = () => {
  return (
    <div className="py-6 px-14 text-end">
      <h1 className="text-center text-4xl mb-14">בלוג</h1>
      <ul>
      <li className="cursor-pointer underline text-blue-800 hover:text-blue-500 m-5">
          <a href="https://www.asos.com/men/">
            {" "}
            ASOS SALE
          </a>
        </li>
        <li className="cursor-pointer underline text-blue-800 hover:text-blue-500 m-5">
          <a href="https://blog.wolt.com/isr/2018/12/04/wolt-%d7%9e%d7%aa%d7%97%d7%99%d7%9c%d7%94-%d7%a4%d7%a2%d7%99%d7%9c%d7%95%d7%aa-%d7%91%d7%aa%d7%9c-%d7%90%d7%91%d7%99%d7%91-%f0%9f%87%ae%f0%9f%87%b1/">
            {" "}
            מתחילה פעילות בתל אביב Wolt
          </a>
        </li>
     
        <li className="cursor-pointer underline text-blue-800 hover:text-blue-500 m-5">
          <a href="https://www.asos.com/men/">
            {" "}
            מבצעים BLACK FRIDAY{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
