
import { Outlet } from "react-router-dom"
function RootLayout() {
  return (
    <div>
      <h1>rootlayout</h1>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
