function InfraRedViewHolder()
{
    this.data = null;
}

InfraRedViewHolder.prototype.bindView = function(data)
{
    this.data = data;
    $(".row").append(this._getView());
};

InfraRedViewHolder.prototype._getView = function()
{
    var markup =
        "<div class=\"col-md-4\">" +
            "<div class=\"panel panel-default\">" +
                "<div class=\"panel-heading\">" + this.data.name +
                    "<button style=\"float:right;\" type=\"button\" class=\"btn btn-default btn-xs\">" +
                        "<span class=\"glyphicon glyphicon-cog\"></span>" +
                    "<button>"+
                "<div>" +
                "<div class=\"panel-body\">" +
                "</div>" +
            "</div>" +
        "</div>";

};