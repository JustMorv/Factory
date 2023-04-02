class ClassicGuitar{
	constructor(name){
		this.name = name
		this.price = 1000
	}
}
class AcusticGuitar{
	constructor(name){
		this.name = name
		this.price = 2000
	}
}
class ElectroGuitar{
	constructor(name){
		this.name = name
		this.price = 3000
	}
}

class GuitarFactory	{
	static list = {
		classic: ClassicGuitar,
		acustic: AcusticGuitar,
		electro: ElectroGuitar
	}

	create(name, type = "classic"){
		const GuitarList = GuitarFactory.list[type] || GuitarFactory.list.classic 
		const GFactory = new GuitarList(name)

		GFactory.type = type
		GFactory.methodInfo = function(){
			console.log(`${this.name} ${this.type} ${this.price} `)
		}
		return GFactory
	}
}

const factory = new GuitarFactory

const guitars = [
	factory.create("stratocaster", "classic", ),
	factory.create("Fender", "acustic"),
	factory.create("Ibanez", "electro")]

console.log(guitars)

