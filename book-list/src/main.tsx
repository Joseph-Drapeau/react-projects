import './index.css'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from './context/books.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider>
	  <App />
  </Provider>,
)
