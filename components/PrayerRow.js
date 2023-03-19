import PrayerCol from "./PrayerCol";

function PrayerRow({ image, iqamah, salat, time }) {
  return (
    <div className="grid  grid-cols-3 bg-green-600/10 py-1 rounded-md mt-1">
      <PrayerCol title={salat} image={image} />
      <PrayerCol title={time} />
      <PrayerCol title={iqamah} />
    </div>
  );
}

export default PrayerRow;
