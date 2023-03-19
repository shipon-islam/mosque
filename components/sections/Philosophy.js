import { BsFillChatQuoteFill } from "react-icons/bs";
import { FaMosque, FaUsersCog } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import QuoteCard from "../QuoteCard";
export default function Philosophy() {
  return (
    <section className="md:pl-16 px-4 my-16">
      <h1 className="text-2xl font-bold capitalize text-green-900 border-b-2 border-green-900 pb-2 my-4">
        our philosophy
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <QuoteCard
          Icon={GiOpenBook}
          title="knowledge"
          quote="A critshahal component of every Muslims journey is knowledge."
        />
        <QuoteCard
          Icon={BsFillChatQuoteFill}
          title="spirituality"
          quote="Ihsan was the way of our Messenger"
        />
        <QuoteCard
          Icon={FaMosque}
          title="community"
          quote="We pray together, we break our fast together, Islam is community"
        />
        <QuoteCard
          Icon={FaUsersCog}
          title="service"
          quote="Being in service to others is the duty of every Muslim"
        />
      </div>
      <button className="bg-green-600 py-[0.5rem] px-4 text-white uppercase font-medium rounded-2xl hover:bg-green-600  hidden md:block mr-12 lg:mr-4 ml-auto mt-10 ">
        more
        <HiOutlineArrowSmRight className="inline-block" />
      </button>
    </section>
  );
}
