var ViewHolderFactory =
{
    create : create
};

function create(id)
{
    switch (id)
    {
        case GPIO.INFRA_RED:
            return new BaseViewHolder();
            break;
        case GPIO.TEMPERATURE_SENSOR:
            return new BaseViewHolder();
            break;
        default:
            return new BaseViewHolder();
            break;
    }
}