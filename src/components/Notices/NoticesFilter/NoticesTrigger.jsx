import { Button, Checkbox, Dropdown } from 'antd';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss'
import NoticesFilterAccordion from './NoticesFilterAccordion';






const NoticesFilter = () => {


  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <Checkbox onChange={onChange}>Checkbox</Checkbox>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
  //         2nd menu item
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //         3rd menu item
  //       </a>
  //     ),
  //   },
  // ];

  const accordionComponent = () => {

    return  <NoticesFilterAccordion/>
  }



  return ( <>
      <Dropdown
        trigger={['click']}
        // menu={{
        //   items,
        // }}
        dropdownRender={accordionComponent}
        placement="bottom"
      >
        <Button className={cn(styled.filterButton, 'outlined')}>Filter</Button>
      </Dropdown>
    </>
  )
}

export default NoticesFilter
