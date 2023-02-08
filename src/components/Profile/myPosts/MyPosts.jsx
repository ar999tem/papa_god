import React from 'react';
// import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import { Textarea } from '../../common/Preloader/formsControls/formsControls';
import s from './MyPosts.module.css'
import Post from './post/Post';

const maxLength10 = maxLengthCreator(10)
const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  let AddNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  return <div className={s.postsBlock}>
    <h3> My posts</h3>
    <div>
      {/* <AddPostFormRedux onSubmit={AddNewPost} /> */}
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {/* <Field component={Textarea} placeholder="post text" name='newPostText' validate={[required, maxLength10]} /> */}
      </div>
      <div> <button >Add post</button></div>
    </form>)
}
// const AddPostFormRedux = reduxForm({
//   form: 'MyPostsAddPostForm'
// })(AddPostForm)

export default MyPosts;