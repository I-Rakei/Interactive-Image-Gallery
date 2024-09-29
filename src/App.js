import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Gallery from "./components/Gallery";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-full max-w-2xl bg-white p-6 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Interactive Image Gallery
          </h1>
          <Gallery />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
