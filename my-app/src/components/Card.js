const Card = ({ image, selected, onClick}) => {

    return (
        <div className="w-full h-96 rounded-lg border border-red-100 bg-red-500 flex flex-row justify-center place-items-center">
            <div className={selected ? 'selected' : 'not-selected'}>
                <img alt='' src="/champs/Shaco.png" />
            </div>
        </div>
    )

}

export default Card;