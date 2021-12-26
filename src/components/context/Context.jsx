// import React, { createContext, useEffect } from "react";

// Context guide: https://dmitripavlutin.com/react-context-and-usecontext/
// export const myContext = createContext({});
// export default function Context(props) {

//     const [userObject, setUserObject] = useState();

//     useEffect(() => {
//         try {
//             let response = await fetch(`http://locaalhost:5000/randomApi`, {
//                 method: 'GET',
//                 credentials: 'include'
//             });

//             let data = await response.json();

//             if (data) {
//                 setUserObject(data);
//             }
//         }
//         catch (error) {
//             console.log("error" + error);
//         }
//     }, []);

    
//     return (
//             <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
//     )

// };
