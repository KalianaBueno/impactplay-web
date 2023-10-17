import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontSizes,
	FontWeights,
    Spaces,
} from '../../shared/DesignTolkens';

export const Text = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.THIN};
	font-size: ${FontSizes.REGULAR};
    color: ${Colors.GRAY_BACKGROUND};
    margin-left: 20px;
    margin-bottom: ${Spaces.FOUR};
    display: block;
    justify-content: left;


}`;
