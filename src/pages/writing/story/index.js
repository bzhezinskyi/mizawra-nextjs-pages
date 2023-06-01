import { useRouter } from "next/router";

export default function PromptedJournal() {
  const route = useRouter();
  return (
    <div className="flex justify-around">
      <button type="button" onClick={() => route.push("?one-word-prompt")}>
        one word prompt
      </button>
      <button type="button" onClick={() => route.push("?few-words")}>
        a few words prompt
      </button>
      <button type="button" onClick={() => route.push("?paragraph")}>
        paragraph prompt
      </button>
    </div>
  );
}
