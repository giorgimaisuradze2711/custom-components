<svelte:options tag="custom-table"/>

<script>
	export let name;
	export let age;
	export let state;

	export let tableItems = [];
	export let tableItemNames = [];
    let tableColCount = 4;
    $: tableRowCount = Math.ceil(tableItems.length / tableColCount);

	export function addTableItem(tableItemObject) {
        for (const [key, value] of Object.entries(tableItemObject)) {
            tableItems = [...tableItems, value];
			tableItemNames = [...tableItemNames, key]
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
    {#each {length: tableRowCount} as _, i}
        <tr>
        {#each tableItems.slice(i*4, i*4+4) as tableItem, j}
            <td style="background: {tableItem};">
                {tableItemNames[j]}
            </td>
        {/each}
        </tr>
	{/each}
</table>

<table>
	<tr>
		<td>Name</td>
		<td>{name}</td>
	</tr>
	<tr>
		<td>Age</td>
		<td>{age}</td>
	</tr>
	<tr>
		<td>State</td>
		<td>{state}</td>
	</tr>
</table>

<p>{user}</p>