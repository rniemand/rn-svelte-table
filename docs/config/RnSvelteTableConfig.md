# RnSvelteTableConfig

Holder

```ts
export type RnSvelteTableConfig = {
	baseClass: string;
	striped?: boolean | string;
	hover?: boolean | string;
	bordered?: boolean | string;
	dark?: boolean | string;
	small?: boolean | string;
	responsive?: boolean | string;
};
```

```text
<p>Built using the <a href={ConfigUrls.BuildersTab('RnSvelteTableConfigBuilder')}>RnSvelteTableConfigBuilder</a> and used to configure the table instance.</p>
	<pre><code class="sample">{@html Prism.highlight(codeSample01, Prism.languages.plain, 'plain')}</code></pre>
	<p>If you do not wish to use the builder - simply provide and instance of <code>RnSvelteTableConfig</code> to the table directly.</p>
	<div class="alert alert-info text-center" role="alert">If preferred you can use <code>RnSvelteTableDefaultConfig</code> when constructing a table to apply the global default configuration.</div>
```
