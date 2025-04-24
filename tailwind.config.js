module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
      "app/**/*.{ts,tsx}",
      "components/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brandprimary: "var(--brandprimary)",
          brandsecondary: "var(--brandsecondary)",
          "default-white": "var(--default-white)",
          neutralblack: "var(--neutralblack)",
          neutraldgrey: "var(--neutraldgrey)",
          neutralgrey: "var(--neutralgrey)",
          neutrallgrey: "var(--neutrallgrey)",
          neutralsilver: "var(--neutralsilver)",
          neutralwhite: "var(--neutralwhite)",
          "shades-2": "var(--shades-2)",
          "shades-5": "var(--shades-5)",
          "text-gray-300": "var(--text-gray-300)",
          "text-gray-900": "var(--text-gray-900)",
          "tintt-4": "var(--tintt-4)",
          "tintt-5": "var(--tintt-5)",
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        fontFamily: {
          "body-medium-body-2": "var(--body-medium-body-2-font-family)",
          "body-regular-body-2": "var(--body-regular-body-2-font-family)",
          "body-regular-body-3": "var(--body-regular-body-3-font-family)",
          "button-link-medium": "var(--button-link-medium-font-family)",
          "heading-headline-1": "var(--heading-headline-1-font-family)",
          "heading-headline-2": "var(--heading-headline-2-font-family)",
          "heading-headline-3": "var(--heading-headline-3-font-family)",
          "heading-headline-4": "var(--heading-headline-4-font-family)",
          "label-medium-label": "var(--label-medium-label-font-family)",
          sans: [
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
        boxShadow: { "shadow-8px": "var(--shadow-8px)" },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
    plugins: [],
    darkMode: ["class"],
  };
  