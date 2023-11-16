# RnSvelteTableConfigBuilder

Builder used to generate instances of the [RnSvelteTableConfig](./config/RnSvelteTableConfig.md) configuration class.

All options provided through the builder can be either chained as method calls, provided at builder instance instantiation, or a mix of both. You can refer to [RnSvelteTableConfig](./config/RnSvelteTableConfig.md) for all available options.

## Visual Options

### baseClass()

Used to define the [baseClass](./config/RnSvelteTableConfig?id=baseclass) configuration property, this can be passed into the builder constructor via a `baseClass` property.

```ts
const config = new RnSvelteTableConfigBuilder({ baseClass: 'table' })
  .baseClass('overidden')
  .build();
```

### striped()

Used to define the [striped](./config/RnSvelteTableConfig?id=striped) configuration property, this can be passed into the builder constructor via a `striped` property.

```ts
const config = new RnSvelteTableConfigBuilder({ striped: true })
  .striped('custom-class-override')
  .build();
```

### hover()

Used to define the [hover](./config/RnSvelteTableConfig?id=hover) configuration property, this can be passed into the builder constructor via a `hover` property.

```ts
const config = new RnSvelteTableConfigBuilder({ hover: true })
  .hover('custom-class-override')
  .build();
```

### bordered()

Used to define the [bordered](./config/RnSvelteTableConfig?id=bordered) configuration property, this can be passed into the builder constructor via a `bordered` property.

```ts
const config = new RnSvelteTableConfigBuilder({ bordered: true })
  .bordered('custom-class-override')
  .build();
```

### dark()

Used to define the [dark](./config/RnSvelteTableConfig?id=dark) configuration property, this can be passed into the builder constructor via a `dark` property.

```ts
const config = new RnSvelteTableConfigBuilder({ dark: true })
  .dark('custom-class-override')
  .build();
```

### small()

Used to define the [small](./config/RnSvelteTableConfig?id=small) configuration property, this can be passed into the builder constructor via a `small` property.

```ts
const config = new RnSvelteTableConfigBuilder({ small: true })
  .small('custom-class-override')
  .build();
```

### responsive()

Used to define the [responsive](./config/RnSvelteTableConfig?id=responsive) configuration property, this can be passed into the builder constructor via a `responsive` property.

```ts
const config = new RnSvelteTableConfigBuilder({ responsive: true })
  .responsive('custom-class-override')
  .build();
```
