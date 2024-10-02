import React from 'react'
import Clear from '../assets/images/clear.svg'

function Modal({children, setShowModal, showModal}) {
  return (
    <div onClick={(e) => e.target.id === "wrapper" && setShowModal(false)} id="wrapper" className={`fixed inset-0 duration-300 z-10 backdrop-blur bg-[#00000029] ${showModal ? "" : "scale-0"}`}>
        <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-[700px] h-[625px] bg-white shadow-lg border-[2px] border-solid border-slate-300 rounded-lg p-5'>
          <button onClick={() => setShowModal(false)} className='absolute opacity-50 right-5 top-5'><img src={Clear} alt="Clear" width={30} height={30}/></button>
            {children}
        </div>
    </div>
  )
}

export default Modal