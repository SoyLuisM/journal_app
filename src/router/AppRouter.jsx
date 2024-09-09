import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes"



export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/** Login y registros */}
        <Route path="/auth/*" element={<AuthRoutes/>} />

        <Route path="/home/*" element={<DashboardRoutes/>} />

        {/** Journal-App */}
        <Route path="/*" element={ <JournalRoutes/> } />
      </Routes>
    </>
  )
}
