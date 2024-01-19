# SwiftLinkAPI

Make your URL short using SwiftLink.

[API Docs](https://github.com/TangoBeee/SwiftLink/tree/master/SwiftLinkAPI/docs/)

## Setup Locally

#### Prerequisites

* [MongoDB](https://www.mongodb.com/cloud/atlas).
* [NodeJS](https://nodejs.org/) and [ExpressJS](https://expressjs.com/).
* [ReactJS](https://reactjs.org/).

#### Instructions

```
>> git clone https://github.com/TangoBeee/SwiftLink.git
>> cd SwiftLink/SwiftLinkAPI
```

On Windows:
```
>> bash install.sh
>> bash run.sh
```

On Mac:
```
>> sh install.sh
>> sh run.sh
```

On Linux:
```
>> ./install.sh
>> ./run.sh
```

#### In `root` directory of SwiftLinkAPI
* Create a `.env` file.
* Add your port number where server will run.
* Add the length of your ShortID that you want to generate for your users.
* Add your `MongoDB Atlas` credentials in `"mongoURI"` field.
```
PORT = 1234
SHORT_ID_LEN = 5
MONGODB_CONNECTION_URL = <URL>
```
* [Here is [the Video](https://www.youtube.com/watch?v=KKyag6t98g8) Tutorial for how to create MongoDB Atlas account and connect to NodeJS application].
