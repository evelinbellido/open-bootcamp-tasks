// Una cadena de texto con tu Nombre
let nombre = 'evelin';
// Otra cadena de texto con tu Apellido
let lastname = 'bellido';
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + ' ' + lastname;
console.log(estudiante);
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let counting = estudiante.length;
console.log(counting);
// Una variable que contenga la primera letra del Nombre
let  firstLetter = estudiante[0];
console.log(firstLetter);
// Otra variable que contenga la última letra del Apellido
let lastLetter = estudiante[13];
console.log(lastLetter);
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let spaces = estudiante.trim();
console.log(spaces);
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let names = estudiante
console.log(names.includes('Nombre'));