import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { Filter, Header } from './components';
import { Airlines } from './containers';
import './assets/css/helveticaNeue.css';
import './assets/css/app.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // const [filters, setFilters] = useState({
  //   OW: { name: 'Oneworld', status: false },
  //   ST: { name: 'Sky team', status: false },
  //   SA: { name: 'Star Alliance', status: false },
  // });

  // const handleFilters = (key) => {
  //   let newFilters = filters;
  //   newFilters[key].status = !newFilters[key].status;
  //   setFilters(newFilters);
  // };

  return (
    <>
      <Header />
      <React.StrictMode>
        <Provider store={store}>
          <div className="container">
            <Filter />
            <Airlines />
          </div>
        </Provider>
      </React.StrictMode>
    </>
  );
}

export default App;
