# template-figma-plugin-preact

Figma plugin template using Preact.

## Setup

- Replace template to your plugin's info

```fish
# fish command
sed -i 's/template-plugin-name/<replaced-plugin-name>/' "package.json" "manifest.json"
sed -i 's/template-plugin-id/<replaced-plugin-id>/' "manifest.json"
```

- Install npm packages

```fish
pnpm i
```

- build in watch mode

```fish
pnpm watch
```
