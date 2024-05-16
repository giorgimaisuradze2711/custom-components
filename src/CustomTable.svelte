<svelte:options tag="custom-table"/>

<script>
    import { each } from "svelte/internal";

	export let users = [];

	export function addTableItem(tableItemObject) {
        for (const [key, value] of Object.entries(tableItemObject)) {
			alert(value["name"])
			users = [...users, value]
        }
	}
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	
	table{
		font-family: "Poppins", sans-serif;
		color: #FFF;
		font-weight: bold;

		min-width: 100px;
		min-height: 100px;

		padding: 5px;
		margin: 5px;
		border-spacing: 5px;

		border: 2px solid #999;
		border-radius: 5px;
	}

	th{
		text-align: center;

		width: 100px;
		height: 40px;

		background-color: #999;

		border: none;
		border-radius: 5px;
	}

	td{
		text-align: center;

		width: 100px;
		height: 100px;

		background-color: #999;

		border: none;
		border-radius: 5px;
	}
</style>

<table>
	<tr>
		<th>Name</th>
		<th>Age</th>
		<th>State</th>
	</tr>
	{#each users as user}
	<tr>
		<td>{user["name"]}</td>
		<td>{user["age"]}</td>
		<td>{user["state"]}</td>
	</tr>
	{/each}
</table>