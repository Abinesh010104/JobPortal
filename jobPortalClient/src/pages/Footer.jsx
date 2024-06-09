import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      {" "}
      <footer className=" bg-gray-200 text-black py-12 px-12">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                Explore thousands of job opportunities in various sectors.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Premium Support
                  </a>
                </li>
                {/* Other quick links */}
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    SaaS Development
                  </a>
                </li>
                {/* Other resources */}
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">Phone: +012 (345) 678 99</p>
              <div className="flex space-x-4">{/* Social media links */}</div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm">
              &copy; 2025 Job Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
