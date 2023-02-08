// let name1 ='Ilhom'
// let name2="Ilhom"
// let result=`The names are ${name1} and ${name2}`



// METHODS STRING

// charAt ()

// let name1='Ilhom'
// let result=name1.charAt(0)
// console.log(result)       

// I




// concat ()

// let firstname='Ilhom'
// let lastname='Saidov'
// let result=firstname.concat(' ', lastname)
// console.log(result)

// Ilhom Saidov




// replace ()

// let text ='Ecma Script'
// let result=text.replace('Ecma','Java')
// console.log(result)

// Java Script




// split ()

// let text='Samsung'
// let result=text.split();
// console.log(result)

// ['Samsung']


// let text2='Samsung is a brand'
// let result2=text2.split(' ')
// console.log(result2)

// ['Samsung', 'is', 'a', 'brand']





// substr (start, length)

// let text='Ilhom Saidov'
// let result=text.substr(0,4)
// console.log(result)

// Ilho




// substring (start, end)

// let text='Ilhom Saidov'
// let result=text.substring(3)
// console.log(result)

// om Saidov




// slice(start, end)

// let text='Ilhom Saidov'
// let result=text.slice(0,5)
// console.log(result)

// Ilhom




// toLowerCase()     toUpperCase()

// let text='Ilhom Saidov'
// let result=text.toLowerCase()
// console.log(result)

// ilhom saidov

// let text2='Ilhom Saidov'
// let result2=text.toUpperCase()
// console.log(result2)

// ILHOM SAIDOV




// trim ()

// let text='           Ilhom Saidov             '
// let result=text.trim()
// console.log(result)

// Ilhom Saidov





// includes ()

// let text='I am a frontend developer'
// let result=text.includes('frontend')
// console.log(result)

// true




// search ()

// let text='Mr Red have a red apple'
// let result=text.search('Red')
// console.log(result)








// TASKS





// 1

// let text=prompt()
// let text2=('something')
// let result=text2.concat(' ',text)
// alert(result)





// 2

// let text=prompt()
// let text2=('Edabit')
// let result=text.concat('',text2)
// console.log(result)





// 3

// let text=prompt()
// if (text=='Mubashir')
// {
//     alert('Hello my Love')
// }
// else
// {
//     alert (`Hello ${text}`)
// }



// 4

// let text=prompt()
// let text2=prompt()
// if (text.length==text2.length)
// {
//     alert (true)
// }
// else
// {
//     alert(false)
// }





// 5

// let text=prompt()
// if (text.length=='')
// {
//     alert (true)
// }
// else
// {
//     alert (false)
// }




// 6

// let firstName=prompt()
// let lastName=prompt()
// let result=lastName.concat(' ',firstName)
// alert(result)



// 7

// let name1=prompt()
// let name2=prompt()
// let name3=prompt()
// let result=`Thier names is ${name1}, ${name2}, and ${name3}`
// alert(result)




// 8

// let fruit=prompt()
// let result=fruit.slice(1)
// alert(result)





// 9

// let text=prompt()
// let result=text.length
// alert(result)





// 10

// let text=prompt()
// if (text.length%2==0)
// {
//     alert(true)
// }
// else
// {
//     alert(false)
// }





// 11

// let text=prompt()
// let word='';
// for (let i=0;i<text.length;i++)
// {
//     if (text[i]==text[i].toLowerCase())
//     {
//         word=word+text[i]
//     }
// }
// alert(word)






// 12

// let text=prompt()
// let text2=text.split(" ").indexOf("Nemo")+1
// text?alert(`I found nemo at ${text2}`):alert("I cant found")





// 13

// let text=prompt()
// let newtext='';
// for (let i=0;i<text.length;i++)
// {
//     newtext+=text[i]+text[i]
// }
// alert(newtext)





// 14

// let text=prompt()
// let res2 = text.match(/Potato/gi).length
// alert(res2)







// 15

// let text=prompt()
// let text2=prompt()
// let cnt=0;
// for (let i=0;i<text2.length;i++)
// {
//    text2[i]==text ? cnt++ : cnt;
// }
// alert(cnt)






// 16

// let text=prompt();
// let cnt=0;
// for (let i=0;i<text.length;i++)
// {
//     text[i]=='a'||text[i]=='e'||text[i]=='i'||text[i]=='o'||text[i]=='u'?cnt++:cnt;
// }
// alert(cnt)





// 17

// let text=prompt()
// if (text.includes('bomb'))
// {
//     alert ('Duck!!!')
// }
// else
// {
//     alert('There is no bomb, relax')
// }



// 18

// let text=prompt()
// let result=text.replace(/[a,o,i,u,e]/gi,'')
// alert(result)





// 19

// let text=prompt()
// for (let i=0;i<text.length;i++)
// {
//     if (text[i].charAt()=='a'||text[i].charAt()=='e'||text[i].charAt()=='o'||text[i].charAt()=='i'||text[i].charAt()=='u')
//     {
//         alert (i)
//         break;
//     }
// }





// 20

// let text=prompt()
// let text2=prompt()
// if (text2==1)
// {
//     alert(`Hello ${text}`)
// }
// else
// {
//     alert(`Bye ${text}`)
// }













// 22

// let text=prompt()
// let result=text.split('')
// let result2=result.reverse()
// let result3=result2.join('').concat(text)
// alert(result3)




// 23

// let text=prompt()
// let result=text.split('')
// let result2=result.reverse(text)
// alert(result2)




// 24

// let text = prompt();
// let newText = "";
// text = text.split(" ")
// for(let i=0; i < text.length;i++){
//     newText += text[i][0].toUpperCase() + text[i].slice(1) + " ";
// }
// alert(newText)





// 25

// let text=prompt()
// text=parseFloat(text)
// alert(text)




// 26

// let text=prompt()
// result=text.replaceAll("a", "4").replaceAll("i", "1").replaceAll("o", "0").replaceAll("s", "5").replaceAll("e", "3")
// alert(result)

