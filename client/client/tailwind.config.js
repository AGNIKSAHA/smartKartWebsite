module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        // Secondary Colors
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        // Neutral Colors
        neutral: {
          background: "var(--neutral-background)",
          foreground: "var(--neutral-foreground)",
          light: "var(--neutral-light)",
          dark: "var(--neutral-dark)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          success: "var(--text-success)",
          light: "var(--text-light)",
          white: "var(--text-white)",
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          card: "var(--bg-card)",
          overlay: "var(--bg-overlay)",
          dark: "var(--bg-dark)",
          accent: "var(--bg-accent)",
          success: "var(--bg-success)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          light: "var(--border-light)",
          white: "var(--border-white)",
        },
        // Component-specific colors
        header: {
          background: "var(--header-bg)",
        },
        footer: {
          background: "var(--footer-bg)",
        },
        button: {
          primary: "var(--button-primary-bg)",
          secondary: "var(--button-secondary-bg)",
          neutral: "var(--button-neutral-bg)",
          icon: "var(--icon-button-bg)",
        },
      },
      // Typography
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        base: "var(--line-height-base)",
        md: "var(--line-height-md)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "2xl": "var(--line-height-2xl)",
        "3xl": "var(--line-height-3xl)",
        "4xl": "var(--line-height-4xl)",
      },
      // Spacing
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
      },
      // Border Radius
      borderRadius: {
        none: "var(--radius-none)",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        "3xl": "var(--radius-3xl)",
        full: "var(--radius-full)",
      },
      // Layout
      width: {
        auto: "var(--width-auto)",
        full: "var(--width-full)",
        flex: "var(--width-flex)",
      },
      height: {
        auto: "var(--height-auto)",
        flex: "var(--height-flex)",
      },
    },
  },
  plugins: [],
};
