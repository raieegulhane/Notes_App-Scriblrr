import { toast } from "react-toastify";


const useToast = () => {
    const showToast = (toastTheme, toastMessage) => {
        const notify = () => {
            toast[toastTheme](
                toastMessage,
                    {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
        }
        notify();
    } 
    return({ showToast });
}

export { useToast };