import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./home/HomePage"
import ContactPage from "./contact-us/ContactPage"
import PrivacyPage from "./privacy-policy/PrivacyPage"
import PageNotFound from "./PageNotFound"
import ScrollToTop from "./utils/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/contact-us" element={<ContactPage/>} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="*" element={ <PageNotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
