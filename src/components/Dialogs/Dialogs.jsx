import { Navigate } from 'react-router-dom'
// import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators'
import { Textarea } from '../common/Preloader/formsControls/formsControls'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const maxLength50 = maxLengthCreator(50)
const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Navigate to='/login' />
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                {/* <AddMessageFormRedux onSubmit={AddNewMessage} /> */}
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength50]} /> */}
            </div>
            <div> <button >send</button></div>
        </form>)
}
// const AddMessageFormRedux = reduxForm({
//     form: 'dialogAddMessageForm'
// })(AddMessageForm)

export default Dialogs