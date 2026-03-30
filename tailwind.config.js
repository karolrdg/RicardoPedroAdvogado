export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: "#0B0E14",
                secondary: "#8E95D9",
                whatsapp: "#27A11A",
                "whatsapp-hover": "#218A16",
                foreground: "#F8FAFC",
            },
        },
    },
    plugins: [],
}