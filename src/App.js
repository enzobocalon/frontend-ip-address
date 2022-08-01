import './App.css';
import UserProvider from './context/UserContext';
import Header from './components/Header/Header';
import Map from './components/Map/Map';

function App() {
  return (
    <UserProvider>
      <Header />
      <Map />
    </UserProvider>
  );
}

export default App;
