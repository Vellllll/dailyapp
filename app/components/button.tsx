export default function Button (props: any) {
    return (
        <>
            <button className="w-full rounded-2xl bg-lime-900 text-white py-2 font-semibold">{props.buttonName}</button>
        </>
    );
}