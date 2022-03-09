export const store = {
  state: globalThis.state || {
    userId: '',
    password: '',
    userList: [
      { id: 1, userId: 'admin', password: 'admin1' },
    ],
  },
  hydrationToServer(state) {
    // using client-side JavaScript to add application state and interactivity to server-rendered HTML
    this.state = state;
  },
  setState (newState) {
    this.state = { ...this.state, ...newState };
  },
  addUserItem(userItem) {
    const newUserItem = { id: this.state.userList.length + 1, ...userItem };
    this.setState({ userList: [...this.state.userList, newUserItem] });
  }
};
