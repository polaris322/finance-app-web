import { sendRequest } from "../utils";
import {
    STATISTICS,
    DAILY_HISTORY,
    GROSS,
    GROSS_OUTCOME,
    OUTCOME_BY_CATEGORY,
    OUTCOME_PENDING,
    OUTCOME_MAJOR, BALANCE, BALANCE_BY_MONTH, OUTCOME_PAID
} from "../config/API";

export const fetchDailyStatistics = (days) => {
    return sendRequest(`${STATISTICS}${DAILY_HISTORY}?days=${days}`, 'GET');
}

export const fetchGrossStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${GROSS}?year=${year}&month=${month}`, 'GET');
}

export const fetchGrossOutcomeStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${GROSS_OUTCOME}?year=${year}&month=${month}`, 'GET');
}

export const fetchOutcomeByCategoryStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${OUTCOME_BY_CATEGORY}?year=${year}&month=${month}`, 'GET');
}

export const fetchOutcomePendingStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${OUTCOME_PENDING}?year=${year}&month=${month}`, 'GET');
}

export const fetchOutcomePaidStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${OUTCOME_PAID}?year=${year}&month=${month}`, 'GET');
}

export const fetchMajorOutcomeStatistics = (year, month) => {
    return sendRequest(`${STATISTICS}${OUTCOME_MAJOR}?year=${year}&month=${month}`, 'GET');
}

export const fetchTotalBalance = () => {
    return sendRequest(`${STATISTICS}${BALANCE}`, 'GET');
}

export const getBalanceByMonth = () => {
    return sendRequest(`${STATISTICS}${BALANCE_BY_MONTH}?year=${new Date().getFullYear()}&month=${new Date().getMonth() + 1}`, 'GET');
}