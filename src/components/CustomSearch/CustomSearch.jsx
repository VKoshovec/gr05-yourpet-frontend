import Search from 'antd/es/input/Search';
import styled from './CustomSearch.module.scss';
import PropTypes from 'prop-types';
import { ReactComponent as ClearBtnIcon } from '../assets/images/icon/cross-small.svg';
import { ReactComponent as SearchBtnIcon } from '../assets/images/icon/search.svg';
import { useState } from 'react';
import cn from 'classnames';

const ClearIcon = <ClearBtnIcon />;
const SearchIcon = <SearchBtnIcon />;

const CustomSearch = ({ title, onChange, onSearch }) => {

  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    if (e.target.value && e.target.value !== '') {
      return setSearchActive(true);
    }
    setSearchActive(false);
  };

  const handleSearch = (value) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (<div className={styled.wrapper}>
      {title && <h1 className={styled.title}>{title}</h1>}
      <Search
        className={cn(styled.search, { [styled.activeSearch]: searchActive })}
        placeholder='Search'
        enterButton={SearchIcon}
        allowClear={{ clearIcon: ClearIcon }}
        bordered={false}
        onChange={handleChange}
        onSearch={handleSearch}
        maxLength={20}
      />
    </div>
  );
};

CustomSearch.propTypes = {
  title: PropTypes.string, // Prop "title" should be a string
  onChange: PropTypes.func, // Prop "onChange" should be a function
  onSearch: PropTypes.func, // Prop "onSearch" should be a function
};

export default CustomSearch;
