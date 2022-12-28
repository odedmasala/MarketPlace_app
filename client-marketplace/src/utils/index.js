import { toast } from "react-toastify";

const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
};
const notify = (massage)=>{
  toast.success(massage, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
const notifyError = (massage)=>{
  toast.error(massage, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

export {truncateString,notify,notifyError}