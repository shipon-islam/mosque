import Button from "../Button";
import HeadLine from "../HeadLine";
import Layout from "../Layout";

function Announcement() {
  return (
    <Layout className="mt-14">
      <div className="grid md:grid-cols-2 gap-x-4 px-4 md:px-12 bg-green-600/10 pb-8 pt-12 rounded-md">
        <div className="text-gray-700">
          <HeadLine tittle="announcements" />
          <h1 className="text-2xl font-medium">DHIC Ramadan 1444</h1>
          <h4 className="font-medium mb-4 text-[1.1rem]">
            Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu.
          </h4>
          <h5 className="font-medium text-[1.1rem]">
            Dear Brothers & Sisters,
          </h5>
          <p className="text-[1.1rem] mb-4">
            During this blessed month of Ramadan, we ask that Allah (SWT) accept
            our fasting and all the good deeds we have been doing during this
            best month of the year. As this blessed month is coming to an end,
            we do not know if we will be reaching the next Ramadan. We should
            take advantage of these last few days by doing as many good deeds as
            possible. The Messenger of Allah (ﷺ) said, “Whoever builds a Masjid
            for Allah, Allah will build for him a house like it in Paradise.”
            (Source: Sahih al-Bukhari 450, Sahih Muslim 533)
          </p>
          <Button name="read more" />
        </div>
        <div>
          <img src="/images/announcement.png" alt="" />
        </div>
      </div>
    </Layout>
  );
}

export default Announcement;
