// import React, { Component } from "react";
// import Slider from "react-slick";
// import allUser from "../../data/UserData";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       prevArrow: <CustomPrevArrow />,
//       nextArrow: <CustomNextArrow />,
//     };

//     const CustomPrevArrow = (props) => {
//       const { className, style, onClick } = props;
//       return (
//         <div
//           className={className}
//           style={{ ...style, display: "block", left: "10px" }}
//           onClick={onClick}
//         >
//           Previous
//         </div>
//       );
//     };

//     const CustomNextArrow = (props) => {
//       const { className, style, onClick } = props;
//       return (
//         <div
//           className={className}
//           style={{ ...style, display: "block", right: "10px" }}
//           onClick={onClick}
//         >
//           Next
//         </div>
//       );
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <section>
//             <div className="container">
//               <div className="carosel">
//                 {allUser.map((user, i) => (
//                   <div className='lemano-carosel' key={user.id} >
//                     <img className='background-img-one' src={user.background} alt='justimage' />
//                     <div className="background-add">
//                       <div className='profile-photo'>
//                         <img src={user.profilePhoto} alt={'profilePhoto'} />
//                         <h1>{user.userid} {user.verify}</h1>
//                         <p>By {user.name}</p>
//                         <div className='profile-photo-1'>
//                           <h6>{user.items} items | {user.price}</h6>
//                         </div>
//                       </div>
//                       <div className='button-adjust'>
//                         <img src={user.viewCollection[1].collection2} alt="justimage" />
//                         <img src={user.viewCollection[0].collection1} alt="justimage" />
//                         <button >viewCollection</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </Slider>
//       </div>
//     );
//   }
// }
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import allUser from '../../data/UserData';

// const CarouselSlider = () => {
//  const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//  };

//  return (
//     <Slider {...settings} className='slider-1'>
//       <div className="container">
//           <div className="carosel">
//             {allUser.map((user, i) => (
//               <div className='lemano-carosel' key={user.id} >
//                 <img style={{ width: '593px', height: '511px', borderRadius: '28px' }} className='background-img-one' src={user.background} alt='justimage' />
//                 <div className="background-add">
//                   <div className='profile-photo'>
//                     <img src={user.profilePhoto} alt={'profilePhoto'} />
//                     <h1>{user.userid} {user.verify}</h1>
//                     <p>By {user.name}</p>
//                     <div className='profile-photo-1'>
//                       <h6>{user.items} items | {user.price}</h6>
//                     </div>
//                   </div>
//                   <div className='button-adjust'>
//                     <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[1].collection2} alt="justimage" />
//                     <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[0].collection1} alt="justimage" />
//                     <button >viewCollection</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//     </Slider>
//  );
// };

// export default CarouselSlider;