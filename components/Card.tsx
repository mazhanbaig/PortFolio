function Card({ icon: Icon, color, title, text }: any) {
    return (
        <div className={`bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:${color} transition`}>
            <div className={`flex items-center gap-3 mb-2 ${color}`}>
                <Icon className="w-5 h-5" />
                <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{text}</p>
        </div>
    )
}