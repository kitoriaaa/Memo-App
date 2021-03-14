# Memoアプリ
React + Redux<br>
Docker上で開発

## Docker起動コマンド
```
docker-compose up -d
docker-compose exec app /bin/bash
// 停止
docker-compose down
```

`npx create-react-app memo-app`

## Start React app
> Success! Created memo-app at /usr/src/app/memo-app
> Inside that directory, you can run several commands:
> 
>   `yarn start`<br>
>     Starts the development server.
> 
>   `yarn build`<br>
>     Bundles the app into static files for production.
> 
>   `yarn test`<br>
>     Starts the test runner.
> 
>   `yarn eject`<br>
>     Removes this tool and copies build dependencies, configuration files
>     and scripts into the app directory. If you do this, you can’t go back!
> 
> We suggest that you begin by typing:
> 
>   `cd memo-app`<br>
>   `yarn start`


## Redux install
```
npm install --save redux

npm install --save react-redux

npm install --save-dev redux-devtools