# Chi Icon Guidelines

本文件是 Chi 系列網站的圖示使用規範。一般介面圖示統一採用 Lucide 線性圖示；本專案以根目錄的 `icons.svg` 作為本地 SVG sprite，避免外部 CDN、圖示字型與執行時下載依賴。主題選擇器的「跟隨系統」圖示採用指定圖示 `material-symbols:radio-button-partial-outline`；在不使用 Iconify 的專案中，應將其圖形納入本地 sprite，不可因此引入執行時 CDN 依賴。

## 核心規則

1. **全專案禁用 Emoji：** Chi 的介面、文案、狀態回饋、範例、文件、註解與提交訊息均不得加入 Emoji 字元。需要圖示時使用核准的本地 SVG sprite；其他情境使用文字，不以任意 Unicode 符號替代。
2. **單一風格：** 一般圖示使用 Lucide 線性風格，24 × 24 viewBox、預設 2px 描邊、圓角端點與接合。主題選擇器的跟隨系統圖示是明確例外，指定圖示為 `material-symbols:radio-button-partial-outline`，不得任意換回其他圖示。
3. **本地引用：** 使用 `icons.svg` 的 symbol ID。不要引入 Lucide CDN、遠端字型或另一套圖示庫作為執行時依賴。若專案本身已使用 Iconify，可直接使用指定的 Material Symbols 圖示名稱；否則將核准圖形收錄於本地 sprite。
4. **統一尺寸：** 內文與按鈕中的圖示預設沿用文字大小（`.chi-icon`，通常為 `1em`）；緊湊位置用 `.chi-icon--sm`；需要更醒目的展示圖示用 `.chi-icon--lg`。獨立圖示若不受文字尺寸控制，優先採用 20px 或 24px，並以相同元件內的視覺比例為準。不可只為了對齊而任意縮小圖示。
5. **統一顏色：** 圖示使用 `currentColor`，由所在的按鈕、文字或語意狀態控制顏色。不可在 SVG path 中硬編碼顏色，也不可只靠圖示顏色傳達成功、失敗或警告。
6. **統一語意：** 同一操作在所有 Chi 網站使用同一圖示。不要把相似但不同的語意混用，例如「成功」與「一般勾選」。
7. **無障礙：** 純裝飾圖示使用 `aria-hidden="true"`。只有圖示的按鈕必須在按鈕本身設定明確的可存取名稱（例如 `aria-label="搜尋"`）；不要依賴 SVG 的視覺內容或 `title` 單獨提供名稱。
8. **先查再新增：** 新增前先檢查本文件、`icons.svg` 與現有引用。優先重用語意正確的既有圖示；只有現有圖示確實不合用時才新增。
9. **保持來源可追溯：** 新增圖示應記錄官方來源與原始名稱，保留其授權與來源資訊；不要憑印象手繪一個「差不多」的版本。
10. **不造別名：** symbol ID 原則上採用 Lucide 原始名稱。若產品文案需要不同的語意稱呼，在文件的對照表中說明，不要複製出另一個同圖不同名的 symbol。
11. **相對路徑需配合頁面位置：** 根目錄頁面可使用 `./icons.svg#search`；子目錄中的頁面必須依實際路徑調整，不可直接複製錯誤路徑。

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

## 主題模式圖示規範

主題設定有三種模式，圖示與文字標籤固定配對：

| 模式 | 標準圖示 | 本地 sprite 對應 | 必要標籤 | 意義 |
| --- | --- | --- | --- | --- |
| Light／淺色 | `material-symbols:wb-sunny-outline-rounded` | `sun` | `淺色` 或 `淺色模式` | 明確固定使用淺色主題 |
| Dark／深色 | `material-symbols:dark-mode-outline-rounded` | `moon` | `深色` 或 `深色模式` | 明確固定使用深色主題 |
| System／跟隨系統 | `material-symbols:radio-button-partial-outline` | `sun-moon` | `跟隨系統` | 依裝置的 `prefers-color-scheme` 自動選擇淺色或深色 |

- 三態主題設定必須提供以上三個選項；不能只提供 Light／Dark 兩態後聲稱支援跟隨系統。
- 當專案使用 Iconify 時，主題圖示直接使用表格中的完整圖示名稱；不使用 Iconify 的專案則以本地 sprite 提供對應圖形，避免新增遠端執行時依賴。
- 圖示旁應有可見文字，或由控制項提供清楚的 accessible name；不可要求使用者只靠圖示猜測模式。
- 三態選擇器中的圖示表示該選項的模式，不表示下一個操作目標。
- 若介面採用單一二態切換按鈕，淺色與深色圖示可以表示可切換到的目標模式；按鈕需提供相應的 `aria-label`。二態切換按鈕不能取代需要保留的三態主題設定。
- 儲存偏好時，`system` 必須保留為獨立值，不可把當下解析出的 `light` 或 `dark` 寫回去，否則系統外觀變更時無法自動跟隨。
- 跟隨系統時，監聽 `prefers-color-scheme` 的變化並更新主題；只有使用者明確選擇 Light 或 Dark 時才固定覆寫系統偏好。
- 系統圖示的標準名稱為 `material-symbols:radio-button-partial-outline`，不得以 `monitor` 代替，以免與桌面裝置語意混淆。

## 新增與驗收流程

1. 搜尋全專案的圖示引用，確認沒有相同用途的既有圖示。
2. 核對圖示的官方名稱、含義與來源。
3. 本地 sprite 應保留 `viewBox="0 0 24 24"`，不得加入固定顏色。
4. 更新本清單及必要的 `DESIGN.md`／`README.md` 說明；若圖鑑展示可用圖示，亦同步更新圖鑑。
5. 搜尋所有新增／變更的 symbol ID，確認每個引用在 sprite 中存在。
6. 檢查亮色、深色、窄螢幕、圖示按鈕的 accessible name，以及圖示顏色是否能隨元件狀態正確變化。
7. 只有實際開啟頁面並測試後，才可回報瀏覽器驗證通過。

## 維護原則

- 本文件記錄規範與語意；`icons.svg` 是圖示實際資產來源。
- 不因單一產品需求而修改全站共用圖示語意。
- 不要把本清單視為圖示全集；它只列出目前專案已收錄與常用的圖示。
