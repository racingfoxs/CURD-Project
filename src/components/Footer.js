import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
           
            <span className="ml-3 text-xl">CURD Todo Project</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 —
            <a
              href="https://twitter.com/divyashwar"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Raj
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" className="text-gray-500">
             Facebook
            </a>
            <a href="/" className="ml-3 text-gray-500">
             Instagram
            </a>
            <a href="/" className="ml-3 text-gray-500">
             Linkdin
            </a>
            <a href="/" className="ml-3 text-gray-500">
              Mail
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
