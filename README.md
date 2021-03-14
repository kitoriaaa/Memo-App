# Memoアプリ
React + Redux<br>
Docker上で開発

```
docker-compose up -d
docker-compose exec app /bin/bash

docker-compose down
```


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

### ESLint 導入
```bash
// ESLint insatll
npm install --save-dev eslint
node_modules/.bin/eslint --init
```

package.jsonに追加
```json
  "scripts": {
    ...
    "lint": "eslint src"
  },
```

