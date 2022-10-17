export function Input({ icon: Icon, readOnly, register, ...rest }) {
  return (
    <div
      className="flex items-center justify-center text-[#948F99] bg-[#262529] rounded-lg px-4 w-full gap-2">
      {Icon && <Icon size={18} />}
      <input
        {...rest}
        {...register}
        className={`bg-transparent w-full outline-none autofill:!shadow-replace-autofill py-4 ${ readOnly ? "cursor-not-allowed" : "cursor-auto" }`}
      />
    </div>
  )
}