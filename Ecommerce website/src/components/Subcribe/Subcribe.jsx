import banner from "../../assets/website/orange-pattern.jpg";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="pb-10 bg-no-repeat bg-cover size-full bg-center bg-gray-100 dark:bg-gray-800 text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container backdrop-blur-sm py-10 mx-auto">
        <div className="mx-auto flex justify-center flex-col items-center">
          <h1 className="text-2xl !text-center sm:text-left sm:text-3xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[80%] max-w-[600px] p-3 bg-white text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
