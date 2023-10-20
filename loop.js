"use strict";

/*
Auther: Sanchen Zhang
Date: 
Description: 
*/
// DO NOT EDIT: The main function to house our program code 

let sum = "";
function main()
{
    for (let i = 0;  i <101; i++) {
         sum  = sum + " " + i;
    }
    console.log(sum)
}


if (require.main === module)
{
    main();
}
