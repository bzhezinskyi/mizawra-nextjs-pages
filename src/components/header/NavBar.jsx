import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import useStore from "@/store/useStore";

export default function NavBar() {
  const { isAuth, logout } = useStore();

  return (
    <nav className="navbar">
      <ul className="flex">
        <li className="flex items-center mr-12">
          <ThemeBtn />
        </li>

        {isAuth ? (
          <>
            <li className="mr-12">
              <Link href={"settings"} className="text-lg">
                Settings
              </Link>
            </li>
            <li>
              <button onClick={logout} className="text-lg">
                Log out
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
}
