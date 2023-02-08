import { sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { WithAuthRedirect } from '../../hoc/WithAutchRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatcToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatcToProps),
    WithAuthRedirect
)(Dialogs) 