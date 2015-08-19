function BaseViewHolder()
{
    this.data = null;
}

BaseViewHolder.prototype.bindView = function(data)
{
    this.data = data;
    var markup = '<div class="col-md-4"><div class="panel panel-default"><div class="panel-heading">Temperature Sensor<button style="float:right;" type="button" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-refresh"></span></button></div><div class="panel-body">Panel content</div></div></div>';
    $(".row").append(markup);
};