# husky-sample

Git hooks の husky を試してみる

eslint と prettier をコミット時に強制する

## husky の設定

### husky のインストール

```bash
npm in -D husky
```

### husky の初期化

```bash
npx husky install
```

### hooks の登録

コミット時に動くスクリプトの設定

```bash
npx husky add .husky/pre-commit "script name"
```
