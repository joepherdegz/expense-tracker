import React from "react";
import css from "./WelcomePage.module.css";
import BgImageWrapper from 'components/BgImageWrapper/BgImageWrapper';



export function WelcomePage() {
    return (
        <div className={css.mainContainer}>
            <div className={css.pageContainer}>
                <BgImageWrapper />
                <div className={css.textContainer}>
            <span>Expense log</span>
            <h1>
                Manage Your <span>Finances</span> Masterfully!
            </h1>
                    <p>ExpenseTracker effortlessly empowers you to take control of your finances!
                        With intuitive features, it simplifies the process of tracking and managing
                        expenses, allowing for a stress-free mastery over your financial world.
                    </p>
                </div>
                
            </div>

        </div>
    )
}
