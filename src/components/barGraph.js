import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
const data = [{ name: 'javascript', uv: 0, amt: 2400 }]


const renderBarChart = () => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart margin={{ top: 5, left: 10, bottom: 10, right: 5 }} data={data} width={400} height={400}>
                <XAxis dataKey='name' />
                <YAxis />
                <Bar />
            </BarChart>
        </ResponsiveContainer>

    )
}

export default renderBarChart;