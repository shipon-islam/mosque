import { IoCall, IoLocationSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import PrayerHead from "../PrayerHead";
import PrayerRow from "../PrayerRow";

function Footer() {
  return (
    <footer>
      <div className="bg-green-600/10">
        <div className="max-w-[1450px] mx-auto grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_25rem]  md:px-16 px-4 py-6 gap-x-4">
          <div>
            <h4 className="text-2xl font-medium mb-4 text-green-800">
              Darul Hikmah Islamic Center
            </h4>
            <p className="text-green-900">
              "The best deeds for a person are to help humanity and to preserve
              the given knowledge in his heart for good."
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-medium mb-4 mt-8 sm:mt-0 text-green-800">
              Darul Hikmah Islamic Center
            </h4>
            <ul>
              <li className="flex items-center mb-5 text-green-900">
                <IoLocationSharp className="text-4xl mr-2" />
                <p>
                  Darul Hikmah Islamic Center (DHIC) 5220 Fillmore Ave,
                  Alexandria, VA 22311
                </p>
              </li>
              <li className="flex items-center mb-5 text-green-900">
                <IoCall className="text-xl mr-2" />
                <p>(703)705-1666</p>
              </li>
              <li className="flex items-center mb-5 text-green-900">
                <SiMinutemailer className="text-2xl mr-2" />
                <p>nfo@dhicva.org</p>
              </li>
            </ul>
          </div>

          <div className="md:order-2 hidden md:block">
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
        </div>
      </div>
      <div className="bg-green-900/40">
        <div className="max-w-[1450px] mx-auto md:pl-16 px-4 py-4 text-center font-medium text-green-900">
          <h3>Copyright 2021-2023 DHIC. All Rights Reserved.</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
