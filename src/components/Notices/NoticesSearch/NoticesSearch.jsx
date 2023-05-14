import Search from 'antd/es/input/Search';
import styled from './NoticesSearch.module.scss'
import { ReactComponent as ClearBtnIcon } from '../../assets/images/icon/cross-small.svg';
import { ReactComponent as SearchBtnIcon } from '../../assets/images/icon/search.svg';
import { useState } from 'react';
import cn from 'classnames';

const ClearIcon = <ClearBtnIcon/>
const SearchIcon = <SearchBtnIcon/>

const NoticesSearch = () => {

  const [searchActive, setSearchActive] = useState(false)
  // const location = useLocation();

  const handleChange = (e) => {
 if(e.target.value && e.target.value !== "") {
  return  setSearchActive(true)
 }
 setSearchActive(false)
  }

  return (
    <div className={styled.wrapper}>
      <h1 className={styled.title}>Find your favorite pet</h1>
      <Search
        className={ cn(styled.search, {[styled.activeSearch] : searchActive})}
        placeholder="Search"
        enterButton={SearchIcon}
        allowClear={{ clearIcon: ClearIcon }}
        bordered={false}
        onChange={handleChange}
        onSearch={(value) => console.log(value)}
      />
    </div>

  )
}

export default NoticesSearch
