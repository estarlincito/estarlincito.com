import toast from 'react-hot-toast';

const clipboard = (text: string, alert: string) => {
  navigator.clipboard.writeText(text);
  toast.success(alert);
};

export default clipboard;
