export default function Input (props: any) {
    return (
        <input type={props.type} className={`${props.className} bg-lime-100 p-3 rounded-xl w-full`} placeholder={props.placeholder} />
    );
}