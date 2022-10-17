import moment from "moment";

const Calender = ({ date }: { date: Date }) => {
    const firstDay = moment(date).startOf("month").day();
    const toDay = moment(date).endOf("month").day();
    const lastDate = moment(date).endOf("month").date();

    const firstRow = [];
    let firstRowDay = 0;
    let secRowStarts = 0;

    for (let i = 0; i < firstDay; i++) {
        firstRowDay = i;
        firstRow.push(
            <th key={i + "e"} className="text-center w-20">
                {""}
            </th>
        );
    }

    firstRowDay += 1;

    for (let i = 1; i <= 7 - firstDay; i++) {
        secRowStarts = i;

        firstRow.push(
            <th
                key={i + "d"}
                className={`text-center w-20 ${
                    firstRowDay % 5 === 0 || firstRowDay % 6 === 0
                        ? "holyday"
                        : ""
                }`}
            >
                {i}
            </th>
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
                <th
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
                        <span className="ring ring-indigo-500 rounded-full p-2 h-10 w-10">
                            {day}
                        </span>
                    )}
                </th>
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
                    <tr>{firstRow}</tr>

                    {othersRow.map((r, i) => (
                        <tr key={i + "r"}>{r}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calender;
