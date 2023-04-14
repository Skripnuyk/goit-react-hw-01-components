import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
          {friends.map(({ id, avatar, name, isOnline }) => {
              return (<li key={id} className={css.item}>
                  <span
                      className={isOnline ? css.statusOnline : css.statusOffline}
                  ></span>
                  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                  <p className={css.name}>{name}</p>
              </li>);
      })}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};