import Dialog from "./components/layout/Dialog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MovieCard from "./components/layout/MovieCard";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row md:items-start gap-6 py-8 px-4 lg:px-10">
          <Sidebar />

          <main className="flex flex-1 justify-center md:justify-start flex-wrap gap-4 pt-8 relative overflow-y-auto">
            <p className="absolute top-0">Filmes encontrados: 18</p>
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={true} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
            <MovieCard movieSelected={false} />
          </main>

          <Dialog numberOfFilms={3} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
