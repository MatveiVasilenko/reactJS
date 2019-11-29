import React from 'react';
import Typography from 'components/Typography';
import { connect } from 'react-redux';
import Block, { BlockCenter } from 'components/Block';
import { ImageCenter } from 'components/Image';
import Icon from 'components/Icon';

export default connect((state, {index = 0}) => {
	const {
		comments,
		...rest
	} = (state.posts || [])[index];
	return {
		...rest
	};
})(React.memo(({
	title,
	img = "",
	text = '',
	likes = 0,
	dislikes = 0,
	created_at = '',

}) => {
	return title ? <BlockCenter style={{margin: '15px 0'}}>
		<Typography>
			{title}
		</Typography>
		<ImageCenter src={img} alt={title} />
		<Block> 
			<Typography>
				{created_at}
			</Typography>
		</Block>
		<Block style={{padding: '20px'}}> 
			<Typography >
				{text}
			</Typography>
		</Block>
		<Block> 
			<Icon style={{padding: '0 5px'}} name={'thumbs-up'}> {likes}</Icon>
			<Icon style={{padding: '0 5px'}} name={'thumbs-down'}> {dislikes}</Icon>
		</Block>

	</BlockCenter> :
	<React.Fragment />
}));