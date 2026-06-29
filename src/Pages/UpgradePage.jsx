import "./UpgradePage.css"
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
        if (incrementValue>=100) {
            setUpgradeNum(upgradeNum+1);
            setIncrementValue(incrementValue-100);
        }
    }
    return (
        <div className="page-container dashboard-page">
            <h1>Upgrades</h1>
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Кликер</h3>
                    <p className="stat-number">{upgradeNum}</p>
                    <button className="btn-primary large" onClick={() => Upgrade()}>Buy 100</button>
                    <Link to={"/upgrade2"} className="btn-primary large">Next</Link>
                </div>
            </div>
        </div>
    )
}