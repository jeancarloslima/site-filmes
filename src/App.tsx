import Dialog from "./components/layout/Dialog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MovieCard from "./components/layout/MovieCard";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <main className="flex flex-col md:flex-row md:items-start gap-6 py-8 px-4 lg:px-10">
          <Sidebar />

          <section className="w-full flex justify-center md:justify-start flex-wrap gap-4 md:pt-8">
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
          </section>

          <Dialog numberOfFilms={3} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
