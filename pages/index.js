import Image from "next/image";
import Link from "next/link";
import React from "react";
import ex1 from "../public/example-1.png";
export default function Home() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
        <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <Link
              href="/"
              className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
            >
              <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
                PMP
              </h1>
            </Link>
            <button
              className=" cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
              type="button"
              aria-label="button"
            >
              Pimp my profile
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <nav className="flex-col flex-grow ">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    href="/"
                    className="font-bold text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Pimp My Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Give your dating profile a boost
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
              Pimp My Profile is a low cost, high value service that transforms
              your dating profile from zero to hero. We&apos;ll help you get more
              matches, more messages and more dates.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-gray-800 inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              >
                <span className="justify-center">Pimp my profile</span>
              </button>
            </div>
          </div>
          <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <Image
              width={800}
              height={800}
              className="w-80 md:ml-1 ml-24"
              alt="example-1"
              src={ex1}
            />
          </div>
        </div>
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
              <h1 className="mb-8 text-2xl Avenir text-center font-semibold text-black">
                What the guys have said
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
              <div className="flex items-center justify-center">
                &quot;I doubled my matches in a week.&quot;
              </div>
              <div className="flex items-center justify-center">
                &quot;Finally getting some motion!&quot;
              </div>
              <div className="flex items-center justify-center">
                &quot;Everytime I use this app i end up with new matches.&quot;
              </div>
              <div className="flex items-center justify-center">
                &quot;I doubled my matches in a week.&quot;
              </div>
            </div>
          </div>
        </section>
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Less stress, more results
          </h1>
          <h1 className="mb-8 text-2xl Avenir font-semibold text-gray-600 text-center">
            Pimp your profile, get more matches.
          </h1>
          <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <Image
              width={800}
              height={800}
              className="w-80"
              alt="example-1"
              src={ex1}
            />
          </div>
        </div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
              <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900">
                Try PMP today
              </h1>
              <h1 className="mb-9 text-2xl font-semibold text-gray-600">
                Lets do this.
              </h1>
              <button className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900">
                Screw it, why not
              </button>
            </div>
          </div>
        </section>
      </section>
      <footer className="pb-4">
        <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <Link
                href="/"
                className="text-md text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
              >
                © 2023 PMP.
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
