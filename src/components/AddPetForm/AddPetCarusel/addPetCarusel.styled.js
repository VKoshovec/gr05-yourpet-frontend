import styled from "styled-components";
import theme from "presets/theme";

export const Carusel = styled.div`
   display: flex;
   flex-direction: row;
   margin-top: 24px
`;

export const Step = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   color: ${ theme.color.grey } ;
   font-weight: ${ theme.fontWeight.medium };
   font-size: 10px;

   @media screen and (min-width: ${ theme.breakpoint.tab }){
    font-size: 16px;
   }
   &.active {
      color: ${ theme.color.bluelinks };
   }
   &.done {
    color: ${ theme.color.green };
   }
`;

export const StepLine = styled.div`
   display: block;
   height: 8px;
   width: 80px;
   border-radius: 8px;
   background-color: #CCE4FB;
   margin-right: 12px;
   margin-top: 12px;

   @media screen and (min-width: ${ theme.breakpoint.tab }){
      width: 120px;
      margin-right: 16px;
   }
   &.active {
    background-color: ${ theme.color.bluelinks };
   }
   &.done {
    background-color: ${ theme.color.green };
   }
`;