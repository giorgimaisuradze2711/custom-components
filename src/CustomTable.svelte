<svelte:options tag = "custom-element"/>

<script>
	export let tableItems= ["ItemOne","ItemTwo"];
</script>

<style>
</style>

<table>
	{#each tableItems as tableItem }
		<tr>
			<td>
				{tableItem}
			</td>
		</tr>
	{/each}
</table>