module.exports = {
    purge: ['src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
    theme: {
        extend: {
            inset: {
                '1/2': '50%',
                '1': '1%',
                '2': '2%',
            },
            colors: {
                app_ivory: '#F2ECE4',
                app_dark: '#121212',
                app_gray: '#7E7E7E',
            },
            opacity: {
                '80': '0.8',
                '90': '0.9',
            },
        },
    },
    variants: {},
    plugins: [],
};
