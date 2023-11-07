import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="backdrop-blur-sm bg-white/10 h-screen">
      <section className="flex items-center  p-16 text-white ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-orange-900 ">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to={"/"}>
              <Button className="bg-gradient-to-tr from-orange-700 to-orange-900">
                Back to homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
