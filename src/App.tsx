import Dialog from "./components/layout/Dialog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MovieCard from "./components/layout/MovieCard";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <main className="flex flex-col md:flex-row items-center md:items-start gap-6 py-8 px-4 lg:px-10">
          <Sidebar />

          <section className="md:pt-8">
            <MovieCard movieSelected={true} />
          </section>

          <Dialog numberOfFilms={3} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
