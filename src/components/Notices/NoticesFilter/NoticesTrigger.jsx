import { Button, Dropdown } from 'antd';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss'
import NoticesFilterAccordion from './NoticesFilterAccordion';
import { useState } from 'react';


const accordionComponent = () => {

  return  <NoticesFilterAccordion/>
}



const NoticesFilter = () => {

const [isOpenFilter, setIsOpenFilter] = useState(false)

  return ( <>
      <Dropdown
        trigger={['click']}
        dropdownRender={accordionComponent}
        placement="bottom"
        onOpenChange={()=>setIsOpenFilter(!isOpenFilter)}

      >
        <Button className={cn(styled.filterButton, 'outlined', {[styled.isActive] : isOpenFilter})}>Filter</Button>
      </Dropdown>
    </>
  )
}

export default NoticesFilter
