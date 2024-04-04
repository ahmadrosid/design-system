export function ButtonPimary({children}: any) {
    return (
        <button className="border font-medium border-gray-800 px-[calc(1.375*16px)] rounded-md text-sm leading-[calc(2.5*16px)] text-white bg-gray-800 shadow-lg hover:-translate-y-px ease-out duration-75">
            {children}
        </button>
    )
}

export function ButtonSecondary({children}: any) {
    return (
        <button className="border font-medium border-gray-300 px-[calc(1.375*16px)] rounded-md text-sm leading-[calc(2.5*16px)] text-gray-900 bg-gray-50 shadow-lg hover:-translate-y-px ease-out duration-75">
            {children}
        </button>
    )
}

