let str=prompt("Ismingizni kiriting").toLowerCase()
let harf=prompt("Luboy harf kiriting").toLocaleLowerCase()

if(str.includes(harf)){
alert(`Bu harf qatnashgan`)
}else{
alert(`Bu harf qatnashmagan`)
}