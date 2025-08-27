import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore inventore qui amet nemo optio asperiores eius voluptatibus recusandae corrupti. Mollitia!",
    image: Img1,
  },
  {
    id: 2,
    name: "Lisa",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore inventore qui amet nemo optio asperiores eius voluptatibus recusandae corrupti. Mollitia!",
    image: Img2,
  },
  {
    id: 3,
    name: "John",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore inventore qui amet nemo optio asperiores eius voluptatibus recusandae corrupti. Mollitia!",
    image: Img3,
  },
  {
    id: 4,
    name: "William",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore inventore qui amet nemo optio asperiores eius voluptatibus recusandae corrupti. Mollitia!",
    image: Img4,
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initailSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="my-12">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-primary">What our customers are saying</p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto
            temporibus necessitatibus.
          </p>
        </div>
        {/* testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.length > 0 &&
              TestimonialsData.map((item) => (
                <div className="my-6">
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={item.image}
                        alt=""
                        className="size-20 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="text-xs text-gray-400">{item.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {item.name}
                      </h1>
                    </div>
                    <p className="absolute -top-10 right-10 text-black/20 text-9xl !font-serif">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
