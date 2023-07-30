# 🦄 Docura
A modular Hugo theme to build your next documentation site

## 🌱 Features

- Responsive and adaptive layouts.
- Built-in dark, light and night themes.
- Customizable menu with Hugo configs.
- Customizable sidebars using Hugo data templates.
- Support for multiple documentation sets.
- Minimal reliance on external frameworks (No CSS, JS/npm, icon, font frameworks).
- SCSS/Vanilla JS based UI components and Hugo pipes based building process.

## 🚀 Getting Started

1. [Install Hugo extended version](https://gohugo.io/installation/).
    - Use prebuilt binaries via https://github.com/gohugoio/hugo/releases/latest
    - Verify the installation via `hugo version`

2. Create a new site with the Docura theme.
    ```shell
    hugo new site newsite
    cd newsite
    git init
    git submodule add https://github.com/docura/docura.git themes/docura
    rm config.toml && cp -r themes/docura/config .
    echo "theme = 'docura'" >> config/_default/config.toml
    hugo server
    ```
