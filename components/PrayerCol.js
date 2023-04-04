export default function PrayerCol({ title, image }) {
  return (
    <div
      className={`flex items-center gap-x-1  py-1 ${
        image ? "pl-4 sm:pl-9" : "justify-center"
      }`}
    >
      {image && <img className="w-8" src={image} alt="icon" />}

      <p className="text-center font-medium capitalize">{title}</p>
    </div>
  );
}
