import Headroom from "react-headroom";
import Header from "../../../Shared/Header/Header";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <Headroom>
        <Header />
      </Headroom>
      <div className="container mx-auto">
        <div className="text-white py-5 h-[70vh] md:h-[80vh] lg:h-[95vh]   flex items-center w-full md:w-3/4 ">
          <div className="space-y-5 px-5 lg:px-0 text-center md:text-left ">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold "
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Share the Love, Share the Food, and Join Our Foodie Fellowship!{" "}
              <span className="text-orange-700 italic">
                {" "}
                Foodie Fellowship!
              </span>
            </h1>
            <p
              className="text-lg"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="850"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Join our vibrant community dedicated to sharing food, connecting
              with your neighbors, and fostering a culture of kindness through
              the joy of homemade meals. Together, we can make a difference, one
              dish at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
