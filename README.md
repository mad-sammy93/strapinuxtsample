# nuxtStrapiSample
Sample Project [Drive link](https://docs.google.com/document/d/1-592Aict81mPTwJT8m09jiVD5-cjSYyz645lJpDLr2Y/edit#heading=h.9znv4srykdjv)

## Reference repository
https://bitbucket.org/jeschippers/strapinuxtbootstrap/

## Install package frontend
```docker compose run --rm frontend yarn install```

## Install package strapi
```docker compose run --rm strapi yarn install```

## Enter container
```docker  exec -it <container ID> sh```

## Run both containers
```docker compose up```

## Generate types
```docker compose run --rm frontend yarn generate-types```

## Cleanup cache
``` docker exec -it <container ID> /bin/sh -c "npx nuxi cleanup"    ```