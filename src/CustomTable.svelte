<svelte:options tag="custom-table"/>

<script>
    import { each } from "svelte/internal";

	export let data  = window.initialItems;
	let tableItems = []

	$: if (data.length > 0) {
        for (const [key, value] of Object.entries(data)) {
			tableItems = [...tableItems, value]
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

		margin: 5px;
		border-spacing: 10px;

		border: 2px solid #999;
		border-radius: 5px;
	}

	tr *{
		text-align: center;

		width: 100px;
		height: 40px;

		border: none;
	}

	tr:nth-child(1n) td{
		border-radius: 0 0 5px 5px;

	}

	tr:nth-child(2n) td{
		border-radius: 5px 5px 0 0;
	}

	th{
		background: linear-gradient(35deg,#4B0082,#800080);
		border-radius: 5px;
	}

	td{
		background-color: #999;
	}
</style>

<table>
	<tr>
		<th>Name</th>
		<th>Age</th>
		<th>State</th>
	</tr>
	{#each tableItems as tableItem}
	<tr>
		<td>{tableItem["name"]}</td>
		<td>{tableItem["age"]}</td>
		<td>{tableItem["state"]}</td>
	</tr>
	{/each}
</table>