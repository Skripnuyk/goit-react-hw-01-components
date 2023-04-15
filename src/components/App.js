import user from '../data/user.json';
import data from '../data/data.json';
import items from '../data/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import './App.css';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <div className="appContainer">
      <Section title={"Task 1 'Social Profile'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={"Task 2 'Statistics'"}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>
      <Section title={"Task 3 'Friend List'"}>
        <FriendList friends={friends} />
      </Section>
      <Section title={"Task 4 'Transaction History'"}>
        <TransactionHistory items={items} />
      </Section>
    </div>
  );
};
