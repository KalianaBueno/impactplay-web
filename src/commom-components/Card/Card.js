import styled from 'styled-components';
import {
    Colors,
    BorderRadiuses,
 } from '../../shared/DesignTolkens';


export const Card = styled.div`
	width: 500px;
	height: 350px;
    background-color: ${Colors.GRAY_BACKGROUND};
    border-radius: ${BorderRadiuses.BIG};
    margin: 15px;
    display: inline-block;
    float: right;
`;