
import { Outlet } from "react-router-dom"
import NavbarCom from "./NavbarCom"
function RootLayout() {
  return (
    <div>
      <NavbarCom/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
