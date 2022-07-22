const Card = ({ image, selected, onClick}) => {

    return (
        <div className=" transition duration-150 ease-in-out w-full rounded-lg border border-red-100 bg-red-500 flex flex-row justify-center place-items-center">
            <div className={selected ? 'selected' : ''}>
                <img alt='' src={image} className={selected ? 'opacity-100' : 'opacity-0'} />
                <img alt='' onClick={onClick} src="/champs/Shaco.png" className={selected ? 'opacity-0' : 'opacity-100'} />
            </div>
        </div>
    )

}

export default Card;