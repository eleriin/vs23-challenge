import React, {useEffect, useRef} from "react"
import "../../index.css";
import { use } from "react";

const Modal = ({open, onClose, children}) => {
    const dialogRef = useRef();

    useEffect (()=> {
        const dialog = dialogRef.current;

        if(open){
            if(!dialog.open){
                dialog.showModal();
            }
        } else {
            if(dialog.open){
                dialog.close();
            }
        }
        const handleCancel = (event) =>{
            event.preventDefault();
            onClose();
        };
        dialog.addEventListener('Cancel',handleCancel);

        return()=> dialog.removeEventListener('cancel', handleCancel);
    },[open,onClose]);

    return ( 
        <dialog ref={dialogRef} className="modal">
            {children}
        </dialog>
        
    )
}

export default Modal