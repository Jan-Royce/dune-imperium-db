'use client';

import { useEffect, useState } from 'react';
import { Card } from './card';

const itemsURL = '/query/items';

export function Items() {
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(itemsURL, { cache: 'no-store' });
                if(response) {
                    const data = await response.json();
                    setItems(data);
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchItems();
    }, []);
    
    return (
        <Card>
            {items ? (
                <>
                    {Object.keys(items).map((i) => (
                        <p key={i}>{items[i].name}</p>
                    ))}
                </>
            ) : (
                <>Loading...</>
            )}
        </Card>
    );
}
