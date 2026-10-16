# Chi Design System

Chi 系列網站共用的 UI 基礎，集中管理設計 token、可重用 CSS 元件、互動模式與元件圖鑑。它提供一致的視覺語言，但不強迫每個專案使用同一種頁面模板。

## 專案內容

- `index.html`：主要元件圖鑑與互動預覽。
- `tokens.css`：共用色彩、字級、間距、圓角、陰影與尺寸 token。
- `components.css`：通用排版、按鈕、表單、狀態、資料呈現、設定與回饋元件。
- `navigation.css`：語言選單、導覽面板、漢堡選單及其互動狀態。
- `DESIGN.md`：視覺原則、元件用途、無障礙與發佈前檢查清單。
- `examples/index.html`：次要預覽入口。

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

GitHub Pages 網站：<https://tsai97216.github.io/chi-design-system/>

若預覽尚未發佈，請在 GitHub repository 的 Settings → Pages 中選擇 `main` 分支與根目錄。

## 開發原則

新增元件前先檢查既有 token 與 class，避免功能重複；新增後同步更新圖鑑與 `DESIGN.md`。元件必須考慮窄螢幕、鍵盤操作、焦點樣式、深色主題與 reduced motion。圖鑑中的互動僅為前端示範，不代表已連接真實服務。

提交前請在桌面與手機檢查實際頁面，並確認導覽連結、控制項狀態、文字換行和錯誤回饋。
