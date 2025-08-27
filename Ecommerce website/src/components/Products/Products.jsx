import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const productData = [
  {
    id: 1,
    image: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "Women western",
    rating: 4.5,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    image: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Yellow",
    aosDelay: "400",
  },
  {
    id: 4,
    image: Img4,
    title: "Fashion T-shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* header section */}
        <div className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto
            temporibus necessitatibus.
          </p>
        </div>

        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {productData.length > 0 &&
              productData.map((item) => (
                <div
                  key={item.id}
                  className="space-y-3 cursor-pointer"
                  data-aos="fade-up"
                  datao-aos-delay={item.aosDelay}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-55 w-40 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.color}</p>
                    <div className="flex gap-1 items-center">
                      <FaStar className="text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* view all btn */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-3 rounded-md">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
