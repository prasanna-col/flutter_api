# Express APP

It have 4 APIs called Login, Register, getProfile and updateProfile

This app is connected to mongo database


## API data:

#### Method: POST

### Register
http://localhost:9000/register 
{
    "email": "sourash@yopmail.com",
    "password": "Qwer@123",
    "phone": "9887238767",
    "name": "kamal"
}

### Login
http://localhost:9000/login
{
    "email": "sourash@yopmail.com",
    "password": "Qwer@123"
}

### Get data
http://localhost:9000/getProfile
{
    "email": "sourash@yopmail.com"
}

### Update data
http://localhost:9000/updateProfile
{
    "email": "sourash@yopmail.com",
    "phone": "8989989889",
    "name": "kamal2"
}



