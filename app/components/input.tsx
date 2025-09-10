export default function Input (props: any) {
    return (
        <input type={props.type} className={`${props.className} bg-lime-100 px-3 py-2 rounded-lg w-full`} placeholder={props.placeholder} id={props.id} />
    );
}