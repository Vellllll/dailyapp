export default function Task (props: any) {
    return (
        <div className="rounded-2xl bg-lime-200 p-5 mb-3">
            <div className="flex justify-between">
                <p className="text-xl text-lime-900 font-bold">{props.title}</p>
                <p className="text-sm text-lime-900 font-semibold">{props.dt}</p>
            </div>
            <p className="text-sm text-lime-700">{props.description}</p>
        </div>
    );
}