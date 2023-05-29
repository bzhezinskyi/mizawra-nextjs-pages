import { useRouter } from "next/router";
import narrative from "@/narrative.json";

export default function Narrative() {
  const router = useRouter();
  const dataIndex = narrative.findIndex((item) => {
    return item.id.toString() === router.query.cardId;
  });
  const data = narrative[dataIndex];

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.text}</p>
    </>
  );
}
