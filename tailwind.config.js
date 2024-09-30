/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.{html,js}",
        "./src/**/*.{html,js}",
        "./src/**/*.vue",
        "./public/*.html",
        "./node_modules/tw-elements/js/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                favorit: ["ABCFavorit-Bold", "sans-serif"],
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs")],
};
