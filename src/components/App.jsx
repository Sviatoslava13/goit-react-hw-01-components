import Profile from './Profile/Profile';
import Statistics from './Statistics/StatisticsContent';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import AppContainer from './AppContainer.styled';
import friends from '../data/friends.json';
import data from '../data/data.json';
import user from '../data/user.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </AppContainer>
  );
};
