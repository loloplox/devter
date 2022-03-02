import { useEffect, useState } from "react";

const DATE_UNITS = [
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["seconds", 1]
];

const getDateDiffs = timestamp => {
    const now = Date.now();
    
    const elapsed = (timestamp - now) / 1000;
    
    for (const [unit, secondsInUnit] of DATE_UNITS) {
        if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
            const value = Math.round(elapsed / secondsInUnit);
            return { value, unit };
        }
    }
    
};

export default function useTimeAgo(timestamp) {
    const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));
    
    useEffect(() => {
        const timeout = setInterval(() => {
            const newTimeago = getDateDiffs(timestamp);
            setTimeago(newTimeago);
        }, 5000);
        
        return () => clearTimeout(timeout);
    }, [timestamp]);
    
    const rtf = new Intl.RelativeTimeFormat(navigator.language, { style: "short" });
    const { value, unit } = timeago;
    
    return rtf.format(value, unit);
}
