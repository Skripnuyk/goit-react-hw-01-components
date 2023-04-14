import user from '../data/user.json';
import data from '../data/data.json';
import items from '../data/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import './App.css';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="appContainer">
        <h2 className="titleTask">Task 1 Social Profile</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <h2 className="titleTask">Task 2 Statistics</h2>
        <Statistics title="Upload stats" stats={data} />
        <h2 className="titleTask">Task 3 Friend List</h2>
        <FriendList friends={friends} />
        <h2 className="titleTask">Task 4 Transaction History</h2>
        <TransactionHistory items={items} />
    </div>
  );
};
