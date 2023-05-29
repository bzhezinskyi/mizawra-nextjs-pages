import Link from "next/link";
import ThemeBtn from "./ThemeBtn";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="flex">
        <li className="flex items-center mr-12">
          <ThemeBtn />
        </li>

        <li className="mr-12">
          <Link href={"login"} className="text-lg">
            Log in
          </Link>
        </li>
        <li>
          <Link href={"signup"} className="text-lg">
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
