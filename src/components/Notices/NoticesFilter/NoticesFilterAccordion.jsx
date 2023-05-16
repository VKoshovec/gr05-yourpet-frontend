import { Checkbox, Collapse } from 'antd';
import { ReactComponent as ChevronIcon } from '../../assets/images/icon/chevron-down.svg';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filters/noticesFilter/filterSlice';
import { selectNoticesFilters } from '../../../redux/filters/noticesFilter/selectors';
import { debounce } from "lodash"
import { useCallback } from 'react';
const { Panel } = Collapse;

const optionsByAge = [
  {
    label: '3-12 m',
    value: '3-12 m',
  },
  {
    label: '1 year',
    value: '1 year',
  },
  {
    label: '2 year',
    value: '2 year',
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
  const filterValue = useSelector(selectNoticesFilters);

  const debouncedSetFilter = useCallback(
    debounce((filter) => {
      dispatch(setFilter(filter));
    }, 300),
    [dispatch]
  );

  const handleChange = (checkedValues) => {
    const updatedFilter = {
      ...filterValue,
      byAge: {
        ...filterValue.byAge,
        '3-12m': checkedValues.includes('3-12 m'),
        '1year': checkedValues.includes('1 year'),
        '2years': checkedValues.includes('2 year'),
      },
      byGender: {
        ...filterValue.byGender,
        'female': checkedValues.includes('female'),
        'male': checkedValues.includes('male'),
      },
    };

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
          <Checkbox.Group name={'age'} options={optionsByAge} onChange={handleChange} className={styled.checkbox} />
        </Panel>
        <Panel header='By gender' key='2' className={styled.title}>
          <Checkbox.Group name={'gender'} options={optionsByGender} onChange={handleChange}
                          className={styled.checkbox} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default NoticesFilterAccordion;
