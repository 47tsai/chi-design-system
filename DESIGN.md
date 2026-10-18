# Chi Design System

Chi 是 Chi 系列網站共用的設計系統與網站框架。共用框架統一頁面骨架、導覽、主題、內容節奏、響應式行為與通用元件；各產品保留自己的資訊架構、內容、資料與業務功能。產品頁面應優先沿用 `example/` 的 App Shell 與共用元件，不要各自重新實作基礎外觀。不同產品可以使用不同的內容佈局，不要求每頁長得一模一樣。

## 設計方向

- **清楚優先：** 先安排資訊層級、版面與閱讀順序，再調整裝飾。
- **克制而一致：** 以對齊、留白、字級、邊框和表面差異建立層級，不要把每個區塊都包成卡片。
- **藍色作為強調：** 主色為 `#4a88fc`，用於主要操作、連結與必要的選取狀態。
- **少用裝飾：** 漸層、陰影、發光與玻璃效果只在確實有助於層級或辨識時使用，不要讓介面充滿浮層或裝飾效果。
- **內容決定版面：** 卡片高度依內容自然伸展；不要為了等高而塞入空白，也不要把文字硬擠成一行。
- **保留產品特色：** 不要把所有頁面改成「置中 Hero、漸層標題、三張卡片」的相同模板。

## 規範與檔案分工

- `DESIGN.md`：視覺原則、元件選用與基本互動要求。
- `tokens.css`：色彩、字體、間距、圓角、陰影及尺寸的實際值，數值以此檔為準。
- `components.css`：可重用的版面、按鈕、表單、狀態、資料與回饋元件。
- `navigation.css`：共用導覽元件。
- `elements.html` / `elements.css`：元件圖鑑與圖鑑專用樣式，不是產品頁模板。
- `index.html`：保持精簡的設計系統入口骨架。
- `example/`：共用網站框架的參考實作，包含 App Shell、主題控制、響應式導覽、內容模組與示範互動；產品導入以此作為骨架基準。
- `design-system.yml`：方便工具讀取的設計規格；若與 CSS 實際值不一致，應以 CSS 為準並同步修正規格。
- `icons.svg` / `ICON-GUIDELINES.md`：本地圖示與使用規範。

## 品牌識別與 Logo

逐站執行狀態與驗收項目請見 [`LOGO-CHECKLIST.md`](./LOGO-CHECKLIST.md)。

Logo 原始資產集中於 [`logo/`](./logo/)；使用 PNG 原檔，不將其轉成 SVG，也不自行重繪或改變比例。網站主要 Logo 必須依主題切換，Favicon 與其他安裝圖示則固定使用深色版（檔名以 `-w.png` 結尾）。

| 網站類型 | 品牌色 | 淺色模式主要 Logo | 深色模式主要 Logo | Favicon／其他圖示 |
| --- | --- | --- | --- | --- |
| 個人網站 | Gray | `gray-b.png` | `gray-w.png` | `gray-w.png` |
| Chi Merch | Purple | `purple-b.png` | `purple-w.png` | `purple-w.png` |
| 其他 Chi 網站與服務 | Blue | `blue-b.png` | `blue-w.png` | `blue-w.png` |
| Chi Nav（例外） | 依既有 Nav 配色 | `white-b.png` | `black-w.png` | `black-w.png` |

- `-b.png` 是一般網站淺色模式的主要 Logo；`-w.png` 是深色模式的主要 Logo。
- Chi Nav 是明確例外：淺色模式使用 `white-b.png`，深色模式使用 `black-w.png`；不得套用一般的 `blue-b.png`／`blue-w.png` 主要 Logo 規則。
- Favicon、PWA／iOS 主畫面圖示等非主題切換圖示，固定使用對應品牌的 `-w.png`；Chi Nav 使用 `black-w.png`。
- 淺色、深色與跟隨系統三種主題都必須測試；跟隨系統時，主要 Logo 隨系統明暗自動切換。
- API 與純後端服務不需額外建立獨立 Logo；若有可見的使用者介面，沿用所屬產品品牌。

## 色彩與主題

優先使用語意化的 `--chi-*` token，不要在共用元件裡散落硬編碼色值。

| 用途 | Token |
| --- | --- |
| 頁面背景 | `--chi-color-page`、`--chi-color-page-soft` |
| 一般／浮層表面 | `--chi-color-surface`、`--chi-color-surface-raised` |
| 主要與輔助文字 | `--chi-color-text`、`--chi-color-text-strong`、`--chi-color-text-muted` |
| 主要強調色 | `--chi-color-accent`、`--chi-color-accent-hover` |
| 邊框與焦點 | `--chi-color-border`、`--chi-color-border-strong`、`--chi-color-focus` |
| 狀態 | `--chi-color-success`、`--chi-color-warning`、`--chi-color-danger` |

- 淺色主題使用淡藍灰背景、白色表面與清楚的深色文字。
- 深色主題使用分層的深藍灰表面，不要直接把淺色主題反相。
- 主題設定支援淺色、深色、跟隨系統三種模式。主題圖示標準為 `material-symbols:wb-sunny-outline-rounded`（Light）、`material-symbols:dark-mode-outline-rounded`（Dark）、`material-symbols:radio-button-partial-outline`（System）。使用本地 sprite 的專案分別對應 `sun`、`moon`、`sun-moon`。詳見 [`ICON-GUIDELINES.md`](./ICON-GUIDELINES.md)。
- 成功、警告、錯誤使用各自的語意色，不以主色代替所有狀態。
- 不要只靠顏色表達選取、錯誤或成功；搭配文字、圖示或其他明確提示。
- 漸層 token 可以保留供少數品牌焦點使用，但純色是一般操作與內容表面的預設。

## 字體、間距與形狀

- 字體使用 `--chi-font-sans`，以 Noto Sans TC 與系統無襯線字體為主。
- 正文優先使用 `--chi-text-md`；輔助文字使用 `--chi-text-sm` 或 `--chi-text-xs`。重要資訊不要縮成難以閱讀的小字。
- 文字行高通常使用 `--chi-leading-normal`；標題可使用 `--chi-leading-tight`。
- 間距優先使用 `--chi-space-*`，避免每個元件自行定義相近數值。
- 常用圓角為 6、10、16px；22px 留給少數大型容器。膠囊形只用於明確需要這種外觀的控制項。
- 控制項基準高度為 `--chi-control-height`。陰影以邊界難以區分或元件確實浮起時才使用。

## 元件選用

先從現有元件中挑選符合用途的項目，並確認它實際提供的結構與狀態。CSS class 只提供外觀時，不代表它自動具備資料儲存、驗證、鍵盤控制或 API 功能。

| 需求 | 優先考慮 |
| --- | --- |
| 版面與間距 | `.chi-container`、`.chi-grid`、`.chi-row`、`.chi-stack`、`.chi-split` |
| 頁面標題 | `.chi-page-header`、`.chi-title`、`.chi-description` |
| 公開入口主視覺 | `.chi-hero`，只在確實需要品牌介紹或主要 CTA 時使用 |
| 按鈕 | `.chi-button` 及其主要、危險、小型等變體 |
| 表單 | `.chi-field`、`.chi-label`、`.chi-input`、`.chi-select`、`.chi-textarea` |
| 面板與卡片 | `.chi-panel`、`.chi-card`，只包裝真正相關的內容 |
| 設定與資源列 | `.chi-setting-row`、`.chi-account-row`、`.chi-device-row` |
| 提示與狀態 | `.chi-alert`、`.chi-badge`、`.chi-tag`、`.chi-toast` |
| 空資料與載入 | `.chi-empty-state`、`.chi-skeleton` |
| 資料呈現 | `.chi-list`、`.chi-table`、`.chi-stat`、`.chi-progress`、`.chi-steps` |
| 導覽 | `.chi-site-header`、`.chi-nav`、`.chi-mobile-menu`、`.chi-breadcrumbs`、`.chi-tabs` |

### 元件使用原則

- 先用版面工具和語意 HTML 建立結構，再套用元件。
- 只有需要明確分組的內容才使用面板或卡片；簡單標題、說明和分隔不必額外包裝。
- 次要操作應比主要操作低調；危險操作使用 danger 語意色，避免與一般操作混淆。
- 卡片高度由內容決定。若要對齊操作區，優先調整內部排版，不要固定整張卡片高度。
- 設定頁偏好分組、分隔線和緊湊設定列；資料密集頁面偏好表格、摘要和清楚的狀態資訊。
- `elements.css` 僅供圖鑑使用，產品網站不要為了取得單一元件而載入整份圖鑑樣式。

## 頁型原則

Chi 不提供必須照抄的頁面模板。依頁面的主要任務選擇組合：

- **公開入口／品牌介紹：** 清楚的主標題、簡短說明、主要操作和適量的功能介紹。Hero 與漸層不是必要條件。
- **帳號中心／設定：** 清楚的區段標題、設定列、狀態和操作。避免過大的 Hero 與重複的大卡片。
- **資料工作區／監控：** 以摘要、表格、狀態與操作流程為主，讓重要資料容易掃讀。
- **工具／文件：** 工具頁突出工作區和操作順序；文件頁限制閱讀寬度並維持清楚的標題階層。

`references/a.html` 與 `references/b.html` 只作為視覺參考，取其版面與層級原則，不複製品牌識別、文案或專屬產品流程。

## 身分驗證與 OAuth

- Chi 網站的實際 Passkey 登入與中央身分驗證一律交由 `https://auth.chi.qzz.io`；各應用不得另外仿製登入表單或收集 Passkey 資訊。
- 各網站內的「使用 Chi Auth 登入」操作使用 Chi Auth 的藍色強調色 `#4a88fc`，在 Light／Dark 主題中維持一致的品牌辨識。
- OAuth 回呼頁只呈現處理進度、成功／失敗原因及安全返回入口；沿用 Chi 的背景、表面、文字、邊框、焦點與語意狀態色，不另創紫色或其他獨立登入配色。
- 回呼頁必須支援系統深淺色、窄螢幕、鍵盤焦點與 reduced motion；載入與錯誤狀態使用可讀文字，不只依靠顏色或動畫。
- 視覺調整不得改動 OAuth 安全流程：保留每次登入的隨機 `state`、PKCE S256、精確 callback URI 驗證及一次性授權碼處理。不得把 access token 放進 URL 或 `localStorage`。
- 完成授權後返回發起登入的應用；若驗證失敗，顯示可理解的錯誤與重新開始入口，不洩漏 token、code verifier 或其他敏感資料。

## 互動與可用性

- 使用正確的 HTML 語意：按鈕執行操作，連結負責導覽，表單控制具有可辨識的標籤。
- 可操作元素需能以鍵盤使用，並提供清楚的 `:focus-visible` 樣式。
- 展開、收合、選取、停用與載入狀態需反映在實際 DOM；需要時同步更新 ARIA 屬性。
- 表單錯誤要有文字說明，不可只改變邊框顏色。
- 窄螢幕優先重新排列內容，不要靠縮小所有文字或隱藏必要操作解決溢出。
- 尊重 `prefers-reduced-motion`；動效應短而低調，不妨礙閱讀或操作。
- Toast 適合短暫、非阻斷性的回饋；重要錯誤應留在頁面內容中。
- 裝飾圖示使用 `aria-hidden="true"`；純圖示按鈕需提供明確的 accessible name。

## 圖示與 Emoji

Chi 系列介面與專案文件不使用 Emoji 作為圖示、裝飾或狀態回饋。一般圖示使用 `icons.svg` 中核准的本地 Lucide SVG symbol。主題選擇器的三態圖示依 `ICON-GUIDELINES.md` 所列標準名稱統一；使用 Iconify 的專案可使用指定名稱，不使用 Iconify 的專案則使用本地 sprite 對應圖形。避免新增不必要的外部執行時依賴。

## 修改與檢查

修改 Chi 元件或套用到其他網站時：

1. 先看目標專案現有的結構、樣式與互動，不要只憑截圖重做。
2. 優先重用現有 token 和元件；只有實際需求無法合理表達時才擴充。
3. 保留既有內容、路由、資料流程與功能，不要為了視覺一致而改動無關架構。
4. 檢查亮色／深色主題、窄螢幕、文字換行、鍵盤焦點與必要的互動狀態。
5. 誠實區分已修改、已檢查與尚未驗證的項目。圖鑑中的示範互動不代表正式產品已連接 API、登入或資料持久化。

## 引用方式

依需要載入共用樣式：

```html
<link rel="stylesheet" href="/path/to/tokens.css">
<link rel="stylesheet" href="/path/to/components.css">
<link rel="stylesheet" href="/path/to/navigation.css">
```

若不使用 Chi 導覽元件，可省略 `navigation.css`。不要在產品網站載入 `elements.css`。若網站部署在子路徑或不同網域，請依實際部署方式調整 CSS、圖示與連結路徑。
