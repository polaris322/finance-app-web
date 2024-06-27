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

export const PAYMENT_TYPE = [
    {
        name: "Fijo",
        value: "0"
    },
    {
        name: "Dynamico",
        value: "1"
    }
]

export const PAYMENT_FREQUENCY = [
    {
        name: "Semanal",
        value: "0"
    },
    {
        name: "Quincenal",
        value: "1"
    },
    {
        name: "Mensual",
        value: "2"
    },
    {
        name: "Anual",
        value: "3"
    },
    {
        name: "Unico",
        value: "4"
    }
]