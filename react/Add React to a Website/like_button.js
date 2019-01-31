'use strict';

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
			return React.createElement(
				'button',
				{ disabled: true },
				'You liked this.'
			);
		}

		return React.createElement(
			'button',
			{ onClick: () => this.setState({ liked: true }) },
			'Like'
		);
	}
}

ReactDOM.render(
	React.createElement(LikeButton),
	document.getElementById('like_button_container')
);
