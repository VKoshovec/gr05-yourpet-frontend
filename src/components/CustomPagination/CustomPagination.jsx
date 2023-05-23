import { Pagination } from 'antd';
import cn from 'classnames';
import { ReactComponent as ArrowIcon } from 'components/assets/images/icon/arrow-left.svg';
import styles from './CustomPagination.module.scss';

const CustomPagination = ({
  className,
  currentPage,
  itemsPerPage,
  totalItemsPage,
  onChangePage,
  ...props
}) => {
  const customItemRender = (page, type, originalElement) => {
    if (type === 'prev') {
      return (
        <a>
          <ArrowIcon />{' '}
        </a>
      );
    }
    if (type === 'next') {
      return (
        <a>
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />{' '}
        </a>
      );
    }
    return originalElement;
  };

  return (
    <Pagination
      className={cn(className, 'customPagination')}
      total={totalItemsPage}
      current={currentPage}
      defaultPageSize={itemsPerPage}
      onChange={onChangePage}
      itemRender={customItemRender}
      showSizeChanger={false}
      {...props}
    />
  );
};

export default CustomPagination;
