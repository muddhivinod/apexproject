const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg relative transform transition-all scale-100 opacity-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold focus:outline-none" aria-label="Close modal">&times;</button>
      {children}
    </div>
  </div>
);
export default Modal;