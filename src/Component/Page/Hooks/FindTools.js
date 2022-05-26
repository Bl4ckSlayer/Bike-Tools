import React, { useEffect, useState } from "react";

const FindTools = () => {
  const [findTools, setFindTools] = useState([]);

  useEffect(() => {
    fetch("https://secure-everglades-11152.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setFindTools(data));
  }, []);

  return [findTools, setFindTools];
};

export default FindTools;
