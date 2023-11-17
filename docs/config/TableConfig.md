# TableConfig

Global configuration used by the `<RnSvelteTable />` component which can be defined manually or via the [TableConfigBuilder](./builders/TableConfigBuilder.md) builder.

The following configuration options are exposed through `TableConfig`:

## Visual Options

### baseClass

**Required**: Used to specify the base class applied to the generated table, by default this value is set to `table` when using the [TableConfigBuilder](./builders/TableConfigBuilder.md) builder.

```json
{ "baseClass": "table" }
```

See [.baseClass()](./builders/TableConfigBuilder?id=baseclass) builder method.

### striped

Used to enable striped rows on the generated table, the following value types are supported:

- `bool` - when `true` the default `table-striped` class will be applied
- `string` - when provided the passed in class name will be applied

```json
{ "striped": "custom-class" }
{ "striped": true }
```

See [.striped()](./builders/TableConfigBuilder?id=striped) builder method.

### hover

Used to enable a row hover effect on the generated table, the following value types are supported:

- `bool` - when `true` the default `table-hover` class will be applied
- `string` - when provided the passed in class name will be applied

```json
{ "hover": "custom-class" }
{ "hover": true }
```

See [.hover()](./builders/TableConfigBuilder?id=hover) builder method.

### bordered

Used to enable a border on the generated table, the following value types are supported:

- `bool` - when `true` the default `table-bordered` class will be applied
- `string` - when provided the passed in class name will be applied

```json
{ "bordered": "custom-class" }
{ "bordered": true }
```

See [.bordered()](./builders/TableConfigBuilder?id=bordered) builder method.

### dark

Used to apply a dark-mode variant to the generated table, the following value types are supported:

- `bool` - when `true` the default `table-dark` class will be applied
- `string` - when provided the passed in class name will be applied

```json
{ "dark": "custom-class" }
{ "dark": true }
```

See [.dark()](./builders/TableConfigBuilder?id=dark) builder method.

### small

Used to render the generated table in a compact mode, the following value types are supported:

- `bool` - when `true` the default `table-sm` class will be applied
- `string` - when provided the passed in class name will be applied

```json
{ "small": "custom-class" }
{ "small": true }
```

See [.small()](./builders/TableConfigBuilder?id=small) builder method.

### responsive

Used to wrap the generated table in a responsive `<div />` for use on smaller screens, the following value types are supported:

- `bool` - when `true` the default `table-responsive` class will be used
- `string` - when provided the passed in class name will be used

```json
{ "responsive": "custom-class" }
{ "responsive": true }
```

See [.responsive()](./builders/TableConfigBuilder?id=responsive) builder method.

## Top Table Controls

### tableControls

Enables the top control panel on the generated table.

- `bool` - when **true** the table controls will be added to the top of the generated table.

```json
{ "tableControls": true }
```

See [.tableControls()](./builders/TableConfigBuilder?id=tableControls) builder method.
