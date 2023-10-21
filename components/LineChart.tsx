import {useRef, useState} from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Chart from "react-apexcharts"
import {ApexOptions} from "apexcharts";
import {arraySum, generateDataLabels, generateDataSet} from "@/lib/utils";



interface Props {
    caption: string
}

const week = generateDataSet(7)
const weekLabels = generateDataLabels(7)

const month = generateDataSet(30)
const year = generateDataSet(12)
const dummy = [arraySum(week), arraySum(month), arraySum(year)]


export default function LineChart({ caption }: Props) {
    const [range, setRange] = useState(0)
    const chartRef = useRef<Chart|null>(null)

    const handleValueChange = (value: string) => {
        setRange(Number(value))

        // if (chartRef.current !== null) {
        //     chartRef.current.updateSeries()
        // }
    }

    const series = [{
        name: caption.toUpperCase(),
        data: week
    }]

    const options = {
        chart: {
            type: "area",
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'solid',
            colors: ['#E5FAE8']
        },
        stroke: {
            curve: 'straight',
            colors: ['#00FF00'],
            width: 1,
        },
        labels: weekLabels,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: true
        },
    } as ApexOptions



    return <div className={"rounded-md shadow-sm border border-gray-300 w-full lg:w-1/2 py-6 px-10"}>
            <div className={"flex justify-between"}>
                <div>
                    <p className={"text-sm text-gray-500"}>{caption}</p>
                    <p className={"font-semibold text-xl xl:text-3xl"}>
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

        <div className={"mt-16"}>
            <Chart
                ref={chartRef}
                options={options}
                series={series}
                type="area"
            />
        </div>
    </div>
}