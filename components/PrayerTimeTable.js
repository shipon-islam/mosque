import { firestoreDb } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

import { IqamaTime } from "@/utilities/helper";
import { useEffect, useState } from "react";
import HeadLine from "./HeadLine";
import PrayerHead from "./PrayerHead";
import PrayerRow from "./PrayerRow";

function PrayerTimeTable({ className, headline }) {
  const [prayer, setPrayer] = useState({});
  const collectionRef = collection(firestoreDb, "prayers");

  //fetch announcement function
  const fetchData = async () => {
    const snapshot = await getDocs(collectionRef);
    if (!snapshot.empty) {
      setPrayer({ ...snapshot.docs[0].data(), id: snapshot.docs[0].id });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={`${className} md:order-2`}>
      <div className={headline}>
        <HeadLine tittle="prayer time" />
      </div>

      <div className="grid grid-cols-3 bg-green-600/20 py-1 rounded-md">
        <PrayerHead title="Time Of Salat" image="/icon/salat_time.png" />
        <PrayerHead title="Start Time" image="/icon/salat.png" />
        <PrayerHead title="Iqamah Time" image="/icon/azan.png" />
      </div>
      <PrayerRow
        image="/icon/mon.png"
        salat="fajr"
        time={prayer?.fajr}
        iqamah={IqamaTime(prayer?.fajr, 15)}
      />
      <PrayerRow
        image="/icon/sun.png"
        salat="Dhuhr"
        time={prayer?.dhuhr}
        iqamah={IqamaTime(prayer?.dhuhr, 28)}
      />
      <PrayerRow
        image="/icon/sun.png"
        salat="Asr"
        time={prayer?.asr}
        iqamah={IqamaTime(prayer?.asr, 12)}
      />
      <PrayerRow
        image="/icon/sun.png"
        salat="Maghrib"
        time={prayer?.maghrib}
        iqamah={IqamaTime(prayer?.maghrib, 0)}
      />
      <PrayerRow
        image="/icon/mon.png"
        salat="Isha's"
        time={prayer?.isha}
        iqamah={IqamaTime(prayer?.isha, 20)}
      />
      <PrayerRow
        image="/icon/sun.png"
        salat="Jummah"
        time={prayer?.jummah}
        iqamah={IqamaTime(prayer?.jummah, 30)}
      />
    </div>
  );
}

export default PrayerTimeTable;
