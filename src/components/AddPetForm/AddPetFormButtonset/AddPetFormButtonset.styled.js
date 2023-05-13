import styled from "styled-components";
import theme from "presets/theme";

import { Button } from "antd";

export const Buttonset = styled.ul`
  list-style: none;
  margin-top: 20px;

  @media screen and (min-width: ${ theme.breakpoint.tab }){
     margin-top: 40px;
  }
`;

export const ButtonsetItem = styled.li`
  margin-bottom: 12px;
`;

export const ButtonItem = styled(Button)`
border-radius: 40px;
background-color: #CCE4FB;
border: none;
& span {
    color: ${ theme.color.bluelinks };
}

&:hover{
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
}

&:hover span{
    color: ${ theme.color.background }; 
}

&.active{
    background: ${ theme.color.grblue };
    & span{
      color: ${ theme.color.background }; 
    }
}
`;