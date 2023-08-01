import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { TabBar } from "./components/TabBar"

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <TabBar />
    </>
  )
}