// (IFIE)  immdeditaily invoked function express

(function chai () {   //global scope k palloution se problem hoti h kai baar to jo bhi wha variable ya declartion h unko htane k liye
    //named ifie
    console.log(`DB CONNECTED`);  //jo function immediatly execute ho jaye
})();    //;ek ifie ko end krta

( (name) => {  
    console.log(`DB CONNECTED two ${name}`);  
})("rishi")