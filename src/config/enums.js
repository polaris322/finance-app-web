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
    },
    {
        name: 'Fundo de emergencia',
        icon: '',
        value: "3"
    },
    {
        name: 'Ahorro',
        icon: '',
        value: "4"
    }
];

export const PAYMENT_METHOD_ENUM = {
    SCOTIABANK: "0",
    BANRESERVAS: "1",
    POPULAR: "2",
    EMERGENCY: "3",
    AHORRO: "4"
};

export const PAYMENT_STATUS = [
    {
        name: "Pendiente",
        value: "0"
    },
    {
        name: "Pagador",
        value: "1"
    }
];

export const PAYMENT_STATUS_ENUM = {
    PENDING: "0",
    FINISHED: "1"
};

export const PAYMENT_TYPE = [
    {
        name: "Fijo",
        value: "0"
    },
    {
        name: "Dynamico",
        value: "1"
    }
];

export const PAYMENT_TYPE_ENUM = {
    FIXED: '0',
    DYNAMIC: "1"
};

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
];

export const PAYMENT_FREQUENCY_ENUM = {
    SEMI_YEARLY: "0",
    QUART_YEARLY: "1",
    MONTHLY: '2',
    ANNUALLY: "3",
    ONE_TIEM: '4'
};

export const OUTCOME_CATEGORY = [
    {
        name: 'Prestamos',
        value: "0"
    },
    {
        name: 'Servicios',
        value: "1"
    },
    {
        name: 'Otros',
        value: "2"
    }
];

export const OUTCOME_CATEGORY_ENUM = {
    LOAN: "0",
    SERVICE: "1",
    OTHER: "2"
};