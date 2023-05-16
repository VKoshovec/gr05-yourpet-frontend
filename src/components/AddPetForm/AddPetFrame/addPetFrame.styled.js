import styled from 'styled-components';
import theme from 'presets/theme';


export const Frame = styled.div`
display: block;
max-width: 280px;
height: 498px;
border-radius:  40px;
margin-left: auto;
margin-right: auto;
box-shadow: ${ theme.boxShadows.default };
padding-top: 20px;
padding-bottom: 20px;
padding-left: 8px;


@media screen and (min-width: ${ theme.breakpoint.tab }) {
    display: block;
    max-width: 458px;
    height: 542px;
    border-radius:  40px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
}
`;

export const Title = styled.h1`
    font-weight: ${ theme.fontWeight.medium };
    font-size: ${ theme.fontSizes[3] };
    padding-left: 12px;

    @media screen and (min-width: ${ theme.breakpoint.tab }) {
        margin-left: 20px;
        font-size: ${ theme.fontSizes[5] };
    }
`;