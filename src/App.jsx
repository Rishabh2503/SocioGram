import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search"
import Message from "./pages/Message"
import Notification from "./pages/Notification"
import Profile from "./pages/Profile"
import Setting from "./pages/Setting"
import UserInfo from "./components/userprofile/UserInfo"
import Sidebar from "./components/SideBar"
import userProfile from "./components/userProfile";

const App =() => {

  return (
      <>
      
      <div className="relative flex">
      <Sidebar />
      
    <div className="flex-2 flex flex-col bg-gradient-to-br from-white to-[#1f1f21]">
   
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
              <Route path="/search/:searchTerm" element={<Search />} />
               <Route path="/message" element={<Message />} />
               <Route path="/notification" element={<Notification />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
      </div>
      <div class="relative h-36 w-72 ...">
  <div class="absolute  w-16 ...">
   <UserInfo />
  </div>
</div>
      </div>
      
      </>
  )
}
export default App;
