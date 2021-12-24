# reco-mane

## Tech Stack
- Laravel 8.x
- PHP 8.x
- MySQL 8.0
- Nodejs (lts/fermium)
- Vue 2.x (Vue router)

## Prerequisites

- docker
- nvm(https://github.com/nvm-sh/nvm#installing-and-updating)のinstalling-and-updatingからインストールしてねー。

## Setup

0. [Prerequisites](#Prerequisites) にあるものをインストール

1. aliasの設定
```bash
echo "alias sail='./vendor/bin/sail'" >> ~/.zshrc
```

2. WEBサーバを立ち上げ

```bash
# ↓ コマンドを実行するディレクトリを注意
[~] $ git clone ssh://git@github.com:Apro-yuto/reco-mane.git
[~] $ cd reco-mane

# .env ファイルを準備
[reco-mane] $ cp .env.example .env
[reco-mane] $ cp .env.example .env.testing

# PHPパッケージをインストール
[reco-mane] $ docker run --rm \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    composer install
    
# .envを以下のように編集してください

# DB_DATABASE=recomane<br />
# DB_USERNAME=develop<br />
# DB_PASSWORD=(長島まで聞きにきてください)

# .env.testingを以下のように編集してください

# APP_KEY=(ここはenvファイルのをコピペしてください。)<br />
# DB_DATABASE=recomane_testing<br />
# DB_USERNAME=develop<br />
# DB_PASSWORD=(長島まで聞きにきてください)

[reco-mane] $ sail up
```



3. マイグレーションを実行

```
[reco-mane] $ sail artisan key:generate
```

```bash
[highlight] $ docker compose exec mysql bash
[highlight] $ mysql -p
## テスト用のDBを作成
mysql> CREATE DATABASE recomane_testing;
mysql> GRANT ALL ON recomane_testing.* TO develop;
[reco-mane] $ sail artisan migrate
[reco-mane] $ sail artisan migrate --env=testing
```
3. JSをセットアップ
```
`/etc/hosts` ファイルに追加
// /etc/hosts
127.0.0.1 host.docker.internal
```

```zsh
# node バージョンを統一するように
[highlight] $ nvm install && nvm use
# node パッケージをインストール
[highlight] $ npm ci
# laravel-mix を起動
[highlight] $ npm run dev
```

4. http://localhost:8080 にアクセス
