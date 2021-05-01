import typescript from '@rollup/plugin-typescript';

export default {
    input: "src/index.ts",
    plugins: [
        typescript({}),
    ],
    output: [
        {
            format: "umd",
            file: "lib/index-min.js",
            name: "toolkit",
            sourcemap: false
        },
    ],
};
