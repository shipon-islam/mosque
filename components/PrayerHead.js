export default function PrayerHead({ image, title }) {
  return (
    <div>
      <img className="w-14 h-14 mx-auto" src={image} alt="time" />
      <p className="text-center font-medium ">{title}</p>
    </div>
  );
}
