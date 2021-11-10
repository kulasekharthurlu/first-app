 var  emplyee=`[
     {
         "id":1,
         "name":"kula",
         "email":"kula@gmail.com",
       "addres":{
             "village":"nv palli",
             "post":"Nooliveedu",
            "mandal":"Galiveedu",
             "district":"kadapa",
            "state":"ap"
         },
         "salary":200001

   
      }
 ]`
 

// const companes =`[
//     {
//     "name":"small company",
//     "numberOfEmplyee":100,
//     "ceo":null,
//     "rating":4.6

//     },
//      {
//     "name":"big company",
//     "numberOfEmplyee":10,
//     "ceo":"rames",
//     "rating":4.8

//     }
// ]`
console.log(JSON.parse(emplyee)[0].id);