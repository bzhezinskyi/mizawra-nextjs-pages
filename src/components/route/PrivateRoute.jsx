import useStore from "@/store/useStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PrivateRoute({ children }) {
  const { isAuth } = useStore();
  const router = useRouter();

  const handleLogin = () => {
    if (
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/forgot"
    ) {
      return;
    } else {
      return router.push("/login");
    }
  };

  const handleLogout = () => {
    if (
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/forgot"
    ) {
      return router.push("/");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      handleLogin();
    }
    if (isAuth) {
      handleLogout();
    }
  }, [isAuth, router.pathname]);

  return <>{children}</>;
}
