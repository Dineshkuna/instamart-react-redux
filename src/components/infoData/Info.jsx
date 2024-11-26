import './info.css'
import infoitem from '../../assets/InfoItems'


const Info =()=>{
    return (
        <div>
            <div className='infocard'>
            {
                infoitem.map((infoItem, index)=>(
                    <div className='infocard_one' key={index}>
                        <p className='infoicon'>{infoItem.icon}</p >
                        <p className='infotitle'>{infoItem.title}</p>
                        <p className='infodes'>{infoItem.description}</p>

                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Info;