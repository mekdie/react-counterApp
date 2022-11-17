// import React, { Component } from "react";

// Stateless Functional Component
// props only works in class Component
// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-light bg-light">
//         <a href="/" className="navbar-brand p-3">
//           Navbar
//           <span className="badge badge-pill bg-secondary ms-2">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     </>
//   );
// };

// so therefore it needs to be like this
const Navbar = ({ totalCounters }) => {
  //get props we are interested in (so we don't have to this. everytime) - OBJECT DESTRUCTURING
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <a href="/" className="navbar-brand p-3">
          Navbar
          <span className="badge badge-pill bg-secondary ms-2">
            {totalCounters}
          </span>
        </a>
      </nav>
    </>
  );
};

// class Navbar extends Component {
//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-light bg-light">
//           <a href="/" className="navbar-brand p-3">
//             Navbar
//             <span className="badge badge-pill bg-secondary ms-2">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       </>
//     );
//   }
// }

export default Navbar;
