import { useRouter } from "next/router";

import Categories from "@/components/narrative/Categories";
import WritingPage from "@/components/writing/WritingPage";

export default function Writing() {
  const router = useRouter();
  const category = router.query.category;

  return <>{category ? <WritingPage /> : <Categories />}</>;
}
