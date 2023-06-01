import useModal from "@/store/useModal";

export default function Modal() {
  const { isModal, closeModal, dataDeletedNarrative } = useModal();
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`${
        isModal ? "block" : "hidden"
      } fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-300 `}
      onClick={handleCloseModal}
    >
      <div className=" m-3 p-9 rounded-3xl card absolute bottom-1/2 right-1/2 translate-x-2/4 translate-y-2/4">
        <div className="flex">
          <h3>
            Delete {""}
            <span className="font-bold uppercase">
              {dataDeletedNarrative.title}
            </span>
            {""} narrative?
          </h3>
        </div>
        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
      </div>
    </div>
  );
}
