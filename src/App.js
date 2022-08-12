
import Header from './components/layout/Header'
import Banner from './components/layout/Banner'
import FormSubscribe from './components/layout/FormSubscribe';
import Footer from './components/layout/Footer';
import './assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FormSubscribe />
      <Footer />
    </div>
  );
}

export default App;
