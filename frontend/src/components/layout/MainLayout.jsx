import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <Header />

      {children}

      <Footer />
    </div>
  );
}