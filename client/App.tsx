import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Index />} />
        <Route
          path="/how-it-works"
          element={
            <PlaceholderPage
              title="Qanday ishlaydi EcoPoints?"
              description="A’zolar ekologik harakatlarini qanday qayd etishini, tasdiqlangan ballarni qanday olishini va mukofotlarni qanday ishlatishini ko‘rsatadigan tushuntiruvchi sahifa yarating."
            />
          }
        />
        <Route
          path="/rewards-marketplace"
          element={
            <PlaceholderPage
              title="Mukofotlar"
              description="To'plagan ballaringizni chegirmalar, kuponlar va turli xil narsalarga almashtiring."
            />
          }
        />
        <Route
          path="/community-impact"
          element={
            <PlaceholderPage
              title="Dastur"
              description="Bizning daturni Play market yoki APP storedan yuklab oling."
            />
          }
        />
        <Route
          path="/pricing"
          element={
            <PlaceholderPage
              title="Biz haqimizda"
              description="EcoPoints tabiatga foyda keltirish uchun tashkil qilingan."
            />
          }
        />
        <Route
          path="/faq"
          element={
            <PlaceholderPage
              title="Bog'lanish"
              description="Gmail: oybekmamurjonov192@gmail.com"
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <PlaceholderPage
              title="Kirish"
              description="Bizni App store yoki Play marketdan yuklab olib ro'yhatdan o'ting."
            />
          }
        />
        <Route
          path="/get-started"
          element={
            <PlaceholderPage
              title="Boshlash"
              description="Bizni App store yoki Play marketdan yuklab olib ro'yhatdan o'ting."
            />
          }
        />
        <Route
          path="/about"
          element={
            <PlaceholderPage
              title="EcoPoints haqida"
              description="Chiqindi orqali pul ishlang va tabiatga foyda keltiring."
            />
          }
        />
        <Route
          path="/partners"
          element={
            <PlaceholderPage
              title="Hamkorlar"
              description="Tez orada..."
            />
          }
        />
        <Route
          path="/careers"
          element={
            <PlaceholderPage
              title="Hamkorliklar uchun"
              description="Gmailga murojaat qiling. Gmail: oybekmamurjonov192@gmail.com"
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
