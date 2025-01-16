import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer className="flex flex-col min-h-screen"/>
    </>
  );
}

export default App;