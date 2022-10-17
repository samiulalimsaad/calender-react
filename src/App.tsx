import moment from "moment";
import { useState } from "react";
import Calender from "./Calender";

const d = new Date();

function App() {
    const [year, setYear] = useState(d.getFullYear());
    const [month, setMonth] = useState(d.getMonth() + 1);

    const jumpTodayHandler = () => {
        const temp = new Date();
        setYear(temp.getFullYear());
        setMonth(temp.getMonth() + 1);
    };

    const nextMonth = () => {
        if (month === 12) {
            setYear((p) => p + 1);
            setMonth(1);
        } else {
            setMonth((p) => p + 1);
        }
    };

    const previousMonth = () => {
        console.log(month);
        if (month === 1) {
            setYear((p) => p - 1);
            setMonth(12);
        } else {
            setMonth((p) => p - 1);
        }
    };

    const tm = `${month}`.length === 1 ? `0${month}` : month;
    const date = new Date(`${year}-${tm}-16T22:15:00`);

    return (
        <div className="w-2/3 mx-auto p-8">
            <h1 className="text-2xl font-semibold text-center my-8">
                Calender
            </h1>
            <div className="divider"></div>
            <div className="flex justify-between items-center py-4 font-semibold">
                <div className="flex justify-between items-center gap-3">
                    <button onClick={previousMonth}>{"<"}</button>
                    <h2>{moment(date).format("MMMM")}</h2>
                    <button onClick={nextMonth}>{">"}</button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <button onClick={jumpTodayHandler}>Today</button>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <button
                        onClick={() => {
                            setYear((p) => p - 1);
                        }}
                    >
                        {"<"}
                    </button>
                    <h2>{year}</h2>
                    <button
                        onClick={() => {
                            setYear((p) => p + 1);
                        }}
                    >
                        {">"}
                    </button>
                </div>
            </div>
            <Calender date={date} />
        </div>
    );
}

export default App;
