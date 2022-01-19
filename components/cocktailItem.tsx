interface CocktailDetails {
    leftAligned?: boolean;
    imgSrc: string;
    title: string;
    desc: string;
}

export default function CocktailItem({leftAligned = true, imgSrc, title, desc}: CocktailDetails) {
    return (
        leftAligned ? (
            <div className="flex flex-row items-center justify-start">
                <div className="relative mr-20">
                    <img className="w-50 h-60 md:w-100 md:h-full" src={imgSrc}/>
                    <div className="absolute bottom-0 right-0 rounded-full bg-blue-900 text-white font-bold p-4 text-2xl md:text-4xl">$15</div>
                </div>
                
                <div>
                    <div className="text-white text-4xl font-medium">{title}</div>
                    <p className="text-slate-100 text-3xl">{desc}</p>
                </div>
            </div>
        )
        :
        (
            <div className="flex flex-row items-center justify-end">
                <div>
                    <div className="text-white text-4xl font-medium">{title}</div>
                    <p className="text-slate-100 text-3xl">{desc}</p>
                </div>

                <div className="relative ml-20">
                    <img className="w-50 h-60 md:w-100 md:h-full" src={imgSrc}/>
                    <div className="absolute bottom-0 left-0 rounded-full bg-blue-900 text-white font-bold p-4 text-2xl md:text-4xl">$15</div>
                </div>
            </div>
        )
    )
}