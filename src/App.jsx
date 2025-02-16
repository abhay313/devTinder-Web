import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import RefundAndCancellation from "./components/RefundAndCancellation";
// import ShippingAndDelivery from "./components/ShippingAndDelivery";
// import ContactUs from "./components/ContactUs";
// import TermsAndConditions from "./components/TermsAndConditions";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/chat/:targetUserId" element={<Chat />} />
              {/* <Route path="/policies" element={<PrivacyPolicy />} />
              <Route path="/refund" element={<RefundAndCancellation />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/delivery" element={<ShippingAndDelivery />} />
              <Route path="/contacts" element={<ContactUs />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      {/* <NavBar /> */}
    </>
  );
}

export default App;
