import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "-10vh",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };



const Modal = ({ handleClose , render }) => {

  
  const AddNowModal = () => {
    return (
        <>
          <div className="modal ">
                   <ul className="flex flex-col gap-1">
                     <li className="flex gap-3 text-white"><span className="bg-white rounded-md text-black p-1">+</span> Add to Favourite</li>
                     <li className="flex gap-3 text-white"><span className="bg-white rounded-md text-black p-1">+</span> Add to Cart</li>
                   </ul>
          </div>
          <button onClick={handleClose} className="px-3 py-2 outline-none bg-white rounded-md mt-3">Close</button>

        </>
    )
}



  
const BuyNowModal = () => {
    return (
      <>
      <div className="modal ">
               <ul className="flex flex-col gap-1">
                 <li className="flex gap-3 text-white"><input placeholder="Input quantity"/></li>
                 <li className="flex gap-3 text-white"><p>Cost calculation tldr</p></li>
               </ul>
      </div>
      <button onClick={handleClose} className="px-3 py-2 outline-none bg-white rounded-md mt-3">Buy now</button>

    </>
    )
}

    let content = render == 1 ? <AddNowModal/> : <BuyNowModal/>

    return (
      <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="bg-red-400 p-5 w-[50%] mx-auto "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
   {content}
          </motion.div>
      </Backdrop>
    );
  };

  
  export default Modal;