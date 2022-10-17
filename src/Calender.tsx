import moment from "moment";
import { memo } from "react";

const Calender = ({ date }: { date: Date }) => {
    const firstDay = moment(date).startOf("month").day();
    const toDay = moment(date).endOf("month").day();
    const lastDate = moment(date).endOf("month").date();

    const othersRow: any[][] = [];
    let col: JSX.Element[] = [];

    let d = 1;
    for (let row = 0; row < 6; row++) {
        let tempDay = 0;

        while (tempDay <= 6) {
            // console.log(
            //     { row, tempDay, d, firstDay, lastDate },
            //     (row === 0 && tempDay < firstDay) || d > lastDate
            // );
            if ((row === 0 && tempDay < firstDay) || d > lastDate) {
                console.log("F");
                const t = (
                    <td
                        key={d + tempDay + row + "day"}
                        className={`text-center w-20`}
                    >
                        {/* {"F-" + d} */}
                    </td>
                );
                col.push(t);
            } else {
                const temp = (
                    <td
                        key={d + "day"}
                        className={`text-center w-20 ${
                            tempDay !== 0 &&
                            (tempDay % 6 === 0 || tempDay % 5 === 0)
                                ? "holyday"
                                : ""
                        }`}
                    >
                        <span className="border-b-2 border-indigo-900 p-4">
                            {d}
                        </span>
                    </td>
                );
                col.push(temp);
                ++d;
            }

            ++tempDay;
        }
        othersRow.push(col);
        col = [];
        tempDay = 0;
    }

    return (
        <div className="overflow-x-auto card shadow-xl glass">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th className="text-center w-20">Sunday</th>
                        <th className="text-center w-20">Monday</th>
                        <th className="text-center w-20">Tuesday</th>
                        <th className="text-center w-20">Wednesday</th>
                        <th className="text-center w-20">Thursday</th>
                        <th className="holyday text-center w-20">Friday</th>
                        <th className="holyday text-center w-20">Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    {othersRow.map((r, i) => (
                        <tr key={i + "r"}>{r}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default memo(Calender);
