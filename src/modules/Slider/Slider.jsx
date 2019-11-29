import React from 'react';
import Block from '../../components/Block';
import styled from 'styled-components';

const RootWrapper = styled(Block)`
	overflow: hidden;
	width: 300px;
	height: 100px;
	border: 1px solid;	
`;

const ContentWrapper = styled(Block)`
	overflow: hidden;
	height: 100%;
	width: ${({ slidesCount }) => `calc(100% * ${slidesCount})`};
	& > div {
		float:left;
		width: ${({slidesWidth}) => slidesWidth + '%'};
		height: 100%; 
	}
`;


class Slider extends React.Component {
	state = {
		scrollX: 0,
	};
	slideTo = (slideIndex = 0) => {

	};
	render = () => {

		const {children = [] } = this.props;
		const slidesCount = children.length || 1;
		const slidesWidth = (100 / slidesCount).toFixed(2) || 100;
		

		return <RootWrapper>
			<ContentWrapper slidesCount={slidesCount} slidesWidth={slidesWidth}>
				{ children }
			</ContentWrapper>			
		</RootWrapper>;
	};
};
export default Slider;