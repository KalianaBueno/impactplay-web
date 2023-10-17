import styled from 'styled-components';
import {
    BorderRadiuses,
    Colors,
    FontFamilies,
    FontWeights,
    FontSizes,
} from '../../shared/DesignTolkens';


export const Button = styled.button`
    border: none;
    width: 70%;
    height: 56px;
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.THIN};
    background-color: ${Colors.WHITE};
    color: ${Colors.GREEN};
    border-radius: ${BorderRadiuses.SMALL};
    font-size: ${FontSizes.REGULAR};
    position: absolute; top: 85%; left: 50%; transform: translate(-50%, -50%); 
}`;
