import CustomSearch from '../../CustomSearch/CustomSearch';
import { useSearchParams } from 'react-router-dom';

const NoticesSearch = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (value) => {

    let updatedSearchParams = { ...searchParams };

    if (value) {
      updatedSearchParams = { ...updatedSearchParams, search: value.trim() };
    } else {
      delete updatedSearchParams.search;
    }

    setSearchParams(updatedSearchParams);

    // const updatedFilter = {
    //   ...filterValue,
    //   search: {
    //     searchParams: value.trim()
    //   }
    // };

    // dispatch(setFilter(updatedFilter));
  };

  return <CustomSearch title={"Find your favorite pet"} onSearch={onSearch}/>

}

export default NoticesSearch
