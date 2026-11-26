import Dialog from "./components/layout/Dialog";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MovieGrid from "./components/layout/MovieGrid";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row md:items-start gap-6 py-8 px-4 lg:px-10">
          <Sidebar />

          <main className="flex flex-1 flex-col justify-between md:justify-start flex-wrap gap-4 pt-8 overflow-y-auto">
            <p>Filmes encontrados: 8</p>
            
            <MovieGrid />
          </main>

          <Dialog numberOfFilms={3} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
