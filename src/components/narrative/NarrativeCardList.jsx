import narrative from "@/narrative.json";
import NarrativeCard from "./NarrativeCard";
import Modal from "../Modal";
import { useRouter } from "next/router";

export default function NarrativeCardList() {
  const router = useRouter();
  const category = router.query.category;

  const filterNarrative = category
    ? narrative.filter((item) => item.category === category)
    : narrative;

  return (
    <>
      <div className="w-full flex justify-between mb-8">
        <span className="text-sm">Archive:</span>

        <span className="text-sm">{filterNarrative.length} Posts</span>
      </div>
      <ul className="flex flex-wrap justify-around">
        {filterNarrative.map((item) => (
          <NarrativeCard key={item.id} details={item} />
        ))}
      </ul>
      <div className={`bggradient ${category}`}></div>
      <Modal />
    </>
  );
}
