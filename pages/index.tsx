import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from "next/image";
import dynamic from "next/dynamic"

const LineChart = dynamic(() => import('../components/LineChart'), {
    ssr: false,
    loading: () => <p>cooking chart..</p>
})

export default function Home() {

    const formatter = new Intl.DateTimeFormat('en-NG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
      <div className={"ml-[20%] p-10"}>
        <header className={"flex justify-between"}>
            <div>
                <p className={"text-sm text-gray-400"}>{formatter.format(new Date())} </p>
                <p className={"font-semibold text-2xl"}>Welcome, Nelson!</p>
            </div>

            <div className={"flex gap-5"}>
                <Button className={"rounded-full hover:bg-gray-200  py-[14px] px-[19px] bg-white text-black flex items-center border border-gray-300"}>
                    <Plus className="mr-2 h-4 w-4 text-green-500" />
                    <span>Create New</span>
                </Button>

                <span className={"w-10 h-10 grid place-content-center bg-[#f7f7f7] rounded-full"}>
                    NI
                </span>
            </div>
        </header>

          <main className={"mt-12"}>
              <h2 className={"font-semibold text-lg"}>Quick Actions</h2>

              <div className={"grid grid-cols-4 gap-4 mt-8"}>
                  <Button className={"rounded-md hover:bg-gray-200 p-4 bg-white text-black flex gap-4 items-center border border-gray-300"}>
                      <Image
                          src="/icons/ticket_green.svg"
                          width={20}
                          height={18}
                          alt="logo"
                      />
                      <span>Issue a New Voucher</span>
                  </Button>

                  <Button className={"rounded-md hover:bg-gray-200  p-4 bg-white text-black flex gap-4 items-center border border-gray-300"}>
                      <Image
                          src="/icons/branch_green.svg"
                          width={12}
                          height={16}
                          alt="logo"
                      />
                      <span>Add a New Branch</span>
                  </Button>

                  <Button className={"rounded-md hover:bg-gray-200  p-4 bg-white text-black flex gap-4 items-center border border-gray-300"}>
                      <Image
                          src="/icons/store_green.svg"
                          width={18}
                          height={16}
                          alt="logo"
                      />
                      <span>Add a retailer</span>
                  </Button>

                  <Button className={"rounded-md hover:bg-gray-200  p-4 bg-white text-black flex gap-4 items-center border border-gray-300"}>
                      <Image
                          src="/icons/table.svg"
                          width={20}
                          height={18}
                          alt="logo"
                      />
                      <span>View Redemption History</span>
                  </Button>
              </div>

              <div className={"mt-10"}>
                  <h2 className={"font-semibold text-lg"}>Dashboard Overview</h2>

                  <div className={"flex gap-4 justify-between mt-10"}>
                        <LineChart caption={"Vouchers Issued"} />
                        <LineChart caption={"Vouchers Redeemed"} />
                  </div>
              </div>
          </main>
      </div>
  )
}

