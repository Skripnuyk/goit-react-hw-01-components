import PropTypes from 'prop-types';
import {ProfileStats} from './ProfileStats';
import css  from './Profile.module.css';

export const Profile = ({ avatar, username, location, tag, stats,}) => {
  return (
    <div className={css.profile}>
  <div className={css.description}>
    <img src={avatar} alt="User avatar" className={css.avatar} />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ProfileStats {...stats} />
</div>)
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
}