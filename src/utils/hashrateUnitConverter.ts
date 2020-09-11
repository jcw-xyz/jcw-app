const EH: number = 1000000000000000;
const PH: number = 1000000000000;
const TH: number = 1000000000;
const GH: number = 1000000;
const MH: number = 1000;

export default function hashrateUnitConverter(hashrate: number): string {
    if (hashrate >= EH) {
        return `${(hashrate / EH).toFixed(2)} EH/s`;
    } else if (hashrate >= PH) {
        return `${(hashrate / PH).toFixed(2)} PH/s`;
    } else if (hashrate >= TH) {
        return `${(hashrate / TH).toFixed(2)} TH/s`;
    } else if (hashrate >= GH) {
        return `${(hashrate / GH).toFixed(2)} GH/s`;
    } else if (hashrate >= MH) {
        return `${(hashrate / MH).toFixed(2)} MH/s`;
    } else {
        return `${hashrate.toFixed(2)} kH/s`;
    }
}
