"use client";
import CombinedChart from "./ConbinedChart";
import sample_data from "../app/sample_data.json";

export default function Home() {
  return (
    <div>
      <CombinedChart data={sample_data.data}/>
    </div>
  );
}
