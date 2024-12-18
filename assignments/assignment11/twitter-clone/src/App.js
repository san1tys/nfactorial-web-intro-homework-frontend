import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu />
      <div className='vertical-divider'></div>
      <Home />
      <div className='vertical-divider'></div>
      <Widgets />
    </div>
  );
}

export default App;
