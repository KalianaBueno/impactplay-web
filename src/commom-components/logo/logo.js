import styled from 'styled-components';
import {
	Colors,
	FontFamilies,
	FontSizes,
	FontWeights,
} from '../../shared/DesignTolkens';

export const Logo = styled.h1`
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.EXTRA};
	font-size: ${FontSizes.BIG};
    color: ${Colors.WHITE};
    justify-content: left;
    margin-left: 20px;

}`;