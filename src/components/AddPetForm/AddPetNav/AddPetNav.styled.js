import styled from "styled-components";
import theme from "presets/theme";
import { Button } from "antd";

export const PetNav = styled.div`
   display: flex;
   flex-direction: column-reverse;
   justyfy-content: ;
   align-items: center;
   margin-top: 91px;

   @media screen and (min-width: ${ theme.breakpoint.tab }){
    flex-direction: row;
    margin-top: 137px;
   }
`;

export const BackCencel = styled(Button)`
   width: 248px;
   border-radius: 40px;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 40px;
   margin-top: 15px;
   font-weight: ${ theme.fontWeight.bold };

   & span{
      font-size: 16px;
      line-height: 22px;
      color: ${ theme.color.bluelinks };
   }

   & svg { 
     margin-right: 12px;
   }

   @media screen and (min-width: ${ theme.breakpoint.tab }){
      margin-top: 0px;
      width: 148px;
   }
`;

export const NextDone = styled(Button)`
    width: 248px;
    border-radius: 40px;
    font-weight: ${ theme.fontWeight.bold };
    background-color: ${ theme.color.bluelinks };
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    
    & span {
       color: ${ theme.color.background };
    };

    & svg { 
       margin-left: 12px;
    }

    &:hover{
       background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    };
`;