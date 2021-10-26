<script context="module">
	export async function load({ fetch }) {
		const fruits = fetch(`/fruits.json`).then((r) => r.json());

		return {
			props: {
				fruits
			}
		};
	}
</script>

<script>
	export let fruits;
</script>

<h1>Hello world</h1>
<div>
	Welcome <span class="text-red-500">here</span>. We have these fruits: {fruits
		.map((f) => f.name)
		.join(', ')}
</div>
