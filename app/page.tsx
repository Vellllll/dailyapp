import Image from "next/image";
import Navigation from "./components/navigation";
import Input from "./components/input";
import Task from "./components/task";
import Datepicker from "./components/datepicker";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
          <Navigation/>
          <div className="p-5">
            <p className="text-lg text-gray-500">Good morning Arvel!</p>
            <h1 className="text-4xl font-bold mb-5">You have <span className="text-lime-400">34 tasks</span> today!</h1>
            <Input type="text" placeholder="Search task" className="mb-5" />
            <Datepicker date={new Date()} />
            <div className="my-5">
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini lorem10" dt="09:00" status="IN PROGRESS" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" status="NOT STARTED" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" status="COMPLETED" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" />
              <Task title="Task 1" description="ini task 1 wajib dikerjain ahrini" dt="09:00" />
            </div>
          </div>
        </div>
    );
}
