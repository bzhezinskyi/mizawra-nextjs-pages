import { useRouter } from "next/router";

import WritingForm from "./WritingForm";
import { narrativeCategories } from "@/constants/narrativeCategories";
import WritingSubCategory from "./WritingSubCategory";

export default function WritingPage() {
  const router = useRouter();

  const { category, subcategory } = router.query;
  const { FREE_JOURNAL, PROMPTED_JOURNAL, STORY } = narrativeCategories;

  return (
    <>
      {category === FREE_JOURNAL && <WritingForm />}
      {category === PROMPTED_JOURNAL &&
        (subcategory ? (
          <>
            <WritingSubCategory /> <WritingForm />
          </>
        ) : (
          <WritingSubCategory />
        ))}
      {category === STORY &&
        (subcategory ? (
          <>
            <WritingSubCategory /> <WritingForm />
          </>
        ) : (
          <WritingSubCategory />
        ))}
    </>
  );
}
