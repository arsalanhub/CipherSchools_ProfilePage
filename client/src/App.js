import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "88.5vh" }}>
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
}

export default App;
