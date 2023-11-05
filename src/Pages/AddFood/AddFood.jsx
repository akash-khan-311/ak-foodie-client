import React, { useContext } from "react";
import Header from "../../Shared/Header/Header";
import Headroom from "react-headroom";
import { Button } from "@material-tailwind/react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const userEmail = user.email;
    const form = e.target;
    const foodName = form.Fname.value;
    const foodImg = form.foodImg.value;
    const date = form.date.value;
    const donationAmount = form.donationAmount.value;
    const donatorName = form.donatorName.value;
    const donatorImg = form.donatorImg.value;
    const quantity = form.quantity.value;
    const location = form.location.value;
    const aditionalNotes = form.notes.value;
    console.log(userEmail);
  };
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <div>
        <div className="container mx-auto py-10">
          <div className="backdrop-blur-2xl bg-white/10 p-4 md:p-10 lg:p-20 space-y-3 rounded-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-rancho text-center text-white mb-10">
              Add Your Wasted Food
            </h1>

            <form onSubmit={handleAddFood}>
              {/* form name and quantity Row */}
              <div className="md:flex gap-10 my-5">
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px] mb-5 md:mb-0">
                    <input
                      required
                      className="peer  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="Fname"
                    />
                    <label className="before:content[' ']  after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Food Name
                    </label>
                  </div>
                </div>
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="foodImg"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Food Image URL
                    </label>
                  </div>
                </div>
              </div>
              {/* form name and quantity Row */}
              <div className="md:flex gap-10 my-5">
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px] mb-5 md:mb-0">
                    <input
                      required
                      className="peer  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="date"
                      type="date"
                    />
                    <label className="before:content[' ']  after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Expired Date
                    </label>
                  </div>
                </div>
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="donationAmount"
                      type="number"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Donation Amount
                    </label>
                  </div>
                </div>
              </div>
              {/* form supliyer and taste Row */}
              <div className="md:flex gap-10 my-5">
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px]  mb-5 md:mb-0">
                    <input
                      required
                      name="donatorName"
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Donator Name
                    </label>
                  </div>
                </div>
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="donatorImg"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Donator Image URL
                    </label>
                  </div>
                </div>
              </div>
              {/* form Row */}
              <div className="md:flex gap-10 my-5">
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px]  mb-5 md:mb-0">
                    <input
                      required
                      type="number"
                      name="quantity"
                      className="peer  h-full w-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Quantity
                    </label>
                  </div>
                </div>
                <div class="form-control w-full md:w-1/2">
                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      required
                      name="location"
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Pick Up Location
                    </label>
                  </div>
                </div>
              </div>
              {/* form Row */}
              <div className="flex gap-10 my-5">
                <div class="form-control w-full ">
                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      name="notes"
                      type="text"
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Aditional Notes
                    </label>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full" color="orange">
                Add Food
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
