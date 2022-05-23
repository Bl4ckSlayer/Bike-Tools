// import { useEffect, useState } from "react";

// const useToken = (user) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     const email = user?.user?.email;
//     const name = user?.user?.displayName;

//     if (email) {
//       fetch(`http://localhost:5000/user/${email}`, {
//         method: "PUT",
//         headers: {
//           "content-type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("data inside useToken", data);
//           const accessToken = data.token;
//           localStorage.setItem("accessToken", accessToken);
//           setToken(accessToken);
//         });
//     }
//   }, [user]);
//   return [token];
// };

// export default useToken;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const useToken = (user) => {
//   const [token, setToken] = useState("");
//   useEffect(() => {
//     const getToken = async () => {
//       const email = user?.user?.email;
//       if (email) {
//         const { data } = await axios.post(
//           `http://localhost:5000/user/${email}`,
//           {
//             email,
//           }
//         );
//         setToken(data.accessToken);
//         console.log(data.accessToken);
//         localStorage.setItem("accessToken", data.accessToken);
//       }
//     };
//     getToken();
//   }, [user]);
//   return [token];
// };

// export default useToken;
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const name = user?.user?.displayName;

    const currentUser = { email: email, name: name };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
