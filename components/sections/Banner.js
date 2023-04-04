import Layout from "../Layout";

export default function Banner() {
  return (
    <Layout className="mt-16">
      <div className="grid md:grid-cols-2 items-center bg-green-800/20 px-5 md:pl-8 md:pr-0 rounded-md">
        <div className="pt-14">
          <h1 className="text-2xl font-bold mb-6">
            The Messenger of Allah (ﷺ) said,
          </h1>
          <p className="text-lg text-gray-800">
            “Whoever builds a Masjid for Allah, Allah will build for him a house
            like it in Paradise.” (Source: Sahih al-Bukhari 450, Sahih Muslim
            533)
          </p>
        </div>
        <div>
          <img
            className="max-w-[300px] mx-auto"
            src="/images/quran.png"
            alt="s"
          />
        </div>
      </div>
    </Layout>
  );
}
