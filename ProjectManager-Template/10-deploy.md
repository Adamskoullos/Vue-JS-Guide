1. `npm run build`

2. `firebase deploy`

3. Select *NO* to deleting indexes

4. Within firebase hosting within the console the public url can be found

5. Lock down the api key:

To do this sign into `console.developers.google.com` select the firebase project > credentials > API key:

Click on the API key and scroll down, click on `HTTP refers (website)` and then add the firebase domain:

![Screenshot from 2021-03-12 07-50-06](https://user-images.githubusercontent.com/73107656/110909094-956eac00-8307-11eb-812a-e29100a4c325.png)

Now only read and write requests made from this domain are accepted by firebase.