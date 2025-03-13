# nuxtStrapiSample (SAMBERT)

Sample Project [Drive link](https://docs.google.com/document/d/1-592Aict81mPTwJT8m09jiVD5-cjSYyz645lJpDLr2Y/edit#heading=h.9znv4srykdjv)

  

## Reference repository

https://bitbucket.org/jeschippers/strapinuxtbootstrap/

  
  

# ON STARTUP (follow steps for fist time)

  

## Install package frontend

```docker compose run --rm frontend yarn install```

  

## Install package strapi

```docker compose run --rm strapi yarn install```

  

## Run both containers

```docker compose up```

  

## Generate types

```docker compose run --rm frontend yarn generate-types```

  

## Create a .env file and copy comtent from .env.example

  

## Migrate date using the file provided in migrations folder

 **use the import command given below.**
 
 OR
 
## Setup Strapi content

- Create Admin user

- Add data content to the respective pages and categories

- Publish the following pages/content/post one added content

- Go to Settings -> Users & Permissions Plugin -> Roles

--> Click on Public

--> Activate respective api's to have access to graphql and frontend

- You can test if api's work by accessing `http://localhost:4500/graphql`
  
  
 
## Login to strapi( [[http://localhost:4500/admin/auth/login]] )


username :  `sambert+nuxtsample@smartshore.nl`
password: `!Silver911`


  

  

# OPTIONAL COMMANDS For Debugging


## Cleanup cache

``` docker exec -it <container ID> /bin/sh -c "npx nuxi cleanup"```

  

## Enter container

```docker exec -it <container ID> sh```

  
  

# IMPORT EXPORT

  

## Import Strapi data

```docker compose run --rm strapi yarn strapi import --file migrations/my-strapi-export```

  

## Export Strapi data

``` docker compose run --rm strapi yarn strapi export --no-encrypt --file migrations/my-strapi-export```