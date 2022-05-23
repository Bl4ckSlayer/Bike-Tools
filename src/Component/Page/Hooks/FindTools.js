import React, { useEffect, useState } from "react";

const FindTools = () => {
  const [findTools, setFindTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setFindTools(data));
  }, [findTools]);
  return [findTools, setFindTools];
};

export default FindTools;
