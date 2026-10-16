# Chi Design System

Chi 系列網站共用的 UI 基礎，集中管理設計 token、可重用 CSS 元件、互動模式與元件圖鑑。它提供一致的視覺語言，但不強迫每個專案使用同一種頁面模板。

## 專案內容

- `index.html`：空白起始版型，只保留共用背景、頁首、空內容區與頁尾。
- `elements.html`：設計規範入口、元件圖鑑與互動預覽。
- `tokens.css`：共用色彩、字級、間距、圓角、陰影與尺寸 token。
- `components.css`：通用排版、按鈕、表單、狀態、資料呈現、設定與回饋元件。
- `navigation.css`：語言選單、導覽面板、漢堡選單及其互動狀態。
- `DESIGN.md`：視覺原則、元件用途、無障礙與發佈前檢查清單。
- `DESIGN.md`：設計原則、元件用途、無障礙與發佈前檢查清單。

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

## 預覽

- 空白版型：<https://tsai97216.github.io/chi-design-system/>
- 設計規範與元件：<https://tsai97216.github.io/chi-design-system/elements.html>

若預覽尚未發佈，請在 GitHub repository 的 Settings → Pages 中選擇 `main` 分支與根目錄。

## 開發原則

新專案以 `index.html` 作為空白起始骨架，不要把 `elements.html` 的展示內容複製成產品頁。新增元件前先檢查既有 token 與 class，避免功能重複；新增後同步更新 `elements.html` 與 `DESIGN.md`。元件必須考慮窄螢幕、鍵盤操作、焦點樣式、深色主題與 reduced motion。圖鑑中的互動僅為前端示範，不代表已連接真實服務。

提交前請在桌面與手機檢查實際頁面，並確認導覽連結、控制項狀態、文字換行和錯誤回饋。

## 圖示

使用本地 `icons.svg` sprite，不依賴外部 CDN 或圖示字型：

```html
<svg class="chi-icon" aria-hidden="true" focusable="false">
  <use href="./icons.svg#search"></use>
</svg>
```

圖示統一使用 24 × 24 viewBox、2px 圓角線條與 `currentColor`。詳細規範見 `DESIGN.md`。
