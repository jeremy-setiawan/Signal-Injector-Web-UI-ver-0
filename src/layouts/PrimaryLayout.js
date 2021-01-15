/************************** Import library/fungsi ****************************/
import React from 'react'

//terkait routing,
import { Switch, Route, Redirect } from 'react-router-dom'

//Header yang ada di semua layout di dalam Halaman Admin
import {AppBarMaterial} from '../components'

//Page-page di dalam layout
import {HomePage, EventPage, StatusPage, ParameterPage} from '../pages';
//asdf
const PrimaryLayout = ({ match,history }) => (
  //<div className="primary-layout">
    <div>
    <main>
      <AppBarMaterial />
        <Switch>
          <Route path={`/Signal-Injector-Web-UI-ver-0/`} exact component={HomePage} />
          <Route path={`/Signal-Injector-Web-UI-ver-0/event`} component={EventPage} />
          <Route path={`/Signal-Injector-Web-UI-ver-0/parameter`} component={ParameterPage} />
          <Route path={`/Signal-Injector-Web-UI-ver-0/status`} component={StatusPage} />
          {/* <Route path={`${match.path}/history`} component={EngUnitSetup} /> */}
          <Redirect to={`${match.url}`} />
        </Switch>
    </main>
  </div>
)

export default PrimaryLayout