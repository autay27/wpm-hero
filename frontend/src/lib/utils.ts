import type {Millis} from "./ChallengeUtils";

export function formatCustomDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function millisToTime(ms: Millis): string {
    return ms.toString()
}