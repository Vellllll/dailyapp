import Navigation from "@/app/components/navigation"
import { Table, TableCell, TableBody, TableRow, TableHeader, TableHead, TableCaption } from "@/components/ui/table"
import Datepicker from "@/app/components/datepicker"
import Input from "@/app/components/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default async function TaskPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return (
        <>
            <Navigation />
            <div className="m-5">
                <h1 className="text-4xl font-bold text-lime-400 mb-5">Task {slug}</h1>
                <div className="">
                    <div className="flex gap-5 justify-between mb-5 items-center">
                        <p className="text-lime-900 font-bold">Datetime</p>
                        <Datepicker date={new Date('2025-10-05')} showTime />          
                    </div>
                    <div className="flex gap-5 justify-between mb-5 items-center">
                        <p className="text-lime-900 font-bold">Status</p>
                        <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-sm font-medium text-yellow-500 inset-ring inset-ring-yellow-400/20">IN PROGRESS</span>
                    </div>
                    <div className="flex gap-5 justify-between mb-5">
                        <p className="text-lime-900 font-bold">Description</p>
                        <p className="text-end text-lime-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate mollitia delectus rem temporibus velit. Iure, molestiae est! Eos aut doloribus placeat. Ducimus, voluptatibus! Magni facere ea consequatur tempora aliquam?</p>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-between mb-3 border-b-lime-900 border-2 pb-3 border-white">
                            <p className="font-semibold text-sm">To dos</p>
                            <p className="font-semibold text-sm">Action</p>
                        </div>
                        <div className="flex gap-5 justify-between mb-3 border-b-lime-500 border-1 border-white pb-3">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quaerat.</p>
                            <Select>
                                <SelectTrigger className="w-full bg-lime-900 text-white">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="need-to-do">NEED TO DO</SelectItem>
                                        <SelectItem value="in-progress">IN PROGRESS</SelectItem>
                                        <SelectItem value="pending">PENDING</SelectItem>
                                        <SelectItem value="done">DONE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-5 justify-between mb-3 border-b-lime-500 border-1 border-white pb-3">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quaerat.</p>
                            <Select>
                                <SelectTrigger className="w-full bg-lime-900 text-white">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="need-to-do">NEED TO DO</SelectItem>
                                        <SelectItem value="in-progress">IN PROGRESS</SelectItem>
                                        <SelectItem value="pending">PENDING</SelectItem>
                                        <SelectItem value="done">DONE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-5 justify-between mb-3 border-b-lime-500 border-1 border-white pb-3">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quaerat.</p>
                            <Select>
                                <SelectTrigger className="w-full bg-lime-900 text-white">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="need-to-do">NEED TO DO</SelectItem>
                                        <SelectItem value="in-progress">IN PROGRESS</SelectItem>
                                        <SelectItem value="pending">PENDING</SelectItem>
                                        <SelectItem value="done">DONE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-5 justify-between mb-3 border-b-lime-500 border-1 border-white pb-3">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quaerat.</p>
                            <Select>
                                <SelectTrigger className="w-full bg-lime-900 text-white">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="need-to-do">NEED TO DO</SelectItem>
                                        <SelectItem value="in-progress">IN PROGRESS</SelectItem>
                                        <SelectItem value="pending">PENDING</SelectItem>
                                        <SelectItem value="done">DONE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-5 justify-between mb-3 border-b-lime-500 border-1 border-white pb-3">
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, quaerat.</p>
                            <Select>
                                <SelectTrigger className="w-full bg-lime-900 text-white">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Status</SelectLabel>
                                        <SelectItem value="need-to-do">NEED TO DO</SelectItem>
                                        <SelectItem value="in-progress">IN PROGRESS</SelectItem>
                                        <SelectItem value="pending">PENDING</SelectItem>
                                        <SelectItem value="done">DONE</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}