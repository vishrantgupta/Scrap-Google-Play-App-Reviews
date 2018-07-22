## This script scraps all the reviews from list of applications

Step 1:
Install `NodeJs`

Step 2:
Install `google-play-scraper`

`npm install google-play-scraper`

Step 3:
Create a file named `app.txt`. This file will contain all the applications for that you want to extract the reviews

Sample contain:

```
com.amazon.mShop.android.shopping
com.android.chrome
```

Step 4:
Execute following command:

`node google_play_all_reviews_scraper.js`

The above code will copy all the reviews and details of the application in `reviews/` and `details/` folder respectively.