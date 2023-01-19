import React, { useEffect, useState } from "react";

const FindTools = () => {
  const [findTools, setFindTools] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-server-bl4ckslayer.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setFindTools(data));
  }, []);

  return [findTools, setFindTools];
};

export default FindTools;
