'use strict';

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	render() {
		if (this.state.liked) {
			return (
				<button disabled={true}>You liked this.</button>
			);
		}

		return (
			<button onClick={() => this.setState({ liked: true })}>Like</button>
		);
	}
}

ReactDOM.render(
	<LikeButton />,
	document.getElementById('like_button_container')
);
