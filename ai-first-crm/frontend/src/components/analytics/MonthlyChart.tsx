import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

interface Props {
    data: any[];
}

export default function MonthlyChart({ data }: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-semibold mb-4">
                Monthly Interactions
            </h2>

            <ResponsiveContainer width="100%" height={300}>

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}