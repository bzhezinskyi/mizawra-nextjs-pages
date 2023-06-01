import { useRouter } from "next/router";

export default function PromptedJournal() {
  const route = useRouter();
  return (
    <div className="flex justify-around">
      <button type="button" onClick={() => route.push("?philosophical")}>
        philosophical prompt
      </button>
      <button type="button" onClick={() => route.push("?positive")}>
        positive prompt
      </button>
      <button type="button" onClick={() => route.push("?neutral")}>
        neutral prompt
      </button>
      <button type="button" onClick={() => route.push("?negative")}>
        negative prompt
      </button>
    </div>
  );
}
