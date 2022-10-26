import {
  Statistic,
  Title,
  Item,
  StatList,
  Label,
  Percentage,
} from './Statistics.styled.js';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
     { title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Statistic>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Statistics;
