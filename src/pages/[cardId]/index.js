import { useRouter } from "next/router";

export default function Narrative() {
  const router = useRouter();
  return <>{router.query.cardId}</>;
}
