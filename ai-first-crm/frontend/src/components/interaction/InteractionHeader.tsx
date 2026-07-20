import {
    ClipboardList,
    CheckCircle2,
    Brain,
} from "lucide-react";

export default function InteractionHeader() {

    return (

<div className="border-b px-6 py-5">

<div className="flex items-center gap-3">

<div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">

<ClipboardList className="text-blue-600"/>

</div>

<div>

<h2 className="text-xl font-bold">
Current CRM Record
</h2>

<p className="text-gray-500">
Live AI Extracted Information
</p>

</div>

</div>

<div className="grid grid-cols-2 gap-3 mt-6">

<div className="rounded-lg bg-green-50 p-3">

<div className="flex items-center gap-2">

<CheckCircle2
size={18}
className="text-green-600"
/>

<span className="font-medium">
Auto Saved
</span>

</div>

</div>

<div className="rounded-lg bg-blue-50 p-3">

<div className="flex items-center gap-2">

<Brain
size={18}
className="text-blue-600"
/>

<span className="font-medium">
AI Ready
</span>

</div>

</div>

</div>

</div>

    );

}