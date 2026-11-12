import Dialog from "./components/layout/Dialog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <main className="py-8 px-4 lg:px-10">
          <Sidebar />

          <section></section>

          <Dialog />
      </main>

      <Footer />
    </div>
  );
}

export default App;
