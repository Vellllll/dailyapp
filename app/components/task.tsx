import clsx from "clsx";

export default function Task (props: any) {
    return (
        <a className="rounded-2xl bg-white border-1 border-lime-500 px-6 py-8 mb-3 block" href="/task/1">
            <div className="flex justify-between mb-1">
                <p className="text-xl text-lime-900 font-bold">{props.title}</p>
                <p className="text-sm text-lime-900 font-semibold">{props.dt}</p>
            </div>
            <p className="text-sm text-lime-700 mb-5">{props.description}</p>
            <span className={clsx(
                'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium',
                {
                    'bg-red-400/10 text-red-400 ring-1 ring-red-400/20': props.status === 'NOT STARTED',
                    'bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/20': props.status === 'IN PROGRESS',
                    'bg-lime-400/10 text-lime-400 ring-1 ring-lime-400/20': props.status === 'COMPLETED',
                }
                )}>
                {props.status}
            </span>
        </a>
    );
}