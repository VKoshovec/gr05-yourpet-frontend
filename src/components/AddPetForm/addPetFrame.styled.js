import styled from 'styled-components';
import theme from 'presets/theme';
import { Card } from 'antd';

export const Frame = styled(Card)`
display: block;
max-width: 280px;
height: 498px;
border-radius:  40px;
margin-left: auto;
margin-right: auto;


@media screen and (min-width: ${ theme.breakpoint.tab }) {
    display: block;
    max-width: 458px;
    height: 542px;
    border-radius:  40px;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (min-width: ${ theme.breakpoint.desk }) {
    display: block;
    max-width: 458px;
    height: 542px;
    border-radius:  40px;
    margin-left: auto;
    margin-right: auto;
}
`;