import { toast } from "react-toastify";


export const handleSuccess =(msg)=>{
    toast.success(msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

}

export const handleError = (msg)=>{
    toast.error(msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
export const handleInfo = (msg)=>{
    toast.info(msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}






