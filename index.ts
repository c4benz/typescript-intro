type User = {

}

type Car = {

}

const userDb = new Map<string, User>();

function createUser(user: User): User {
    return {
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
        birthDay: user.birthDay,
        password: user.password,
    }
}


function buildCar(car): Car {
    car.brand = 'mercedes-benz';
    car.fuel = 'gasoline';
    car.wheelNumber = 4;
    car.steeringWheelDirection = 'left'; // Can be left or right :: Enum.
    car.years = 2017;
    car.nbOfCarDoors = 4;
    car.isHybrid = false;
    car.getBrand = () => car.brand;
    return car;
}