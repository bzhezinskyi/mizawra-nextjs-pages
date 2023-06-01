import Link from "next/link";

export default function Writing() {
  return (
    <div className="flex justify-around">
      <Link href="writing/free-journal">FREE JOURNAL</Link>
      <Link href="writing/prompted-journal">PROMPTED JOURNAL</Link>
      <Link href="writing/story">STORY</Link>
    </div>
  );
}
