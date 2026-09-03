function EmptyState({ title, message, action }) {
    return (
        <div className="flex min-h-75 mt-5 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                🛍️
            </div>

            <h2 className="mt-5 fonta text-xl text-slate-900">
                {title}
            </h2>

            <p className="mt-2 max-w-md text-sm font-normal tracking-wide leading-6 text-slate-500">
                {message}
            </p>

            {action && (
                <div className="mt-5">
                    {action}
                </div>
            )}
        </div>
    )
}

export default EmptyState;