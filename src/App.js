/************************** Import library/fungsi ****************************/
//library React dan modul-modul React yang diperlukan

//terkait routing, dan sebuah component untuk menampung semua konten yang
//hanya bisa muncul bila user ter-autentikasi (sudah login)
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import { Provider } from 'react-redux'
import store from './store'

//CSS untuk app
import './App.css';

// Layouts
import PrimaryLayout from './layouts/PrimaryLayout'
import UnauthorizedLayout from './layouts/UnauthorizedLayout'

/************************ Deklarasi objek/variabel ***************************/


/************************ Deklarasi kelas/komponen ***************************/
function App() {
  return (
    <div className="App">
        {/* <AppBarMaterial/>
        <HomePage/>
        <EventPage/>
        <StatusPage/>
        <ParameterPage/> */}
        <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/Signal-Injector-Web-UI-ver-0/" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App;
