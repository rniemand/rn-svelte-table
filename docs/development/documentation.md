# Documentation

Documentation is developed using [docsify.js](https://docsify.js.org/#/) and can be installed via the following **npm** command:

```shell
npm i docsify-cli -g
```

Once installed you can serve / edit the local documentation using the following command from the projects `root` directory:

```shell
docsify serve docs
```

Once running you can view the generated documentation in your browser at [http://localhost:3000](http://localhost:3000).

## Syntax Highlighting

Syntax highlighting is handled via [prismjs](https://prismjs.com/) which makes use of the following [Grammar Files](https://cdn.jsdelivr.net/npm/prismjs@1/components/).

Grammar files can be added to `./docs/index.html` should the need arise - be sure to follow the layout used when adding in new files:

```html
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-json.min.js"></script>
```

## Documentation Generation

The documentation for this lib is automatically updated when changes are merged into the `master` branch.
