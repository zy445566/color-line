const escKey= '\u001b';//27 on Hex
const start = escKey +'[';
const separator = ';';
const end = 'm';
const reset = 0;
const baseStyle = {
    bold:{on:1,off:21},
    dim:{on:2,off:22},
    italic:{on:3,off:23},
    underline:{on:4,off:24},
    inverse:{on:7,off:27},
    hidden:{on:8,off:28},
    strikethrough:{on:9,off:29},
}

const baseForeColor = {
    black:{normal:30,bright:90},
    red:{normal:31,bright:91},
    green:{normal:32,bright:92},
    yellow:{normal:33,bright:93},
    blue:{normal:34,bright:94},
    magenta:{normal:35,bright:95},
    cyan:{normal:36,bright:96},
    white:{normal:37,bright:97},
}

const baseBackColor = {
    black:{normal:40,bright:100},
    red:{normal:41,bright:101},
    green:{normal:42,bright:102},
    yellow:{normal:43,bright:103},
    blue:{normal:44,bright:104},
    magenta:{normal:45,bright:105},
    cyan:{normal:46,bright:106},
    white:{normal:47,bright:107},
}


var color_line = function(){
    this.init();
};

color_line.prototype = {
    init:function(){
        this.text = '';
        this.clothes = [];
        this.styles = {};
        this.foreColor = 0;
        this.backColor = 0;
        return this;
    }
};

color_line.prototype.setText = function(text)
{
    this.text = text;
    return this;
}

color_line.prototype.getColorText = function()
{
    this.clothes = [];
    for(var index in this.styles)
    {
        this.clothes.push(this.styles[index]['on']);
    }
    if (this.foreColor>0)
    {
        this.clothes.push(this.foreColor);
    }
    if (this.backColor>0)
    {
        this.clothes.push(this.backColor);
    }
    if (this.clothes.length>0)
    {
        var color = this.clothes.join(separator);
        return start+color+end+this.text+start+reset+end;
    } else {
        return this.text;
    }
    
}

function setColor(color,baseColor,self,setColor,isBright=false)
{
    if(baseColor.hasOwnProperty(color))
    {
        if (isBright)
        {
            self[setColor] = baseColor[color]['bright'];
        } else {
            self[setColor] = baseColor[color]['normal'];
        }
    } else {
        throw new Error('this color not exist');
    }
}

color_line.prototype.setForeColor = function(foreColor,isBright=false)
{
    setColor(foreColor,baseForeColor,this,'foreColor',isBright);
    return this;
}

color_line.prototype.removeForeColor = function()
{
    this.foreColor = 0;
    return this;
}

color_line.prototype.setBackColor = function(backColor,isBright=false)
{
    setColor(backColor,baseBackColor,this,'backColor',isBright);
    return this;
}

color_line.prototype.removeBackColor = function()
{
    this.backColor = 0;
    return this;
}

color_line.prototype.clearColor = function()
{
    this.foreColor = 0;
    this.backColor = 0;
    return this;
}


color_line.prototype.addStyle = function(style)
{
    if(baseStyle.hasOwnProperty(style))
    {
        this.styles[style] = baseStyle[style];
    } else {
        throw new Error('this style not exist');
    }
    return this;
}

color_line.prototype.removeStyle = function(style)
{
    if(this.styles.hasOwnProperty(style))
    {
        delete this.styles[style];
    } 
    return this;
}

color_line.prototype.clearStyle = function(style)
{
    this.styles = [];
    return this;
}

module.exports = color_line;

