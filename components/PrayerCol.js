export default function PrayerCol({ title, image }) {
  return (
    <div
      className={`flex items-center gap-x-1  py-1 ${
        image ? "px-9" : "justify-center"
      }`}
    >
      {image && <img className="w-8" src={image} alt="icon" />}

      <p className="text-center font-medium text-green-900 capitalize">
        {title}
      </p>
    </div>
  );
}
