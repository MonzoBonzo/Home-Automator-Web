function Main()
{
    this.panels = {};
}

Main.prototype.init = function(gpio)
{
    var length = gpio.length;

    for(var i=0; i < length; i++)
    {
        this.panels[gpio[i].id] = new Panel();
        this.panels[gpio[i].id].init(gpio[i]);
    }
}