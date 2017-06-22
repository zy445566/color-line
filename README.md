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
will print :<table><tr><td bgcolor=blue><font color=red><u>redWithBlue</u></font></td></tr></table>

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
will print :<table><tr><td bgcolor=blue><font color=red><u>redWithBlue</u></font></td></tr></table>
```node
//---------------addStyle------------------
colorLine.addStyle('inverse')
.addStyle('bold');
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td bgcolor=red><font color=blue><b><u>redWithBlue</u></b></font></td></tr></table>
```node
//---------------removeStyle------------------
colorLine.removeStyle('underline');
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td bgcolor=red><font color=blue><b>redWithBlue</b></font></td></tr></table>
```node
//---------------clearStyle------------------
colorLine.clearStyle();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td><font>redWithBlue</font></td></tr></table>
```node
//---------------open bright------------------
//It looks more bright
colorLine.setText('redWithYellowANdBright')
.setForeColor('red',true) //open bright
.setBackColor('yellow',true); //open bright
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td bgcolor=yellow><font color=red>redWithBlue</font></td></tr></table>
```node
//---------------removeForeColor------------------
colorLine.removeForeColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td bgcolor=yellow><font>redWithBlue</font></td></tr></table>
```node
//---------------removeBackColor------------------
colorLine.removeBackColor();
console.log(colorLine.getColorText()+'\r\n');
```
will print :<table><tr><td><font>redWithBlue</font></td></tr></table>
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
<br/><table><tr><td bgcolor=yellow><font color=red>redWithYellow</font></td></tr></table>
<br/><table><tr><td><font>redWithYellow</font></td></tr></table>
```node
//---------------empty Text------------------
colorLine.setText('      ')
.setBackColor('yellow');
console.log(colorLine.getColorText()+'\r\n');
```
will print :
<table><tr><td bgcolor=yellow><font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></td></tr></table>
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
