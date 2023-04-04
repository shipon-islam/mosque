import Layout from "../Layout";
import News from "../News";

function RecentNews() {
  const imageUrl =
    "https://images.unsplash.com/photo-1680176750034-8d11a2f71096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
  return (
    <Layout className="mt-16">
      <h2 className="text-4xl text-center font-bold capitalize  mb-4">
        recent news and update
      </h2>
      <p className="mx-auto text-center mt-3 w-[90%] sm:w-[50%] ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eum quo
        pariatur sapiente magni voluptatem?
      </p>

      <div className="grid md:grid-cols-2 gap-x-5 mt-8 mx-2 md:mx-0">
        <div className="mb-8 md:mb-0">
          <img className="rounded-lg mb-2" src={imageUrl} alt="fg" />
          <small className="text-green-800 capitalize">april 04,2023</small>
          <h3 className="font-medium capitalize text-lg text-gray-900 my-1">
            a miracle of the quran mother's milk
          </h3>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            esse odit incidunt laudantium blanditiis corporis illo ipsum eaque
            porro reprehenderit.
          </p>
          <button className="underline capitalize font-medium mt-2 text-gray-800">
            read more
          </button>
        </div>
        <div>
          <News image={imageUrl} title="ramadan alert" />
          <News image={imageUrl} title="eid alert" />
          <News image={imageUrl} title="iftar alert" />
        </div>
      </div>
    </Layout>
  );
}

export default RecentNews;
