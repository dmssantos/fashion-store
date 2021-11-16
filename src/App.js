import Global from './global';

//Components
import Header from './components/header/index';
import Home from './pages/home';
import Background from './components/background/index';

//Functions
function App() {
  return (
    <>
      <Global />
      <Header />
      <Home />
      <Background />
    </>
  );
}

export default App;
