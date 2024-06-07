import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <div className="relative bg-[#FFDDDD] w-screen h-screen flex flex-col justify-start items-center">
        <img src="/cinnemon.png" className="absolute left-[100px] top-4 w-auto h-[116px] mt-10" alt="logo" />
        <img src="/skate.png" className="absolute right-[200px] top-[100px] w-auto h-[150px] mt-10" alt="logo" />
        <img src="/sleep.png" className="absolute left-[100px] bottom-0 w-auto h-[130px] mt-10" alt="logo" />
        <div className="w-screen text-center pb-20 pt-5 z-20">
          <Title />
        </div>
        
        <Timer />
      </div>
    </div>
  );
}

export default App;
