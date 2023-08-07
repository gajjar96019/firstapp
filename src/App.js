import logo from './logo.svg';
import './App.css';
import Home from './Home';

var name = 'pritesh';
var obj = {
  name: 'test',
  email: 'test@gmail.com'
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var arr_data = [
  {'name' : 'pritesh1', 'email' : 'hello1@gamil.com' },
  {'name' : 'pritesh2', 'email' : 'hello2@gamil.com' },
  {'name' : 'pritesh3', 'email' : 'hello3@gamil.com' },
  {'name' : 'pritesh4', 'email' : 'hello4@gamil.com' },
  {'name' : 'pritesh5', 'email' : 'hello5@gamil.com' }
]

function App() {
  return (
    <div className="">
      <h1>{name}</h1>

      <h1>{obj.email}</h1>

      <ul>
        {
          arr.map((item) => {
            return(
              <li>{item}</li>
            )
          })
        }
      </ul>

      <ul>
        {
          arr_data.map(() => {
            return(
              <Home/>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
