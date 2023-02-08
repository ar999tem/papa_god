import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatuswithHocs';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (<div>
    {/* <div>
      <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
    </div> */}
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
      <ProfileStatusWithHooks status={props.status}
        updateUserStatus={props.updateUserStatus} />
    </div>
  </div>)
}

export default ProfileInfo;