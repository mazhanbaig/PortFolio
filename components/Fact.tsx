function Fact({ number, label, color }: any) {
    return (
        <div className={`p-4 bg-gray-900 rounded-xl border border-gray-800 ${color} transition`}>
            <div className="text-xl font-bold text-white">{number}</div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    )
}