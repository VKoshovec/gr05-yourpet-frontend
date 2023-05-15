import { Checkbox, Collapse } from 'antd';
import { ReactComponent as ChevronIcon } from '../../assets/images/icon/chevron-down.svg';
import cn from 'classnames';
import styled from './NoticesFilter.module.scss';

const { Panel } = Collapse;


const NoticesFilterAccordion = () => {
  // const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    // background: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    border: 'none',
  };


    const onChange = (e) => {
      console.log(`checked = ${e.target.checked}`);
    };



  return (<>
  <p>Filters</p>
    <Collapse
      bordered={false}
      // defaultActiveKey={['-1']}
      expandIcon={({ isActive }) => <ChevronIcon className={cn(styled.chevronIcon, { [styled.active] : isActive })} />}
      // style={{
      //   background: token.colorBgContainer,
      // }}
      className={styled.filterWrapper}
    >
      <Panel header="By age" key="1" className={styled.title}>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </Panel>
      <Panel header="By gender" key="2" className={styled.title}>

      </Panel>

    </Collapse>
    </>
  );
};

export default NoticesFilterAccordion;
