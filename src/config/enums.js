import ScotiabankIcon from '../assets/images/Scotiabank.png';
import BanreservasIcon from '../assets/images/Banreservas.png';

export const PAYMENT_METHOD = [
    {
        name: 'Scotiabank',
        icon: ScotiabankIcon,
        value: "0"
    },
    {
        name: 'Banreservas',
        icon: BanreservasIcon,
        value: "1"
    },
    {
        name: 'Popular',
        icon: '',
        value: "2"
    }
]

export const PAYMENT_STATUS = [
    {
        name: "Pendiente",
        value: "0"
    },
    {
        name: "Pagador",
        value: "1"
    }
]