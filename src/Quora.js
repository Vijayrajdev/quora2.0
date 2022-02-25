import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widget from "./Components/Widget";

const Quora = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100">
        <Navbar />
        <div className="h-screen overflow-hidden">
          <main className="flex space-x-7 mx-32">
            <Sidebar />
            <Feed />
            <Widget />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Quora;
