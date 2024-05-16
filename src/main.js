import CustomTable from './CustomTable.svelte';

const customTable = new CustomTable({
	target: document.body,
	props: {
		tableItems: ["ItemOne","ItemTwo","ItemThree"]
	}
});

export default customTable;