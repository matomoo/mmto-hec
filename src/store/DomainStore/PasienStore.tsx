import { observable, action } from "mobx";

class PasienStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable itemsPasien = {};
  @observable itemsRekamMedikPasien = {};
  @observable currentPasienUid = "";
  @observable currentPasienUsername = "";
  @observable analysis = "";
  @observable obat = "";
  
  @action
  fetchItems(data) {
    this.itemsPasien = data;
    this.isLoading = false;
  }

  @action
  analysisOnChange(param) {
    this.analysis = param;
    //this.validateEmail();
  }

  @action
  obatOnChange(param) {
    this.obat = param;
    //this.validateEmail();
  }

}

export default PasienStore;
