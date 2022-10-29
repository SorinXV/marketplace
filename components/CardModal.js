import React,{useState} from 'react'
import {motion as m , AnimatePresence} from 'framer-motion'
import Modal from './Modal';
export default function CardModal({color , text}) {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
  
      const context = text == 'Add now' ? 1 : 2;


    return (
        <>
    <m.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{backgroundColor:color}}
      className="save-button | text-white px-2 py-3 outline-none rounded-md hover:opacity-7 cursor-pointer "
      onClick={() => (modalOpen ? close() : open())}
    >
      {text}
    </m.button>
            <AnimatePresence
                onExitComplete={() => null}
              exitBeforeEnter={true}
              initial={false}
            >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} render={context}/>}
    </AnimatePresence>
</>
    )
}
