import { BsFillChatQuoteFill } from "react-icons/bs";
import { FaMosque, FaUsersCog } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import Button from "../Button";
import HeadLine from "../HeadLine";
import Layout from "../Layout";
import QuoteCard from "../QuoteCard";
export default function Philosophy() {
  return (
    <Layout className="my-16">
      <HeadLine tittle="our philosophy" />
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
      <Button name="see more" className="ml-auto block mt-8" />
    </Layout>
  );
}
