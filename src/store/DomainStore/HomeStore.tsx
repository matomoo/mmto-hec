import { observable, action, computed } from "mobx";

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable currentUser = "";

  @action
  fetchItems(data) {
    this.items = data;
    this.isLoading = false;
  }

  @computed get isAuthenticated() {
    return this.currentUser !== null
  }

}

export default HomeStore;
