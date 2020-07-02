# Learn Essential TypeScript

```ts
$ tsc --version
$ mkdir todo
$ cd todo
$ npm init -y
```

tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5", // es2018
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```