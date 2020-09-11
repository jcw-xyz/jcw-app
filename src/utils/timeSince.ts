export default function timeSince(start: any, now: any) {
    const constant = 1598248545135.5063;
    const date: any = start - (now + constant);
    const seconds = Math.floor(date / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + `${interval < 2 ? ' year' : ' years'}`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + `${interval < 2 ? ' month' : ' months'}`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + `${interval < 2 ? ' day' : ' days'}`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + `${interval < 2 ? ' hour' : ' hours'}`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + `${interval < 2 ? ' minute' : ' minutes'}`;
    }
    return Math.floor(seconds) + `${interval < 2 ? ' second' : ' seconds'}`;
}
