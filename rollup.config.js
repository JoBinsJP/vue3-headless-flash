import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
        },
        plugins: [
            vue(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                    },
                    include: null,
                },
            }),
            clear({
                targets: ['./dist'],
            })
        ],
    };
}
