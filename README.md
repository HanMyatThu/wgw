
# We Go Where Interview Tests

The Git repository contains two projects. 

- Server folder is a chat application, sending and receiving text messages using socket communication and message queues using RabbitMQ service

- Mobile Folder is an applcation which you can manage visa card and pay with it with Omise payment gateway.


## Installation

### Server Folder

- clone the whole repository.

```bash
    git clone https://github.com/HanMyatThu/wgw.git
    cd server
```

- install the modules

```bash
  npm install 
```

- create env files in your local (.env)

```bash
  PORT=3000
  RABBITMQ_URL=amqp://guest:guest@localhost:5672/
```

- for terraform, create terraform.tfvars

```bash 
  key_name = "ec2" (must be your keypair in aws ec2)
  ami_id = "ami-04b70fa74e45c3917"
  access_key = "xxxxx"
  secret_key = "xxxxx"
```

- if you want to run terraform, please do

 ```bash
 terraform init
 terraform apply
```
    
- start the server (run the docker file for localhost)

```bash
  npm run docker:start
  npm run dev
```

- and you can check the local here (one is for rabbit mq)

```bash
  http://localhost:3000
  http://localhost:15672/
```

### Mobile Folder

- go back to parent Folder
- then enter a mobile Folder

```bash
  cd mobile
```

- install the npm modules

```bash
  npm install
```

- you have to install android studio for simulator (Check in offical websites for steps)

- start the localhost server (with any comment)

```bash
  npm run start 
  npm run android
```

- if you use npm run start, run the app in android simulator with key (a)


## Authors

- [@hanthu][@Draz](https://github.com/HanMyatThu)



## Tech Stack

**Mobile:** React-Native, TypeScript, TailwindCSS, Context, ReactNavigation, NativeWind, 

**Server:** Node, Express, TypeScript, SocketIO, RabbitMQ, Jade

### Note

Cannot Implement Omise Payment Gateway because it doesn't support TypeScript and I used TypeScript for mobile folder. 
