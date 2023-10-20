import {useState} from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



interface Props {
    caption: string
}


export default function LineChart({ caption }: Props) {
    const [range, setRange] = useState(0)

    const dummy = [70, 284, 2450]

    const handleValueChange = (value: string) => {
        setRange(Number(value))
    }

    return <div className={"rounded-md shadow-sm border border-gray-300 w-1/2 py-6 px-10"}>
            <div className={"flex justify-between"}>
                <div>
                    <p className={"text-sm text-gray-500"}>{caption}</p>
                    <p className={"font-semibold text-lg"}>
                        {dummy[range]}
                    </p>
                </div>

                <div>
                    <Select defaultValue={"0"} onValueChange={handleValueChange}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0">Last 7 days</SelectItem>
                            <SelectItem value="1">Last 30 days</SelectItem>
                            <SelectItem value="2">Last 1 year</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

        <hr className={"mt-5"} />

    </div>
}