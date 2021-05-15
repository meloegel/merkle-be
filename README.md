# Merkle BE

## Created By: Mark Loegel

## Documentation:

Base URL for Deployed API: <br>
Front-End Github: https://github.com/meloegel/merkle-fe <br>
Deployed Front-End Link: <br>

## About

Simple demo for the Merkle application assement.

## Technologies Used

-Node <br>
-Express <br>
-Knex <br>
-PostgresSQL3 <br>
-Nodemon <br>

## Endpoints

| Request | URL                 | Description            |
| ------- | ------------------- | ---------------------- |
| POST    | /api/users/register | register as a new user |
| GET     | /api/users/         | gets all users         |
| DELETE  | /api/users/:id      | deletes a user         |

## **Table Requirements**

### **User Table**

| Name       | Type      | Required | Notes                             |
| ---------- | --------- | -------- | --------------------------------- |
| id         | integer   | yes      | User id (auto generated by API)   |
| firstName  | string    | yes      | User's First Name                 |
| lastName   | string    | yes      | User's Last Name                  |
| addressOne | string    | yes      | User's Address                    |
| addressTwo | string    | no       | User's Address Misc. (i.e. Apt# ) |
| city       | string    | yes      | User's City                       |
| state      | string    | yes      | User's State                      |
| zip        | string    | yes      | User's Zip                        |
| country    | string    | yes      | User's Country                    |
| date       | timestamp | yes      | Date auto generated by API        |

## Requests and Returns

### POST /api/users/register

Request Body:

```
 {
        "firstName": "Example",
        "lastName": "Examplson",
        "addressOne": "1234 West Street",
        "addressTwo": "Apt. 2",
        "city": "Detroit",
        "state": "MI",
        "zip": "48217",
        "country": "USA"
    }
```

Returns:

```
{
    "data": "User Created, User Id: 8"
}

```

### GET /api/users/

Returns:

```
[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "addressOne": "1234 West Street",
        "addressTwo": "Apt. 2",
        "city": "Detroit",
        "state": "MI",
        "zip": "48217",
        "country": "USA",
        "date": "2021-05-14 23:15:14"
    },
    {
        "id": 2,
        "firstName": "Bill",
        "lastName": "Johnson",
        "addressOne": "824 Main Street",
        "addressTwo": null,
        "city": "Denver",
        "state": "CO",
        "zip": "12456 - 4568",
        "country": "USA",
        "date": "2021-05-14 23:15:14"
    },
    {
        "id": 3,
        ......cont.

```

### DELETE /api/users/:id

Returns:

```
{
    "Message": "User with id: 8 has been deleted"
}
```
