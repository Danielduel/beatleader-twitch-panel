import "./App.css";
import { useBeatLeaderUserInfo } from "./api.ts";
import { React, useState } from "./deps.ts";

function App() {
  const { data, isLoading } = useBeatLeaderUserInfo("76561198023909718");

  if (isLoading) return "loading";
  if (!data) return "error";
  console.log(data)

  return (
    <>
      <code>
        { JSON.stringify(data) }
      </code>
    </>
  );
}

export default App;
