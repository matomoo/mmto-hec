import { observable, action } from "mobx";

class PasienStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable itemsPasien = {};
  @observable currentPasienUid = "";
  @observable currentPasienUsername = "";
  
  @action
  fetchItems(data) {
    this.itemsPasien = data;
    this.isLoading = false;
  }
  

}

export default PasienStore;
