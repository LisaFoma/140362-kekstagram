// JavaScript Document
function getMessage (a, b) {
	var mesage;
	var sum=0, square=0;
	var umnogAB;
	var i=0;
	var constanta=4;

if (typeof a === 'boolean') { //Если true (a типа boolean)
		if (a === true) {
	 mesage ='Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
   		  return mesage;
		} else{
	 		  mesage = 'Переданное GIF-изображение не анимировано';
  		  return mesage;
		}
  }
  //Если false (a не типа boolean)
  
  if (typeof a === 'number') {//Если a типа number
	   mesage ='Переданное SVG-изображение содержит ' + a + ' объектов и ' + b * constanta + ' аттрибутов';
	   return mesage;
  }
   

   if (Array.isArray(a) && Array.isArray(b)) {//Если оба аргумента массивы
   if (a.length!==b.length){
	   mesage = 'Массивы не равные!';
	    return mesage;
} else {
		   for (i = 0; i < a.length; i++) {
			 umnogAB = a[i] * b[i];
	square + =umnogAB;
			 }
		   mesage = 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
	    	return mesage;
		}
   }
   
   if (Array.isArray(a)) {//Если a типа  массив
  for(i=0; i<a.length; i++) {
	  sum +=a[i];
	  }
   		mesage = 'Количество красных точек во всех строчках изображения: '+sum;
	    return mesage;
	}
   
}
