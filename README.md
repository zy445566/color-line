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
will print :<span style="color:red;background:blue;"><u>redWithBlue</u></span>

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
will print :<span style="color:red;background:blue;"><u>redWithBlue</u></span>
```node
//---------------addStyle------------------
colorLine.addStyle('inverse')
.addStyle('bold');
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span style="color:blue;background:red;"><b><u>redWithBlue</u></b></span>
```node
//---------------removeStyle------------------
colorLine.removeStyle('underline');
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span style="color:blue;background:red;"><b>redWithBlue</b></span>
```node
//---------------clearStyle------------------
colorLine.clearStyle();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span style="color:red;background:blue;">redWithBlue</span>
```node
//---------------open bright------------------
//It looks more bright
colorLine.setText('redWithYellowANdBright')
.setForeColor('red',true) //open bright
.setBackColor('yellow',true); //open bright
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span style="color:red;background:blue;">redWithBlue</span>
```node
//---------------removeForeColor------------------
colorLine.removeForeColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span style="background:blue;">redWithBlue</span>
```node
//---------------removeBackColor------------------
colorLine.removeBackColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<span>redWithBlue</span>
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
<br/><span style="color:red;background:yellow;">redWithYellow</span>
<br/><span>redWithYellow</span>
```node
//---------------empty Text------------------
colorLine.setText('      ')
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
```
will print :
<span style="background:yellow;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
```node
//---------------INIT------------------
colorLine.setText('blue')
.setForeColor('blue');
console.log(colorLine.getColorText()+'\r\n');
colorLine.init();//all clear
console.log(colorLine.getColorText()+'\r\n');
```
Nothing output,because

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
