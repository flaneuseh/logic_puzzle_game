#Install dependencies:
```
npm install
```

#To run 
```
npx expo start
```

#Deploy to Firebase 

Prerequisites: Initialize
```
firebase init hosting (public path should be dist; all other answers are No)
```

Step 1: 
```
firebase login 
```

Step 2: 

```
npx expo export -p web
npm run deploy-hosting 
```




To step up follow instructions in: https://docs.expo.dev/distribution/publishing-websites/


#Download user data 

Step 1: Get private key from firebase (services -> service accounts -> generate new private key)

Step 2: Run the following commad 


```
npx -p node-firestore-import-export firestore-export -a <PrivateKey.json> -b <data.json>

```

where <PrivateKey.json> is the json created by firebase and <data.json> is the file location that we want to store our data in. 

