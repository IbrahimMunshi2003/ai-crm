import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer
} from "recharts";

const COLORS = [
    "#16a34a",
    "#facc15",
    "#dc2626"
];

interface Props{
    data:any[];
}

export default function SentimentChart({data}:Props){

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-semibold mb-4">

Sentiment Distribution

</h2>

<ResponsiveContainer width="100%" height={300}>

<PieChart>

<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={110}

>

{

data.map((_,index)=>(

<Cell key={index} fill={COLORS[index%COLORS.length]}/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

);

}