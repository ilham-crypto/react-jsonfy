import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Post from './component/Post';
import Comments from './component/Comments'
import Users from './component/Users';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Categories from './component/Categories';
import Brands from './component/Brands';
import Items from './component/Items';


function App() {
  return (
   <BrowserRouter>
      <Switch>
          <Link path="/" exact component={Users}/>
          <Link path="/Post" component={Post}/>
          <Link path="/Comments" component={Comments}/>
          <Link path="/Albums" component={Albums}/>
          <Link path="/Photos" component={Photos}/>
          <Link path="/Categories" component={Categories}/>
          <Link path="/Brands" component={Brands}/>
          <Link path="/Items" component={Items}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
