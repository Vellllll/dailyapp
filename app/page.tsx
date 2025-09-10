import Navigation from "./components/navigation";
import Input from "./components/input";
import Task from "./components/task";
import Datepicker from "./components/datepicker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
          <Navigation/>
          <div className="p-5">
            <p className="text-lg text-gray-500">Good morning Arvel!</p>
            <h1 className="text-4xl font-bold mb-5">You have <span className="text-lime-400">34 tasks</span> today!</h1>
            <Input type="text" placeholder="Search task" className="mb-5" />
            <div className="flex justify-between items-center gap-3">
              <div className="grow">
                <Datepicker date={new Date()} />
              </div>
              <div className="flex-none">
                <Dialog>
                  <DialogTrigger className="border-lime-900 bg-lime-900 justify-between font-normal text-lime-100 px-4 py-3 rounded-lg text-sm">+ Add task</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-start mb-3">Add new task</DialogTitle>
                        <div className="mb-3">
                          <Label htmlFor="taskTile" className="mb-2 text-lime-900">Title</Label>
                          <Input type="text" placeholder="Task title" id="taskTitle" />
                        </div>
                        <div className="mb-3">
                          <Label className="mb-2 text-lime-900">Date</Label>
                          <Datepicker showTime/>
                        </div>
                        <div className="mb-3">
                          <Label className="mb-2 text-lime-900">Description</Label>
                          <Textarea placeholder="Task description" className="bg-lime-100" />
                        </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
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
