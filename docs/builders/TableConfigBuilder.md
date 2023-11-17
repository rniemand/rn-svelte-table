# TableConfigBuilder

Builder used to generate instances of the [TableConfig](./config/TableConfig.md) configuration class.

All options provided through the builder can be either chained as method calls, provided at builder instance instantiation, or a mix of both. You can refer to [TableConfig](./config/TableConfig.md) for all available options.

## Visual Options

### baseClass()

Used to define the [baseClass](./config/TableConfig?id=baseclass) configuration property, this can be passed into the builder constructor via a `baseClass` property.

```ts
const config = new TableConfigBuilder({ baseClass: 'table' }).baseClass('overidden').build();
```

### striped()

Used to define the [striped](./config/TableConfig?id=striped) configuration property, this can be passed into the builder constructor via a `striped` property.

```ts
const config = new TableConfigBuilder({ striped: true }).striped('custom-class-override').build();
```

### hover()

Used to define the [hover](./config/TableConfig?id=hover) configuration property, this can be passed into the builder constructor via a `hover` property.

```ts
const config = new TableConfigBuilder({ hover: true }).hover('custom-class-override').build();
```

### bordered()

Used to define the [bordered](./config/TableConfig?id=bordered) configuration property, this can be passed into the builder constructor via a `bordered` property.

```ts
const config = new TableConfigBuilder({ bordered: true }).bordered('custom-class-override').build();
```

### dark()

Used to define the [dark](./config/TableConfig?id=dark) configuration property, this can be passed into the builder constructor via a `dark` property.

```ts
const config = new TableConfigBuilder({ dark: true }).dark('custom-class-override').build();
```

### small()

Used to define the [small](./config/TableConfig?id=small) configuration property, this can be passed into the builder constructor via a `small` property.

```ts
const config = new TableConfigBuilder({ small: true }).small('custom-class-override').build();
```

### responsive()

Used to define the [responsive](./config/TableConfig?id=responsive) configuration property, this can be passed into the builder constructor via a `responsive` property.

```ts
const config = new TableConfigBuilder({ responsive: true }).responsive('custom-class-override').build();
```

## Top Table Controls

### tableControls

Used to define the [tableControls](./config/TableConfig?id=tableControls) configuration property, this can be passed into the builder constructor via a `tableControls` property.

```ts
const config = new TableConfigBuilder({ tableControls: false }).tableControls(true).build();
```
