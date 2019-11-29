import {handleChangeSlide} from 'modules.Slider';

export default (state = {
	main: {
		scrollX: 0,
		// currentSlide: 0
	},
}, { type = {}, payload = {}  }) => {

	const {sliderName = '', sliderIndex = 0} = payload;

	switch (type) {
		case 'SLIDE_X':
			state[sliderName] = { 
				...handleChangeSlide({...state[sliderName]}, sliderIndex) 
			}
			return {...state};

		default: 
			return {...state};

	}
};