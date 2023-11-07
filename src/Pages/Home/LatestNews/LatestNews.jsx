import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div>
      <div className="p-4 lg:p-8 text-white overflow-x-hidden">
        <div className="container mx-auto space-y-12">
          {/* News 1 */}
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row backdrop-blur-md bg-white/5"
          >
            <img
              src="https://www.wfp.org/sites/default/files/styles/media_embed/public/2020-11/1%2Ap_T2eUQ0DRApSnE4hnrxdg.jpeg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">
                Palestinian children are very hungry, Please Donate Some Food
              </h3>
              <p className="my-6 dark:text-gray-400">
                More than 20,000 people have lost their lives in Israel's brutal
                attacks on Palestine in the past few days. I bombed all their
                houses, so your help is needed at this moment
              </p>
              <Link to={"/addfood"}>
                <Button className="bg-gradient-to-tr from-orange-700 to-orange-900">
                  Donate Food
                </Button>
              </Link>
            </div>
          </div>
          {/* News 2 */}
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse backdrop-blur-md bg-white/5"
          >
            <img
              src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/chinnomul-in-20200405121253.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">
                As long as you donate, we will continue to help people, God
                willing
              </h3>
              <p className="my-6 dark:text-gray-400">
                As long as you donate, we will continue to help people, God
                willing
              </p>
              <Link to={"/addfood"}>
                <Button className="bg-gradient-to-tr from-orange-700 to-orange-900">
                  Donate Food
                </Button>
              </Link>
            </div>
          </div>
          {/* News 3 */}
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row backdrop-blur-md bg-white/5"
          >
            <img
              src="https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2021/food-in-containers.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">Give Us Your Wasted Food</h3>
              <p className="my-6 dark:text-gray-400">
                Give us the food you sell, this food can be a dream for some and
                a hunger pang for others.
              </p>
              <Link to={"/addfood"}>
                <Button className="bg-gradient-to-tr from-orange-700 to-orange-900">
                  Donate Food
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
