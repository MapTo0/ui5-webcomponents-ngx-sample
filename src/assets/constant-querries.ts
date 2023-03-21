import { ThemeValue } from "src/app/interfaces/theme-value";

export const ABB_MONTHS: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const MONTHS: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const DAYS: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const ALPHABETS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const THEMES: ThemeValue[] = [
    {
        displayName: "Morning Horizon",
        usageName: "sap_horizon"
    },
    {
        displayName: "Evening Horizon",
        usageName: "sap_horizon_dark"
    },
    {
        displayName: "High Contrast Black",
        usageName: "sap_horizon_hcb"
    },
    {
        displayName: "High Contrast White",
        usageName: "sap_horizon_hcw"
    },
    {
        displayName: "Quartz Light",
        usageName: "sap_fiori_3"
    },
    {
        displayName: "Quartz Dark",
        usageName: "sap_fiori_3_dark"
    },
    {
        displayName: "Quartz High Contrast Black",
        usageName: "sap_fiori_3_hcb"
    },
    {
        displayName: "Quartz High Contrast White",
        usageName: "sap_fiori_3_hcw"
    },
    {
        displayName: "Belize",
        usageName: "sap_belize"
    },
    {
        displayName: "High Contrast Black",
        usageName: "sap_belize_hcb"
    },
    {
        displayName: "High Contrast White",
        usageName: "sap_belize_hcw"
    }
];

export function addZeroToTime(i: int) {
    if (i < 10) { return "0" + i }
    return i;
};

export function getDateAsddMMyyyy(date: Date) {
    return `${addZeroToTime(date.getDate())}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function getDateAsAbbStringMMddtttt(date: Date) {
    return `${MONTHS[date.getUTCMonth()]} ${date.getDate()} / ${date.getHours()}:${addZeroToTime(date.getMinutes())}`
};

export function getDatesArray(startDate: Date, stopDate: Date) {
    let dateArray = new Array();
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = addDays(currentDate, 1);
    }
    return dateArray;
};

function addDays(currentDate: Date, numDays: int) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + numDays);
    return date;
};