import React, { useEffect } from "react";

function Home() {
  return useEffect(() => {
    window.location.href = "/livinArt/index.html";
  }, []);
}

export default Home;
