import moment from 'moment';

type Month = {
    startOfMonth: string;
    endOfMonth: string;
};

//format of dates
export const DateFormats = {
    ['YYYY-MM-DD']: 'YYYY-MM-DD',
};

export const getCurrentMonth = (): Month => {
    const now = new Date();
    const month = moment(now);
    const startOfMonth = month.startOf('M').format(DateFormats['YYYY-MM-DD']);
    const endOfMonth = month.endOf('M').format(DateFormats['YYYY-MM-DD']);

    return { startOfMonth, endOfMonth };
};
