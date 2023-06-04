import { useRouter } from "next/router";

import {
  narrativeCategories,
  narrativeSubCategories,
} from "@/constants/narrativeCategories";

const narrativePromptedSubCategoryList = [
  {
    title: "philosophical prompt",
    text: "Want to try to answer the big questions today? Go for this sub-mode!",
    route: "philosophical",
    subtitle: "What can you hope for?",
  },
  {
    title: "positive prompt",
    text: "Feel like you need something uplifting today? Check out this sub-mode.",
    route: "positive",
    subtitle: "What can you hope for?",
  },
  {
    title: "neutral prompt",
    text: "Feel like you need something uplifting today? Check out this sub-mode.",
    route: "neutral",
    subtitle: "What can you hope for?",
  },
  {
    title: "negative prompt",
    text: "Feel like tackling a difficult personal moment today? This sub-mode could be right for you.",
    route: "negative",
    subtitle: "What can you hope for?",
  },
];
const narrativeStorySubCategoryList = [
  {
    title: "one word prompt",
    text: "This sub-mode will ask you to write a story about a given word. Let your imagination run wild. ",
    route: "one-word",
    subtitle:
      "Continue to write this story, edit it if you like and let your imagination run wild",
  },
  {
    title: "a few words prompt",
    text: "This sub-mode will ask you to write a story that includes each word of a given list of words.",
    route: "fre-words",
    subtitle:
      "Continue to write this story, edit it if you like and let your imagination run wild",
  },
  {
    title: "paragraph prompt",
    text: "In this sub-mode you will get a paragraph. It is the beginning of a story, feel free to continue writing on it. ",
    route: "paragraph",
    subtitle:
      "Continue to write this story, edit it if you like and let your imagination run wild",
  },
];

export default function WritingSubCategory() {
  const route = useRouter();
  const { category, subcategory } = route.query;
  const { PROMPTED_JOURNAL, STORY } = narrativeCategories;
  const { PHILOSOPHICAL, POSITIVE, NEGATIVE, NEUTRAL } =
    narrativeSubCategories.PROMPTED_JOURNAL;
  const { ONE_WORD, FRE_WORDS, PARAGRAPH } = narrativeSubCategories.STORY;

  const subCategoryList =
    (category === PROMPTED_JOURNAL && narrativePromptedSubCategoryList) ||
    (category === STORY && narrativeStorySubCategoryList);

  const handleClick = (e) => {
    switch (e.currentTarget.name) {
      case PHILOSOPHICAL:
        route.push({ query: { category, subcategory: PHILOSOPHICAL } });
        break;
      case POSITIVE:
        route.push({ query: { category, subcategory: POSITIVE } });
        break;
      case NEGATIVE:
        route.push({ query: { category, subcategory: NEGATIVE } });
        break;
      case NEUTRAL:
        route.push({ query: { category, subcategory: NEGATIVE } });
        break;

      case ONE_WORD:
        route.push({ query: { category, subcategory: ONE_WORD } });
        break;
      case FRE_WORDS:
        route.push({ query: { category, subcategory: FRE_WORDS } });
        break;
      case PARAGRAPH:
        route.push({ query: { category, subcategory: PARAGRAPH } });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {subcategory ? (
        <>
          <h2 className="uppercase">
            {
              subCategoryList.filter((item) => item.route === subcategory)[0]
                .title
            }
          </h2>
          <p className="pb-6">
            {
              subCategoryList.filter((item) => item.route === subcategory)[0]
                .subtitle
            }
          </p>
        </>
      ) : (
        <>
          <h2>What do you want to write about?</h2>
          <p className="pb-6">
            Each sub-mode will give you a question to answer in your journal
            entry.
          </p>
          <ul className="flex flex-wrap justify-around">
            {subCategoryList.map((item) => (
              <li className="m-3" key={item.title}>
                <button
                  type="button"
                  name={item.route}
                  onClick={handleClick}
                  className="p-5 rounded-xl btn "
                >
                  <h3 className="uppercase">{item.title}</h3>
                  <p>{item.text}</p>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
