import Navbar from "./components/Navbar";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Popular from './components/popular';
import Footer from './components/footer';




function App()
{
    return(
<div>
<Navbar></Navbar>
  <Recommended></Recommended>
  <Topics></Topics>
  <Popular></Popular>
  <Footer></Footer>
</div>
    )
}
export default App