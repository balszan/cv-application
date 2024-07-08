import Header from './components/Header'
import Interactive from './components/Interactive'
import Preview from './components/Preview';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <div id="container">
      <Interactive/>
      <Preview/>
      </div>
      <Footer/>
    </>
  )
}

export default App
