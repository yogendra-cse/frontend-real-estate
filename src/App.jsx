// // import Navbar from './components/navbar/Navbar';

// import HomePage from './routes_components/HomePage/homePage';
// import {
//   createBrowserRouter,
//   RouterProvider,
  
// } from "react-router-dom";
// import ListPage from './routes_components/ListPage/listPage';
// import Layout from './routes_components/layout/layout';
// import SinglePage from './routes_components/singlePage/SinglePage';
// import Profile from './routes_components/roleprofiles/profile';
// import Login from './routes_components/login/login';
// import Register from './routes_components/register/register';
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <HomePage />
//         },
//         {
//           path: "/list",
//           element: <ListPage />
//         },
//         {
//           path: "/:id",
//           element: <SinglePage />
//         },
//         {
//           path: "/profile",
//           element: <Profile />
//         },
//         {
//           path: "/login",
//           element: <Login />
//         },
//         {
//           path: "/register",
//           element: <Register />
//         }
      
        
//       ]
//     }
//   ]);
//   return (
   
//     <RouterProvider router={router}/>
    
//   )
// }

// export default App;

// /*
//  <>
//     <div className="layout">
//       <div className="navbar">       
//          <Navbar />
//       </div>
//      <div className="content">
//         <HomePage />
//      </div>           
//     </div>

    
//     </>
// }

// */ 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes_components/layout/layout";
import HomePage from "./routes_components/HomePage/homePage";
import ListPage from "./routes_components/ListPage/listPage";
import SinglePage from "./routes_components/singlePage/SinglePage";
import Profile from "./routes_components/roleprofiles/profile";
import Login from "./routes_components/login/login";
import Register from "./routes_components/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "list", element: <ListPage /> },
      { path: ":id", element: <SinglePage /> },
      { path: "profile", element: <Profile /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
