import Header from "@/components/Header";
import MenuBar from "@/components/MenuBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-screen bg-black">
        <MenuBar />
        <div className="flex-1 overflow-y-auto p-4 xs:ml-16 ml-10 bg-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
