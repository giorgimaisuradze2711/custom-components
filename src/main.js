import CustomTable from './CustomTable.svelte';

const customTable = new CustomTable({
	target: document.body,
	props: {
		tableItems: ["ItemOne","ItemTwo"]
	}
});

export default customTable;