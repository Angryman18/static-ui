import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative ml-4 xs:block hidden">
      <input
        placeholder="Search"
        className="text-base xs:w-40 md:w-96 sm:w-64 w-36  bg-[#292B2F] rounded-md px-4 py-1 pl-10 outline-1 caret-white text-white"
      />
      <CiSearch className="absolute top-3 left-2 text-white text-opacity-80 text-2xl" />
    </div>
  );
};

export default Search;
