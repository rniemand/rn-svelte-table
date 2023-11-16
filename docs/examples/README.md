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
  let dataBuilder = new TableDataBuilder()
    .addRow((row) =>
      row
        .withClass('text-center')
        .addColumn((col) => col.withContent('row 1 - col 1'))
        .addColumn((col) => col.withContent('row 1 - col 2'))
        .addColumn((col) => col.withContent('row 1 - col 3'))
    )
    .addRow((row) =>
      row
        .withClass('text-start')
        .addColumn((col) => col.withContent('row 2 - col 1'))
        .addColumn((col) => col.withContent('row 2 - col 2'))
        .addColumn((col) => col.withContent('row 2 - col 3'))
    )
    .addRow((row) =>
      row
        .withClass('text-end')
        .addColumn((col) => col.withContent('row 3 - col 1'))
        .addColumn((col) => col.withContent('row 3 - col 2'))
        .addColumn((col) => col.withContent('row 3 - col 3'))
    );

const dataStore = new TableDataStore().set(dataBuilder);
```

```html
<RnSvelteTable {config} {header} {dataStore} />
```

Currently it's that simple