import { Outlet } from "react-router-dom";
import NavbarCom from "./NavbarCom";
function RootLayout() {
  return (
    <>
      <NavbarCom />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
