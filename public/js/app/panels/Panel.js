function Panel()
{
    this.data = null;
    this.actionBinder = null;
    this.viewholder = null;
}

Panel.prototype.init = function(data)
{
    //Input Data
    this.data = data;

    //Bind Action
    this.actionBinder = ActionBinderFactory.create(data.id);
    this.actionBinder.bindAction(data);

    //View Holder
    this.viewholder = ViewHolderFactory.create(data.id);
    this.viewholder.bindView(data);
};