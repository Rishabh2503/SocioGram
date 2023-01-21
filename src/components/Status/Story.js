import { faker } from '@faker-js/faker';

const Story = () => {
    return (
        <>
    <div>
    <img className="h-14 w-14 rounded-full cursor-pointer" src={faker.image.avatar()} alt="" 
    
    />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    <div>
    <img className="h-14 w-14 rounded-full " src={faker.image.avatar()} alt="" />
    <p className="text-xs w-16 truncate text-center">{faker.name.firstName()}</p>
    </div>
    </>
    
    )
    }
    export default Story