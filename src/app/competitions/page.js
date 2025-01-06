import React from "react";
import SearchBar from "./components/searchbar";
import CloudSection from "./components/Cloudsection";
import Competitions from "./components/cometitions"
export default function Page() {
  return (
    <div>
      <CloudSection />
      <SearchBar />
      <Competitions/>
    </div>
  );
}
