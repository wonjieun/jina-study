'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '좋아용을 눌렀어용~';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '좋아용'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);