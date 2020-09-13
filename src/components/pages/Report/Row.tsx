import React from 'react';

export default function Row({
    coin_name,
    coin_id,
    reward_sum,
    fees_sum,
    mined_value,
    exchanged_value,
    owed_value,
    owed,
    mined_coin_earnings_value,
    mined_coin_earnings,
    projected_orphan_rate,
    actual_orphan_rate,
    confirmed,
    orphaned,
    lost,
}: {
    coin_name: string;
    coin_id: number;
    reward_sum: number;
    fees_sum: number;
    mined_value: number;
    exchanged_value: number;
    owed_value: number;
    owed: number;
    mined_coin_earnings_value: number;
    mined_coin_earnings: number;
    projected_orphan_rate: number;
    actual_orphan_rate: number;
    confirmed: number;
    orphaned: number;
    lost: number;
}) {
    const percent: number =
        exchanged_value && mined_value ? ((exchanged_value - mined_value) / mined_value) * 100 : 0;

    return (
        <tr key={coin_id} className=' text-app_ivory'>
            <th className='pt-4'>{coin_name}</th>
            <th className='px-2 pt-4'>{reward_sum.toFixed(3)}</th>
            <th
                className={`pt-4  ${
                    percent === 0
                        ? 'text-app_ivory'
                        : percent > 0
                        ? 'text-green-700'
                        : 'text-red-700'
                }`}
            >
                {percent.toFixed(2)}%
            </th>
        </tr>
    );
}
