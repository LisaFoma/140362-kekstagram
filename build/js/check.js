// JavaScript Document

function getMessage(a, b){
  	var mesage;
	var sum, square;
	var umnogAB;
	var i=0;
	var constanta=4;


 if (typeof a === 'boolean'){ //Если true (a типа boolean)
		if (a === true){
			  mesage='Переданное GIF-изображение анимировано и содержит [' +b+'] кадров';
      		  return mesage;
		} else{
	   		  mesage = 'Переданное GIF-изображение не анимировано';
      		  return mesage;
		}
  }
  //Если false (a не типа boolean)
  
  if (typeof a === 'number'){//Если a типа number
	   mesage ='Переданное SVG-изображение содержит [' +a+'] объектов и ['b*constanta'] атрибутов';
	   return mesage;
  }
   
  if ((typeof a === 'object')&&(Array.isArray(a))){//Если a типа  массив
  for(i=0; i<a.length;i++){
	  sum+=a[i];
	  }
   		mesage = 'Количество красных точек во всех строчках изображения: ['+sum+']';
	    return mesage;
	}
   
   if (((typeof a === 'object')&&(Array.isArray(a)))&&((typeof b === 'object')&&(Array.isArray(b)))){//Если оба аргумента массивы
   for(i=0; (i<a.length) && (i<b.length);i++){
	 umnogAB = a[i]*b[i];
	 square+=umnogAB;
	 }
   mesage = 'Общая площадь артефактов сжатия: ['+square+'] пикселей';
	    return mesage;
   }
}
/* В задании сказано:
Если оба аргумента массивы, то вернуть строку:
    "Общая площадь артефактов сжатия: [square] пикселей"
    где [square] — это сумма произведений соответствующих элементов массивов a и b,
    cумма произведения первого элемента a с первым элементом b, второго со вторым и так далее.
	
Считаю что задание поставлено не точно поскольку массивы могут быть разными по числу элементов,а что делать с элементами массива не имеющими парами - не сказано.
Я бы добавила элементы более длнного массива которые остались без пары к сумме перемноженных парочек a[i]*b[i],как - описала ниже.
	


//например а=4элемента и b=2 элемента
if (a.length > b.length){
	for(var i=0; i<a.length;i++){
		for(; i<b.length;i++){
		 umnogAB = a[i]*b[i];
		 square+=umnogAB;
		 } - выйдем когда i станет равно 2(т.е.третий элемент в массиве с индексом 2)
		 square+= a[i]; - добавляем i-ые оставшиеся элементы а массива в сумму 
	 } 
}
//и аналогичные условия для  обратного случая
if (a.length < b.length){}	 
 */