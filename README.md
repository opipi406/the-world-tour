# WorldTour

---

> ## 更新内容

### 2022/3/19
- Publicリポジトリ公開用にコードの修正

### 2021/7/25
- アコーディオンメニューの多層化
  - 大項目（レストランorアトラクション）、中項目（エリア）、小項目（施設）に階層化
- StreetViewPanoramaオブジェクトのインスタンス化の最適化
  - 本来なら１つのインスタンスを使い回すのがベストだと思われるので修正
  - map.jsで宣言した変数paranomaのみで制御
- アコーディオンメニューで選択した施設の座標に移動するボタンを追加
- 施設に移動した状態から元の地点に戻るためのボタンを追加

### 2021/7/23
- エリア選択メニューのid名の命名規則が不適だったので修正
- レビュー表示機能試作