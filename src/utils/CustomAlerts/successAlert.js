import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function successAlert(message) {
  toast.success(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
}

export default successAlert;
