import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-teal-800 text-white md:flex-row lg:flex-row p-2 justify-evenly">
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
        <a
          href="https://mis.rp.ac.rw/"
          className=" hover:bg-white hover:text-black"
        >
          RP mis
        </a>
        <a
          href="https://www.rp.ac.rw/"
          className=" hover:bg-white hover:text-black"
        >
          Rwanda polytechnic
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <strong className="border-b-2 text-center w-fit">Quick navigate</strong>
        <ol className="capitalize flex flex-col gap-2">
          <a href="#" className=" hover:bg-white hover:text-black">
            <li>home</li>
          </a>
          <a href="/candidates" className=" hover:bg-white hover:text-black">
            <li>candidates</li>
          </a>
          {/* <a href="#" className=" hover:bg-white hover:text-black">
            <li>posts</li>
          </a> */}
        </ol>
      </div>
    </div>
  );
};

export default Footer;
