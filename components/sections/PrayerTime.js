import PrayerHead from "../PrayerHead";
import PrayerRow from "../PrayerRow";

export default function PrayerTime() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-7 md:pl-16 px-4">
      <div className="md:order-2">
        <h3 className="text-2xl font-bold capitalize pb-1 mb-4 text-green-900/80 border-b-2 border-green-900/60">
          prayer time
        </h3>
        <div className="grid grid-cols-3 bg-green-600/20 py-1 rounded-md">
          <PrayerHead title="Time Of Salat" image="/icon/salat_time.png" />
          <PrayerHead title="Start Time" image="/icon/salat.png" />
          <PrayerHead title="Iqamah Time" image="/icon/azan.png" />
        </div>
        <PrayerRow
          image="/icon/mon.png"
          salat="fajr"
          time="06:21 AM"
          iqamah="06:40 AM"
        />
        <PrayerRow
          image="/icon/sun.png"
          salat="Dhuhr"
          time="12:52 PM"
          iqamah="01:30 PM"
        />
        <PrayerRow
          image="/icon/sun.png"
          salat="Asr"
          time="03:44 PM"
          iqamah="04:45 PM"
        />
        <PrayerRow
          image="/icon/sun.png"
          salat="Maghrib"
          time="06:08 PM"
          iqamah="06:11 PM"
        />
        <PrayerRow
          image="/icon/mon.png"
          salat="Isha's"
          time="07:22 PM"
          iqamah="07:45 PM"
        />
      </div>
      <div className="md:order-2 mt-12 ml-2">
        <h4 className="capitalize text-3xl font-bold pr-4 md:pr-0 text-green-800">
          Welcome To The Darul Hikmah Islamic Center
        </h4>
        <p className="my-6 text-green-900">
          Darul Hikmah Islamic Center (DHIC) is an independent, non-profit,
          community-based, religious 501(c)(3) organization. DHIC provides a
          dynamic space that cultivates an exchange of ideas about Islam through
          culture, charity, and education programs. The DHIC is not just a
          mosque for prayers rather it is a community center for all. The Center
          is committed to preserving an Islamic identity, building and
          supporting a viable Muslim community, promoting a comprehensive
          Islamic way of life based on the Holy Quran and the Sunnah of Prophet
          Muhammad.
        </p>
        <button className="bg-green-600 py-[0.5rem] px-4 text-white uppercase font-medium rounded-2xl hover:bg-green-600  hidden md:block mr-12 lg:mr-0">
          read more
        </button>
      </div>
    </section>
  );
}
