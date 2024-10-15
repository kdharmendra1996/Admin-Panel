import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import './App.css';
import { Route, Routes } from "react-router-dom"; 

import LoginAdmin from "./components/Login";
import Dashboard from "./layouts/dashboard";
import Team from "./components/Team";
import ContectInformation from "./components/Contact";
import Inovice from "./components/Inovice";
import FormComponet from "./components/Form";
import Calender from "./layouts/Calendar/Calender";
import Faq from "./components/Faq/Faq";
import { createContext, useState } from "react";
import ProfileView from "./components/Profileview";
import ResetPassword from "./components/ResetPassword";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Geography from "./pages/Geography";
import Line from "./pages/Line";


import { MyProSidebarProvider } from "./layouts/global/sidebarContext";
import HeaderComponent from "./layouts/global/Header";


export const MyContext = createContext();


function App() {

  const [theme, colorMode] = useMode();
  const [isLogin,setIsLogin]=useState(true)
  const [isSideBarAndHeader,setIsSideBarAndHeader]=useState(true)
  return (
   <MyContext.Provider value={{ isLogin, setIsLogin,isSideBarAndHeader,setIsSideBarAndHeader }}>
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <main>
             <HeaderComponent />
              <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<ContectInformation />} />
              <Route path="/invoices" element={<Inovice/>} />
              <Route path="/form" element={<FormComponet/>} />
              <Route path="/calendar" element={<Calender/>} />
              <Route path="/faq" element={<Faq/>} />
              <Route path="/bar" element={<Bar/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/line" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />
              <Route path="/login" exact={true} element={<LoginAdmin />} />
              <Route path="/profile"  element={<ProfileView />} />
              <Route path="/reset-password"  element={<ResetPassword />} />
              </Routes>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
   </MyContext.Provider>
  );
}

export default App;
