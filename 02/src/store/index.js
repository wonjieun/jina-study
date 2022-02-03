export const store = {
  state: {
    userId: '',
    password: '',
    userList: [
      { id: 1, userId: 'admin', password: 'admin1' },
    ],
  },
  setState (newState) {
    this.state = { ...this.state, ...newState }
  },
  addUserItem(userItem) {
    const newUserItem = { id: this.state.userList.length + 1, ...userItem }
    this.setState({ userList: [...this.state.userList, newUserItem] });
    console.log(this.state)
  }
};