import Action from "./Action";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-proper sticky top-0 z-50">
      <div className="flex mx-4 h-16 items-center text-white">
        <Logo />
        <Search />
        <Action />
      </div>
    </div>
  );
};

export default Header;
