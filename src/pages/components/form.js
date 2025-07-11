import React, { useState, useEffect, use} from 'react';
import form from '@/styles/modules/form.module.scss';

export function SennaCalculator() {
    const [stacks, setStacks] = useState('');
    const [itemcrit, setItemcrit] = useState('');
    const [result, setResult] = useState({
        ad: 0,
        ar: 0,
        csc: 0,
        ls: 0,
    });

    const handleSumbit = (e) => {
        e.preventDefault();
        if (!stacks || !itemcrit) {
            alert("Please enter both stacks and crit chance!")
        }
        const numericStacks = Number(stacks);
        const numericCrit = Number(itemcrit);
        const passiveCrit = Math.floor(numericStacks / 20) * 8;
        const totalCrit = passiveCrit + numericCrit;
        const overCrit = Math.max(0, totalCrit - 100);

    setResult({
        ad: numericStacks * .75,
        ar: Math.floor(numericStacks / 20) * 20,
        csc: Math.min(totalCrit, 100),
        ls:  overCrit * .35,

    });
};

return (
    <section className={form.formContainer}>
        <div className={form.title}> CALCULATE MIST STATS NOW </div>
        <form onSubmit={handleSumbit}>
            <section className={form.inputContainer}>
            <input className={form.inputBoxes} 
            placeholder='MIST STACKS' 
            value={stacks}
            onChange={(e) => setStacks(e.target.value)}
            required
            inputMode='numeric'
            pattern='[0-9]*'
            type='number'/>
            <input className={form.inputBoxes} 
            placeholder='CRITICAL STRIKE CHANCE FROM ITEMS'
            value={itemcrit}
            onChange={(e) => setItemcrit(e.target.value)}
            required
            inputMode='numeric'
            pattern='[0-9]*'
            type='number'
            />
            </section>
            <button type="submit" className={form.buttonBox}>Calculate</button>
        </form>
        <section className={form.resultContainer}>
            <div className={form.itemContainer}>
                <p className={form.label}>Attack Damage:</p>
                <p className={form.result}>+{result.ad} AD</p>
            </div>
            <div className={form.itemContainer}>
                <p className={form.label}>Attack Range:</p>
                <p className={form.result}>+{result.ar} units</p>
            </div>
            <div className={form.itemContainer}>
                <p className={form.label}>Critical Strike Chance:</p>
                <p className={form.result}>+{result.csc}%</p>
            </div>
            <div className={form.spacer}/>
            <div className={form.itemContainer}>
                <p className={form.label}>Life Steal:</p>
                <p className={form.result}>+{result.ls.toFixed(2)}%</p>
            </div>
        </section>
    </section>
)
}