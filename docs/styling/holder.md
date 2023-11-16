# Styling

```text
<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th>Option</th>
			<th>Type</th>
			<th>Required</th>
			<th>Default</th>
			<th>Builder</th>
			<th>Option</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>baseClass</strong></td>
			<td>CSS Class Name</td>
			<td>False</td>
			<td><code>table</code></td>
			<td><code>.baseClass()</code></td>
			<td><code>baseClass</code></td>
			<td>Defaults to <code>table</code> to work with bootstrap by default</td>
		</tr>
		<tr>
			<td><strong>striped</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>false</code></td>
			<td><code>.striped()</code></td>
			<td><code>striped</code></td>
			<td>
				<div>Used to indicate if the table should have striped rows.</div>
				<div>If provided <code>true</code> a class of <code>table-striped</code> will be applied to the table.</div>
				<div>If a <code>string</code> value is provided - it will be used for the striped class.</div>
			</td>
		</tr>
		<tr>
			<td><strong>hover</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>false</code></td>
			<td><code>.hover()</code></td>
			<td><code>hover</code></td>
			<td>
				<div>Used to indicate that the table data rows should have a hover class applied.</div>
				<div>If provided <code>true</code> a class of <code>table-hover</code> will be applied to the table.</div>
				<div>If a <code>string</code> value is provided - it will be used for the hover class.</div>
			</td>
		</tr>
		<tr>
			<td><strong>bordered</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>false</code></td>
			<td><code>.bordered()</code></td>
			<td><code>bordered</code></td>
			<td>
				<div>Used to indicate that the table data rows should have a border class applied.</div>
				<div>If provided <code>true</code> a class of <code>table-bordered</code> will be applied to the table.</div>
				<div>If a <code>string</code> value is provided - it will be used for the bordered class.</div>
			</td>
		</tr>
		<tr>
			<td><strong>dark</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>false</code></td>
			<td><code>.dark()</code></td>
			<td><code>dark</code></td>
			<td>
				<div>Used to indicate that the table should render in dark mode.</div>
				<div>If provided <code>true</code> a class of <code>table-dark</code> will be applied to the table.</div>
				<div>If a <code>string</code> value is provided - it will be used for the dark class.</div>
			</td>
		</tr>
		<tr>
			<td><strong>small</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>false</code></td>
			<td><code>.small()</code></td>
			<td><code>small</code></td>
			<td>
				<div>Used to indicate that the table should render in a compact mode.</div>
				<div>If provided <code>true</code> a class of <code>table-sm</code> will be applied to the table.</div>
				<div>If a <code>string</code> value is provided - it will be used for the compact mode class.</div>
			</td>
		</tr>
		<tr>
			<td><strong>responsive</strong></td>
			<td>Boolean | String</td>
			<td>False</td>
			<td><code>true</code></td>
			<td><code>.responsive()</code></td>
			<td><code>responsive</code></td>
			<td>
				<div>Used to indicate that the table needs to be wrapped in a responsive <code>div</code> when rendering.</div>
				<div>If a <code>string</code> value is provided the table will be wrapped using the provided class name.</div>
				<div>If <code>true</code> is provided the default class of <code>table-responsive</code> will be used.</div>
			</td>
		</tr>
	</tbody>
</table>
```
