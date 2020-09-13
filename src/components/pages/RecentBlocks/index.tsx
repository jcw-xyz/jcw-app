import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '../../core';
import { RootState } from '../../../types';
import BlockCard from './BlockCard';

function RecentBlocks() {
    const blocks: any = useSelector<RootState>((state) => state.ws.blocks);
    return (
        <Content>
            {blocks.length > 1 ? (
                <ul>
                    {blocks.map(
                        ({
                            worker_name,
                            coin_name,
                            is_accepted,
                            block_height,
                            block_hash,
                            coinbase_value,
                            transaction_fees,
                            snapshot_value_usd,
                            auxiliary,
                            algorithm,
                            is_stale,
                            now,
                        }: {
                            worker_name: string;
                            coin_name: string;
                            is_accepted: boolean;
                            block_height: number;
                            block_hash: string;
                            coinbase_value: string;
                            transaction_fees: string;
                            snapshot_value_usd: string;
                            auxiliary: boolean;
                            algorithm: string;
                            is_stale: boolean;
                            now: Date;
                        }) => (
                            <BlockCard
                                worker_name={worker_name || 'Null'}
                                coin_name={coin_name || 'Null'}
                                is_accepted={is_accepted || false}
                                block_height={block_height || 0}
                                coinbase_value={coinbase_value || '0'}
                                transaction_fees={transaction_fees || '0'}
                                snapshot_value_usd={snapshot_value_usd || '0'}
                                auxiliary={auxiliary || false}
                                algorithm={algorithm || 'Null'}
                                is_stale={is_stale || false}
                                now={now}
                            />
                        )
                    )}
                </ul>
            ) : (
                <h1 className='pt-2 text-center text-app_gray'>Waiting for new blocks to appear</h1>
            )}
        </Content>
    );
}

export default memo(RecentBlocks);
