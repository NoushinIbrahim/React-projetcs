import { useState } from 'react'


function App() {
  const [color, setcolor] = useState('pink')

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "red" }}
          > Red
          </button>

          <button
            onClick={() => setcolor("green")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "green" }}
          > Green
          </button>

          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "pink" }}
          > Pink
          </button>

          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "blue" }}
          > Blue
          </button>

          <button
            onClick={() => setcolor("black")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "black" }}
          > Black
          </button>

          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "purple" }}
          > Purple
          </button>

          <button
            onClick={() => setcolor("cyan")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "cyan" }}
          > Cyan
          </button>

          <button
            onClick={() => setcolor("lime")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "lime" }}
          > Lime
          </button>

          <button
            onClick={() => setcolor("brown")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "brown" }}
          > Brown
          </button>

          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "yellow" }}
          > Yellow
          </button>

          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "orange" }}
          > Orange
          </button>

          <button
            onClick={() => setcolor("white")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "white" }}
          > White
          </button>

          <button
            onClick={() => setcolor("gray")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "gray" }}
          > Gray
          </button>

          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "olive" }}
          > Olive
          </button>

          <button
            onClick={() => setcolor("lavender")}
            className="outline-none px-2 py-1  rounded-full text-black  "
            style={{ backgroundColor: "lavender" }}
          > lavender
          </button>

          <button
            onClick={() => setcolor("Maroon")}
            className="outline-none px-2 py-1  rounded-full text-white  "
            style={{ backgroundColor: "maroon" }}
          > Maroon
          </button>

          
        </div>
      </div>
    </div>
  );
}

export default App
