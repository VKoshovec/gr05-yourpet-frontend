import { Checkbox, Collapse } from 'antd';
import { ReactComponent as ChevronIcon } from '../../assets/images/icon/chevron-down.svg';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { useCallback } from 'react';
import { selectNoticesAdditionalFilters } from '../../../redux/notices/selector';
import { setFilter } from '../../../redux/notices/slice';

const { Panel } = Collapse;

const optionsByAge = [
  {
    label: '3-12 m',
    value: '3-12m',
  },
  {
    label: '1 year',
    value: '1year',
  },
  {
    label: '2 year',
    value: '2year',
  },
];

const optionsByGender = [
  {
    label: 'female',
    value: 'female',
  },
  {
    label: 'male',
    value: 'male',
  },
];


const NoticesFilterAccordion = () => {


  const dispatch = useDispatch();
  const filterValue = useSelector(selectNoticesAdditionalFilters);
  console.log(filterValue);
  const debouncedSetFilter = useCallback(
    debounce((filter) => {
      dispatch(setFilter(filter));
    }, 300),
    [dispatch],
  );

  const handleClick = (name, value, checked) => {
    const updatedFilter = { ...filterValue };

    if (name === 'age') {
      updatedFilter.byAge = {
        ...updatedFilter.byAge,
        [value]: checked,
      };
    } else if (name === 'gender') {
      updatedFilter.byGender = {
        [value]: checked,
      };
    }
    debouncedSetFilter(updatedFilter);
  };


  return (<div className={styled.dropdown}>
      <span className={styled.filterTitle}>Filters</span>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <ChevronIcon className={cn(styled.chevronIcon, { [styled.active]: isActive })} />}
        className={styled.filterWrapper}
      >
        <Panel header='By age' key='1' className={styled.title}>
          {optionsByAge.map(({ label, value }) => (
            <Checkbox
              key={value}
              checked={filterValue.byAge[value] || false}
              onChange={(e) => handleClick('age', value, e.target.checked)}
              className={styled.checkbox}
            >
              {label}
            </Checkbox>
          ))}
        </Panel>
        <Panel header='By gender' key='2' className={styled.title}>
          {optionsByGender.map(({ label, value }) => (
            <Checkbox
              key={value}
              checked={filterValue.byGender[value] || false}
              onChange={(e) => handleClick('gender', value, e.target.checked)}
              className={styled.checkbox}
            >
              {label}
            </Checkbox>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesFilterAccordion;
