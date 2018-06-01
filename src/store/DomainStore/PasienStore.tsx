import { observable, action } from "mobx";

class PasienStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable itemsPasien = {};
  @observable currentUid = "";
  @observable currentUsername = "";
  @observable currentUserRole = "";

  @action
  fetchItems(data) {
    this.itemsPasien = data;
    this.isLoading = false;
  }
  

}

export default PasienStore;
