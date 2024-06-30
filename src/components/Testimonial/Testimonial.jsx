import React from "react";
import Slider from "react-slick";
import olivierImg from '../../assets/team/olivier.jpg'
import benjaminImg from '../../assets/team/benjamin.png'
import clementImg from '../../assets/team/clement.jpg'
import inesImg from '../../assets/team/ines_kazimana.jpg'
import fordImg from '../../assets/team/ford.jpg'

const testimonialData = [
  {
    id: 1,
    name: "Olivier Rwamasirabo",
    text: "Managing Partiner",
    email: " Rwamasirabo@legalwise.rw",
    phone: " +250789999999",
    img: olivierImg ,
  },
  {
    id: 2,
    name: "Ntaganira Benjamin",
    text: "Partiner(Dormant)",
    email: " Ntaganira@legalwise.rw",
    phone: " +250789999999",
    img: benjaminImg,
  },
  {
    id: 3,
    name: "Sematungo Clement",
    text: "Senior Associate",
    email: " Sematungo@legalwise.rw",
    phone: " +250789999999",
    img: clementImg,
  },
  {
    id: 4,
    name: "Kazimana Ines",
    text: " Associate",
    email: " I.ines@legalwise.rw",
    phone: " +250789999999",
    img: inesImg,
  },
  {
    id: 5,
    name: "Lincoln Ford",
    text: " Associate",
    email: " Lincoln@legalwise.rw",
    phone: " +250789999999",
    img: fordImg,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10" id="team">
        <h2
          data-aos="fade-up"
          className=" text-center text-xl">Our Team</h2>
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-2"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, email, phone, text, img }) => {
                return (
                  <div key={id} className="my-6">

                    {/* card */}
                    <div className="flex flex-col items-center justify-center sm:flex-row gap-2 md:gap-8 p-2 mx-2 rounded-xl dark:bg-gray-800 relative">
                      <div>
                        <img
                          src={img}
                          alt=""
                          className="block mx-auto h-[300px] w-full  object-cover"
                        />
                        <div className="space-y-2">
                          <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-20">
                            {name}
                          </p>
                          <h1 className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-20">{text}</h1>
                          <h1 className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-20">{email}</h1>
                          <h1 className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-20">{phone}</h1>
                          
                        </div>


                      </div>


                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
