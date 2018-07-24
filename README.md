## This script scraps all the reviews from list of applications

__Step 1:__
Install `NodeJs` with `NPM`, details: https://nodejs.org/en/download/ 

__Step 2:__
This project is based upon this repository, https://github.com/facundoolano/google-play-scraper, you need to install `google-play-scraper`

```
npm install google-play-scraper
```

__Step 3:__
Create a file named `app.txt`. This file will contain all the applications for that you want to extract the reviews

Sample contain:

```
com.amazon.mShop.android.shopping
com.android.chrome
```

__Step 4:__
Execute following command:

```
node google_play_all_reviews_scraper.js
```

The above code will copy all the reviews and details of the application in `reviews/` and `details/` folder respectively. I have not tested this script for applications with millions of comments.

Note: `reviews/` and `details/` directories will not be created if does not exists, make sure you have the directory in the root of this project.
