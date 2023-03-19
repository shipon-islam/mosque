import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
function TopNavbar() {
  return (
    <div className="flex justify-between items-center bg-green-600/10 py-2 pr-5 pl-6 md:px-12 max-w-[1450px] mx-auto">
      <div className="font-bold text-green-900 text-[1rem]">
        <MdOutgoingMail className="inline-block text-2xl rounded-sm" />
        info@dhicva.org
      </div>
      <div>
        <a
          href="/"
          className="bg-slate-300 text-green-800 hover:text-slate-300 hover:transition-colors duration-200 hover:bg-green-800 mr-2 pb-1 px-1  pt-[2px] rounded-md"
        >
          <FaFacebookF className="inline-block text-lg  rounded-sm" />
        </a>

        <a
          href="/"
          className="bg-slate-300 text-green-800 hover:text-slate-300 hover:transition-colors duration-200 hover:bg-green-800 mr-2 pb-1 px-1  pt-[2px] rounded-md"
        >
          <FaTwitter className="inline-block text-lg rounded-sm" />
        </a>
        <a
          href="/"
          className="bg-slate-300 text-green-800 hover:text-slate-300 hover:transition-colors duration-200 hover:bg-green-800  mr-2 pb-1 px-1 pt-[2px]  rounded-md"
        >
          <FaLinkedinIn className="inline-block text-xl  rounded-sm" />
        </a>
        <a
          href="/"
          className="bg-slate-300 text-green-800 hover:text-slate-300 hover:transition-colors duration-200 hover:bg-green-800 mr-2 pb-[4.5px] px-1  pt-[3px] rounded-md"
        >
          <RiInstagramFill className="inline-block text-[1.4rem]  rounded-sm" />
        </a>
      </div>
    </div>
  );
}

export default TopNavbar;
