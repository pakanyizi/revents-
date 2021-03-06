import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { Container } from 'semantic-ui-react'

//components
import EventDashboard from './features/event/EventDashboard/EventDashboard'
import NavBar from './features/nav/NavBar/NavBar'
import SettingsDashboard from './features/Settings/SettingsDashboard'
import EventDetailedPage from './features/event/EventDetailed/EventDetailedPage'
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard'
import UserDetailed from './features/user/UserDetailed/UserDetailedPage'
import EventForm from './features/event/EventForm/EventForm'
import HomePage from './features/home/HomePage'
import TestComponent from './features/Testarea/TestComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
