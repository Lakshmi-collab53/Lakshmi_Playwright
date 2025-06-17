user={
    name:"TestUser",
    DOB:"1/06/2025",
    place:"India",
}
console.log(user.name)
console.log(user.DOB)
console.log(user.place)

delete user['name']//deleting object property
console.log(user.name)

user['name']="User1"//updating object property
console.log(user['name'])

str1="Chacha"
str2="Chuchu"
str3=`${str1} and ${str2} are friends`

console.log(str3)

