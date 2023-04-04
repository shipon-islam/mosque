import Image from "next/image";
import HeadLine from "../HeadLine";
import Layout from "../Layout";

function Donate() {
  return (
    <Layout className="mt-16">
      <HeadLine tittle="make your donation" />
      <div className="grid md:grid-cols-2 mt-8">
        <div className="order-2 md:order-1 bg-green-700/40 md:bg-green-700/50 px-10 py-8 rounded-b-md md:rounded-l-md md:rounded-r-none">
          <Image
            className="w-fit"
            src="/images/donate.png"
            width={350}
            height={350}
            alt="donate"
          />
        </div>

        <form className="order-1 md:order-2 bg-green-700/40 px-5 md:px-10 py-8 rounded-t-md md:rounded-r-md md:rounded-l-none">
          <div>
            <label
              htmlFor="amount"
              className="block text-md font-medium leading-6 "
            >
              Amount
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-lg">$</span>
              </div>
              <input
                type="text"
                name="amount"
                id="amount"
                className="block w-full rounded-md border-0 py-2 pl-7 pr-20  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none  sm:text-lg sm:leading-6 "
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:outline-none sm:text-lg"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="name"
              className="block text-md font-medium leading-6 "
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-2 px-4  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-lg sm:leading-6"
              placeholder="name"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2 mt-2">
            <div>
              <label
                htmlFor="phone"
                className="block text-md font-medium leading-6 "
              >
                Phone
              </label>

              <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full rounded-md border-0 py-2 px-4  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-lg sm:leading-6"
                placeholder="phone"
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-md font-medium leading-6 "
              >
                Date
              </label>

              <input
                type="date"
                name="date"
                id="date"
                className="block w-full rounded-md border-0 py-[7px] px-4  text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-lg sm:leading-6 bg-white"
                placeholder="date"
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="email"
              className="block text-md font-medium leading-6 "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-2 px-4  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-lg  sm:leading-6"
              placeholder="email"
            />
          </div>

          <button className="bg-green-600 py-[0.5rem] px-4 text-white uppercase font-medium rounded-lg ml-auto hover:bg-orange-600 block mt-6">
            donate now
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Donate;
