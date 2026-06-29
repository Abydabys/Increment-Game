import {useState,useEffect} from 'react'

export default function DashboardPage() {
    const [count, setCount] = useState(() => {
        const savedValue = localStorage.getItem('incrementValue');
        return savedValue !== null ? JSON.parse(savedValue) : 0;
    });
    const [perSec, setPerSec] = useState(() => {
        const savedValue = localStorage.getItem('persec');
        return savedValue !== null ? JSON.parse(savedValue) : 0;
    });
    const [upgradeNum, setUpgradeNum] = useState(() => {
        const savedValue = localStorage.getItem('upgradeNum');
        return savedValue !== null ? JSON.parse(savedValue) : 0;
    });

    useEffect(() => {
        localStorage.setItem('incrementValue', JSON.stringify(count));
        localStorage.setItem('perSec', JSON.stringify(perSec));
        calculate()
        const intervalId = setInterval(() => {
            setCount(count+perSec);
        },1000)
        return () => clearInterval(intervalId);
    }, [count,perSec]);

    const increment = () => {
        setCount(count + 1)
    }
    const calculate=()=>{
        setPerSec(upgradeNum)
    }
    return(
        <div className="page-container dashboard-page">
            <h1 style={{fontSize:'3.0rem'}}>{count}</h1>
            <p className="subtitle">{perSec} per sec</p>
            <button className="btn-primary large" onClick={() => increment()}>Increment</button>
        </div>
    )
}
