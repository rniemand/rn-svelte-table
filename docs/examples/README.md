# Examples

Holder

Notes:

- https://kit.svelte.dev/docs/creating-a-project

```shell
npm create svelte@latest my-app
cd my-app
npm install

npm i rn-svelte-table
npm run dev
```

create your svelte page like so:

```ts
import { TableConfigBuilder, TableHeaderBuilder } from "rn-svelte-table";
import { RnSvelteTable } from "rn-svelte-table";

const config = new TableConfigBuilder().baseClass("something");
const header = new TableHeaderBuilder()
  .addColumn((builder) => builder.withContent("column 1").withClass("text-center"))
  .addColumn((builder) => builder.withContent("column 2").withClass("text-center"))
  // ...
  ;
```

```html
<RnSvelteTable {config} {header} />
```

Currently it's that simple