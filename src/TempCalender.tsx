import moment from "moment";

const isToday = (date: Date, temp: number) => {
    const d = new Date();
    return (
        date.getFullYear() === d.getFullYear() &&
        date.getMonth() === d.getMonth() &&
        date.getDate() === temp
    );
};
const TempCalender = ({ date }: { date: Date }) => {
    const firstDay = moment(date).startOf("month").day();
    const toDay = moment(date).endOf("month").day();
    const lastDate = moment(date).endOf("month").date();

    const firstRow = [];
    let firstRowDay = 0;
    let secRowStarts = 0;

    for (let i = 0; i < firstDay; i++) {
        firstRowDay = i;
        firstRow.push(
            <td key={i + "e"} className="text-center w-20">
                {""}
            </td>
        );
    }

    firstRowDay += 1;

    for (let i = 1; i <= 7 - firstDay; i++) {
        secRowStarts = i;

        firstRow.push(
            <td
                key={i + "d"}
                className={`text-center w-20 ${
                    firstRowDay % 5 === 0 || firstRowDay % 6 === 0
                        ? "holyday"
                        : ""
                }`}
            >
                <span
                    className={`${
                        isToday(date, i)
                            ? "border-b-2 border-indigo-900 p-4"
                            : ""
                    }`}
                >
                    {i}
                </span>
            </td>
        );
        ++firstRowDay;
    }

    const totalRows = Math.ceil((lastDate - secRowStarts) / 7);
    const othersRow = [];
    let col = [];

    let day = secRowStarts + 1;
    for (let i = 0; i < totalRows; i++) {
        let tempDay = 0;

        while (tempDay <= 6) {
            const temp = (
                <td
                    key={day + "d"}
                    className={`text-center w-20 ${
                        tempDay !== 0 &&
                        (tempDay % 6 === 0 || tempDay % 5 === 0)
                            ? "holyday"
                            : ""
                    }`}
                >
                    {day > lastDate ? (
                        ""
                    ) : (
                        <span
                            className={`${
                                isToday(date, day)
                                    ? "border-b-4 border-indigo-900 p-4 font-semibold"
                                    : ""
                            }`}
                        >
                            {day}
                        </span>
                    )}
                </td>
            );
            col.push(temp);
            ++day;
            ++tempDay;
        }
        othersRow.push(col);
        col = [];
        tempDay = 0;
    }

    return (
        <div className="overflow-x-auto card glass">
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
                    <tr>{firstRow}</tr>

                    {othersRow.map((r, i) => (
                        <tr key={i + "r"}>{r}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TempCalender;
