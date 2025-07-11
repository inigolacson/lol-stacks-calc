import React, { useState, useEffect, use} from 'react';

export function SennaCalculator() {
    const [stacks, setStacks] = useState(0);
    const [itemcrit, setItemcrit] = useState(0);
    const [result, setResult] = useState({
        ad: 0,
        ar: 0,
        csc: 0,
        ls: 0,
    });

useEffect(() => {
        const passiveCrit = Math.floor(stacks / 20) * 8;
        const totalCrit = passiveCrit + itemcrit;
        const overCrit = Math.max(0, totalCrit - 100);

    setResult({
        ad: stacks * .75,
        ar: Math.floor(stacks / 20) * 20,
        csc: Math.min(totalCrit, 100),
        ls:  overCrit * .35,

    })
}, [stacks, itemcrit]);

return (
    <div>

    </div>
)
}