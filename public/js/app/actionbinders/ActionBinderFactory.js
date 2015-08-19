var ActionBinderFactory =
{
    create : create
};

function create(id)
{
    switch (id)
    {
        case GPIO.INFRA_RED:
            return new BaseActionBinder();
            break;
        case GPIO.TEMPERATURE_SENSOR:
            return new BaseActionBinder();
            break;
        default:
            return new BaseActionBinder();
            break;
    }
}