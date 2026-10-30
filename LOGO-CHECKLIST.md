# Chi Logo Rollout Checklist

最後更新：2026-10-18

## 共通規則

- [x] 使用 `logo/` 內的原始 PNG，不將 Logo 轉成 SVG、不重繪、不裁切。
- [x] 一般網站淺色模式使用對應品牌的 `-b.png`，深色模式使用 `-w.png`。
- [x] Favicon、iOS 主畫面圖示與 PWA 圖示固定使用對應品牌的 `-w.png`。
- [x] Chi Nav 為特例：淺色 `white-b.png`、深色與圖示 `black-w.png`。
- Merch OAuth 回呼頁使用 Purple Logo／圖示；登入流程的互動強調色仍遵守共用安全流程規範，維持 Blue。
- [x] 個人網站使用 Gray、Merch 使用 Purple、其他 Chi 網站使用 Blue。
- [x] 個人網站不新增頂部／導覽列 Logo；Favicon 與 iOS 主畫面圖示改用原始 `gray-w.png`。
- [ ] 逐站實機驗收淺色、深色、跟隨系統三種模式。
- [ ] 逐站實機驗收 Favicon 與 iOS 主畫面圖示；瀏覽器可能保留舊快取。

## 網站與 Repository 清單

| 網站／服務 | Repository | 淺色主要 Logo | 深色主要 Logo | Favicon／安裝圖示 | 程式碼修改 |
| --- | --- | --- | --- | --- | --- |
| 個人網站 | [tsai97216.github.io](https://github.com/47tsai/tsai97216.github.io) | 不新增 | 不新增 | `gray-w.png` | [x] |
| Chi Merch | [merch](https://github.com/47tsai/merch) | `purple-b.png` | `purple-w.png` | `purple-w.png` | [x] |
| Chi Nav | [nav](https://github.com/47tsai/nav) | `white-b.png` | `black-w.png` | `black-w.png` | [x] |
| Chi Status | [status](https://github.com/47tsai/status) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| Chi Auth | [chi-auth](https://github.com/47tsai/chi-auth) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| H Tools | [h](https://github.com/47tsai/h) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| Chi Design System 入口／元件圖鑑／預覽／框架範例 | [chi-design-system](https://github.com/47tsai/chi-design-system) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| Chi Brand 展示頁 | [chi-brand](https://github.com/47tsai/chi-brand) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| Chi 範例網站 | [example-site](https://github.com/47tsai/example-site) | `blue-b.png` | `blue-w.png` | `blue-w.png` | [x] |
| Chi Source | [chi-source](https://github.com/47tsai/chi-source) | 不適用（Source 清單圖示） | 不適用 | `blue-w.png` | [x] |
| Chi Source Personal | [chi-source-personal](https://github.com/47tsai/chi-source-personal) | 不適用（Source 清單圖示） | 不適用 | `blue-w.png` | [x] |

## 已納入的主要檔案

- 個人網站：`src/config/siteConfig.ts`、`src/layouts/Layout.astro`（Favicon／iOS 圖示使用原始 `gray-w.png`，不新增頂部 Logo）
- Merch：`index.html`、`public/manifest.webmanifest`、`public/oauth-callback.html`
- Nav：`index.html`、`manifest.json`、`bookmarks/index.html`、`admin/index.html`、`admin/admin.css`、`new/index.html`
- Status：`index.html`、`action/index.html`、`actions/index.html`
- Auth：`index.js`
- H Tools：`src/pages/index.astro`、`src/components/AppShell.svelte`、`src/styles/global.css`
- Design System：`index.html`、`elements.html`、`preview.html`、`framework-example.html`、`example/index.html`、`example/framework.js`、`example/framework.css`
- Chi Brand：`index.html`、`samples/index.html`
- Chi 範例網站：`index.html`
- Source：`apps.json` 與 `update_source.py`（兩個 Source Repository）

## 尚未直接修改的服務

- [ ] `vault.chi.qzz.io`（Vaultwarden）：需確認部署設定與可用的品牌自訂方式。
- [ ] `bili.chi.qzz.io`：需先確認實際提供前端的來源與部署方式。
- [ ] `alist.chi.qzz.io`：需先確認實際提供前端的來源與部署方式。

這些服務沒有在本輪已確認的 Chi 前端 Repository 中找到可直接修改的網站原始碼，因此不把它們標成已完成，也不直接覆寫第三方應用的內建介面。

## 驗收紀錄

- [x] 已確認 `logo/` 中存在 `black-w.png`、`white-b.png`、`blue-b.png`、`blue-w.png`、`gray-b.png`、`gray-w.png`、`purple-b.png`、`purple-w.png`。
- [x] 已查詢相關 GitHub Actions 工作流程。
- [x] 確認本清單最後一次修改後的所有工作流程均成功。
- [ ] 完成實際部署網站的桌面與手機視覺驗收。
