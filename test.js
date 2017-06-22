const ColorLine = require('./index.js');
let colorLine = new ColorLine();

//---------------Basic USE------------------
colorLine.setText('redWithBlue')
.setForeColor('red')
.setBackColor('blue')
.addStyle('underline')
console.log(colorLine.getColorText()+'\r\n');
//---------------addStyle------------------
colorLine.addStyle('inverse')
.addStyle('bold');
console.log(colorLine.getColorText()+'\r\n');
//---------------removeStyle------------------
colorLine.removeStyle('underline');
console.log(colorLine.getColorText()+'\r\n');
//---------------clearStyle------------------
colorLine.clearStyle();
console.log(colorLine.getColorText()+'\r\n');
//---------------open bright------------------
colorLine.setText('redWithYellowANdBright')
.setForeColor('red',true) //open bright
.setBackColor('yellow',true); //open bright
console.log(colorLine.getColorText()+'\r\n');
//---------------removeForeColor------------------
colorLine.removeForeColor();
console.log(colorLine.getColorText()+'\r\n');
//---------------removeBackColor------------------
colorLine.removeBackColor();
console.log(colorLine.getColorText()+'\r\n');
//---------------clearColor------------------
colorLine.setText('redWithYellow')
.setForeColor('red') 
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
colorLine.clearColor();
console.log(colorLine.getColorText()+'\r\n');
//---------------empty Text------------------
colorLine.setText('      ')
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
//---------------INIT------------------
colorLine.setText('blue')
.setForeColor('blue');
console.log(colorLine.getColorText()+'\r\n');
colorLine.init();//all clear
console.log(colorLine.getColorText()+'\r\n');
