import { narrativeCategories } from "@/constants/narrativeCategories";
import { useRouter } from "next/router";

export default function WritingCategoryModal({ setOpenModal }) {
  const { FREE_JOURNAL, PROMPTED_JOURNAL, STORY } = narrativeCategories;
  const router = useRouter();

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  const handleToggleCategory = (e) => {
    switch (e.currentTarget.name) {
      case FREE_JOURNAL:
        router.push(`?category=${FREE_JOURNAL}`);
        setOpenModal(false);
        break;

      case PROMPTED_JOURNAL:
        router.push(`?category=${PROMPTED_JOURNAL}`);
        setOpenModal(false);

        break;

      case STORY:
        router.push(`?category=${STORY}`);
        setOpenModal(false);

        break;

      default:
        break;
    }
  };

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-300"
      onClick={handleCloseModal}
    >
      <div className="m-3 p-9 rounded-3xl card absolute bottom-1/2 right-1/2 translate-x-2/4 translate-y-2/4">
        <button
          name={FREE_JOURNAL}
          onClick={handleToggleCategory}
          className="uppercase p-2 m-2 rounded-xl btn"
        >
          Free journal
        </button>
        <button
          name={PROMPTED_JOURNAL}
          onClick={handleToggleCategory}
          className="uppercase p-2 m-2 rounded-xl btn"
        >
          Prompted journal
        </button>
        <button
          name={STORY}
          onClick={handleToggleCategory}
          className="uppercase p-2 m-2 rounded-xl btn"
        >
          story
        </button>
      </div>
    </div>
  );
}
