import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Post from './component/Post';
import Comments from './component/Comments'
import Users from './component/Users';


function App() {
  return (
   <BrowserRouter>
      <Switch>
          <Link path="/" exact component={Users}/>
          <Link path="/Post" component={Post}/>
          <Link path="/Comments" component={Comments}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
