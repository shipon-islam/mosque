import { HiOutlineArrowSmRight } from "react-icons/hi";

function Button({ name, className, ...rest }) {
  return (
    <button
      className={`${className} bg-green-600 py-[0.5rem] px-4 text-white uppercase font-medium rounded-2xl hover:bg-lime-600 mr-12 lg:mr-0`}
      {...rest}
    >
      {name}
      <HiOutlineArrowSmRight className="inline-block" />
    </button>
  );
}

export default Button;
