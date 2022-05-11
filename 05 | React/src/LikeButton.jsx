'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '좋아용을 눌렀어용~👍🏼';
    }

    return <button onClick={ () => this.setState({ liked: true })}>좋아용❤️</button>;
  }
}

ReactDOM.render(
  <LikeButton />,
  document.getElementById('root')
);
