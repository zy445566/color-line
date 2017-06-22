# color-line
make command more beautiful

#use color-line
```sh
npm install color-line
```

#Basic Use
```node
const ColorLine = require('color-line');
let colorLine = new ColorLine();
colorLine.setText('redWithBlue')
.setForeColor('red')
.setBackColor('blue')
.addStyle('underline')
console.log(colorLine.getColorText()+'\r\n');
```
will print :
![basic](https://raw.githubusercontent.com/zy445566/color-line/master/image/basic.png)

#more Example
```node
const ColorLine = require('color-line');
let colorLine = new ColorLine();
//---------------Basic USE------------------
colorLine.setText('redWithBlue')
.setForeColor('red')
.setBackColor('blue')
.addStyle('underline')
console.log(colorLine.getColorText()+'\r\n');
```
will print :![basic](https://raw.githubusercontent.com/zy445566/color-line/master/image/basic.png)
```node
//---------------addStyle------------------
colorLine.addStyle('inverse')
.addStyle('bold');
console.log(colorLine.getColorText()+'\r\n');
```
will print :![addStyle](https://raw.githubusercontent.com/zy445566/color-line/master/image/addStyle.png)
```node
//---------------removeStyle------------------
colorLine.removeStyle('underline');
console.log(colorLine.getColorText()+'\r\n');
```
will print :![removeStyle](https://raw.githubusercontent.com/zy445566/color-line/master/image/removeStyle.png)
```node
//---------------clearStyle------------------
colorLine.clearStyle();
console.log(colorLine.getColorText()+'\r\n');
```
will print :![clearStyle](https://raw.githubusercontent.com/zy445566/color-line/master/image/clearStyle.png)
```node
//---------------open bright------------------
//It looks more bright
colorLine.setText('redWithYellowANdBright')
.setForeColor('red',true) //open bright
.setBackColor('yellow',true); //open bright
console.log(colorLine.getColorText()+'\r\n');
```
will print :![bright](https://raw.githubusercontent.com/zy445566/color-line/master/image/bright.png)
```node
//---------------removeForeColor------------------
colorLine.removeForeColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :![removeForeColor](https://raw.githubusercontent.com/zy445566/color-line/master/image/removeForeColor.png)
```node
//---------------removeBackColor------------------
colorLine.removeBackColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :![removeBackColor](https://raw.githubusercontent.com/zy445566/color-line/master/image/removeBackColor.png)
```node
//---------------clearColor------------------
colorLine.setText('redWithYellow')
.setForeColor('red') 
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
colorLine.clearColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :
![clearColor](https://raw.githubusercontent.com/zy445566/color-line/master/image/clearColor.png)
```node
//---------------empty Text------------------
colorLine.setText('      ')
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
```
will print :
![emptyText](https://raw.githubusercontent.com/zy445566/color-line/master/image/emptyText.png)
```node
//---------------INIT------------------
colorLine.setText('blue')
.setForeColor('blue');
console.log(colorLine.getColorText()+'\r\n');
colorLine.init();//all clear
console.log(colorLine.getColorText()+'\r\n');
```
Nothing output,because clear all

# Styles
* bold
* dim
* italic
* underline
* inverse
* hidden
* strikethrough

# Color
* black
* red
* green
* yellow
* blue
* magenta
* cyan
* white
