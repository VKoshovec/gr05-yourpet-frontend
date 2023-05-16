import { Button, Dropdown } from 'antd';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss'
import NoticesFilterAccordion from './NoticesFilterAccordion';
import { useState } from 'react';
import {ReactComponent as FilterBtnIcon} from 'components/assets/images/icon/filters-3.svg';


const accordionComponent = () => {

  return  <NoticesFilterAccordion/>
}



const NoticesFilter = () => {

const [isOpenFilter, setIsOpenFilter] = useState(false)

  return ( <>
      <Dropdown
        trigger={['click']}
        dropdownRender={accordionComponent}
        placement="bottomLeft"
        onOpenChange={()=>setIsOpenFilter(!isOpenFilter)}


      >
        <Button className={cn(styled.filterButton, 'outlined', {[styled.isActive] : isOpenFilter})}><span className={styled.textBtn}>Filter</span><FilterBtnIcon/></Button>
      </Dropdown>
    </>
  )
}

export default NoticesFilter
