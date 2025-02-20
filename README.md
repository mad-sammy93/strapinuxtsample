# nuxtStrapiSample

Sample Project [Drive link](https://docs.google.com/document/d/1-592Aict81mPTwJT8m09jiVD5-cjSYyz645lJpDLr2Y/edit#heading=h.9znv4srykdjv)

  

## Reference repository

https://bitbucket.org/jeschippers/strapinuxtbootstrap/

  
#  FOLLOW THESE STEPS for 1st TIME INSTALL

##  1. Install package frontend

```docker compose run --rm frontend yarn install```

  

## 2. Install package strapi

```docker compose run --rm strapi yarn install```



## 3. Run both containers

```docker compose up```

## 4. Generate types

```docker compose run --rm frontend yarn generate-types```

## 5. Setup Strapi content 
	- Create Admin user
	- Add data content to the respective pages and categories
	- Publish the following pages/content/post one added content 
	- Go to Settings -> Users & Permissions Plugin -> Roles
	--> Click on Public
	--> Activate respective api's to have access to graphql and frontend
	- You can test if api's work by accessing `http://localhost:4500/graphql`


# For Debugging 
## Enter container

```docker exec -it <container ID> sh```


## Cleanup Nuxt cache

``` docker exec -it <container ID> /bin/sh -c "npx nuxi cleanup"```