import React from "react";
import { useAuth } from "../context/Auth.context";

function HomePage() {
  const data = useAuth();
  console.log(data);
  return <div>HomePage</div>;
}

export default HomePage;
