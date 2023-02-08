import './App.css';
import NavBar from './components/NavBar/NavBar';
import { HashRouter, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/dialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if( !this.props.initialized){
      return<Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
    
          < HashRouter  >
            <Route path='/dialogs' element={<DialogsContainer
            />} />
            <Route path='/profile' element={<ProfileContainer
            />} />
            <Route path='/profile/:userId' element={<ProfileContainer
            />} />
            <Route path='/users' element={<UsersContainer
            />} />
            <Route path='/login' element={<Login
            />} />
          </HashRouter>
              
        </div>
      </div>
    );
  }
}
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        match={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
const  mapStateToProps = (state) => ({
  initialized : state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);