export const HeadCompleteTable = () => {
    return (
        <thead>
        <tr>
            <th>Company Code</th>
            <th>Stock Price</th>
            <th>Price Range (Day)</th>
            <th>Percent Range</th>
            <th>Previous Close</th>
            <th>Open</th>
            <th>Day Range (Start)</th>
            <th>Day Range (End)</th>
            <th>Year Range (Start)</th>
            <th>Year Range (End)</th>
            <th>Volume</th>
            <th>Avg Volume</th>
        </tr>
        </thead>
    )
}

export const HeadSimpleTable = () => {
    return (
        <thead>
        <tr>
            <th rowSpan="2" className="text-center align-middle">Company Code</th>
            <th rowSpan="2" className="text-center align-middle">Previous Close</th>
            <th rowSpan="2" className="text-center align-middle">Open</th>
            <th rowSpan="2" className="text-center align-middle">Range</th>
            <th rowSpan="2" className="text-center align-middle">Mov</th>
        </tr>
        </thead>
    )
}
