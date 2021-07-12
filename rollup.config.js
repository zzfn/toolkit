import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/index.ts",
    plugins: [
        typescript({}),
    ],
    output: [
        {
            file: `lib/toolkit.cjs.js`,
            format: 'cjs',
        },
        {
            file: `lib/toolkit.es.js`,
            format: 'es',
        },
        {
            format: "iife",
            file: "lib/toolkit-min.js",
            name: "toolkit",
            sourcemap: false
        },
    ],
};
