import { Calculator } from "@/components/Calculator";

const buttons = [
  { value: "(", isPrimary: true },
  { value: ")", isPrimary: true },
  { value: "%", isPrimary: true },
  { value: "AC", isPrimary: true },
  { value: "7", isPrimary: false },
  { value: "8", isPrimary: false },
  { value: "9", isPrimary: false },
  { value: "÷", isPrimary: true },
  { value: "4", isPrimary: false },
  { value: "5", isPrimary: false },
  { value: "6", isPrimary: false },
  { value: "*", isPrimary: true },
  { value: "1", isPrimary: false },
  { value: "2", isPrimary: false },
  { value: "3", isPrimary: false },
  { value: "-", isPrimary: true },
  { value: "0", isPrimary: false },
  { value: ".", isPrimary: false },
  { value: "=", isPrimary: false },
  { value: "+", isPrimary: true },
];
const Home = () => {
  return (
    <div>
      <input type="text" />
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 gap-10">
        <div className="w-full h-screen flex items-center justify-center bg-gray-900 gap-10">
          <div className="w-[450px] p-8 bg-gray-800  rounded-3xl  flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <div className="mt-10 w-full h-20 text-center  rounded-2xl bg-gray-900 )]">
              <p className=" font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"></p>
            </div>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 mt-12 ">
              {buttons.map((button, index) => (
                <Calculator
                  key={button.value + index}
                  isPrimary={button.isPrimary}
                >
                  {button.value}
                </Calculator>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [number, setNumber] = useState(0);

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-gray-900 gap-10">
//       <div className="w-full h-screen flex items-center justify-center bg-gray-900 gap-10">
//         <div className="w-[420px]  bg-gray-800 rounded-3xl p-8 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.3)]">
//           <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
//             Calculator
//           </h1>

//           <div className="mt-10 w-full text-center py-8 rounded-2xl bg-gray-900 )]">
//             <p className=" font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"></p>
//           </div>
//           <div className="grid grid-cols-3 grid-rows-3 gap-4 mt-12  ">
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               AC
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               %
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               ()
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               1
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               2
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               3
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               4
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               5
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               6
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               7
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               8
//             </button>
//             <button className=" rounded-2xl bg-green-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(0,255,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               9
//             </button>
//             <button className=" rounded-2xl bg-pink-500 text-white font-semibold text-lg shadow-[0_0_15px_rgba(255,0,128,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               +
//             </button>
//             <button className=" rounded-2xl bg-blue-500 text-white font-semibold text-lg shadow-[0_0_20px_rgba(0,252,255,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               -
//             </button>
//             <button className=" rounded-2xl bg-cyan-400 text-white font-semibold text-lg shadow-[0_0_20px_rgba(0,255,255,0.8)] hover:scale-110 transition transform  px-8 py-4">
//               =
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
