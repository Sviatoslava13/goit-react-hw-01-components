import { Name, Item, Status, Avatar } from './FriendListItem.styled';
import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
