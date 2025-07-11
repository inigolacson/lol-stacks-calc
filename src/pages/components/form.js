import React, { useState, useEffect, use} from 'react';
import form from '@/styles/modules/form.module.scss';

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
    <section className={form.formContainer}>
        <div className={form.title}>
            CALCULATE MIST STATS NOW
        </div>
        <section className={form.inputContainer}>
        <input className={form.inputBoxes} placeholder='MIST STACKS'></input>
        <input className={form.inputBoxes} placeholder='CRITICAL STRIKE CHANCE FROM ITEMS'></input>
        <button className={form.buttonBox}>Calculate</button>
        </section>
        <section className={form.resultContainer}>
            <div className={form.itemContainer}>
                <p className={form.label}>Attack Damage:</p>
                <p className={form.result}>+{result.ad}.00%</p>
            </div>
            <div className={form.itemContainer}>
                <p className={form.label}>Attack Range:</p>
                <p className={form.result}>+{result.ad}.00%</p>
            </div>
            <div className={form.itemContainer}>
                <p className={form.label}>Critical Strike Chance:</p>
                <p className={form.result}>+{result.ad}%</p>
            </div>
            <div className={form.spacer}/>
            <div className={form.itemContainer}>
                <p className={form.label}>Life Steal:</p>
                <p className={form.result}>+{result.ad}.00%</p>
            </div>
        </section>
    </section>
)
}