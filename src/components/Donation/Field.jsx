
export default function Field({label, type, placeholder, htmlfor, id}) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor={htmlfor}>
                <span className="label-text text-sm">{label}</span>
            </label>
            <input id={id} type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs mb-3 md:max-w-md" />
        </div>
    )
}
