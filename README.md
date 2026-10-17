# Chi Design System

Chi 系列網站共用的介面設計系統。**`DESIGN.md` 是設計決策與 AI 實作時的主要依據**，定義視覺原則、元件規則、修改流程與驗收標準；CSS 檔案是規範的實作，`elements.html` 專門展示共用元件及其狀態。它提供一致的視覺語言，但不強迫每個專案使用同一種頁面模板。

## 檔案用途

- `index.html`：空白起始版型，只保留共用背景、頁首、空內容區與頁尾。
- `elements.html`：共用元件圖鑑，集中展示元件本身與常見狀態，不放版型範例或引用教學。
- `preview.html`：可視化規格預覽，將 YAML 規格、色彩、字體、互動元件與頁型範例並列呈現。
- `design-system.yml`：機器可讀的設計系統規格，集中記錄亮／暗色 Token、字體尺度、圓角、間距、元件映射與頁型模式。實際色值仍以 `tokens.css` 為準。
- `elements.css`：圖鑑專用排版與篩選樣式，產品網站不需載入。
- `tokens.css`：共用色彩、字級、間距、圓角、陰影與尺寸 token。
- `components.css`：通用排版、按鈕、表單、狀態、資料呈現、設定與回饋元件。
- `icons.svg`：本地 Lucide 風格 SVG sprite，共用圖示資產。
- `ICON-GUIDELINES.md`：圖示語意對照、尺寸、無障礙與新增規範。
- `navigation.css`：語言選單、導覽面板、漢堡選單及其互動狀態。
- `DESIGN.md`：精簡的視覺原則、Token 使用方式、元件選用、頁型方向與基本可用性要求。參考 `references/a.html` 的公開入口頁與 `references/b.html` 的帳號管理頁，只取共通設計原則，不複製品牌識別；實際色值以 CSS token 為準。
- `AGENTS.md`：AI 的工程工作規範，定義修改前盤點、檔案選擇、功能保留、無障礙／安全注意事項、驗證方式與回報標準；它規定「怎麼做」，`DESIGN.md` 規定「介面應如何呈現」。

## 設計系統分頁

- [可視化規格預覽](https://chi.qzz.io/chi-design-system/preview.html)：直接查看設計規格與元件呈現。
- [機器可讀設計規格](https://chi.qzz.io/chi-design-system/design-system.yml)：YAML Token 與元件定義。

- [空白版型](https://chi.qzz.io/chi-design-system/)：共用背景、頁首、空白主內容、頁尾與亮暗主題切換。
- [元件圖鑑](https://chi.qzz.io/chi-design-system/elements.html)：依類別查閱共用元件與圖示、搜尋名稱或用途、複製圖示引用並切換亮暗主題。

## 元件範圍

圖鑑包含導覽與麵包屑、分頁、按鈕、表單驗證、核取方塊與開關、狀態標籤、提示訊息、進度與步驟、列表、表格、分頁器、空狀態、載入骨架、Tooltip、使用者與統計資訊、設定列、帳號與裝置列、Toast，以及常見頁面組合。

## 在其他專案使用

在 HTML 中依序載入：

```html
<link rel="stylesheet" href="/path/to/tokens.css">
<link rel="stylesheet" href="/path/to/components.css">
<link rel="stylesheet" href="/path/to/navigation.css">
```

若專案不使用導覽元件，可省略最後一個檔案。元件以原生 HTML 與 CSS 為主，不依賴 CSS 框架或圖示 CDN。正式專案仍需自行實作路由、資料、驗證、授權與持久化。

本專案使用 `.github/workflows/deploy-pages.yml` 透過 GitHub Actions 發佈。若部署未執行，請先到 Actions 確認 `Deploy GitHub Pages` 工作流程；再到 Settings → Pages 確認 Source 設為 `GitHub Actions`。提交成功不代表網站已完成部署。

## 開發原則

Chi 全專案禁止使用 Emoji，包含介面、文案、狀態回饋、範例、文件、程式碼註解與提交訊息。一般內容使用文字；介面圖示只使用 `icons.svg` 中核准的 Lucide SVG symbol，不用任意 Unicode 符號代替。

新專案以 `index.html` 作為空白起始骨架，不要把 `elements.html` 的展示內容複製成產品頁。新增元件前先檢查既有 token 與 class，避免功能重複；新增後同步更新 `elements.html` 與 `DESIGN.md`。元件必須考慮窄螢幕、鍵盤操作、焦點樣式、深色主題與 reduced motion。圖鑑中的互動僅用於呈現元件狀態，不代表已連接真實服務。

提交前請在桌面與手機檢查實際頁面，並確認導覽連結、控制項狀態、文字換行和錯誤回饋。

## 圖示

使用本地 `icons.svg` sprite，不依賴外部 CDN 或圖示字型：

```html
<svg class="chi-icon" aria-hidden="true" focusable="false">
  <use href="./icons.svg#search"></use>
</svg>
```

圖示統一使用 24 × 24 viewBox、2px 圓角線條與 `currentColor`。新增前請查閱 [`ICON-GUIDELINES.md`](./ICON-GUIDELINES.md)，整體介面規範見 `DESIGN.md`。
