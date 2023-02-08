import s from './Post.module.css'

const Post = (props) => {
  return <div className={s.item}>
    <img src='https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Avatar-Next-Shadow-2-1.jpg' />
    {props.message}
    <div><span>like</span> {props.likesCount}
    </div>
  </div>
}

export default Post;