import CustomSearch from '../../CustomSearch/CustomSearch';
import { useDispatch, useSelector } from 'react-redux';
import { selectNoticesFilters } from '../../../redux/filters/noticesFilter/selectors';
import { setFilter } from '../../../redux/filters/noticesFilter/filterSlice';

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNoticesFilters);

  const onSearch = (value) => {
    const updatedFilter = {
      ...filterValue,
    search: {
      searchParams: value
    }
    };
    dispatch(setFilter(updatedFilter));
  }

  return <CustomSearch title={"Find your favorite pet"} onSearch={onSearch}/>

}

export default NoticesSearch
