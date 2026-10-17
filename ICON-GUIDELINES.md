# Chi Icon Guidelines

本文件是 Chi 系列網站的圖示使用規範。圖示來源統一採用 [Lucide](https://lucide.dev/icons/) 的線性圖示語言；本專案以根目錄的 `icons.svg` 作為本地 SVG sprite，避免外部 CDN、圖示字型與執行時下載依賴。

## 核心規則

1. **單一風格：** 使用 Lucide 線性風格，24 × 24 viewBox、預設 2px 描邊、圓角端點與接合。不可混用 Emoji、Unicode 符號、其他圖示庫或自行繪製的不同風格圖示來代替一般介面圖示。
2. **本地引用：** 使用 `icons.svg` 的 symbol ID。不要引入 Lucide CDN、遠端字型或另一套 icon 套件。
3. **統一尺寸：** 內文與按鈕中的圖示預設沿用文字大小（`.chi-icon`，通常為 `1em`）；緊湊位置用 `.chi-icon--sm`；需要更醒目的展示圖示用 `.chi-icon--lg`。獨立圖示若不受文字尺寸控制，優先採用 20px 或 24px，並以相同元件內的視覺比例為準。不可只為了對齊而任意縮小圖示。
4. **統一顏色：** 圖示使用 `currentColor`，由所在的按鈕、文字或語意狀態控制顏色。不可在 SVG path 中硬編碼顏色，也不可只靠圖示顏色傳達成功、失敗或警告。
5. **統一語意：** 同一操作在所有 Chi 網站使用同一 symbol。不要把相似但不同的語意混用，例如「成功」與「一般勾選」。
6. **無障礙：** 純裝飾圖示使用 `aria-hidden="true"`。只有圖示的按鈕必須在按鈕本身設定明確的可存取名稱（例如 `aria-label="搜尋"`）；不要依賴 SVG 的視覺內容或 `title` 單獨提供名稱。
7. **先查再新增：** 新增前先檢查本文件、`icons.svg` 與現有引用。優先重用語意正確的 symbol；只有現有圖示確實不合用時才新增。
8. **保持來源可追溯：** 新增圖示應使用 Lucide 官方圖示的原始名稱及 SVG path，保留其授權與來源資訊；不要憑印象手繪一個「差不多」的版本。
9. **不造別名：** symbol ID 原則上採用 Lucide 原始名稱。若產品文案需要不同的語意稱呼，在文件的對照表中說明，不要複製出另一個同圖不同名的 symbol。
10. **相對路徑需配合頁面位置：** 根目錄頁面可使用 `./icons.svg#search`；子目錄中的頁面必須依實際路徑調整，不可直接複製錯誤路徑。

## 標準引用方式

```html
<svg class="chi-icon" aria-hidden="true" focusable="false">
  <use href="./icons.svg#search"></use>
</svg>
```

只有圖示的操作按鈕：

```html
<button class="chi-button chi-button--icon" type="button"
        aria-label="搜尋" title="搜尋">
  <svg class="chi-icon" aria-hidden="true" focusable="false">
    <use href="./icons.svg#search"></use>
  </svg>
</button>
```

## 現有圖示清單與語意

以下是目前 `icons.svg` 中實際存在的 22 個 symbol。使用前應先選擇最符合語意的一個，不要單純因外觀相似就替換。

| Symbol ID | 標準用途 | 備註 |
| --- | --- | --- |
| `arrow-down` | 向下移動、下載方向提示 | 不取代下拉選單的 `chevron-down` |
| `arrow-right` | 前進、下一步、向右導引 | 一般方向提示 |
| `arrow-up-right` | 前往、向外延伸的方向提示 | 外部連結優先使用 `external-link` |
| `check` | 一般勾選、完成某個子步驟 | 不作為唯一的成功狀態標示 |
| `chevron-down` | 下拉選單、可展開提示 | 收合／展開控制需同步更新實際狀態 |
| `circle-check` | 成功、通過、操作完成 | 可搭配成功文字與狀態 token |
| `external-link` | 開啟外部網站或外部資源 | 只在確實離開目前網站／上下文時使用 |
| `globe` | 公開網站、網路或全球範圍 | 不代表網路連線一定正常 |
| `info` | 一般資訊、說明提示 | 不用於警告或錯誤 |
| `monitor` | 桌面裝置、桌面預覽 | 不泛指所有伺服器狀態 |
| `pencil` | 編輯、修改內容 | 編輯按鈕需提供可存取名稱 |
| `search` | 搜尋、查找 | 搜尋欄與搜尋按鈕共用 |
| `settings` | 設定、偏好設定 | 全站固定使用 |
| `copy` | 複製文字、連結或資料 | 操作完成後的回饋另用文字／狀態表示 |
| `layers` | 圖層、集合、分組 | 不用來表示一般網站導覽 |
| `smartphone` | 手機裝置、行動裝置 | 裝置清單或行動版提示 |
| `sparkles` | 特殊亮點、智慧輔助或生成式功能 | 不作為一般裝飾或通用成功圖示 |
| `trash-2` | 刪除、移除 | 破壞性操作應搭配明確文案與必要確認 |
| `triangle-alert` | 警告、需注意的狀況 | 必須同時提供文字說明 |
| `trending-up` | 成長趨勢、上升指標 | 不表示健康或正常狀態 |
| `upload` | 上傳、匯入檔案 | 只有在上傳／匯入語境使用 |
| `x` | 關閉、取消、移除一個介面元素 | 不等同於錯誤狀態 |

## 常用語意對照

| 介面語意 | 首選 symbol | 目前狀態 |
| --- | --- | --- |
| 搜尋 | `search` | 已有 |
| 設定 | `settings` | 已有 |
| 編輯 | `pencil` | 已有 |
| 複製 | `copy` | 已有 |
| 刪除 | `trash-2` | 已有 |
| 關閉 | `x` | 已有 |
| 下拉／展開提示 | `chevron-down` | 已有 |
| 成功／通過 | `circle-check` | 已有 |
| 一般資訊 | `info` | 已有 |
| 警告 | `triangle-alert` | 已有 |
| 首頁 | `house` | 尚未加入；需要時再新增 |
| 導覽選單 | `menu` | 尚未加入；需要時再新增 |
| 失敗／錯誤 | `circle-x` 或 Lucide 當前對應名稱 | 尚未加入；加入前核對官方名稱 |
| 載入中 | `loader-circle` | 尚未加入；需搭配 reduced-motion 考量 |
| 淺色／深色主題 | `sun`／`moon` | 尚未加入；目前頁面可保留現有主題控制行為 |
| 伺服器／監控 | `server`／`activity` | 尚未加入；依產品實際需求新增 |

「尚未加入」表示不可直接在 HTML 引用該 ID。新增時必須先核對 Lucide 官方名稱與 SVG，再同步更新 sprite、本文件及使用範例。不要為了湊齊清單而一次加入沒有實際需求的圖示。

## 新增與驗收流程

1. 搜尋全專案的 `icons.svg#...` 引用，確認沒有相同用途的既有圖示。
2. 到 [Lucide 官方圖示目錄](https://lucide.dev/icons/) 核對圖示名稱、含義與官方 SVG。
3. 將官方 SVG 轉成 `icons.svg` 中符合現有格式的 `<symbol id="..."> `，保留 `viewBox="0 0 24 24"`，不得加入固定顏色。
4. 更新本清單及必要的 `DESIGN.md`／`README.md` 說明；若圖鑑展示可用圖示，亦同步更新圖鑑。
5. 搜尋所有新增／變更的 symbol ID，確認每個引用在 sprite 中存在。
6. 檢查亮色、深色、窄螢幕、圖示按鈕的 accessible name，以及圖示顏色是否能隨元件狀態正確變化。
7. 只有實際開啟頁面並測試後，才可回報瀏覽器驗證通過。

## 維護原則

- 本文件記錄規範與語意；`icons.svg` 是圖示實際資產來源。
- 不因單一產品需求而修改全站共用圖示語意。
- 不要把本清單視為 Lucide 全集；它只列出目前專案已收錄與常用的圖示。
- Lucide 採 ISC 授權；官方專案與授權資訊請見 [lucide-icons/lucide](https://github.com/lucide-icons/lucide)。
