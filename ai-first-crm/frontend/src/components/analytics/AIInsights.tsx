interface Props {

total:number;

positive:number;

negative:number;

followups:number;

}

export default function AIInsights({

total,

positive,

negative,

followups,

}:Props){

const positiveRate=Math.round((positive/total)*100);

return(

<div className="bg-white rounded-xl shadow p-6">

<h2 className="text-xl font-bold mb-5">

🤖 AI Insights

</h2>

<ul className="space-y-3">

<li>

✅ Positive Sentiment

<strong> {positiveRate}%</strong>

</li>

<li>

📈 Total Interactions

<strong> {total}</strong>

</li>

<li>

🔔 Pending Follow-ups

<strong> {followups}</strong>

</li>

<li>

⚠ Negative Interactions

<strong> {negative}</strong>

</li>

</ul>

</div>

);

}