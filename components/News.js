export default function News({ image, title }) {
  return (
    <div className="grid grid-cols-2 gap-x-2 mb-2 cursor-pointer">
      <div>
        <img className="rounded-md" src={image} alt="s" />
      </div>
      <div>
        <small className="text-green-800 capitalize">april 04,2023</small>
        <h3 className="font-medium capitalize text-lg text-gray-900 my-1">
          {title}
        </h3>
        <p className="text-sm text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          esse odit.
        </p>
        <button className="underline capitalize font-medium mt-2 text-sm text-gray-800">
          read more
        </button>
      </div>
    </div>
  );
}
