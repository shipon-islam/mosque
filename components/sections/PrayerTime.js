import Button from "../Button";
import Layout from "../Layout";
import PrayerTimeTable from "../PrayerTimeTable";

export default function PrayerTime() {
  return (
    <Layout className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
        <PrayerTimeTable />
        <div className="md:order-2 mt-12 ml-2">
          <h4 className="capitalize text-3xl font-bold pr-4 md:pr-0 text-green-800">
            Welcome To The Darul Hikmah Islamic Center
          </h4>
          <p className="my-6 ">
            Darul Hikmah Islamic Center (DHIC) is an independent, non-profit,
            community-based, religious 501(c)(3) organization. DHIC provides a
            dynamic space that cultivates an exchange of ideas about Islam
            through culture, charity, and education programs. The DHIC is not
            just a mosque for prayers rather it is a community center for all.
            The Center is committed to preserving an Islamic identity, building
            and supporting a viable Muslim community, promoting a comprehensive
            Islamic way of life based on the Holy Quran and the Sunnah of
            Prophet Muhammad.
          </p>
          <Button name="read more" />
        </div>
      </div>
    </Layout>
  );
}
