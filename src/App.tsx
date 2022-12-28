import { GlobalStyle } from './styles/global'
import { UserProvider } from './contexts/UserContext'
import RoutesComponents from './routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle/>
      <UserProvider>
        <RoutesComponents />
      </UserProvider>
    </>
  )
}

export default App
