function File()
{
    this.path = './../..';
}

File.prototype.loadFile = function(name)
{
    return "";
};

File.prototype.loadJSON = function(name)
{
    return require(this.path + '/data/' + name);
};

//Export
module.exports = File;