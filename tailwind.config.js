/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                laiBlue: "#002355",
                laiDarkBlue: "#00183B",
                laiDark: "#2E3A4B",
                laiGold: "#FBBF24",
                laiLightAccent: "#DEF3F7",
                laiDarkAccent: "#D1E4FF",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#002355",
                    "primary-focus": "#002355",
                    "primary-content": "#FFFFFF",
                    accent: "#D1E4FF",
                    "accent-content": "#002355",
                    neutral: "#FFFFFF",
                    "neutral-focus": "#F3F4F6",
                    "neutral-content": "#002355",
                    "base-100": "#FFFFFF",
                    "base-content": "#002355",
                },
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#FBBF24",
                    "primary-focus": "#FBBF24",
                    "primary-content": "#002355",
                    accent: "#DEF3F7",
                    "accent-content": "#002355",
                    neutral: "#00183B",
                    "neutral-focus": "#2E3A4B",
                    "neutral-content": "#FFFFFF",
                    "base-100": "#002355",
                    "base-content": "#FFFFFF",
                },
            },
        ],
    },
};
