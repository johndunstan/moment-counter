import Main from './components/MainComponent'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

import './App.css'

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  )
}

export default App
