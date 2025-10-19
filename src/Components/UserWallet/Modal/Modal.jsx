import {useEffect, useRef} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function Modal({children, open, className, onClose}) {
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }
        return () => modal.close();
    }, [open]);
    return (
        <AnimatePresence>
            <motion.dialog ref={dialog} className={`modal ${className}`} onClose={onClose}
                           initial={{opacity: 0, scale: 0.9, y: 20}}
                           animate={{opacity: 1, scale: 1, y: 0}}
                           exit={{opacity: 0, scale: 0.9, y: 20}}
                           transition={{duration: 1.25, ease: "easeOut"}}
            >
                {children}
            </motion.dialog>
        </AnimatePresence>

    )
}