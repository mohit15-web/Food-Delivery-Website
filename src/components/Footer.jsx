import logo from '../assets/logo.png';

export function Footer() {
  return (
    <section className="relative overflow-hidden py-20 dark:bg-black dark:text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
               <img src={logo} alt="" className='w-16'/>
                <span className="ml-4 text-lg font-bold">EatsExpress</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by <a href="https://github.com/mohit15-web" className='text-blue-500'  >Mohit</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium " href="#">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase ">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
