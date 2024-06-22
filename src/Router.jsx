import { Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import Home from "./pages/home";
import Login from "./pages/home/login";
import SignUp from "./pages/home/signUp";
import FindId from "./pages/home/findId";
import FindPassword from "./pages/home/findPassword";
import ChangePassword from "./pages/home/changePassword";
import Program from "./pages/program";
import Community from "./pages/community";
import Matching from "./pages/matchiang";
import MyPage from "./pages/myPage";
import Sports from "./pages/sports";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="find-id" element={<FindId />} />
        <Route path="find-password" element={<FindPassword />} />
        <Route path="change-password" element={<ChangePassword />} />

        <Route path="program" element={<Program />}></Route>

        <Route path="community" element={<Community />}></Route>

        <Route path="matching" element={<Matching />}></Route>

        <Route path="my-page" element={<MyPage />}></Route>

        <Route path="sports" element={<Sports />}></Route>
      </Route>
    </Routes>
  );
}
