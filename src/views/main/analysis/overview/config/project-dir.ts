export const projectDir = `
|-- README.md
|-- auto-imports.d.ts
|-- commitlint.config.js
|-- components.d.ts
|-- env.d.ts
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   -- favicon.ico
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- common.css
|   |   |   |-- common.less
|   |   |   |-- index.css
|   |   |   |-- index.less
|   |   |   -- reset.less
|   |   -- img
|   |       |-- Menu.vue
|   |       |-- avatar-info.webp
|   |       |-- login-bg.svg
|   |       |-- logo.1829caec.svg
|   |       -- logo.svg
|   |-- base-ui
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- card.vue
|   |   |-- code
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- code.vue
|   |   |-- descriptions
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |  -- descriptions.vue
|   |   |   -- types
|   |   |       -- types.ts
|   |   -- text-link
|   |       |-- index.ts
|   |       -- src
|   |           -- textlink.vue
|   |-- components
|   |   |-- main-header
|   |   |   |-- Header-breadcrumb.vue
|   |   |   |-- Header-drop.vue
|   |   |   |-- Header-info.vue
|   |   |   -- Main-header.vue
|   |   |-- main-menu
|   |   |   -- Main-aside.vue
|   |   |-- page-content
|   |   |   -- Page-content.vue
|   |   |-- page-echarts
|   |   |   |-- data
|   |   |   |   -- china.json
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-echart.vue
|   |   |   |   |-- base-echart.vue
|   |   |   |   |-- line-echart.vue
|   |   |   |   |-- map-echart.vue
|   |   |   |   |-- pie-echart.vue
|   |   |   |   -- rose-echart.vue
|   |   |   |-- types
|   |   |   |   -- type.ts
|   |   |   -- utils
|   |   |       |-- convert-data.ts
|   |   |       -- coordinate-data.ts
|   |   |-- page-modal
|   |   |   |-- Page-modal.vue
|   |   |   -- type.d.ts
|   |   -- page-search
|   |       -- Page-search.vue
|   |-- global
|   |   |-- constants.ts
|   |   -- registerIcons.ts
|   |-- hooks
|   |   |-- usePageContent.ts
|   |   |-- usePageModal.ts
|   |   -- usePermissions.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   -- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   -- dashboard.ts
|   |       |   -- overview
|   |       |       -- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   -- category.ts
|   |       |   -- goods
|   |       |       -- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   -- chat.ts
|   |       |   -- list
|   |       |       -- list.ts
|   |       -- system
|   |           |-- department
|   |           |   -- department.ts
|   |           |-- menu
|   |           |   -- menu.ts
|   |           |-- role
|   |           |   -- role.ts
|   |           -- user
|   |               -- user.ts
|   |-- service
|   |   |-- configs
|   |   |   -- index.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   -- login.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   -- index.ts
|   |   |   |-- main.ts
|   |   |   -- system
|   |   |       -- index.ts
|   |   -- request
|   |       |-- index.ts
|   |       -- type.d.ts
|   |-- store
|   |   |-- counter.ts
|   |   |-- index.ts
|   |   |-- login
|   |   |   -- login.ts
|   |   -- main
|   |       |-- analysis
|   |       |   -- index.ts
|   |       |-- main.ts
|   |       |-- system
|   |       |   -- index.ts
|   |       -- type.ts
|   |-- types
|   |   |-- login.d.ts
|   |   -- modal-type.d.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- format-time.ts
|   |   -- map-menus.ts
|   -- views
|       |-- login
|       |   |-- Login.vue
|       |   -- c-cpns
|       |       |-- Login-panel.vue
|       |       |-- panel-account.vue
|       |       -- panel-phone.vue
|       |-- main
|       |   |-- Main.vue
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   |-- Dashboard.vue
|       |   |   |   -- c-cpns
|       |   |   |       |-- chart-card
|       |   |   |       |   -- chart-card.vue
|       |   |   |       -- count-card
|       |   |   |           -- count-card.vue
|       |   |   -- overview
|       |   |       |-- Overview.vue
|       |   |       -- config
|       |   |           |-- dependencies.ts
|       |   |           |-- dev-dependencies.ts
|       |   |           |-- index.ts
|       |   |           |-- project-dir.ts
|       |   |           -- technology-stacks.ts
|       |   |-- product
|       |   |   |-- category
|       |   |   |   |-- Category.vue
|       |   |   |   -- configs
|       |   |   |       |-- content.config.ts
|       |   |   |       |-- modal.config.ts
|       |   |   |       -- search.config.ts
|       |   |   -- goods
|       |   |       |-- Goods.vue
|       |   |       -- configs
|       |   |           |-- content.config.ts
|       |   |           -- search.config.ts
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   -- Chat.vue
|       |   |   -- list
|       |   |       |-- List.vue
|       |   |       -- configs
|       |   |           -- content.config.ts
|       |   -- system
|       |       |-- department
|       |       |   |-- Department.vue
|       |       |   |-- c-cpns
|       |       |   |   |-- PageContent.vue
|       |       |   |   |-- PageModal.vue
|       |       |   |   -- PageSearch.vue
|       |       |   -- configs
|       |       |       |-- content.config.ts
|       |       |       |-- modal.config.ts
|       |       |       -- search.config.ts
|       |       |-- menu
|       |       |   |-- Menu.vue
|       |       |   -- configs
|       |       |       -- content.config.ts
|       |       |-- role
|       |       |   |-- Role.vue
|       |       |   -- configs
|       |       |       |-- content.config.ts
|       |       |       |-- modal.config.ts
|       |       |       -- search.config.ts
|       |       -- user
|       |           |-- User.vue
|       |           |-- c-cpns
|       |           |   |-- User-content.vue
|       |           |   |-- User-modal.vue
|       |           |   -- User-search.vue
|       |           |-- configs
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   -- search.config.ts
|       |           -- type.d.ts
|       -- not-found
|           -- NotFound.vue
|-- tsconfig.json
|-- tsconfig.node.json
-- vite.config.ts
`
