import Img1 from "../../assets/hero/sale.png";
import Img2 from "../../assets/hero/shopping.png";
import Img3 from "../../assets/hero/women.png";
import Slider from "react-slick";

const imgList = [
  {
    id: 1,
    image: Img1,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sed id quibusdam nihil exercitationem corporis porro molestiae soluta, facere, cumque reiciendis. Ipsam ab velit dolores aut aperiam debitis fugiat.",
  },
  {
    id: 2,
    image: Img2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sed id quibusdam nihil exercitationem corporis porro molestiae soluta, facere, cumque reiciendis. Ipsam ab velit dolores aut aperiam debitis fugiat.",
  },
  {
    id: 3,
    image: Img3,
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis sed id quibusdam nihil exercitationem corporis porro molestiae soluta, facere, cumque reiciendis. Ipsam ab velit dolores aut aperiam debitis fugiat.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-140 sm:min-h-160 bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0 z-10 lg:px-10">
        <Slider {...settings}>
          {imgList.length > 0 &&
            imgList.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text section */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      {item.title}
                    </h1>
                    <p
                      className="text-sm"
                      data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                      data-aos-once="true"
                    >
                      {item.description}
                    </p>
                    <div>
                      <button
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className="bg-gradient-to-r from-primary to-secondary cursor-pointer duration-200 text-white py-2 px-4 rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                  {/* img section */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        src={item.image}
                        alt=""
                        className="w-75 h-75 sm:h-110 sm:w-110 sm:scale-105 lg:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
