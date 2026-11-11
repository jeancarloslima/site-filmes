import Dock from "./components/layout/Dock";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <main className="py-8 px-4">
          <Sidebar />

          <section></section>

          <Dock />
      </main>

      <Footer />
    </div>
  );
}

export default App;
