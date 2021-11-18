import React from "react";
import Home from "./pages/Home";
import BlackHole from "./pages/BlackHole";
import SearchImage from "./pages/SearchImage";
import TodayImage from "./pages/TodayImage";
import { FetchTodayContextProvider } from "../src/context/FetchTodayContext";
import { DropIconsContextProvider } from "../src/context/DropIconsContext";

function App() {
  return (
    <>
      <DropIconsContextProvider>
        <Home />
      </DropIconsContextProvider>
      <SearchImage />
      <FetchTodayContextProvider>
        <TodayImage />
      </FetchTodayContextProvider>
      <BlackHole />
    </>
  );
}

export default App;
