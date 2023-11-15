<script lang="ts">
	import DocAccordianItem from '../../../components/DocAccordianItem.svelte';
	import { ConfigUrls, TypesUrls } from '../../DocUrls.js';
	import Prism from 'prismjs';

	export let tab: string;
	export let setTab: (tab: string) => void;

	const codeSample01 = `const builder = new RnSvelteTableConfigBuilder({
	hover: true,
	bordered: true,
	// ... any other valid config option
}).striped('custom-class');`;
</script>

<DocAccordianItem {setTab} {tab} tabName="RnSvelteTableConfigBuilder">
	<p>Simple builder used to generate <a href={TypesUrls.CoreTab('RnSvelteTableConfig')}>RnSvelteTableConfig</a> configuration instances, the builder also accepts all <a href={ConfigUrls.Styling}>styling</a> options as an <code>any</code> parameter passed into it's constructor.</p>
	<pre><code class="sample">{@html Prism.highlight(codeSample01, Prism.languages.javascript, 'javascript')}</code></pre>
	<p>You can also use chaining with the builder methods to make configuration generation a lot simpler.</p>
	<div class="alert alert-info text-center" role="alert">If preferred you can use <code>RnSvelteTableDefaultConfig</code> when constructing a table to apply the global default configuration.</div>
	<p>The following builder methods are available:</p>
	<table class="table table-striped table-hover table-bordered">
		<thead>
			<tr>
				<th>Method</th>
				<th>Params</th>
				<th>Default</th>
				<th>Notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><nobr><code>.baseClass()</code></nobr></td>
				<td><nobr><code>string</code></nobr></td>
				<td class="text-center"><code>table</code></td>
				<td> Defines the base class to use for the generated table. </td>
			</tr>
			<tr>
				<td><nobr><code>.striped()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true applies the class <code>table-striped</code>, otherwise it will use the provided string value for the table striped class. </td>
			</tr>
			<tr>
				<td><nobr><code>.hover()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true applies the class <code>table-hover</code>, otherwise it will use the provided string value for the table hover class. </td>
			</tr>
			<tr>
				<td><nobr><code>.bordered()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true applies the class <code>table-bordered</code>, otherwise it will use the provided string value for the table bordered class. </td>
			</tr>
			<tr>
				<td><nobr><code>.dark()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true applies the class <code>table-dark</code>, otherwise it will use the provided string value for the table dark class. </td>
			</tr>
			<tr>
				<td><nobr><code>.small()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true applies the class <code>table-sm</code>, otherwise it will use the provided string value for the table small class. </td>
			</tr>
			<tr>
				<td><nobr><code>.responsive()</code></nobr></td>
				<td><nobr><code>undefined | bool | string</code></nobr></td>
				<td class="text-center"><code>false</code></td>
				<td> When true it will wrap the table in a <code>div</code> with the class <code>table-responsive</code>, otherwise it will use the supplied class for the wrapping div. </td>
			</tr>
		</tbody>
	</table>
</DocAccordianItem>
