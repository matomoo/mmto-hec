import { observable,
			// action
		} from "mobx";

class InputDiagnosaStore {
	@observable selectedDiagnosa = [];
	@observable listDiagnosa = "";
	@observable checkbox1 = false;
	@observable checkbox2 = false;
	@observable checkbox3 = false;
	@observable index = 0;

	addListItem ( item ) {
		this.selectedDiagnosa.push({
			name: item,
			index: this.index,
		});
		this.index++;
	}
}

export default InputDiagnosaStore;