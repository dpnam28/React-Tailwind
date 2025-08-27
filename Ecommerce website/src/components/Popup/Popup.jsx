import { IoCloseOutline } from "react-icons/io5";
const Popup = ({ openPopup, setOpenPopup, handleOpenPopup }) => {
  return (
    <>
      {openPopup && (
        <div className="z-50 h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded duration-300 w-[40%] max-w-100">
            {/* heading */}
            <div className="flex justify-between items-center p-3 ">
              <div className="">
                <h1>Order now</h1>
              </div>
              <div className="">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => handleOpenPopup()}
                />
              </div>
            </div>

            {/* form section */}
            <div className="p-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
              />
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white px-3 py-1 rounded-full duration-200">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
