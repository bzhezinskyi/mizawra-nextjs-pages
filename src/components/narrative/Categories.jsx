import { FaCircle, FaDotCircle } from "react-icons/fa";
import { narrativeCategories } from "@/constants/narrativeCategories";
import { useRouter } from "next/router";

const { ALL, FREE_JOURNAL, PROMPTED_JOURNAL, STORY } = narrativeCategories;

export default function Categories() {
  const router = useRouter();
  const category = router.query.category;

  const handleToggleCategory = (evt) => {
    switch (evt.currentTarget.name) {
      case FREE_JOURNAL:
        category === FREE_JOURNAL
          ? router.push(``)
          : router.push(`?category=${FREE_JOURNAL}`);
        break;

      case PROMPTED_JOURNAL:
        category === PROMPTED_JOURNAL
          ? router.push(``)
          : router.push(`?category=${PROMPTED_JOURNAL}`);

        break;

      case STORY:
        category === STORY
          ? router.push(``)
          : router.push(`?category=${STORY}`);

        break;

      default:
        break;
    }
  };

  return (
    <ul className="w-full flex flex-wrap justify-around mb-44">
      <li className="w-96 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name={FREE_JOURNAL}
          onClick={handleToggleCategory}
        >
          {category === FREE_JOURNAL ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-blue" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-blue" />
          )}

          <h3 className="uppercase text-2xl">Free journal</h3>
        </button>
      </li>
      <li className="w-96 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name={PROMPTED_JOURNAL}
          onClick={handleToggleCategory}
        >
          {category === PROMPTED_JOURNAL ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-grean" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-grean" />
          )}
          <h3 className="uppercase text-2xl">prompted journal</h3>
        </button>
      </li>
      <li className="w-96 h-44 m-3 text-center">
        <button
          className="relative w-full h-32 mt-9 p-auto rounded-3xl btn"
          name={STORY}
          onClick={handleToggleCategory}
        >
          {category === STORY ? (
            <FaCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-pink" />
          ) : (
            <FaDotCircle className="absolute end-1/2 bottom-3/4 translate-x-2/4 w-20 h-20 bg-color-pink" />
          )}
          <h3 className="uppercase text-2xl">Story</h3>
        </button>
      </li>
    </ul>
  );
}
