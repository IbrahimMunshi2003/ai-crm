import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Bar
} from "recharts";

interface Props{
    data:any[];
}

export default function TopProductsChart({data}:Props){

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-semibold mb-4">

Top Products

</h2>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="product"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="count" fill="#2563eb"/>

</BarChart>

</ResponsiveContainer>

</div>

);

}