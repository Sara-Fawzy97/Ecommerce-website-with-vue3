/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
           
            colors:{
                'primary-color':'#B88E2F',
                'gray':'#9F9F9F'
            }
        },
    },
    plugins: [],
}