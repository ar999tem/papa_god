import React from "react";
import Profile from '../Profile';
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../../hoc/WithAutchRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.autorizeduserId
    }
     if (!userId){
      this.props.history.push('/login')
     }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return <Profile profile={this.props.profile}
      status={this.props.status}
      isAuth={this.props.isAuth}
      updateUserStatus={this.props.updateUserStatus}
    />
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizeduserId: state.auth.userId,
  isAuth: state.auth.isAuth
})
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

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }), withRouter, //WithAuthRedirect
)(ProfileContainer)