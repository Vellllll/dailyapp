export default function Button (props) {
    return (
        <>
            <button className="w-full rounded-2xl bg-lime-900 text-white">${props.buttonName}</button>
        </>
    );
}