import "./UpgradePage.css"
import {useEffect, useState} from "react";

export default function UpgradePage() {
    const [upgradeNum, setUpgradeNum] = useState(() => {
        const savedValue = localStorage.getItem('upgradeNum');
        return savedValue !== null ? JSON.parse(savedValue) : 0;
    });
    const [incrementValue, setIncrementValue] = useState(()=>{
        const savedValue = localStorage.getItem('incrementValue');
        return savedValue !== null ? JSON.parse(savedValue) : 0;
    });
    useEffect(() => {
        localStorage.setItem('upgradeNum', JSON.stringify(upgradeNum));
        localStorage.setItem('incrementValue', JSON.stringify(incrementValue));
    }, [upgradeNum,incrementValue]);


    const Upgrade = () => {
        if (incrementValue>=1500) {
            setUpgradeNum(upgradeNum+15);
            setIncrementValue(incrementValue-1500);
        }
    }
    return (
        <div className="page-container dashboard-page">
            <h1>Upgrades</h1>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>СУПЕР ПУПЕР КЛИКЕР</h3>
                    <p className="stat-number">{upgradeNum}</p>
                    <button className="btn-primary large" onClick={() => Upgrade()}>Buy 1500</button>
                </div>
            </div>
        </div>
    )
}