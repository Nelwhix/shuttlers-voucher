import Image from "next/image"
import { Input } from "@/components/ui/input"
import NavButton from "@/components/NavButton";


export default function Sidebar() {

    return <aside className={"hidden lg:block fixed h-screen overflow-y-auto lg:w-[20%] border-r border-gray-200 py-10 px-4"}>
        <Image
            src="/logo.svg"
            width={200}
            height={28}
            alt="logo"
        />

        <div className={"mt-10 relative"}>
            <Input className={"rounded-full font-gordita pl-10"} placeholder={"Search"} />

            <div className={"absolute top-[13px] left-[16px]"}>
                <Image
                    src="/icons/magnifying_glass.svg"
                    width={14}
                    height={14}
                    alt="logo"
                />
            </div>
        </div>

        <nav className={"mt-6"}>
            <NavButton
                text={"Home"}
                icon={"/icons/home.svg"}
                iconWidth={18}
                iconHeight={16}
                active={true}
            />

            <div className={"mt-6"}>
                <p className={"font-medium"}>Manage</p>

                <div>
                    <NavButton
                        text={"Branches"}
                        icon={"/icons/branch.svg"}
                        iconWidth={12}
                        iconHeight={16}
                        active={false}
                    />

                    <NavButton
                        text={"Retailers"}
                        icon={"/icons/retailer.svg"}
                        iconWidth={18}
                        iconHeight={16}
                        active={false}
                    />

                    <NavButton
                        text={"Vouchers"}
                        icon={"/icons/ticket.svg"}
                        iconWidth={18}
                        iconHeight={16}
                        active={false}
                    />
                </div>
            </div>

            <div className={"mt-6"}>
                <p className={"font-medium"}>History</p>

                <div>
                    <NavButton
                        text={"Voucher Transactions"}
                        icon={"/icons/receipt_solid.svg"}
                        iconWidth={12}
                        iconHeight={16}
                        active={false}
                    />

                    <NavButton
                        text={"Payout History"}
                        icon={"/icons/cheque.svg"}
                        iconWidth={20}
                        iconHeight={16}
                        active={false}
                    />

                    <NavButton
                        text={"Voucher Redemption History"}
                        icon={"/icons/broken_cheque.svg"}
                        iconWidth={24}
                        iconHeight={16}
                        active={false}
                    />
                </div>
            </div>

            <div className={"mt-6"}>
                <p className={"font-medium"}>More Actions</p>

                <div>
                    <NavButton
                        text={"Generate Report"}
                        icon={"/icons/pie_chart.svg"}
                        iconWidth={16}
                        iconHeight={16}
                        active={false}
                    />

                    <NavButton
                        text={"Settings"}
                        icon={"/icons/gear.svg"}
                        iconWidth={16}
                        iconHeight={16}
                        active={false}
                    />
                </div>
            </div>
        </nav>

    </aside>
}