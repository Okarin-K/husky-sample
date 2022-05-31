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

## lint-stagedの設定

### lint-stagedのインストール

```bash
npm i -D lint-staged
```

### package.jsonにスクリプト設定を追加する

```bash
"scripts": {
    ...,
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": [
      "npx eslint . --fix",
      "npx prettier --write ."
    ]
  },
}
```

## 参考

```bash
 git commit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  > husky-sample@1.0.0 lint-staged                                                                                                                                                                                                                                          > lint-staged                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       [STARTED] Preparing lint-staged...                                                                                                                                                                                                                                        [SUCCESS] Preparing lint-staged...                                                                                                                                                                                                                                        [STARTED] Running tasks for staged files...                                                                                                                                                                                                                               [STARTED] package.json — 23 files                                                                                                                                                                                                                                         [STARTED] *.{js,ts,jsx,tsx} — 5 files                                                                                                                                                                                                                                     [STARTED] npx eslint . --fix                                                                                                                                                                                                                                              [SUCCESS] npx eslint . --fix                                                                                                                                                                                                                                              [STARTED] npx prettier --write .                                                                                                                                                                                                                                          [SUCCESS] npx prettier --write .                                                                                                                                                                                                                                          [SUCCESS] *.{js,ts,jsx,tsx} — 5 files                                                                                                                                                                                                                                     [SUCCESS] package.json — 23 files                                                                                                                                                                                                                                         [SUCCESS] Running tasks for staged files...                                                                                                                                                                                                                               [STARTED] Applying modifications from tasks...                                                                                                                                                                                                                            [FAILED] The following paths are ignored by one of your .gitignore files:                                                                                                                                                                                                 [FAILED] node_modules                                                                                                                                                                                                                                                     [FAILED] Use -f if you really want to add them.                                                                                                                                                                                                                           [STARTED] Cleaning up temporary files...                                                                                                                                                                                                                                  [SUCCESS] Cleaning up temporary files...                                                                                                                                                                                                                                  Aborting commit due to empty commit message.
PS D:\git\husky-sample> 
PS D:\git\husky-sample>
PS D:\git\husky-sample> git commit -m "test: husky"

> husky-sample@1.0.0 lint-staged
> lint-staged

[STARTED] Preparing lint-staged...
[SUCCESS] Preparing lint-staged...
[STARTED] Running tasks for staged files...
[STARTED] package.json — 23 files
[STARTED] *.{js,ts,jsx,tsx} — 5 files
[STARTED] npx eslint . --fix
[SUCCESS] npx eslint . --fix
[STARTED] npx prettier --write .
[SUCCESS] npx prettier --write .
[SUCCESS] *.{js,ts,jsx,tsx} — 5 files
[SUCCESS] package.json — 23 files
[SUCCESS] Running tasks for staged files...
[STARTED] Applying modifications from tasks...
[FAILED] The following paths are ignored by one of your .gitignore files:
[FAILED] node_modules
[FAILED] Use -f if you really want to add them.
[STARTED] Cleaning up temporary files...
[SUCCESS] Cleaning up temporary files...
[main 1b63285] test: husky
 23 files changed, 8548 insertions(+), 1 deletion(-)
```
