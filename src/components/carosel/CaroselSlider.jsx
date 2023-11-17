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
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import allUser from '../../data/UserData';

const CaroselSlider = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  const handleChange = (newIndex) => {
    setIndex(newIndex);
  };
  const cardsToShow = 2; 
  const slidePercentage = 100 / Math.max(cardsToShow, allUser.length);

  return (
    <div className="container">
      <Carousel
        showArrows={true}
        navButtonsAlwaysVisible={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={1000}
        infiniteLoop={true}
        swipeable={true}
        centerMode={true}
        emulateTouch={true}
        centerSlidePercentage={slidePercentage}
        onClickItem={(index) => console.log(index)}
        onChange={handleChange}
      >
        {allUser.map((user, i) => (
          <div className="carousel-item" key={user.id}>
            <div className="user-card">
              <img
                className="background-image"
                style={{ width: '593px', height: '511px', borderRadius: '28px' }}
                src={user.background}
                alt="Background"
              />
              <div className="content">
                <div className="profile">
                  <img src={user.profilePhoto} alt="Profile" />
                  <h1>
                    {user.userid} {user.verify && <span className="verify-icon">✔</span>}
                  </h1>
                  <p>By {user.name}</p>
                  <div className="profile-info">
                    <p>{user.items} items | {user.price}</p>
                  </div>
                </div>
                <div className="collection">
                  <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[0].collection1} alt="Collection1" />
                  <img style={{ width: '181px', height: '190px', borderRadius: '14px' }} src={user.viewCollection[1].collection2} alt="Collection2" />
                  <button className="view-collection-button">View Collection</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CaroselSlider;
