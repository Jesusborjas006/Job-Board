import { useState } from "react";
import { data } from "../data";
import ListingContainer from "./ListingContainer";
import { Listing } from "../types";

function App() {
  const [allJobListings, setAllJobListings] = useState<Listing[]>(data);
  return (
    <main>
      <h1>Job Listings</h1>
      <ListingContainer allJobListings={allJobListings}/>
    </main>
  );
}

export default App;
