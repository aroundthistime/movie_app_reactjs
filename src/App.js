import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App(){
  return <BrowserRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie-detail" component={Detail}></Route>
  </BrowserRouter>
}

export default App;