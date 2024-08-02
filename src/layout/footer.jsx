import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-green-800 text-white md:flex-row lg:flex-row p-2 justify-between">
      <div className="flex flex-col gap-2">
        <strong className="border-b-2 text-center w-fit">
          SU Contact info
        </strong>
        <p>email:su@gmail.com</p>
        <p>Tel: +25078</p>
        <p>whatsapp: +250799</p>
      </div>
      <div className="flex flex-col gap-2">
        <strong className="border-b-2 text-center w-fit">Quick link</strong>
        <a href="#">RP mis</a>
        <a href="#">Rwanda polytechnic</a>
      </div>

      <div className="flex flex-col gap-2">
        <strong className="border-b-2 text-center w-fit">Quick navigate</strong>
        <ol className="capitalize flex flex-col gap-2">
          <a href="#">
            <li>home</li>
          </a>
          <a href="#">
            <li>candidate</li>
          </a>
          <a href="#">
            <li>posts</li>
          </a>
        </ol>
      </div>
    </div>
  );
};

export default Footer;
