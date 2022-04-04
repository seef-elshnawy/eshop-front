import './App.css'
import './components/style.css'
import {Route,Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/footer';
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <Switch>
      <Route exact path='/'>
    <Nav/>
    <main>
        <section id="hero" class="hero">
            <div class="intro">
                <h1>If You Are A <span>True Gamer!!</span><br/>
                    <pre>This Is Your Destination</pre>
                </h1>
                <h2>
                    <pre>Premium Poducts Just For You</pre>
                </h2>
                <p>Its not just shopping .. its a life style
                </p>
                    <a href="#categories"><button>Shop Now</button></a>
            </div>
            {/*}                 <div class="hero_image">
                    <img src="assets/img/500.png" alt="headset">
  </div> {*/}
        </section>
        <section id="categories" class="categories">
            <h1>DISCOVER PRODUCTS</h1>
            <div class="discount">
                <div class="discount-item">
                    <a href="motherboaed.html"><img src="/1809547.jpg" alt="Motherboard"
                            title="Motherboard"/></a>
                </div>
                <div class="discount-item">
                    <a href="desktop.html"><img src="/2098486.jpg" alt="Desktop" title="Desktop"/></a>
                </div>
                <div class="discount-item">
                    <a href="laptops.html"><img src="/kv67.jpg" alt="Laptops" title="Laptops"/></a>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </Route>
    <Route exact path='/signin' render={()=><>
    <Signin/>
    </>}/>

    <Route exact path='/signup' render={()=><>
    <Signup/>
    </>}/>

    </Switch>
    </>
    
  );
}

export default App;
